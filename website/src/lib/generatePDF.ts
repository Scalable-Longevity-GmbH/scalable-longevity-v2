// lib/generatePDF.ts
import jsPDF from "jspdf";
import type { FormState, ScoreResult } from "./surveyTypes";

// Website color scheme
const COLORS = {
  primary: "#2E4A3F", // Primary green
  fontPrimary: "#3B3B3C", // Main text
  fontSecondary: "#C1C1C1", // Secondary text
  card: "#FFFFFF", // Card background
  cardBorder: "#F2F2F2", // Card border
  background: "#F6F8FB", // Background
  red: "#E06363", // For negative indicators
  orange: "#E7A04E", // For medium indicators
  green: "#4A8F74", // For positive indicators
};

// Helper to convert hex to RGB
function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : [0, 0, 0];
}

// Helper to set text color
function setTextColor(doc: jsPDF, hex: string) {
  const rgb = hexToRgb(hex);
  doc.setTextColor(rgb[0], rgb[1], rgb[2]);
}

// Helper to set fill color
function setFillColor(doc: jsPDF, hex: string) {
  const rgb = hexToRgb(hex);
  doc.setFillColor(rgb[0], rgb[1], rgb[2]);
}

// Helper to set stroke color
function setStrokeColor(doc: jsPDF, hex: string) {
  const rgb = hexToRgb(hex);
  doc.setDrawColor(rgb[0], rgb[1], rgb[2]);
}

// Helper to format form values for display
function formatValue(value: string | number | ""): string {
  if (value === "" || value === null || value === undefined) return "Nicht angegeben";
  return String(value);
}

function formatGender(gender: string): string {
  const map: Record<string, string> = {
    female: "Weiblich",
    male: "Männlich",
    diverse: "Divers",
  };
  return map[gender] || gender;
}

function formatFreq(freq: string): string {
  return freq.replace("/Wo.", "/Woche").replace("/Tag", "/Tag");
}

function formatStress(stress: string): string {
  const map: Record<string, string> = {
    low: "Niedrig",
    medium: "Mittel",
    high: "Hoch",
  };
  return map[stress] || stress;
}

function formatSmoking(smoking: string): string {
  const map: Record<string, string> = {
    never: "Nie",
    former: "Ehemalig",
    "current_<10": "Aktuell <10 Zigaretten/Tag",
    "current_10_20": "Aktuell 10-20 Zigaretten/Tag",
    "current_>20": "Aktuell >20 Zigaretten/Tag",
  };
  return map[smoking] || smoking;
}

function formatYesNo(value: string): string {
  const map: Record<string, string> = {
    yes: "Ja",
    no: "Nein",
  };
  return map[value] || value;
}

function formatAgeOfOnset(onset: string): string {
  const map: Record<string, string> = {
    "<55": "Vor 55 Jahren",
    "55-64": "55-64 Jahre",
    ">=65": "Ab 65 Jahren",
    unknown: "Unbekannt",
  };
  return map[onset] || onset;
}

// Helper to load and register Satoshi font
async function loadSatoshiFont(doc: jsPDF): Promise<void> {
  try {
    // Fetch the font file
    const response = await fetch("/fonts/Satoshi-Variable.ttf");
    const fontBlob = await response.blob();
    
    // Convert blob to base64
    const base64Font = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = (reader.result as string).split(",")[1];
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(fontBlob);
    });

    // Add font to jsPDF's virtual file system
    doc.addFileToVFS("Satoshi-Variable.ttf", base64Font);
    
    // Register the font
    doc.addFont("Satoshi-Variable.ttf", "Satoshi", "normal");
    doc.addFont("Satoshi-Variable.ttf", "Satoshi", "bold");
    doc.addFont("Satoshi-Variable.ttf", "Satoshi", "italic");
  } catch (error) {
    console.warn("Failed to load Satoshi font, falling back to Helvetica:", error);
    // Font loading failed, will use default Helvetica
  }
}

