"use client";

import { useLocale, useTranslations } from "next-intl";

export default function DatenbestimmungenPage() {
  const locale = useLocale();
  const t = useTranslations("Legal");

  return (
    <main className="relative min-h-screen w-full bg-background">
      <section className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 pt-28 pb-24">
        {locale !== "de" && (
          <p className="mb-6 rounded-xl border border-card-border bg-card px-4 py-3 text-sm text-font-secondary">
            {t("germanOnlyNote")}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-medium mb-10">
          Datenschutzbestimmungen
        </h1>

        <div className="prose prose-lg max-w-none text-font-primary gap-2">
          Datenschutzerklärung Der Schutz deiner persönlichen Daten ist uns ein
          wichtiges Anliegen. Wir erläutern dir daher nachfolgend, welche
          personenbezogenen Daten wir im Rahmen unseres App- und
          Webseitenbetriebs verarbeiten: Vorab weisen wir auf Folgendes hin: Die
          für die Datenverarbeitung im Zusammenhang mit dem Betrieb unserer App
          verantwortliche Stelle ist die THE KNOWLEDGE HOUSE GmbH Breite Straße
          22 40213 Düsseldorf Deutschland Handelsregister: AG Wuppertal HRB
          32589 vertreten durch den Geschäftsführer Prof. Dr. Hubert
          Karl-Friedrich Trübel Du kannst dich mit deinen Anliegen jederzeit per
          E-Mail wenden an [info@knowledge-house.com]. Die Verarbeitung deiner
          personenbezogenen Daten durch uns erfolgt entweder auf Grundlage einer
          erteilten Einwilligung (Art. 6 Abs. 1 lit. a)
          Datenschutzgrundverordnung (DSGVO), zur Erfüllung eines Vertrags,
          dessen Vertragspartner du bist (Art. 6 Abs. 1 lit. b) DSGVO), zur
          Erfüllung einer rechtlichen Verpflichtung von uns (Art. 6 Abs. 1 lit.
          c) DSGVO) oder zur Wahrung unserer berechtigten Interessen (Art. 6
          Abs. 1 lit. f) DSGVO). Datenschutz Die Datenverarbeitung durch unsere
          App erfolgt durch die THE KNOWLEDGE HOUSE GmbH (im Folgenden auch
          „Betreiber“). Soweit personenbezogene Daten (beispielsweise Name,
          Anschrift oder E- Mail-Adressen) erhoben werden, erfolgt dies, soweit
          möglich, stets auf freiwilliger Basis. Diese Daten werden ohne deine
          ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen
          darauf hin, dass die Datenübertragung im Internet (z.B. bei der
          Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
          lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich. Der Nutzung von im Rahmen der Impressumspflicht
          veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht
          ausdrücklich angeforderter Werbung und Informationsmaterialien wird
          hiermit ausdrücklich widersprochen. Die Betreiber der App behalten
          sich ausdrücklich rechtliche Schritte im Falle der unverlangten
          Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor. Deine
          personenbezogenen Daten werden gelöscht, wenn der Verarbeitungszweck
          erreicht ist, es sei denn, der Löschung stehen gesetzliche
          Aufbewahrungspflichten entgegen. Andere Daten werden automatisch oder
          nach deiner Einwilligung bei Verwendung der App durch unsere
          IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
          Absturzberichte, Nutzerverhalten oder Uhrzeit der Verwendung). Die
          Erfassung dieser Daten erfolgt automatisch, sobald du unsere App auf
          deinem Smartphone installierst. Arten der verarbeiteten Daten -
          Bestandsdaten (z.B., Personen-Stammdaten, Namen oder Adressen) -
          Kontaktdaten (z.B., E-Mail-Adressen, Telefonnummern) - Inhaltsdaten
          (z.B., Texteingaben) - Nutzungsdaten (z.B., besuchte Webseiten,
          Interesse an Inhalten, Zugriffszeiten) - Meta-/Kommunikationsdaten
          (z.B., Geräte-Informationen, IP-Adressen) Kategorien betroffener
          Personen Besucher:innen und Nutzer:innen unserer App und unserer
          Webseite (im Folgenden bezeichnen wir die betroffenen Personen
          zusammenfassend auch als „Nutzer:innen“). Zweck der Verarbeitung Ein
          Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung und
          Sicherheit der App zu gewährleisten. Andere Daten können zur Analyse
          deines Nutzerverhaltens verwendet werden. Wieder andere Daten
          benötigen wir zur Bereitstellung, Durchführung und Abrechnung unserer
          Services. Verwendete Begrifflichkeiten „Personenbezogene Daten“ sind
          alle Daten, die sich auf eine identifizierte oder identifizierbare
          natürliche Person (im Folgenden „betroffene Person“) beziehen; als
          identifizierbar wird eine natürliche Person angesehen, die direkt oder
          indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem
          Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung
          (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen
          identifiziert werden kann, die Ausdruck der physischen,
          physiologischen, genetischen, psychischen, wirtschaftlichen,
          kulturellen oder sozialen Identität dieser natürlichen Person sind.
          „Verarbeitung“ ist jeder mit oder ohne Hilfe automatisierter Verfahren
          ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit
          personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch
          jeden Umgang mit Daten. „Pseudonymisierung“ ist die Verarbeitung
          personenbezogener Daten in einer Weise, dass die personenbezogenen
          Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer
          spezifischen betroffenen Person zugeordnet werden können, sofern diese
          zusätzlichen Informationen gesondert aufbewahrt werden und technischen
          und organisatorischen Maßnahmen unterliegen, die gewährleisten, dass
          die personenbezogenen Daten nicht einer identifizierten oder
          identifizierbaren natürlichen Person zugewiesen werden. „Profiling“
          ist jede Art der automatisierten Verarbeitung personenbezogener Daten,
          die darin besteht, dass diese personenbezogenen Daten verwendet
          werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche
          Person beziehen, zu bewerten, insbesondere um Aspekte bezüglich
          Arbeitsleistung, wirtschaftliche Lage, Gesundheit, persönliche
          Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder
          Ortswechsel dieser natürlichen Person zu analysieren oder
          vorherzusagen. Als „Verantwortliche:r“ wird die natürliche oder
          juristische Person, Behörde, Einrichtung oder andere Stelle, die
          allein oder gemeinsam mit anderen über die Zwecke und Mittel der
          Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.
          Ein:e „Auftragsverarbeiter:in“ ist eine natürliche oder juristische
          Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene
          Daten im Auftrag des:der Verantwortlichen verarbeitet. Maßgebliche
          Rechtsgrundlage Nach Maßgabe des Art. 13 DSGVO teilen wir dir die
          Rechtsgrundlagen unserer Datenverarbeitungen mit. Für Nutzer:innen aus
          dem Geltungsbereich der DSGVO, d. h. der EU und des EWR, gilt, sofern
          die Rechtsgrundlage in der Datenschutzerklärung nicht genannt wird,
          Folgendes: Die Rechtsgrundlagen für die Einholung von Einwilligungen
          sind Art. 6 Abs. 1 lit. a) und Art. 7 DSGVO. Die Rechtsgrundlage für
          die Verarbeitung zur Erfüllung unserer Leistungen und Durchführung
          vertraglicher Maßnahmen sowie Beantwortung von Anfragen ist Art. 6
          Abs. 1 lit. b) DSGVO. Die Rechtsgrundlage für die Verarbeitung zur
          Erfüllung unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1 lit.
          c) DSGVO. Für den Fall, dass lebenswichtige Interessen der betroffenen
          Person oder einer anderen natürlichen Person eine Verarbeitung
          personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1 lit.
          d) DSGVO als Rechtsgrundlage. Die Rechtsgrundlage für die Verarbeitung
          zur Wahrung unserer berechtigten Interessen ist Art. 6 Abs. 1 lit. f)
          DSGVO. Die Verarbeitung von Daten zu anderen Zwecken als denen, zu
          denen sie erhoben wurden, bestimmt sich nach den Vorgaben des Art 6
          Abs. 4 DSGVO. Die Verarbeitung von besonderen Kategorien von Daten
          (entsprechend Art. 9 Abs. 1 DSGVO) bestimmt sich nach den Vorgaben des
          Art. 9 Abs. 2 DSGVO. Sicherheitsmaßnahmen Wir treffen nach Maßgabe der
          gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik,
          der Implementierungskosten und der Art, des Umfangs, der Umstände und
          der Zwecke der Verarbeitung sowie der unterschiedlichen
          Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und
          Freiheiten natürlicher Personen geeignete technische und
          organisatorische Maßnahmen, um ein dem Risiko angemessenes
          Schutzniveau zu gewährleisten. Zu den Maßnahmen gehören insbesondere
          die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von
          Daten durch Kontrolle des physischen Zugangs zu den Daten, als auch
          des sie betreffenden Zugriffs, der Eingabe, Weitergabe, der Sicherung
          der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren
          eingerichtet, die eine Wahrnehmung von Betroffenenrechten, Löschung
          von Daten und Reaktion auf Gefährdung der Daten gewährleisten. Ferner
          berücksichtigen wir den Schutz personenbezogener Daten bereits bei der
          Entwicklung, bzw. Auswahl von Hardware, Software sowie Verfahren
          entsprechend dem Prinzip des Datenschutzes durch Technikgestaltung und
          durch datenschutzfreundliche Voreinstellungen. Rechte der betroffenen
          Personen Du hast das Recht, eine Bestätigung darüber zu verlangen, ob
          betreffende Daten verarbeitet werden und das Recht auf Auskunft über
          diese Daten sowie auf weitere Informationen und Kopien der Daten
          entsprechend den gesetzlichen Vorgaben. Darüber hinaus hast du
          entsprechend den gesetzlichen Vorgaben das Recht, die
          Vervollständigung der dich betreffenden Daten oder die Berichtigung
          der dich betreffenden unrichtigen Daten zu verlangen. Du hast außerdem
          das Recht, zu verlangen, dass betreffende Daten unverzüglich gelöscht
          werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine
          Einschränkung der Verarbeitung der Daten zu verlangen. Wenn du die
          Verarbeitung deiner personenbezogenen Daten eingeschränkt hast, dürfen
          diese Daten – von ihrer Speicherung abgesehen – nur mit deiner
          Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von
          Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen
          oder juristischen Person oder aus Gründen eines wichtigen öffentlichen
          Interesses der Europäischen Union oder eines Mitgliedstaats
          verarbeitet werden. Du hast das Recht, die dich betreffenden Daten,
          die du uns bereitgestellt hast, nach Maßgabe der gesetzlichen Vorgaben
          zu erhalten und deren Übermittlung an andere Verantwortliche zu
          fordern. Sofern du die direkte Übertragung der Daten an eine:n
          andere:n Verantwortliche:n verlangst, erfolgt dies nur, soweit es
          technisch machbar ist. Du hast ferner nach Maßgabe der gesetzlichen
          Vorgaben das Recht, eine Beschwerde bei der zuständigen
          Aufsichtsbehörde einzureichen. Das Beschwerderecht besteht unbeschadet
          anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
          Widerrufsrecht Wenn du eine Einwilligung zur Datenverarbeitung erteilt
          hast, kannst du diese Einwilligung jederzeit für die Zukunft
          widerrufen. Widerspruchsrecht gegen die Datenerhebung in besonderen
          Fällen sowie gegen Direktwerbung (Art. 21 DSGVO) Erfolgt die
          Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e) oder f)
          DSGVO, hast du jederzeit das Recht, aus Gründen, die sich aus deiner
          besonderen Situation ergeben, gegen die Verarbeitung deiner
          personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein
          auf diese Bestimmungen gestütztes Profiling. Die jeweilige
          Rechtsgrundlage, auf der eine Verarbeitung beruht, entnimmst du dieser
          Datenschutzerklärung. Machst du von deinem Widerspruchsrecht Gebrauch,
          werden wir deine betroffenen personenbezogenen Daten nicht mehr
          verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe
          für die Verarbeitung nachweisen, die deine Interessen, Rechte und
          Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung,
          Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art.
          21 Abs. 1 DSGVO). Werden deine personenbezogenen Daten verarbeitet, um
          Direktwerbung zu betreiben, so hast du das Recht, jederzeit
          Widerspruch gegen die Verarbeitung von dich betreffenden
          personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies
          gilt auch für das Profiling, soweit es mit solcher Direktwerbung in
          Verbindung steht. Wenn du widersprichst, werden deine
          personenbezogenen Daten anschließend nicht mehr zum Zwecke der
          Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
          Löschung von Daten Die von uns verarbeiteten Daten werden nach Maßgabe
          der gesetzlichen Vorgaben gelöscht oder in ihrer Verarbeitung
          eingeschränkt. Sofern nicht im Rahmen dieser Datenschutzerklärung
          ausdrücklich angegeben, werden die bei uns gespeicherten Daten
          gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich
          sind und der Löschung keine gesetzlichen Aufbewahrungspflichten
          entgegenstehen. Sofern die Daten nicht gelöscht werden, weil sie für
          andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren
          Verarbeitung eingeschränkt. D. h. die Daten werden gesperrt und nicht
          für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus
          handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen.
          Änderungen und Aktualisierungen der Datenschutzerklärung Wir bitten
          dich, dich regelmäßig über den Inhalt unserer Datenschutzerklärung zu
          informieren. Wir passen die Datenschutzerklärung an, sobald die
          Änderungen der von uns durchgeführten Datenverarbeitungen dies
          erforderlich machen. Wir informieren dich, sobald durch die Änderungen
          eine Mitwirkungshandlung deinerseits (z.B. Einwilligung) oder eine
          sonstige individuelle Benachrichtigung erforderlich wird.
          Geschäftsbezogene Verarbeitung Zusätzlich verarbeiten wir
          Vertragsdaten (z.B., Vertragsgegenstand, Laufzeit, Kundenkategorie)
          und Zahlungsdaten (z.B., Bankverbindung, Zahlungshistorie) unserer
          Nutzer:innen und Geschäftspartner:innen zwecks Erbringung
          vertraglicher Leistungen, Service und Kundenpflege, Marketing, Werbung
          und Marktforschung. Der Gesundheitsvorsorge dienende Leistungen Wir
          verarbeiten die Daten unserer Nutzer:innen entsprechend Art. 6 Abs. 1
          lit. b) DSGVO, um ihnen gegenüber unsere vertraglichen oder
          vorvertraglichen Leistungen zu erbringen. Die hierbei verarbeiteten
          Daten, die Art, der Umfang und der Zweck und die Erforderlichkeit
          ihrer Verarbeitung bestimmen sich nach dem zugrundeliegenden
          Vertragsverhältnis. Zu den verarbeiteten Daten gehören grundsätzlich
          Bestands- und Stammdaten der Nutzer:innen (z.B., Name, Adresse, etc.),
          als auch die Kontaktdaten (z.B., E-Mailadresse, Telefon, etc.), die
          Vertragsdaten (z.B., in Anspruch genommene Leistungen, erworbene
          Produkte, Kosten, Namen von Kontaktpersonen) und Zahlungsdaten (z.B.,
          Bankverbindung, Zahlungshistorie, etc.). Unsere App erfasst besonders
          sensible medizinische Daten, die dem Schutz der Privatsphäre unserer
          Nutzer:innen bedürfen. Zweck der Datenerfassung ist die Diagnose von
          Krankheitsbildern und Rechtsgrundlage ist das bestehende
          Vertragsverhältnis (Art. 6 Abs. 1 lit. b) DSGVO). Die erfassten
          medizinischen Daten werden ausschließlich und nur auf Wunsch des:der
          Nutzer:in ausgewählten Ernährungsberatern oder Fitnesstrainern
          (künftig: Coaches) zugänglich gemacht und werden sonst nicht an Dritte
          weitergegeben. Die Coaches erhalten deine Daten zur Erstellung der
          Ersteinschätzung sowie eines Beratungsplans sowie zur
          Rechnungserstellung im Rahmen der Abrechnung mit dir. Zahlungsdaten
          (z.B. Kreditkarten- oder Kontonummer) werden dem jeweiligen Coach
          dabei nur dann zur Verfügung gestellt, wenn die Zahlungsabwicklung
          ausnahmsweise nicht direkt über die App erfolgt. Der Coach sowie das
          behandelnde Personal im Umfeld des Coaches unterliegen der
          Schweigepflicht. Externe Zahlungsdienstleister Wir setzen externe
          Zahlungsdienstleister ein, über deren Plattformen die Nutzer:innen und
          wir Zahlungstransaktionen vornehmen können (z.B., Stripe, PayPal,
          Google Pay, Apple Pay). Im Rahmen der Erfüllung von Verträgen setzen
          wir die Zahlungsdienstleister auf Grundlage des Art. 6 Abs. 1 lit. b)
          DSGVO ein. Im Übrigen setzen wir externe Zahlungsdienstleister auf
          Grundlage unserer berechtigten Interessen gem. Art. 6 Abs. 1 lit. f)
          DSGVO ein, um unseren Nutzer:innen eine effektive und sichere
          Zahlungsmöglichkeit zu bieten. Zu den durch die Zahlungsdienstleister
          verarbeiteten Daten gehören Bestandsdaten, wie z.B. der Name und die
          Adresse, Bankdaten, wie z.B. Kontonummern oder Kreditkartennummern,
          Passwörter, TANs und Prüfsummen sowie die Vertrags-, Summen- und
          empfängerbezogenen Angaben. Die Angaben sind erforderlich, um die
          Transaktionen durchzuführen. Die eingegebenen Daten werden jedoch nur
          durch die Zahlungsdienstleister verarbeitet und bei diesen
          gespeichert. D. h. wir erhalten keine konto- oder
          kreditkartenbezogenen Informationen, sondern lediglich Informationen
          mit Bestätigung oder Negativbeauskunftung der Zahlung. Unter Umständen
          werden die Daten seitens der Zahlungsdienstleister an
          Wirtschaftsauskunfteien übermittelt. Diese Übermittlung bezweckt die
          Identitäts- und Bonitätsprüfung. Hierzu verweisen wir auf die AGB und
          Datenschutzhinweise der Zahlungsdienstleister. Für die
          Zahlungsgeschäfte gelten die Geschäftsbedingungen und die
          Datenschutzhinweise der jeweiligen Zahlungsdienstleister, welche
          innerhalb der jeweiligen Webseiten, bzw. Transaktionsapplikationen
          abrufbar sind. Wir verweisen auf diese ebenfalls zwecks weiterer
          Informationen und Geltendmachung von Widerrufs-, Auskunfts- und
          anderen Betroffenenrechten. Betriebswirtschaftliche Analysen und
          Marktforschung Um unser Geschäft wirtschaftlich betreiben und
          Markttendenzen und Wünsche der Vertragspartner:innen und Nutzer:innen
          erkennen zu können, analysieren wir die uns vorliegenden Daten zu
          Geschäftsvorgängen, Verträgen, Anfragen, etc. Wir verarbeiten dabei
          Bestandsdaten, Kommunikationsdaten, Vertragsdaten, Zahlungsdaten,
          Nutzungsdaten, Metadaten auf Grundlage des Art. 6 Abs. 1 lit. f)
          DSGVO, wobei zu den betroffenen Personen Vertragspartner:innen,
          Interessent:innen, Kund:innen, Besucher:innen und Nutzer:innen unseres
          Onlineangebotes gehören. Die Analysen erfolgen zum Zweck
          betriebswirtschaftlicher Auswertungen, des Marketings und der
          Marktforschung. Dabei können wir die Profile der registrierten
          Nutzer:innen mit Angaben, z.B. zu deren in Anspruch genommenen
          Leistungen, berücksichtigen. Die Analysen dienen uns zur Steigerung
          der Nutzerfreundlichkeit, der Optimierung unseres Angebotes und der
          Betriebswirtschaftlichkeit. Die Analysen dienen allein uns und werden
          nicht extern offenbart, sofern es sich nicht um anonyme Analysen mit
          zusammengefassten Werten handelt. Sofern diese Analysen oder Profile
          personenbezogen sind, werden sie mit Kündigung der Nutzer:innen
          gelöscht oder anonymisiert, sonst nach zwei Jahren ab Vertragsschluss.
          Im Übrigen werden die gesamtbetriebswirtschaftlichen Analysen und
          allgemeine Tendenzbestimmungen nach Möglichkeit anonym erstellt.
          Der:Die Nutzer:in erklärt sich damit einverstanden, dass die von
          ihm:ihr im Rahmen der Nutzung der App bereitgestellten und generierten
          personenbezogenen Daten von der THE KNOWLEDGE HOUSE GmbH in
          anonymisierter oder pseudonymisierter Form für wissenschaftliche
          Zwecke verwendet werden dürfen. Vor der Nutzung zu wissenschaftlichen
          Zwecken werden die personenbezogenen Daten entweder anonymisiert,
          sodass eine Identifizierung der betroffenen Person ausgeschlossen ist,
          oder pseudonymisiert, wobei technische und organisatorische Maßnahmen
          ergriffen werden, um die Rückführung auf die betroffene Person zu
          verhindern (vgl. auch § 27 BDSG). Der:Die Nutzer:in kann die
          Einwilligung zur Nutzung seiner:ihrer personenbezogenen Daten für
          wissenschaftliche Zwecke jederzeit mit Wirkung für die Zukunft
          widerrufen. Ein Widerruf berührt nicht die Rechtmäßigkeit der bis zum
          Zeitpunkt des Widerrufs erfolgten Datenverarbeitung. Die zu
          wissenschaftlichen Zwecken genutzten Daten werden nicht an Dritte
          weitergegeben, es sei denn, dies ist gesetzlich vorgeschrieben oder
          der:die Nutzer:in hat ausdrücklich in die Weitergabe eingewilligt.
          Kontaktaufnahme Bei der Kontaktaufnahme mit uns (z.B. per
          Kontaktformular, E-Mail, Telefon oder via sozialer Medien) werden die
          Angaben des:der Nutzer:in zur Bearbeitung der Kontaktanfrage und deren
          Abwicklung gem. Art. 6 Abs. 1 lit. b. (im Rahmen
          vertraglicher-/vorvertraglicher Beziehungen), Art. 6 Abs. 1 lit. f.
          (andere Anfragen) DSGVO verarbeitet. Die Angaben der Nutzer:innen
          können in einem Customer-Relationship- Management System (&quot;CRM
          System&quot;) oder vergleichbaren Anfragenorganisation gespeichert
          werden. Wir löschen die Anfragen, sofern diese nicht mehr erforderlich
          sind. Zwingende gesetzliche Bestimmungen - insbesondere
          Aufbewahrungsfristen - bleiben unberührt. Newsletter Mit den
          nachfolgenden Hinweisen informieren wir dich über die Inhalte unseres
          Newsletters sowie das Anmelde-, Versand- und das statistische
          Auswertungsverfahren sowie deine Widerspruchsrechte. Indem du unseren
          Newsletter abonnierst, erklärst du dich mit dem Empfang und den
          beschriebenen Verfahren einverstanden. Inhalt des Newsletters: Wir
          versenden Newsletter, E-Mails und weitere elektronische
          Benachrichtigungen mit werblichen Informationen (nachfolgend
          „Newsletter“) nur mit der Einwilligung der Empfänger:innen oder einer
          gesetzlichen Erlaubnis. Sofern im Rahmen einer Anmeldung zum
          Newsletter dessen Inhalte konkret umschrieben werden, sind sie für die
          Einwilligung der Nutzer:in maßgeblich. Im Übrigen enthalten unsere
          Newsletter Informationen zu unseren Leistungen und uns. Double-Opt-In
          und Protokollierung: Die Anmeldung zu unserem Newsletter erfolgt in
          einem sog. Double- Opt-In-Verfahren. D. h. du erhältst nach der
          Anmeldung eine E-Mail, in der du um die Bestätigung deiner Anmeldung
          gebeten wirst. Diese Bestätigung ist notwendig, damit sich niemand mit
          fremden E- Mailadressen anmelden kann. Die Anmeldungen zum Newsletter
          werden protokolliert, um den Anmeldeprozess entsprechend den
          rechtlichen Anforderungen nachweisen zu können. Hierzu gehört die
          Speicherung des Anmelde- und des Bestätigungszeitpunkts, als auch der
          IP-Adresse. Ebenso werden die Änderungen deiner bei dem
          Versanddienstleister gespeicherten Daten protokolliert. Anmeldedaten:
          Um sich für den Newsletter anzumelden, reicht es aus, wenn du deine
          E-Mail-Adresse angibst. Optional bitten wir dich, einen Namen zwecks
          persönlicher Ansprache im Newsletter anzugeben. Der Versand des
          Newsletters und die mit ihm verbundene Erfolgsmessung erfolgen auf
          Grundlage einer Einwilligung der Empfänger:innen gem. Art. 6 Abs. 1
          lit. a), Art. 7 DSGVO i. V. m § 7 Abs. 2 Nr. 3 UWG oder, falls eine
          Einwilligung nicht erforderlich ist, auf Grundlage unserer
          berechtigten Interessen am Direktmarketing gem. Art. 6 Abs. 1 lit. f)
          DSGVO i. V. m. § 7 Abs. 3 UWG. Die Protokollierung des
          Anmeldeverfahrens erfolgt auf Grundlage unserer berechtigten
          Interessen gem. Art. 6 Abs. 1 lit. f) DSGVO. Unser Interesse richtet
          sich auf den Einsatz eines nutzerfreundlichen sowie sicheren
          Newslettersystems, das sowohl unseren geschäftlichen Interessen dient,
          als auch den Erwartungen der Nutzer:innen entspricht und uns ferner
          den Nachweis von Einwilligungen erlaubt. Kündigung/Widerruf: Du kannst
          den Empfang unseres Newsletters jederzeit kündigen, d. h. deine
          Einwilligungen widerrufen. Einen Link zur Kündigung des Newsletters
          findest du am Ende eines jeden Newsletters. Wir können die
          ausgetragenen E-Mailadressen bis zu drei Jahren auf Grundlage unserer
          berechtigten Interessen speichern, bevor wir sie löschen, um eine
          ehemals gegebene Einwilligung nachweisen zu können. Die Verarbeitung
          dieser Daten wird auf den Zweck einer möglichen Abwehr von Ansprüchen
          beschränkt. Ein individueller Löschungsantrag ist jederzeit möglich,
          sofern zugleich das ehemalige Bestehen einer Einwilligung bestätigt
          wird. Newsletter – Erfolgsmessung Die Newsletter enthalten einen sog.
          „Web-Beacon“, d. h. eine pixelgroße Datei, die beim Öffnen des
          Newsletters von unserem Server, bzw. sofern wir einen
          Versanddienstleister einsetzen, von dessen Server abgerufen wird. Im
          Rahmen dieses Abrufs werden zunächst technische Informationen, wie
          Informationen zum Browser und deinem System, als auch deine IP-Adresse
          und Zeitpunkt des Abrufs erhoben. Diese Informationen werden zur
          technischen Verbesserung der Services anhand der technischen Daten
          oder der Zielgruppen und ihres Leseverhaltens anhand derer Abruforte
          (die mit Hilfe der IP-Adresse bestimmbar sind) oder der Zugriffszeiten
          genutzt. Zu den statistischen Erhebungen gehört ebenfalls die
          Feststellung, ob die Newsletter geöffnet werden, wann sie geöffnet
          werden und welche Links geklickt werden. Diese Informationen können
          aus technischen Gründen zwar den einzelnen Newsletterempfänger:innen
          zugeordnet werden. Es ist jedoch weder unser Bestreben noch, sofern
          eingesetzt, das des Versanddienstleisters, einzelne Nutzer:innen zu
          beobachten. Die Auswertungen dienen uns viel mehr dazu, die
          Lesegewohnheiten unserer Nutzer:innen zu erkennen und unsere Inhalte
          auf sie anzupassen oder unterschiedliche Inhalte entsprechend den
          Interessen unserer Nutzer:innen zu versenden. Ein getrennter Widerruf
          der Erfolgsmessung ist leider nicht möglich, in diesem Fall muss das
          gesamte Newsletterabonnement gekündigt werden. Google Analytics Wir
          setzen auf Grundlage unserer berechtigten Interessen (d. h. Interesse
          an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres
          Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f) DSGVO) Google
          Analytics, einen Webanalysedienst der Google LLC („Google“) ein.
          Google verwendet Cookies. Die durch das Cookie erzeugten Informationen
          über Benutzung des Onlineangebotes durch die Nutzer:innen werden in
          der Regel an einen Server von Google in den USA übertragen und dort
          gespeichert. Mit Google LLC besteht eine Vereinbarung über eine
          Auftragsverarbeitung und die EU- Standarddatenschutzklauseln
          (https://policies.google.com/privacy/frameworks?hl=de). Google wird
          diese Informationen in unserem Auftrag benutzen, um die Nutzung
          unseres Onlineangebotes durch die Nutzer:innen auszuwerten, um Reports
          über die Aktivitäten innerhalb dieses Onlineangebotes
          zusammenzustellen und um weitere, mit der Nutzung dieses
          Onlineangebotes und der Internetnutzung verbundene Dienstleistungen,
          uns gegenüber zu erbringen. Dabei können aus den verarbeiteten Daten
          pseudonyme Nutzungsprofile der Nutzer:innen erstellt werden. Wir
          setzen Google Analytics in der Ausgestaltung als „Google Analytics 4“
          ein. Bei Google Analytics 4 ist die Anonymisierung von IP-Adressen
          standardmäßig aktiviert. Aufgrund der IP-Anonymisierung wird die
          IP-Adresse der Nutzer:innen von Google innerhalb von Mitgliedstaaten
          der Europäischen Union oder in anderen Vertragsstaaten des Abkommens
          über den Europäischen Wirtschaftsraum gekürzt. Nur in Ausnahmefällen
          wird die volle IP-Adresse an einen Server von Google in den USA
          übertragen und dort gekürzt. Die von dem Browser des:der Nutzer:in
          übermittelte IP-Adresse wird nicht mit anderen Daten von Google
          zusammengeführt. Die Nutzer:innen können die Speicherung der Cookies
          durch eine entsprechende Einstellung ihrer Browser-Software
          verhindern; die Nutzer:innen können darüber hinaus die Erfassung der
          durch das Cookie erzeugten und auf ihre Nutzung des Onlineangebotes
          bezogenen Daten an Google sowie die Verarbeitung dieser Daten durch
          Google verhindern, indem sie das unter folgendem Link verfügbare
          Browser-Plugin herunterladen und installieren:
          http://tools.google.com/dlpage/gaoptout?hl=de. Weitere Informationen
          zur Datennutzung durch Google, Einstellungs- und
          Widerspruchsmöglichkeiten, erfährst du in der Datenschutzerklärung von
          Google (https://policies.google.com/technologies/ads) sowie in den
          Einstellungen für die Darstellung von Werbeeinblendungen durch Google
          (https://adssettings.google.com/authenticated). Die personenbezogenen
          Daten der Nutzer werden nach 14 Monaten gelöscht oder anonymisiert.
          Google Adwords und Conversion-Messung Wir nutzen auf Grundlage unserer
          berechtigten Interessen (d. h. Interesse an der Analyse, Optimierung
          und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art.
          6 Abs. 1 lit. f) DSGVO) die Dienste der Google LLC, 1600 Amphitheatre
          Parkway, Mountain View, CA 94043, USA, („Google“). Mit Google besteht
          eine Vereinbarung über eine Auftragsverarbeitung und die EU-
          Standarddatenschutzklauseln
          (https://policies.google.com/privacy/frameworks?hl=de). Wir nutzen das
          Onlinemarketingverfahren Google &quot;Ads&quot;, um Anzeigen im
          Google-Werbe-Netzwerk zu platzieren (z.B., in Suchergebnissen, in
          Videos, auf Webseiten, etc.), damit sie Nutzer:innen angezeigt werden,
          die ein mutmaßliches Interesse an den Anzeigen haben. Dies erlaubt uns
          Anzeigen für und innerhalb unseres Onlineangebotes gezielter
          anzuzeigen, um Nutzer:innen nur Anzeigen zu präsentieren, die
          potentiell deren Interessen entsprechen. Falls einem:einer Nutzer:in
          z.B. Anzeigen für Produkte angezeigt werden, für die er:sie sich auf
          anderen Onlineangeboten interessiert hat, spricht man hierbei vom
          „Remarketing“. Zu diesen Zwecken wird bei Aufruf unserer und anderer
          Webseiten, auf denen das Google-Werbe-Netzwerk aktiv ist, unmittelbar
          durch Google ein Code von Google ausgeführt und es werden sog.
          (Re)marketing-Tags (unsichtbare Grafiken oder Code, auch als „Web
          Beacons“ bezeichnet) in die Webseite eingebunden. Mit deren Hilfe wird
          auf dem Gerät der Nutzer:innen ein individuelles Cookie, d. h. eine
          kleine Datei abgespeichert (statt Cookies können auch vergleichbare
          Technologien verwendet werden). In dieser Datei wird vermerkt, welche
          Webseiten der:die Nutzer:in aufgesucht, für welche Inhalte er:sie sich
          interessiert und welche Angebote er:sie geklickt hat, ferner
          technische Informationen zum Browser und Betriebssystem, verweisende
          Webseiten, Besuchszeit sowie weitere Angaben zur Nutzung des
          Onlineangebotes. Ferner erhalten wir ein individuelles
          „Conversion-Cookie“. Die mit Hilfe des Cookies eingeholten
          Informationen dienen Google dazu, Conversion-Statistiken für uns zu
          erstellen. Wir erfahren jedoch nur die anonyme Gesamtanzahl der
          Nutzer:innen, die auf unsere Anzeige geklickt haben und zu einer mit
          einem Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden.
          Wir erhalten jedoch keine Informationen, mit denen sich Nutzer:innen
          persönlich identifizieren lassen. Die Daten der Nutzer:innen werden im
          Rahmen des Google-Werbe-Netzwerks pseudonym verarbeitet. D. h. Google
          speichert und verarbeitet z.B. nicht den Namen oder E-Mailadresse der
          Nutzer:innen, sondern verarbeitet die relevanten Daten cookie-bezogen
          innerhalb pseudonymer Nutzerprofile. D. h. aus der Sicht von Google
          werden die Anzeigen nicht für eine konkret identifizierte Person
          verwaltet und angezeigt, sondern für den Cookie-Inhaber, unabhängig
          davon wer dieser Cookie-Inhaber ist. Dies gilt nicht, wenn ein:e
          Nutzer:in Google ausdrücklich erlaubt hat, die Daten ohne diese
          Pseudonymisierung zu verarbeiten. Die über die Nutzer:innen
          gesammelten Informationen werden an Google übermittelt und auf Googles
          Servern in den USA gespeichert. Weitere Informationen zur Datennutzung
          durch Google, Einstellungs- und Widerspruchsmöglichkeiten erfährst du
          in der Datenschutzerklärung von Google
          (https://policies.google.com/technologies/ads) sowie in den
          Einstellungen für die Darstellung von Werbeeinblendungen durch Google
          (https://adssettings.google.com/authenticated). Facebook-Pixel
          Innerhalb unseres Onlineangebotes wird aufgrund unserer berechtigten
          Interessen an Analyse, Optimierung und wirtschaftlichem Betrieb
          unseres Onlineangebotes und zu diesen Zwecken das sog.
          „Facebook-Pixel“ des sozialen Netzwerkes Facebook, welches von der
          Meta Inc., 1 Hacker Way, Menlo Park, CA 94025, USA, bzw. falls
          Nutzer:innen in der EU ansässig sind, Meta Platforms Ireland Limited,
          Merrion Road, Dublin 4, D04 X2K5, Irland betrieben wird („Facebook“),
          eingesetzt. Mit Facebook besteht eine Vereinbarung über eine
          Auftragsverarbeitung und die EU- Standarddatenschutzklauseln
          (https://de-de.facebook.com/business/gdpr). Mit Hilfe des
          Facebook-Pixels ist es Facebook zum einen möglich, die Besucher:innen
          unseres Onlineangebotes als Zielgruppe für die Darstellung von
          Anzeigen (sog. &quot;Facebook-Ads&quot;) zu bestimmen. Dementsprechend
          setzen wir das Facebook-Pixel ein, um die durch uns geschalteten
          Facebook-Ads nur solchen Facebook-Nutzer:innen anzuzeigen, die auch
          ein Interesse an unserem Onlineangebot gezeigt haben oder die
          bestimmte Merkmale (z.B. Interessen an bestimmten Themen oder
          Produkten, die anhand der besuchten Webseiten bestimmt werden)
          aufweisen, die wir an Facebook übermitteln (sog. „Custom Audiences“).
          Mit Hilfe des Facebook-Pixels möchten wir auch sicherstellen, dass
          unsere Facebook-Ads dem potentiellen Interesse der Nutzer:innen
          entsprechen und nicht belästigend wirken. Mit Hilfe des
          Facebook-Pixels können wir ferner die Wirksamkeit der
          Facebook-Werbeanzeigen für statistische und Marktforschungszwecke
          nachvollziehen, in dem wir sehen, ob Nutzer:innen nach dem Klick auf
          eine Facebook-Werbeanzeige auf unsere Website weitergeleitet wurden
          (sog. „Conversion“). Die Verarbeitung der Daten durch Facebook erfolgt
          im Rahmen von Facebooks Datenverwendungsrichtlinie. Dementsprechend
          generelle Hinweise zur Darstellung von Facebook-Ads finden sich in der
          Datenverwendungsrichtlinie von Facebook:
          https://www.facebook.com/policy. Spezielle Informationen und Details
          zum Facebook-Pixel und seiner Funktionsweise erhältst du im
          Hilfebereich von Facebook:
          https://www.facebook.com/business/help/651294705016616. Du kannst der
          Erfassung durch den Facebook-Pixel und Verwendung deiner Daten zur
          Darstellung von Facebook-Ads widersprechen. Um einzustellen, welche
          Arten von Werbeanzeigen dir innerhalb von Facebook angezeigt werden,
          kannst du die von Facebook eingerichtete Seite aufrufen und dort die
          Hinweise zu den Einstellungen nutzungsbasierter Werbung befolgen:
          https://www.facebook.com/settings?tab=ads. Die Einstellungen erfolgen
          plattformunabhängig, d. h. sie werden für alle Geräte, wie
          Desktopcomputer oder mobile Geräte, übernommen. Du kannst dem Einsatz
          von Cookies, die der Reichweitenmessung und Werbezwecken dienen,
          ferner über die Deaktivierungsseite der Netzwerkwerbeinitiative
          (http://optout.networkadvertising.org/) und zusätzlich die
          US-amerikanische Webseite (http://www.aboutads.info/choices) oder die
          europäische Webseite
          (http://www.youronlinechoices.com/uk/your-ad-choices/) widersprechen.
          Verwendung von Facebook Plugins Wir nutzen auf Grundlage unserer
          berechtigten Interessen (d. h. Interesse an der Analyse, Optimierung
          und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art.
          6 Abs. 1 lit. f) DSGVO) Social Plugins („Plugins“) des sozialen
          Netzwerkes facebook.com, welches von der Facebook Ireland Ltd., 4
          Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland betrieben
          wird („Facebook“). Hierzu können z.B. Inhalte wie Bilder, Videos oder
          Texte und Schaltflächen gehören, mit denen Nutzer:innen Inhalte dieses
          Onlineangebotes innerhalb von Facebook teilen können. Die Liste und
          das Aussehen der Facebook Social Plugins kann hier eingesehen werden:
          https://developers.facebook.com/docs/plugins/. Mit Facebook Inc.
          Besteht eine Vereinbarung über eine Auftragsverarbeitung und die EU-
          Standarddatenschutzklauseln
          (https://de-de.facebook.com/business/gdpr). Wenn ein:e Nutzer:in eine
          Funktion dieses Onlineangebotes aufruft, die ein solches Plugin
          enthält, baut sein:ihr Gerät eine direkte Verbindung mit den Servern
          von Facebook auf. Der Inhalt des Plugins wird von Facebook direkt an
          das Gerät des:der Nutzer:in übermittelt und von diesem in das
          Onlineangebot eingebunden. Dabei können aus den verarbeiteten Daten
          Nutzungsprofile der Nutzer:innen erstellt werden. Wir haben daher
          keinen Einfluss auf den Umfang der Daten, die Facebook mit Hilfe
          dieses Plugins erhebt und informiert die Nutzer:innen daher
          entsprechend unserem Kenntnisstand. Durch die Einbindung der Plugins
          erhält Facebook die Information, dass ein:e Nutzer:in die
          entsprechende Seite des Onlineangebotes aufgerufen hat. Ist der:die
          Nutzer:in bei Facebook eingeloggt, kann Facebook den Besuch
          seinem:ihrem Facebook-Konto zuordnen. Wenn Nutzer:innen mit den
          Plugins interagieren, zum Beispiel den Like Button betätigen oder
          einen Kommentar abgeben, wird die entsprechende Information von
          seinem:ihrem Gerät direkt an Facebook übermittelt und dort
          gespeichert. Falls ein:e Nutzer:in kein Mitglied von Facebook ist,
          besteht trotzdem die Möglichkeit, dass Facebook seine:ihre IP- Adresse
          in Erfahrung bringt und speichert. Laut Facebook wird in Deutschland
          nur eine anonymisierte IP- Adresse gespeichert. Zweck und Umfang der
          Datenerhebung und die weitere Verarbeitung und Nutzung der Daten durch
          Facebook sowie die diesbezüglichen Rechte und
          Einstellungsmöglichkeiten zum Schutz der Privatsphäre der Nutzer:innen
          können diese den Datenschutzhinweisen von Facebook entnehmen:
          https://www.facebook.com/about/privacy/. Wenn ein:e Nutzer:in
          Facebookmitglied ist und nicht möchte, dass Facebook über dieses
          Onlineangebot Daten über ihn:sie sammelt und mit seinen:ihren bei
          Facebook gespeicherten Mitgliedsdaten verknüpft, muss er:sie sich vor
          der Nutzung unseres Onlineangebotes bei Facebook ausloggen und
          seine:ihre Cookies löschen. Weitere Einstellungen und Widersprüche zur
          Nutzung von Daten für Werbezwecke, sind innerhalb der
          Facebook-Profileinstellungen möglich:
          https://www.facebook.com/settings?tab=ads oder über die
          US-amerikanische Seite http://www.aboutads.info/choices/ oder die
          EU-Seite http://www.youronlinechoices.com/. Die Einstellungen erfolgen
          plattformunabhängig, d. h. sie werden für alle Geräte, wie
          Desktopcomputer oder mobile Geräte übernommen. Einbindung von Diensten
          und Inhalten Dritter Wir setzen innerhalb unseres Onlineangebotes auf
          Grundlage unserer berechtigten Interessen (d. h. Interesse an der
          Analyse, Optimierung und wirtschaftlichem Betrieb unseres
          Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f) DSGVO) Inhalts-
          oder Serviceangebote von Drittanbietern ein, um deren Inhalte und
          Services, wie z.B. Videos oder Schriftarten einzubinden (nachfolgend
          einheitlich bezeichnet als „Inhalte“). Dies setzt immer voraus, dass
          die Drittanbieter dieser Inhalte die IP-Adresse der Nutzer:innen
          wahrnehmen, da sie ohne die IP-Adresse die Inhalte nicht an deren
          Browser senden könnten. Die IP- Adresse ist damit für die Darstellung
          dieser Inhalte erforderlich. Wir bemühen uns, nur solche Inhalte zu
          verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur
          Auslieferung der Inhalte verwenden. Drittanbieter können ferner so
          genannte Pixel-Tags (unsichtbare Grafiken, auch als „Web Beacons“
          bezeichnet) für statistische oder Marketingzwecke verwenden. Durch die
          „Pixel-Tags“ können Informationen wie der Besucherverkehr auf den
          Seiten dieser Website ausgewertet werden. Die pseudonymen
          Informationen können ferner in Cookies auf dem Gerät der Nutzer:innen
          gespeichert werden und unter anderem technische Informationen zum
          Browser und Betriebssystem, verweisende Webseiten, Besuchszeit sowie
          weitere Angaben zur Nutzung unseres Onlineangebotes enthalten, als
          auch mit solchen Informationen aus anderen Quellen verbunden werden.
          Datenverarbeitung durch soziale Netzwerke Wir unterhalten öffentlich
          zugängliche Profile in sozialen Netzwerken. Die im Einzelnen von uns
          genutzten sozialen Netzwerke findest du weiter unten. Unsere
          Social-Media-Auftritte sollen eine möglichst umfassende Präsenz im
          Internet gewährleisten. Hierbei handelt es sich um ein berechtigtes
          Interesse im Sinne von Art. 6 Abs. 1 lit. f) DSGVO. Die von den
          sozialen Netzwerken initiierten Analyseprozesse beruhen ggf. auf
          abweichenden Rechtsgrundlagen, die von den Betreibern der sozialen
          Netzwerke anzugeben sind (z.B. Einwilligung im Sinne des Art. 6 Abs. 1
          lit. a) DSGVO). Soziale Netzwerke wie Facebook, Twitter etc. können
          dein Nutzerverhalten in der Regel umfassend analysieren, wenn du deren
          Website oder eine Website mit integrierten Social-Media-Inhalten (z.B.
          Like- Buttons oder Werbebannern) besuchst. Durch den Besuch unserer
          Social-Media-Präsenzen werden zahlreiche datenschutzrelevante
          Verarbeitungsvorgänge ausgelöst. Im Einzelnen: Wenn du in deinem
          Social-Media-Account eingeloggt bist und unsere Social-Media-Präsenz
          besuchst, kann der:die Betreiber:in des Social-Media-Portals diesen
          Besuch deinem Benutzerkonto zuordnen. Deine personenbezogenen Daten
          können unter Umständen aber auch dann erfasst werden, wenn du nicht
          eingeloggt bist oder keinen Account beim jeweiligen
          Social-Media-Portal besitzt. Diese Datenerfassung erfolgt in diesem
          Fall beispielsweise über Cookies, die auf deinem Endgerät gespeichert
          werden oder durch Erfassung deiner IP-Adresse. Mit Hilfe der so
          erfassten Daten können die Betreiber:innen der Social-Media-Portale
          Nutzerprofile erstellen, in denen deine Präferenzen und Interessen
          hinterlegt sind. Auf diese Weise kann dir interessenbezogene Werbung
          in- und außerhalb der jeweiligen Social-Media-Präsenz angezeigt
          werden. Sofern du über einen Account beim jeweiligen sozialen Netzwerk
          verfügst, kann die interessenbezogene Werbung auf allen Geräten
          angezeigt werden, auf denen du eingeloggt bist oder eingeloggt warst.
          Bitte beachte außerdem, dass wir nicht alle Verarbeitungsprozesse auf
          den Social-Media-Portalen nachvollziehen können. Je nach Anbieter:in
          können daher ggf. weitere Verarbeitungsvorgänge von den
          Betreiber:innen der Social-Media-Portale durchgeführt werden. Details
          hierzu entnimmst du den Nutzungsbedingungen und
          Datenschutzbestimmungen der jeweiligen Social-Media-Portale.
          Verantwortlichkeit und Geltendmachung von Rechten Wenn du einen
          unserer Social-Media-Auftritte (z.B. Facebook) besuchst, sind wir
          gemeinsam mit dem:der Betreiber:in der Social-Media-Plattform für die
          bei diesem Besuch ausgelösten Datenverarbeitungsvorgänge
          verantwortlich. Du kannst deine Rechte (Auskunft, Berichtigung,
          Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und
          Beschwerde) grundsätzlich sowohl ggü. uns als auch ggü. dem Betreiber
          des jeweiligen Social-Media-Portals (z.B. ggü. Facebook) geltend
          machen. Bitte beachte, dass wir trotz der gemeinsamen
          Verantwortlichkeit mit den Social-Media-Portal-Betreibern nicht
          vollumfänglich Einfluss auf die Datenverarbeitungsvorgänge der
          Social-Media-Portale haben. Unsere Möglichkeiten richten sich
          maßgeblich nach der Unternehmenspolitik der jeweiligen Anbieter:innen.
          * * * * * * *
        </div>
      </section>
    </main>
  );
}
