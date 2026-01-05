import { Card, CardGrid } from "@/components/Card";
import { Section, SectionHeader } from "@/components/Section";

export const metadata = {
  title: "V3S - Contact",
  description: "Kontakt für Security-Programme, Intelligence und Support.",
};

export default function Contact() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Kontakt"
          title="Security Briefings, Support und Partnerschaften."
          subtitle="Teilen Sie uns Ihre Mission, Ihre Compliance-Anforderungen oder Ihre aktuelle Bedrohungslage mit. Wir reagieren schnell und vertraulich."
          as="h1"
        />
        <CardGrid>
          <Card>
            <h3>Security Briefing</h3>
            <p>
              Strategische Beratung, Bedrohungsanalyse und Programmplanung für öffentliche Auftraggeber und
              kritische Infrastruktur.
            </p>
            <a className="button" href="mailto:briefing@v3s.tech">
              briefing@v3s.tech
            </a>
          </Card>
          <Card>
            <h3>Produkt &amp; Enterprise</h3>
            <p>
              Beratung für Unternehmen, Produktteams und private Sicherheitsprogramme. Wir liefern Auditability
              und Security-by-Design.
            </p>
            <a className="button secondary" href="mailto:info@v3s.tech">
              info@v3s.tech
            </a>
          </Card>
          <Card>
            <h3>Support</h3>
            <p>
              Technischer Support für laufende Sicherheitsprogramme, Incident Response und Produkt-Implementierungen.
            </p>
            <a className="button secondary" href="mailto:support@v3s.tech">
              support@v3s.tech
            </a>
          </Card>
        </CardGrid>
      </Section>

      <Section className="callout">
        <SectionHeader
          eyebrow="Standort"
          title="Europaweit, souverän, diskret."
          subtitle="Unsere Teams arbeiten verteilt in Deutschland und der DACH-Region und erfüllen Anforderungen an Datenschutz, Vertraulichkeit und regulatorische Standards."
        />
        <p className="footer-note">
          Hinweis: Vertrauliche Informationen bitte ausschließlich über gesicherte Kanäle teilen. Auf Anfrage richten wir
          verschlüsselte Kommunikationswege ein.
        </p>
      </Section>
    </main>
  );
}
