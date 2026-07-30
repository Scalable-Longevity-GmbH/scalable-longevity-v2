"use client";

import { Fragment } from "react";
import { useLocale } from "next-intl";

type Block =
  | { kind: "p" | "h2" | "h3"; text: string }
  | { kind: "ul"; items: string[] };

const content: Record<"en" | "de", { title: string; blocks: Block[] }> = {
  en: {
    title: `Privacy Policy`,
    blocks: [
  { kind: "p", text: `AgePilot | Last updated: July 2026` },
  { kind: "h2", text: `1. General Information` },
  { kind: "p", text: `Protecting your personal data is important to us. This Privacy Policy explains which personal data we process when you use our website and AgePilot applications, the purposes for which we process it, and the rights available to you.` },
  { kind: "p", text: `AgePilot helps you reflect on your lifestyle habits and integrate health-promoting decisions into your daily life. Its features may include, in particular, a health-related self-assessment, algorithmic evaluations, information on different health and lifestyle areas, progress tracking, and functions designed to support the development of new habits.` },
  { kind: "p", text: `AgePilot does not provide medical diagnoses or individualized medical treatment recommendations and does not replace medical advice or examination.` },
  { kind: "h2", text: `2. Controller` },
  { kind: "p", text: `The controller responsible for the processing of personal data is:` },
  { kind: "p", text: `THE KNOWLEDGE HOUSE GmbH
Breite Straße 22
40213 Düsseldorf
Germany` },
  { kind: "p", text: `Commercial Register: HRB 32589
Register Court: Local Court of Wuppertal` },
  { kind: "p", text: `Represented by its Managing Director:
Prof. Dr. med. Hubert Trübel` },
  { kind: "p", text: `Email: info@knowledge-house.com` },
  { kind: "h2", text: `3. Data We Process` },
  { kind: "p", text: `Depending on the functions you use, we may process the following categories of personal data in particular:` },
  { kind: "h3", text: `3.1 Contact and Communication Data` },
  { kind: "ul", items: [
      `your email address`,
      `your name, if you provide it voluntarily`,
      `the content of your messages to us`,
      `information provided in connection with contact or support requests`
    ] },
  { kind: "h3", text: `3.2 Health and Lifestyle Data` },
  { kind: "p", text: `If you use the AgePilot self-assessment or comparable functions, your answers may allow conclusions to be drawn about your health and lifestyle. This may include information relating to:` },
  { kind: "ul", items: [
      `age and general physical characteristics`,
      `exercise and physical activity`,
      `nutrition`,
      `sleep and recovery`,
      `stress and psychological well-being`,
      `social relationships and life satisfaction`,
      `preventive health behavior`,
      `health-related habits`,
      `personal goals and interests`,
      `other information you provide in the self-assessment`
    ] },
  { kind: "p", text: `Where such information concerns your physical or mental health or allows corresponding conclusions to be drawn, it constitutes health data and therefore a special category of personal data within the meaning of Article 9(1) GDPR.` },
  { kind: "h3", text: `3.3 Results and Usage Data` },
  { kind: "ul", items: [
      `results of the self-assessment`,
      `algorithmically generated evaluations`,
      `calculated metrics and assessments`,
      `identified areas for action`,
      `selected goals and habits`,
      `recorded activities and progress`,
      `times and frequency of use`,
      `content accessed and functions used`
    ] },
  { kind: "h3", text: `3.4 Technical Data` },
  { kind: "p", text: `When you use our website and applications, technically necessary data may be processed, including:` },
  { kind: "ul", items: [
      `IP address`,
      `date and time of access`,
      `browser type and browser version`,
      `operating system`,
      `device information`,
      `pages and functions accessed`,
      `referrer URL`,
      `technical error and crash information`,
      `server log data`
    ] },
  { kind: "p", text: `As a rule, these data are collected when you use our website or application, rather than solely when an application is installed.` },
  { kind: "h2", text: `4. Purposes and Legal Bases of Processing` },
  { kind: "h3", text: `4.1 Provision of the Website and Technical Security` },
  { kind: "p", text: `We process technical data to provide our website and applications, display content correctly on your device, ensure the stability and security of our systems, identify and resolve technical errors, and prevent misuse and unauthorized access.` },
  { kind: "p", text: `The legal basis is Article 6(1)(f) GDPR. Our legitimate interest lies in providing our services securely, reliably, and effectively.` },
  { kind: "h3", text: `4.2 Conducting the Self-Assessment and Creating Your Evaluation` },
  { kind: "p", text: `We process your answers to conduct the self-assessment, evaluate your information algorithmically, display your results and relevant areas for action, illustrate possible effects of health-promoting behavioral changes, provide general information based on your inputs, and show changes and progress when you use the service repeatedly.` },
  { kind: "p", text: `Where health data are processed, this processing takes place only on the basis of your explicit consent pursuant to Article 6(1)(a) and Article 9(2)(a) GDPR.` },
  { kind: "p", text: `Your consent is voluntary and may be withdrawn at any time with effect for the future.` },
  { kind: "h3", text: `4.3 Life Path Analyzer, Progress Tracking, and Habit Engine` },
  { kind: "p", text: `If you use these functions, we process your information and previous results to display health-related areas for action, illustrate possible long-term effects of different behaviors, track your progress over a defined period, support you in selecting and implementing health-promoting habits, and provide suitable general content and guidance within the application.` },
  { kind: "p", text: `Where health data are involved, processing is based on your explicit consent pursuant to Article 6(1)(a) and Article 9(2)(a) GDPR.` },
  { kind: "p", text: `The results and guidance provided are general, automatically generated information. They do not constitute a medical diagnosis or individualized medical recommendation.` },
  { kind: "h3", text: `4.4 Contacting Us` },
  { kind: "p", text: `If you contact us by email, contact form, or another channel, we process your information in order to handle your request. The legal basis is Article 6(1)(b) GDPR where your request relates to the preparation or performance of a contractual relationship, and Article 6(1)(f) GDPR for other inquiries. Our legitimate interest lies in properly handling and documenting inquiries.` },
  { kind: "h3", text: `4.5 Newsletter` },
  { kind: "p", text: `If you subscribe to our newsletter, we process your email address in order to send you information about AgePilot, longevity, healthspan, health-related habits, and our services.` },
  { kind: "p", text: `Registration takes place through a double opt-in process. After registering, you will receive an email asking you to confirm your subscription. The time of registration and confirmation and your IP address may be stored in order to document your consent.` },
  { kind: "p", text: `The legal basis for sending the newsletter is your consent pursuant to Article 6(1)(a) GDPR in conjunction with Section 7(2) No. 3 of the German Unfair Competition Act (UWG). You may withdraw your consent at any time with effect for the future, in particular by using the unsubscribe link at the end of each newsletter.` },
  { kind: "h2", text: `5. Voluntary Use of Data to Improve AgePilot` },
  { kind: "p", text: `Before starting the self-assessment, you can decide whether your answers may also be used to improve AgePilot. Selecting “Do not share” does not prevent you from using the self-assessment and receiving its immediate evaluation.` },
  { kind: "h3", text: `5.1 “Do Not Share” Option` },
  { kind: "p", text: `If you select “Do not share,” we use your information solely to conduct the self-assessment, create and display your personal evaluation, provide the AgePilot functions you use, and ensure technically necessary storage and security.` },
  { kind: "p", text: `In this case, your information will not additionally be used for scientific evaluation or for the general improvement of our content models and recommendations.` },
  { kind: "h3", text: `5.2 “Share” Option` },
  { kind: "p", text: `If you select “Share,” your information may additionally be used to examine the quality and informative value of our evaluations, test and further develop the underlying models and algorithms, investigate general relationships between lifestyle habits and the results displayed within AgePilot, improve the usability and relevance of our content, and conduct scientific or statistical evaluations.` },
  { kind: "p", text: `This additional processing takes place only on the basis of separate, voluntary consent pursuant to Article 6(1)(a) GDPR and, where health data are involved, Article 9(2)(a) GDPR. Consent to this additional use of your data is not a requirement for using the self-assessment.` },
  { kind: "p", text: `You may withdraw this consent at any time with effect for the future. Withdrawal does not affect the lawfulness of processing carried out before the withdrawal.` },
  { kind: "h2", text: `6. Scientific and Statistical Evaluations` },
  { kind: "p", text: `Where you have given explicit consent, your data may be processed for scientific or statistical purposes.` },
  { kind: "p", text: `Wherever possible, we use the data in anonymized form. Anonymized data can no longer be linked to you and are generally no longer subject to the GDPR.` },
  { kind: "p", text: `Where complete anonymization is not possible for the relevant purpose, data may be processed in pseudonymized form. In pseudonymization, directly identifying information is stored separately from the evaluation data. Pseudonymized data remain personal data and are protected accordingly.` },
  { kind: "p", text: `Scientific or statistical results are published only in a form that does not permit conclusions to be drawn about individual persons.` },
  { kind: "p", text: `Pseudonymized personal data are disclosed to research partners or other third parties only if you have expressly consented, another legal basis applies, or the receiving party acts for us as a contractually bound processor.` },
  { kind: "h2", text: `7. Automated Evaluation` },
  { kind: "p", text: `The results of the AgePilot self-assessment are generated wholly or partly by automated means on the basis of your inputs.` },
  { kind: "p", text: `Your information may be assigned to specific health and lifestyle areas, weighted, and combined into a personal evaluation. The purpose of the evaluation is to show you general information, potential areas for action, and health-promoting habits.` },
  { kind: "p", text: `The automated evaluation does not produce legal effects concerning you or similarly significantly affect you in a legal or economic sense within the meaning of Article 22 GDPR.` },
  { kind: "p", text: `In particular, the results do not constitute a medical diagnosis, risk prognosis, or treatment recommendation.` },
  { kind: "h2", text: `8. Cookies and Similar Technologies` },
  { kind: "h3", text: `8.1 Technically Necessary Technologies` },
  { kind: "p", text: `Technically necessary technologies may be used without your consent where they are required to provide the website, store your language or privacy settings, ensure website security, or provide functions that you have expressly requested.` },
  { kind: "p", text: `The processing of personal data in this context is generally based on Article 6(1)(f) GDPR. Our legitimate interest lies in the secure and effective provision of our website.` },
  { kind: "h3", text: `8.2 Analytics and Marketing Technologies` },
  { kind: "p", text: `Analytics, statistics, and marketing technologies are used only after you have consented through our consent management system.` },
  { kind: "p", text: `The legal basis is Article 6(1)(a) GDPR. Where information is stored on or accessed from your device, this takes place on the basis of your consent pursuant to Section 25(1) of the German Telecommunications Digital Services Data Protection Act (TDDDG).` },
  { kind: "p", text: `You may change or withdraw your consent at any time with effect for the future through the website’s privacy settings.` },
  { kind: "h2", text: `9. Recipients and Processors` },
  { kind: "p", text: `We may use carefully selected service providers that process personal data on our behalf. These may include hosting and cloud providers, IT and software service providers, email and newsletter providers, analytics and consent management providers, support and communication service providers, and technical development and maintenance providers.` },
  { kind: "p", text: `As a rule, these service providers may process personal data only in accordance with our instructions and on the basis of a data processing agreement pursuant to Article 28 GDPR.` },
  { kind: "p", text: `Data are disclosed to other recipients only where this is necessary to provide the service you requested, you have expressly consented, a legal obligation applies, or another legal basis exists.` },
  { kind: "h2", text: `10. Transfers to Third Countries` },
  { kind: "p", text: `Some of our technical service providers may process personal data outside the European Union or the European Economic Area.` },
  { kind: "p", text: `Such transfers take place only where the requirements of Articles 44 et seq. GDPR are met. Appropriate safeguards may include an adequacy decision by the European Commission, certification of the recipient under the EU-U.S. Data Privacy Framework, the European Commission’s Standard Contractual Clauses, additional technical and organizational safeguards, or your explicit consent in legally permitted exceptional cases.` },
  { kind: "h2", text: `11. Storage Period and Deletion` },
  { kind: "p", text: `We store personal data only for as long as necessary for the relevant processing purpose or for as long as statutory obligations require longer retention.` },
  { kind: "ul", items: [
      `Data from contact requests are deleted once the request has been conclusively handled, unless statutory retention obligations require continued storage.`,
      `Newsletter data are stored until you withdraw your consent. Following an unsubscribe request, certain evidence of the original consent may be retained for a limited period in order to document that consent.`,
      `Data from the self-assessment and AgePilot functions are stored for as long as necessary to provide the functions you use, or until you request deletion or withdraw your consent.`,
      `Data processed on the basis of voluntary consent for improvement or scientific evaluation are deleted or anonymized when you withdraw your consent, unless another legal basis permits continued storage.`,
      `Technical log data are deleted once they are no longer required for security and operational purposes.`
    ] },
  { kind: "p", text: `Where immediate deletion is not possible for technical or legal reasons, processing of the relevant data will be restricted.` },
  { kind: "h2", text: `12. Withdrawal of Consent` },
  { kind: "p", text: `You may withdraw any consent you have given at any time with effect for the future. This applies in particular to the processing of health data for the self-assessment, storage and evaluation of progress data, voluntary use of your data to improve AgePilot, use for scientific or statistical purposes, the newsletter, and analytics and marketing technologies.` },
  { kind: "p", text: `Withdrawal does not affect the lawfulness of processing carried out before the withdrawal.` },
  { kind: "p", text: `To withdraw your consent, you may contact us at info@knowledge-house.com or, where available, use the settings within AgePilot or the website’s consent management system.` },
  { kind: "h2", text: `13. Your Data Protection Rights` },
  { kind: "p", text: `Subject to the applicable legal requirements, you have the following rights in particular:` },
  { kind: "ul", items: [
      `right of access pursuant to Article 15 GDPR`,
      `right to rectification pursuant to Article 16 GDPR`,
      `right to erasure pursuant to Article 17 GDPR`,
      `right to restriction of processing pursuant to Article 18 GDPR`,
      `right to data portability pursuant to Article 20 GDPR`,
      `right to object pursuant to Article 21 GDPR`,
      `right to withdraw consent pursuant to Article 7(3) GDPR`,
      `right to lodge a complaint with a supervisory authority pursuant to Article 77 GDPR`
    ] },
  { kind: "p", text: `To exercise your rights, you may contact us at info@knowledge-house.com.` },
  { kind: "h2", text: `14. Right to Object` },
  { kind: "p", text: `Where we process your personal data on the basis of Article 6(1)(f) GDPR, you may object to the processing at any time on grounds relating to your particular situation.` },
  { kind: "p", text: `We will then no longer process the relevant data unless we demonstrate compelling legitimate grounds for the processing that override your interests, rights, and freedoms, or the processing is required for the establishment, exercise, or defense of legal claims.` },
  { kind: "p", text: `You may object at any time, without giving reasons, to the processing of personal data for direct marketing purposes.` },
  { kind: "h2", text: `15. Right to Lodge a Complaint` },
  { kind: "p", text: `You have the right to lodge a complaint with a data protection supervisory authority. The supervisory authority generally responsible for THE KNOWLEDGE HOUSE GmbH is:` },
  { kind: "p", text: `State Commissioner for Data Protection and Freedom of Information of North Rhine-Westphalia
Kavalleriestraße 2–4
40213 Düsseldorf
Germany` },
  { kind: "p", text: `You may also contact another competent data protection supervisory authority, in particular the authority at your habitual place of residence or place of work.` },
  { kind: "h2", text: `16. Data Security` },
  { kind: "p", text: `We take appropriate technical and organizational measures to protect personal data against loss, manipulation, unauthorized access, and other misuse.` },
  { kind: "p", text: `In doing so, we take into account, in particular, the nature and scope of the data processed, the processing purposes, the state of the art, implementation costs, and the likelihood and severity of potential risks. Protective measures may include encryption, access restrictions, authorization concepts, backups, and procedures for regularly reviewing technical and organizational security.` },
  { kind: "h2", text: `17. Minors` },
  { kind: "p", text: `AgePilot is generally not directed at Minors.` },
  { kind: "h2", text: `18. No Medical Advice` },
  { kind: "p", text: `AgePilot is intended for general information, self-reflection, and support in developing health-promoting lifestyle habits.` },
  { kind: "ul", items: [
      `AgePilot does not provide a medical diagnosis.`,
      `AgePilot does not detect or treat diseases.`,
      `AgePilot does not replace medical examination or advice.`,
      `AgePilot does not provide individualized medical treatment recommendations.`,
      `AgePilot must not be used as the sole basis for medical decisions.`
    ] },
  { kind: "p", text: `If you have health concerns, an existing medical condition, or questions about medical measures, you should consult a physician or another appropriately qualified healthcare professional.` },
  { kind: "h2", text: `19. Changes to This Privacy Policy` },
  { kind: "p", text: `We may amend this Privacy Policy if our services, technical systems, or legal requirements change. The current version is available on our website. If a change requires your consent or another active action on your part, we will inform you separately.` },
],
  },
  de: {
    title: `Datenschutzerklärung`,
    blocks: [
  { kind: "p", text: `AgePilot | Stand: Juli 2026` },
  { kind: "h2", text: `1. Allgemeine Hinweise` },
  { kind: "p", text: `Der Schutz deiner personenbezogenen Daten ist uns wichtig. In dieser Datenschutzerklärung erläutern wir, welche personenbezogenen Daten wir verarbeiten, wenn du unsere Website und die AgePilot-Anwendungen nutzt, zu welchen Zwecken dies geschieht und welche Rechte du hast.` },
  { kind: "p", text: `AgePilot unterstützt dich dabei, deine Lebensgewohnheiten zu reflektieren und gesundheitsfördernde Entscheidungen in deinen Alltag zu integrieren. Hierzu können insbesondere ein gesundheitsbezogener Selbsttest, algorithmische Auswertungen, Informationen zu verschiedenen Gesundheits- und Lebensstilbereichen, Fortschrittsmessungen sowie Funktionen zur Unterstützung neuer Gewohnheiten gehören.` },
  { kind: "p", text: `AgePilot stellt keine medizinischen Diagnosen, gibt keine individuelle medizinische Behandlungsempfehlung und ersetzt keine ärztliche Beratung oder Untersuchung.` },
  { kind: "h2", text: `2. Verantwortlicher` },
  { kind: "p", text: `Verantwortlich für die Verarbeitung personenbezogener Daten ist:` },
  { kind: "p", text: `THE KNOWLEDGE HOUSE GmbH
Breite Straße 22
40213 Düsseldorf
Deutschland` },
  { kind: "p", text: `Handelsregister: HRB 32589
Registergericht: Amtsgericht Wuppertal` },
  { kind: "p", text: `Vertreten durch den Geschäftsführer:
Prof. Dr. med. Hubert Trübel` },
  { kind: "p", text: `E-Mail: info@knowledge-house.com` },
  { kind: "h2", text: `3. Welche Daten wir verarbeiten` },
  { kind: "p", text: `Je nachdem, welche Funktionen du nutzt, können wir insbesondere folgende Kategorien personenbezogener Daten verarbeiten:` },
  { kind: "h3", text: `3.1 Kontakt- und Kommunikationsdaten` },
  { kind: "ul", items: [
      `deine E-Mail-Adresse`,
      `dein Name, sofern du ihn freiwillig angibst`,
      `Inhalte deiner Nachrichten an uns`,
      `Angaben im Rahmen von Kontakt- oder Supportanfragen`
    ] },
  { kind: "h3", text: `3.2 Gesundheits- und Lebensstildaten` },
  { kind: "p", text: `Wenn du den AgePilot-Selbsttest oder vergleichbare Funktionen nutzt, können deine Antworten Rückschlüsse auf deine Gesundheit und deinen Lebensstil ermöglichen. Hierzu können insbesondere Angaben gehören zu:` },
  { kind: "ul", items: [
      `Alter und allgemeinen körperlichen Merkmalen`,
      `Bewegung und körperlicher Aktivität`,
      `Ernährung`,
      `Schlaf und Erholung`,
      `Stress und psychischem Wohlbefinden`,
      `sozialen Beziehungen und Lebenszufriedenheit`,
      `Präventionsverhalten`,
      `gesundheitsbezogenen Gewohnheiten`,
      `persönlichen Zielen und Interessen`,
      `sonstigen von dir im Selbsttest gemachten Angaben`
    ] },
  { kind: "p", text: `Soweit diese Angaben Informationen über deine körperliche oder psychische Gesundheit enthalten oder entsprechende Rückschlüsse ermöglichen, handelt es sich um Gesundheitsdaten und damit um besondere Kategorien personenbezogener Daten im Sinne von Art. 9 Abs. 1 DSGVO.` },
  { kind: "h3", text: `3.3 Ergebnis- und Nutzungsdaten` },
  { kind: "ul", items: [
      `Ergebnisse des Selbsttests`,
      `algorithmisch ermittelte Auswertungen`,
      `errechnete Kennzahlen und Einschätzungen`,
      `identifizierte Handlungsfelder`,
      `ausgewählte Ziele und Gewohnheiten`,
      `dokumentierte Aktivitäten und Fortschritte`,
      `Zeitpunkte und Häufigkeit der Nutzung`,
      `aufgerufene Inhalte und verwendete Funktionen`
    ] },
  { kind: "h3", text: `3.4 Technische Daten` },
  { kind: "p", text: `Bei der Nutzung unserer Website und Anwendungen können technisch erforderliche Daten verarbeitet werden, beispielsweise:` },
  { kind: "ul", items: [
      `IP-Adresse`,
      `Datum und Uhrzeit des Zugriffs`,
      `Browsertyp und Browserversion`,
      `Betriebssystem`,
      `Geräteinformationen`,
      `aufgerufene Seiten und Funktionen`,
      `Referrer-URL`,
      `technische Fehler- und Absturzinformationen`,
      `Serverprotokolldaten`
    ] },
  { kind: "p", text: `Diese Daten werden grundsätzlich bei der Nutzung unserer Website oder Anwendung erfasst, nicht bereits allein durch die Installation einer Anwendung.` },
  { kind: "h2", text: `4. Zwecke und Rechtsgrundlagen der Verarbeitung` },
  { kind: "h3", text: `4.1 Bereitstellung der Website und technische Sicherheit` },
  { kind: "p", text: `Wir verarbeiten technische Daten, um unsere Website und Anwendungen bereitzustellen, Inhalte korrekt auf deinem Gerät anzuzeigen, die Stabilität und Sicherheit unserer Systeme zu gewährleisten, technische Fehler zu erkennen und zu beheben sowie Missbrauch und unberechtigte Zugriffe zu verhindern.` },
  { kind: "p", text: `Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht in der sicheren, stabilen und funktionsfähigen Bereitstellung unseres Angebots.` },
  { kind: "h3", text: `4.2 Durchführung des Selbsttests und Erstellung deiner Auswertung` },
  { kind: "p", text: `Wir verarbeiten deine Antworten, um deinen Selbsttest durchzuführen, deine Angaben algorithmisch auszuwerten, dir deine Ergebnisse und relevante Handlungsfelder anzuzeigen, mögliche Auswirkungen gesundheitsfördernder Verhaltensänderungen zu veranschaulichen, dir allgemeine, auf deinen Angaben basierende Informationen bereitzustellen und bei wiederholter Nutzung Veränderungen und Fortschritte darzustellen.` },
  { kind: "p", text: `Soweit hierbei Gesundheitsdaten verarbeitet werden, erfolgt die Verarbeitung nur auf Grundlage deiner ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a und Art. 9 Abs. 2 lit. a DSGVO.` },
  { kind: "p", text: `Die Einwilligung ist freiwillig und kann jederzeit mit Wirkung für die Zukunft widerrufen werden.` },
  { kind: "h3", text: `4.3 Life Path Analyzer, Fortschrittsmessung und Habit Engine` },
  { kind: "p", text: `Sofern du diese Funktionen nutzt, verarbeiten wir deine Angaben und bisherigen Ergebnisse, um gesundheitsbezogene Handlungsfelder darzustellen, mögliche langfristige Auswirkungen unterschiedlicher Verhaltensweisen zu veranschaulichen, deinen Fortschritt über einen bestimmten Zeitraum abzubilden, dich bei der Auswahl und Umsetzung gesundheitsfördernder Gewohnheiten zu unterstützen und dir passende allgemeine Inhalte und Hinweise innerhalb der Anwendung anzuzeigen.` },
  { kind: "p", text: `Die Verarbeitung erfolgt, soweit Gesundheitsdaten betroffen sind, auf Grundlage deiner ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a und Art. 9 Abs. 2 lit. a DSGVO.` },
  { kind: "p", text: `Die bereitgestellten Ergebnisse und Hinweise sind allgemeine, automatisiert erzeugte Informationen. Sie stellen keine medizinische Diagnose oder individuelle medizinische Empfehlung dar.` },
  { kind: "h3", text: `4.4 Kontaktaufnahme` },
  { kind: "p", text: `Wenn du uns per E-Mail, Kontaktformular oder auf anderem Weg kontaktierst, verarbeiten wir deine Angaben zur Bearbeitung deiner Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn deine Anfrage der Vorbereitung oder Durchführung eines Vertragsverhältnisses dient, und Art. 6 Abs. 1 lit. f DSGVO bei sonstigen Anfragen. Unser berechtigtes Interesse besteht in der sachgerechten Bearbeitung und Dokumentation von Anfragen.` },
  { kind: "h3", text: `4.5 Newsletter` },
  { kind: "p", text: `Wenn du unseren Newsletter abonnierst, verarbeiten wir deine E-Mail-Adresse, um dir Informationen zu AgePilot, Longevity, Healthspan, gesundheitsbezogenen Gewohnheiten und unseren Angeboten zuzusenden.` },
  { kind: "p", text: `Die Anmeldung erfolgt über ein Double-Opt-in-Verfahren. Nach der Anmeldung erhältst du eine E-Mail, in der du deine Anmeldung bestätigen musst. Dabei können der Anmelde- und Bestätigungszeitpunkt sowie deine IP-Adresse gespeichert werden, um deine Einwilligung nachweisen zu können.` },
  { kind: "p", text: `Rechtsgrundlage für den Versand ist deine Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit § 7 Abs. 2 Nr. 3 UWG. Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, insbesondere über den Abmeldelink am Ende jedes Newsletters.` },
  { kind: "h2", text: `5. Freiwillige Nutzung von Daten zur Verbesserung von AgePilot` },
  { kind: "p", text: `Vor Beginn des Selbsttests kannst du entscheiden, ob deine Antworten zusätzlich zur Verbesserung von AgePilot verwendet werden dürfen. Die Auswahl „Nicht teilen“ hindert dich nicht daran, den Selbsttest und dessen unmittelbare Auswertung zu nutzen.` },
  { kind: "h3", text: `5.1 Auswahl „Nicht teilen“` },
  { kind: "p", text: `Wenn du „Nicht teilen“ auswählst, verwenden wir deine Angaben ausschließlich zur Durchführung des Selbsttests, zur Erstellung und Anzeige deiner persönlichen Auswertung, zur Bereitstellung der von dir genutzten AgePilot-Funktionen sowie zur technisch erforderlichen Speicherung und Sicherheit.` },
  { kind: "p", text: `Deine Angaben werden in diesem Fall nicht zusätzlich zur wissenschaftlichen Auswertung oder zur allgemeinen Verbesserung der inhaltlichen Modelle und Empfehlungen verwendet.` },
  { kind: "h3", text: `5.2 Auswahl „Teilen“` },
  { kind: "p", text: `Wenn du „Teilen“ auswählst, dürfen deine Angaben zusätzlich dazu verwendet werden, die Qualität und Aussagekraft unserer Auswertungen zu untersuchen, die zugrunde liegenden Modelle und Algorithmen zu prüfen und weiterzuentwickeln, allgemeine Zusammenhänge zwischen Lebensgewohnheiten und den innerhalb von AgePilot dargestellten Ergebnissen zu untersuchen, die Nutzerfreundlichkeit und Relevanz unserer Inhalte zu verbessern sowie wissenschaftliche oder statistische Auswertungen durchzuführen.` },
  { kind: "p", text: `Diese zusätzliche Verarbeitung erfolgt nur auf Grundlage einer gesonderten, freiwilligen Einwilligung gemäß Art. 6 Abs. 1 lit. a und, soweit Gesundheitsdaten betroffen sind, Art. 9 Abs. 2 lit. a DSGVO. Die Einwilligung in die zusätzliche Nutzung deiner Daten ist keine Voraussetzung für die Nutzung des Selbsttests.` },
  { kind: "p", text: `Du kannst diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Der Widerruf hat keine Auswirkungen auf die Rechtmäßigkeit der Verarbeitung, die vor dem Widerruf erfolgt ist.` },
  { kind: "h2", text: `6. Wissenschaftliche und statistische Auswertungen` },
  { kind: "p", text: `Soweit du ausdrücklich eingewilligt hast, können deine Daten für wissenschaftliche oder statistische Zwecke verarbeitet werden.` },
  { kind: "p", text: `Wir verwenden die Daten dabei nach Möglichkeit in anonymisierter Form. Anonymisierte Daten lassen keinen Rückschluss mehr auf deine Person zu und unterliegen grundsätzlich nicht mehr der DSGVO.` },
  { kind: "p", text: `Soweit eine vollständige Anonymisierung für den jeweiligen Zweck nicht möglich ist, können Daten pseudonymisiert verarbeitet werden. Bei einer Pseudonymisierung werden unmittelbar identifizierende Angaben getrennt von den Auswertungsdaten gespeichert. Pseudonymisierte Daten bleiben personenbezogene Daten und werden entsprechend geschützt.` },
  { kind: "p", text: `Eine Veröffentlichung wissenschaftlicher oder statistischer Ergebnisse erfolgt nur in einer Form, die keinen Rückschluss auf einzelne Personen zulässt.` },
  { kind: "p", text: `Eine Weitergabe pseudonymisierter personenbezogener Daten an Forschungspartner oder andere Dritte erfolgt nur, wenn du darin ausdrücklich eingewilligt hast, eine andere gesetzliche Rechtsgrundlage besteht oder die empfangende Stelle als vertraglich gebundener Auftragsverarbeiter für uns tätig wird.` },
  { kind: "h2", text: `7. Automatisierte Auswertung` },
  { kind: "p", text: `Die Ergebnisse des AgePilot-Selbsttests werden ganz oder teilweise automatisiert auf Grundlage deiner Eingaben erstellt.` },
  { kind: "p", text: `Dabei können deine Angaben bestimmten Gesundheits- und Lebensstilbereichen zugeordnet, gewichtet und zu einer persönlichen Auswertung zusammengeführt werden. Die Auswertung dient dazu, dir allgemeine Informationen, mögliche Handlungsfelder und gesundheitsfördernde Gewohnheiten aufzuzeigen.` },
  { kind: "p", text: `Die automatisierte Auswertung hat keine rechtliche Wirkung und entfaltet dir gegenüber keine vergleichbar erhebliche rechtliche oder wirtschaftliche Wirkung im Sinne von Art. 22 DSGVO.` },
  { kind: "p", text: `Die Ergebnisse stellen insbesondere keine medizinische Diagnose, Risikoprognose oder Behandlungsempfehlung dar.` },
  { kind: "h2", text: `8. Cookies und ähnliche Technologien` },
  { kind: "h3", text: `8.1 Technisch notwendige Technologien` },
  { kind: "p", text: `Technisch notwendige Technologien können ohne deine Einwilligung eingesetzt werden, soweit sie erforderlich sind, um die Website bereitzustellen, deine Sprach- oder Datenschutzeinstellungen zu speichern, die Sicherheit der Website zu gewährleisten oder von dir ausdrücklich angeforderte Funktionen bereitzustellen.` },
  { kind: "p", text: `Die Verarbeitung personenbezogener Daten erfolgt hierbei regelmäßig auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht in der sicheren und funktionsfähigen Bereitstellung unserer Website.` },
  { kind: "h3", text: `8.2 Analyse- und Marketingtechnologien` },
  { kind: "p", text: `Analyse-, Statistik- und Marketingtechnologien werden nur eingesetzt, nachdem du über unser Consent-Management-System eingewilligt hast.` },
  { kind: "p", text: `Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO. Soweit Informationen auf deinem Endgerät gespeichert oder ausgelesen werden, erfolgt dies auf Grundlage deiner Einwilligung gemäß § 25 Abs. 1 TDDDG.` },
  { kind: "p", text: `Du kannst deine Einwilligung jederzeit über die Datenschutzeinstellungen der Website mit Wirkung für die Zukunft ändern oder widerrufen.` },
  { kind: "h2", text: `9. Empfänger und Auftragsverarbeiter` },
  { kind: "p", text: `Wir können sorgfältig ausgewählte Dienstleister einsetzen, die personenbezogene Daten in unserem Auftrag verarbeiten. Hierzu können insbesondere Hosting- und Cloudanbieter, IT- und Softwaredienstleister, Anbieter für den Versand von E-Mails und Newslettern, Anbieter für Analyse- und Consent-Management-Systeme, Support- und Kommunikationsdienstleister sowie technische Entwicklungs- und Wartungsdienstleister gehören.` },
  { kind: "p", text: `Diese Dienstleister dürfen personenbezogene Daten grundsätzlich nur entsprechend unseren Weisungen und auf Grundlage eines Vertrags zur Auftragsverarbeitung gemäß Art. 28 DSGVO verarbeiten.` },
  { kind: "p", text: `Eine Übermittlung an andere Empfänger erfolgt nur, wenn sie zur Bereitstellung der von dir gewünschten Leistung erforderlich ist, du ausdrücklich eingewilligt hast, eine gesetzliche Verpflichtung besteht oder eine andere gesetzliche Rechtsgrundlage vorliegt.` },
  { kind: "h2", text: `10. Übermittlung in Drittländer` },
  { kind: "p", text: `Einige unserer technischen Dienstleister können personenbezogene Daten außerhalb der Europäischen Union oder des Europäischen Wirtschaftsraums verarbeiten.` },
  { kind: "p", text: `Eine solche Übermittlung erfolgt nur, wenn die gesetzlichen Voraussetzungen der Art. 44 ff. DSGVO erfüllt sind. Hierzu können insbesondere ein Angemessenheitsbeschluss der Europäischen Kommission, eine Zertifizierung des Empfängers nach dem EU-US Data Privacy Framework, Standardvertragsklauseln der Europäischen Kommission, zusätzliche technische und organisatorische Schutzmaßnahmen oder deine ausdrückliche Einwilligung in gesetzlich vorgesehenen Ausnahmefällen gehören.` },
  { kind: "h2", text: `11. Speicherdauer und Löschung` },
  { kind: "p", text: `Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Verarbeitungszweck erforderlich ist oder gesetzliche Pflichten eine längere Speicherung verlangen.` },
  { kind: "ul", items: [
      `Daten aus Kontaktanfragen werden gelöscht, wenn die Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.`,
      `Newsletterdaten werden bis zum Widerruf deiner Einwilligung gespeichert. Nach einer Abmeldung können bestimmte Nachweisdaten befristet gespeichert werden, um die ursprünglich erteilte Einwilligung nachweisen zu können.`,
      `Daten aus dem Selbsttest und den AgePilot-Funktionen werden gespeichert, solange sie für die Bereitstellung der von dir genutzten Funktionen erforderlich sind oder bis du ihre Löschung verlangst beziehungsweise deine Einwilligung widerrufst.`,
      `Daten, die auf Grundlage einer freiwilligen Einwilligung zur Verbesserung oder wissenschaftlichen Auswertung verarbeitet werden, werden gelöscht oder anonymisiert, wenn du deine Einwilligung widerrufst und keine andere Rechtsgrundlage für eine weitere Speicherung besteht.`,
      `Technische Protokolldaten werden gelöscht, sobald sie für Sicherheits- und Betriebszwecke nicht mehr erforderlich sind.`
    ] },
  { kind: "p", text: `Soweit eine Löschung aus technischen oder rechtlichen Gründen nicht unmittelbar möglich ist, wird die Verarbeitung der betreffenden Daten eingeschränkt.` },
  { kind: "h2", text: `12. Widerruf von Einwilligungen` },
  { kind: "p", text: `Du kannst eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Dies gilt insbesondere für die Verarbeitung von Gesundheitsdaten zur Durchführung des Selbsttests, die Speicherung und Auswertung deiner Fortschrittsdaten, die freiwillige Nutzung deiner Daten zur Verbesserung von AgePilot, die Nutzung für wissenschaftliche oder statistische Zwecke, den Newsletter sowie Analyse- und Marketingtechnologien.` },
  { kind: "p", text: `Der Widerruf berührt nicht die Rechtmäßigkeit der Verarbeitung, die bis zum Zeitpunkt des Widerrufs erfolgt ist.` },
  { kind: "p", text: `Zum Widerruf kannst du dich an info@knowledge-house.com wenden oder, soweit verfügbar, die Einstellungen innerhalb von AgePilot beziehungsweise das Consent-Management-System der Website verwenden.` },
  { kind: "h2", text: `13. Deine Datenschutzrechte` },
  { kind: "p", text: `Du hast im Rahmen der gesetzlichen Voraussetzungen insbesondere folgende Rechte:` },
  { kind: "ul", items: [
      `Recht auf Auskunft gemäß Art. 15 DSGVO`,
      `Recht auf Berichtigung gemäß Art. 16 DSGVO`,
      `Recht auf Löschung gemäß Art. 17 DSGVO`,
      `Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO`,
      `Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO`,
      `Recht auf Widerspruch gemäß Art. 21 DSGVO`,
      `Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO`,
      `Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde gemäß Art. 77 DSGVO`
    ] },
  { kind: "p", text: `Zur Ausübung deiner Rechte kannst du uns unter info@knowledge-house.com kontaktieren.` },
  { kind: "h2", text: `14. Widerspruchsrecht` },
  { kind: "p", text: `Soweit wir deine personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeiten, kannst du aus Gründen, die sich aus deiner besonderen Situation ergeben, jederzeit Widerspruch gegen die Verarbeitung einlegen.` },
  { kind: "p", text: `Wir verarbeiten die betreffenden Daten dann nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die deine Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.` },
  { kind: "p", text: `Der Verarbeitung personenbezogener Daten zum Zweck der Direktwerbung kannst du jederzeit ohne Angabe von Gründen widersprechen.` },
  { kind: "h2", text: `15. Beschwerderecht` },
  { kind: "p", text: `Du hast das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren. Für die THE KNOWLEDGE HOUSE GmbH ist grundsätzlich folgende Behörde zuständig:` },
  { kind: "p", text: `Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen
Kavalleriestraße 2–4
40213 Düsseldorf` },
  { kind: "p", text: `Du kannst dich auch an eine andere zuständige Datenschutzaufsichtsbehörde wenden, insbesondere an die Behörde deines gewöhnlichen Aufenthaltsorts oder Arbeitsplatzes.` },
  { kind: "h2", text: `16. Datensicherheit` },
  { kind: "p", text: `Wir treffen geeignete technische und organisatorische Maßnahmen, um personenbezogene Daten vor Verlust, Manipulation, unbefugtem Zugriff und sonstigem Missbrauch zu schützen.` },
  { kind: "p", text: `Dabei berücksichtigen wir insbesondere Art und Umfang der verarbeiteten Daten, die Verarbeitungszwecke, den Stand der Technik, die Implementierungskosten sowie die Wahrscheinlichkeit und Schwere möglicher Risiken. Zu den Schutzmaßnahmen können insbesondere Verschlüsselung, Zugriffsbeschränkungen, Berechtigungskonzepte, Datensicherungen sowie Verfahren zur regelmäßigen Überprüfung der technischen und organisatorischen Sicherheit gehören.` },
  { kind: "h2", text: `17. Minderjährige` },
  { kind: "p", text: `AgePilot richtet sich grundsätzlich nicht an Minderjährige.` },
  { kind: "h2", text: `18. Keine medizinische Beratung` },
  { kind: "p", text: `AgePilot dient der allgemeinen Information, Selbstreflexion und Unterstützung gesundheitsfördernder Lebensgewohnheiten.` },
  { kind: "ul", items: [
      `AgePilot stellt keine medizinische Diagnose.`,
      `AgePilot erkennt oder behandelt keine Krankheiten.`,
      `AgePilot ersetzt keine ärztliche Untersuchung oder Beratung.`,
      `AgePilot gibt keine individuelle medizinische Therapieempfehlung.`,
      `AgePilot darf nicht als alleinige Grundlage für medizinische Entscheidungen verwendet werden.`
    ] },
  { kind: "p", text: `Bei gesundheitlichen Beschwerden, bestehenden Erkrankungen oder Fragen zu medizinischen Maßnahmen solltest du dich an eine Ärztin, einen Arzt oder eine andere entsprechend qualifizierte medizinische Fachperson wenden.` },
  { kind: "h2", text: `19. Änderungen dieser Datenschutzerklärung` },
  { kind: "p", text: `Wir können diese Datenschutzerklärung anpassen, wenn sich unsere Angebote, technischen Systeme oder rechtlichen Anforderungen ändern. Die jeweils aktuelle Fassung ist auf unserer Website abrufbar. Wenn eine Änderung deine Einwilligung oder eine andere aktive Mitwirkung erfordert, werden wir dich gesondert darüber informieren.` },
],
  },
};