export async function generateSurveyPDF(
  form: FormState,
  preview: ScoreResult,
  chronoAge: number
): Promise<void> {
  const doc = new jsPDF();
  
  // Load and register Satoshi font
  await loadSatoshiFont(doc);
  
  // Use Satoshi font (fallback to helvetica if loading failed)
  const fontFamily = "Satoshi";
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;
  let yPos = margin;

  // Helper to add a new page if needed
  const checkPageBreak = (requiredSpace: number = 10) => {
    if (yPos + requiredSpace > pageHeight - margin) {
      doc.addPage();
      yPos = margin;
    }
  };

  // Header with background
  setFillColor(doc, COLORS.primary);
  doc.rect(0, 0, pageWidth, 50, "F");
  
  // Title in header
  setTextColor(doc, COLORS.card);
  doc.setFontSize(24);
  doc.setFont(fontFamily, "bold");
  doc.text("Selbsttest Ergebnisse", pageWidth / 2, 30, { align: "center" });
  
  yPos = 60;

  // Date
  setTextColor(doc, COLORS.fontSecondary);
  doc.setFontSize(10);
  doc.setFont(fontFamily, "normal");
  const date = new Date().toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  doc.text(`Erstellt am: ${date}`, pageWidth / 2, yPos, { align: "center" });
  yPos += 15;

  // Results Summary Card
  checkPageBreak(50);
  setFillColor(doc, COLORS.card);
  setStrokeColor(doc, COLORS.cardBorder);
  doc.setLineWidth(0.5);
  doc.roundedRect(margin, yPos, contentWidth, 45, 3, 3, "FD");
  
  yPos += 8;
  setTextColor(doc, COLORS.primary);
  doc.setFontSize(16);
  doc.setFont(fontFamily, "bold");
  doc.text("Zusammenfassung", margin + 8, yPos);
  yPos += 10;

  const bioAge = chronoAge + preview.totalDelta;
  const delta = preview.totalDelta;
  const absDelta = Math.abs(delta);

  setTextColor(doc, COLORS.fontPrimary);
  doc.setFontSize(11);
  doc.setFont(fontFamily, "normal");
  
  // Two column layout for summary
  const col1X = margin + 8;
  const col2X = margin + contentWidth / 2 + 8;
  
  doc.text(`Chronologisches Alter:`, col1X, yPos);
  setTextColor(doc, COLORS.primary);
  doc.setFont(fontFamily, "bold");
  doc.text(`${chronoAge.toFixed(0)} Jahre`, col1X + 60, yPos);
  
  setTextColor(doc, COLORS.fontPrimary);
  doc.setFont(fontFamily, "normal");
  doc.text(`BMI:`, col2X, yPos);
  if (preview.bmi) {
    setTextColor(doc, COLORS.primary);
    doc.setFont(fontFamily, "bold");
    doc.text(`${preview.bmi.toFixed(1)}`, col2X + 20, yPos);
  }
  yPos += 8;

  setTextColor(doc, COLORS.fontPrimary);
  doc.setFont(fontFamily, "normal");
  doc.text(`Biologisches Alter:`, col1X, yPos);
  setTextColor(doc, COLORS.primary);
  doc.setFont(fontFamily, "bold");
  doc.text(`${bioAge.toFixed(1)} Jahre`, col1X + 60, yPos);
  
  setTextColor(doc, COLORS.fontPrimary);
  doc.setFont(fontFamily, "normal");
  doc.text(`Pace of Aging:`, col2X, yPos);
  const deltaColor = delta > 0 ? COLORS.red : delta < 0 ? COLORS.green : COLORS.fontPrimary;
  setTextColor(doc, deltaColor);
  doc.setFont(fontFamily, "bold");
  doc.text(`${delta > 0 ? "+" : ""}${delta.toFixed(1)} Jahre`, col2X + 45, yPos);
  
  yPos += 30;

  // Top 3 Stealers Card
  checkPageBreak(40);
  setFillColor(doc, COLORS.card);
  setStrokeColor(doc, COLORS.cardBorder);
  doc.roundedRect(margin, yPos, contentWidth, 35, 3, 3, "FD");
  
  yPos += 8;
  setTextColor(doc, COLORS.primary);
  doc.setFontSize(14);
  doc.setFont(fontFamily, "bold");
  doc.text("Top 3 Lebenszeit-Räuber", margin + 8, yPos);
  yPos += 8;

  const stealers = [...preview.breakdown]
    .filter((b) => b.delta > 0)
    .sort((a, b) => b.delta - a.delta)
    .slice(0, 3);

  setTextColor(doc, COLORS.fontPrimary);
  doc.setFontSize(10);
  doc.setFont(fontFamily, "normal");
  if (stealers.length > 0) {
    stealers.forEach((b, i) => {
      checkPageBreak(8);
      doc.text(`${i + 1}. ${b.rule}`, margin + 12, yPos);
      setTextColor(doc, COLORS.red);
      doc.setFont(fontFamily, "bold");
      doc.text(`+${b.delta.toFixed(1)} Jahre`, pageWidth - margin - 30, yPos, { align: "right" });
      setTextColor(doc, COLORS.fontPrimary);
      doc.setFont(fontFamily, "normal");
      yPos += 6;
    });
  } else {
    setTextColor(doc, COLORS.fontSecondary);
    doc.text("Keine negativen Faktoren gefunden - stark!", margin + 12, yPos);
    yPos += 6;
  }
  yPos += 15;

  // Detailed Form Data Section
  checkPageBreak(30);
  setTextColor(doc, COLORS.primary);
  doc.setFontSize(18);
  doc.setFont(fontFamily, "bold");
  doc.text("Detaillierte Angaben", margin, yPos);
  yPos += 12;

  // Profile Section Card
  checkPageBreak(50);
  setFillColor(doc, COLORS.card);
  setStrokeColor(doc, COLORS.cardBorder);
  doc.roundedRect(margin, yPos, contentWidth, 50, 3, 3, "FD");
  
  yPos += 8;
  setTextColor(doc, COLORS.primary);
  doc.setFontSize(12);
  doc.setFont(fontFamily, "bold");
  doc.text("Profil", margin + 8, yPos);
  yPos += 8;

  setTextColor(doc, COLORS.fontPrimary);
  doc.setFontSize(10);
  doc.setFont(fontFamily, "normal");
  doc.text(`Alter: ${formatValue(form.age)} Jahre`, margin + 12, yPos);
  yPos += 6;
  doc.text(`Geschlecht: ${form.gender ? formatGender(form.gender) : "Nicht angegeben"}`, margin + 12, yPos);
  yPos += 6;
  doc.text(`Größe: ${formatValue(form.height_cm)} cm`, margin + 12, yPos);
  yPos += 6;
  doc.text(`Gewicht: ${formatValue(form.weight_kg)} kg`, margin + 12, yPos);
  yPos += 6;
  doc.text(`Taillenumfang: ${formatValue(form.waist_cm)} cm`, margin + 12, yPos);
  yPos += 25;

  // Activity Section Card
  checkPageBreak(35);
  setFillColor(doc, COLORS.card);
  setStrokeColor(doc, COLORS.cardBorder);
  doc.roundedRect(margin, yPos, contentWidth, 30, 3, 3, "FD");
  
  yPos += 8;
  setTextColor(doc, COLORS.primary);
  doc.setFontSize(12);
  doc.setFont(fontFamily, "bold");
  doc.text("Aktivität", margin + 8, yPos);
  yPos += 8;

  setTextColor(doc, COLORS.fontPrimary);
  doc.setFontSize(10);
  doc.setFont(fontFamily, "normal");
  doc.text(
    `Tägliche Bewegung: ${form.daily_movement ? formatFreq(form.daily_movement) : "Nicht angegeben"}`,
    margin + 12,
    yPos
  );
  yPos += 6;
  doc.text(
    `Sport: ${form.sport ? formatFreq(form.sport) : "Nicht angegeben"}`,
    margin + 12,
    yPos
  );
  yPos += 15;

  // Cardio Section Card
  checkPageBreak(45);
  setFillColor(doc, COLORS.card);
  setStrokeColor(doc, COLORS.cardBorder);
  doc.roundedRect(margin, yPos, contentWidth, 40, 3, 3, "FD");
  
  yPos += 8;
  setTextColor(doc, COLORS.primary);
  doc.setFontSize(12);
  doc.setFont(fontFamily, "bold");
  doc.text("Herz-Kreislauf & Familie", margin + 8, yPos);
  yPos += 8;

  setTextColor(doc, COLORS.fontPrimary);
  doc.setFontSize(10);
  doc.setFont(fontFamily, "normal");
  doc.text(
    `Herzinfarkt/Schlaganfall (persönlich): ${form.mi_stroke_personal ? formatYesNo(form.mi_stroke_personal) : "Nicht angegeben"}`,
    margin + 12,
    yPos
  );
  yPos += 6;
  doc.text(
    `Herzinfarkt/Schlaganfall (Familie): ${form.family_mi_stroke ? formatYesNo(form.family_mi_stroke) : "Nicht angegeben"}`,
    margin + 12,
    yPos
  );
  yPos += 6;
  if (form.family_mi_stroke === "yes" && form.family_mi_stroke_onset) {
    doc.text(
      `Alter bei Auftreten: ${formatAgeOfOnset(form.family_mi_stroke_onset)}`,
      margin + 12,
      yPos
    );
    yPos += 6;
  }
  doc.text(
    `Systolischer Blutdruck: ${formatValue(form.systolic_bp)} mmHg`,
    margin + 12,
    yPos
  );
  yPos += 15;

  // Lifestyle Section Card
  checkPageBreak(35);
  setFillColor(doc, COLORS.card);
  setStrokeColor(doc, COLORS.cardBorder);
  doc.roundedRect(margin, yPos, contentWidth, 30, 3, 3, "FD");
  
  yPos += 8;
  setTextColor(doc, COLORS.primary);
  doc.setFontSize(12);
  doc.setFont(fontFamily, "bold");
  doc.text("Lebensstil", margin + 8, yPos);
  yPos += 8;

  setTextColor(doc, COLORS.fontPrimary);
  doc.setFontSize(10);
  doc.setFont(fontFamily, "normal");
  doc.text(
    `Stress: ${form.stress ? formatStress(form.stress) : "Nicht angegeben"}`,
    margin + 12,
    yPos
  );
  yPos += 6;
  doc.text(
    `Rauchen: ${form.smoking ? formatSmoking(form.smoking) : "Nicht angegeben"}`,
    margin + 12,
    yPos
  );
  yPos += 15;

  // Nutrition Section Card
  checkPageBreak(40);
  setFillColor(doc, COLORS.card);
  setStrokeColor(doc, COLORS.cardBorder);
  doc.roundedRect(margin, yPos, contentWidth, 35, 3, 3, "FD");
  
  yPos += 8;
  setTextColor(doc, COLORS.primary);
  doc.setFontSize(12);
  doc.setFont(fontFamily, "bold");
  doc.text("Ernährung", margin + 8, yPos);
  yPos += 8;

  setTextColor(doc, COLORS.fontPrimary);
  doc.setFontSize(10);
  doc.setFont(fontFamily, "normal");
  doc.text(
    `Fast Food: ${form.fastfood ? formatFreq(form.fastfood) : "Nicht angegeben"}`,
    margin + 12,
    yPos
  );
  yPos += 6;
  doc.text(
    `Obst & Gemüse: ${form.fruits_veg ? formatFreq(form.fruits_veg) : "Nicht angegeben"}`,
    margin + 12,
    yPos
  );
  yPos += 6;
  doc.text(
    `Fisch: ${form.fish ? formatFreq(form.fish) : "Nicht angegeben"}`,
    margin + 12,
    yPos
  );
  yPos += 15;

  // Metabolic Section Card
  checkPageBreak(40);
  setFillColor(doc, COLORS.card);
  setStrokeColor(doc, COLORS.cardBorder);
  doc.roundedRect(margin, yPos, contentWidth, 35, 3, 3, "FD");
  
  yPos += 8;
  setTextColor(doc, COLORS.primary);
  doc.setFontSize(12);
  doc.setFont(fontFamily, "bold");
  doc.text("Metabolisch", margin + 8, yPos);
  yPos += 8;

  setTextColor(doc, COLORS.fontPrimary);
  doc.setFontSize(10);
  doc.setFont(fontFamily, "normal");
  doc.text(
    `Diabetes Diagnose: ${form.diabetes_dx ? formatYesNo(form.diabetes_dx) : "Nicht angegeben"}`,
    margin + 12,
    yPos
  );
  yPos += 6;
  if (form.diabetes_dx === "yes" && form.hba1c !== "") {
    doc.text(`HbA1c: ${formatValue(form.hba1c)} %`, margin + 12, yPos);
    yPos += 6;
  }
  doc.text(`LDL: ${formatValue(form.ldl)} mg/dL`, margin + 12, yPos);
  yPos += 6;
  doc.text(`HDL: ${formatValue(form.hdl)} mg/dL`, margin + 12, yPos);
  yPos += 15;

  // Footer
  const finalY = pageHeight - 15;
  setTextColor(doc, COLORS.fontSecondary);
  doc.setFontSize(8);
  doc.setFont(fontFamily, "italic");
  doc.text(
    "Erstellt mit AgePilot - www.scalable-longevity.com",
    pageWidth / 2,
    finalY,
    { align: "center" }
  );

  // Save the PDF
  const fileName = `Selbsttest-Ergebnisse-${new Date().toISOString().split("T")[0]}.pdf`;
  doc.save(fileName);
}