function linkifyEmails(text: string) {
  const parts = text.split(/(info@knowledge-house\.com)/g);
  return parts.map((part, index) =>
    part === "info@knowledge-house.com" ? (
      <a
        key={index}
        href="mailto:info@knowledge-house.com"
        className="text-primary underline"
      >
        {part}
      </a>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    )
  );
}

function RichText({ text }: { text: string }) {
  if (text.includes("\n")) {
    return (
      <>
        {text.split("\n").map((line, index, arr) => (
          <Fragment key={index}>
            {linkifyEmails(line)}
            {index < arr.length - 1 ? <br /> : null}
          </Fragment>
        ))}
      </>
    );
  }
  return <>{linkifyEmails(text)}</>;
}

export default function PrivacyPage() {
  const locale = useLocale();
  const { title, blocks } = content[locale === "de" ? "de" : "en"];

  return (
    <main className="relative min-h-screen w-full bg-background">
      <section className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 pt-28 pb-24">
        <h1 className="text-4xl md:text-5xl font-medium mb-4">{title}</h1>

        <div className="prose prose-lg max-w-none text-font-primary">
          {blocks.map((block, index) => {
            if (block.kind === "h2") {
              return (
                <h2 key={index} className="mt-10 mb-4">
                  {block.text}
                </h2>
              );
            }
            if (block.kind === "h3") {
              return (
                <h3 key={index} className="mt-8 mb-3">
                  {block.text}
                </h3>
              );
            }
            if (block.kind === "ul") {
              return (
                <ul key={index} className="list-disc pl-6 space-y-1 my-4">
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <RichText text={item} />
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="my-4">
                <RichText text={block.text} />
              </p>
            );
          })}
        </div>
      </section>
    </main>
  );
}
