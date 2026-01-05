import { Card, CardGrid } from "@/components/Card";
import { Section, SectionHeader } from "@/components/Section";

export const metadata = {
  title: "V3S - Public Sector & Defense",
  description: "Threat Intelligence, Prevention und operative Verteidigung für Behörden und kritische Infrastruktur.",
};

export default function CyberSecurityPage() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Public Sector & Defense"
          title="Threat Intelligence und Prävention für staatliche Missionen."
          subtitle="V3S unterstützt Behörden, CERTs und kritische Infrastruktur mit Lagebildern, präventiver Abwehr und operativer Cyber-Defense. Unser Fokus liegt auf verlässlichen Daten, klaren Playbooks und belastbarer Response."
          as="h1"
        />
        <CardGrid>
          <Card>
            <h3>Strategic Threat Intelligence</h3>
            <p>
              Analyse von APT-Kampagnen, geopolitischen Risiken und Lieferketten. Wir liefern handlungsfähige Erkenntnisse
              für politische Entscheidungsträger und SOCs.
            </p>
          </Card>
          <Card>
            <h3>National Critical Infrastructure</h3>
            <p>
              Schutz von OT-Umgebungen, Leitstellen und staatlichen Plattformen. Inklusive Hardening, Risiko-Reviews
              und kontinuierlichem Exposure-Management.
            </p>
          </Card>
          <Card>
            <h3>Prevention &amp; Countermeasures</h3>
            <p>
              Verteidigungsarchitekturen, die Angriffsflächen reduzieren und Bedrohungen frühzeitig neutralisieren.
              Fokus auf Prävention statt Incident-Folgearbeit.
            </p>
          </Card>
        </CardGrid>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Operational Support"
          title="Ein gemeinsames Lagebild in Echtzeit"
          subtitle="Unsere Plattform verbindet Intelligence, Detection, Response und Kommunikation in einem konsolidierten Security Command."
        />
        <div className="split">
          <Card>
            <h3>Mission Control</h3>
            <p>
              24/7 Koordination, Incident Response und Forensik für nationale Incident-Teams. Mit klaren Eskalationen,
              standardisierten Prozessen und Compliance-Reporting.
            </p>
          </Card>
          <Card>
            <h3>Data Fusion</h3>
            <p>
              Aggregation von OSINT, HUMINT, Sensor- und Partnerdaten. Wir strukturieren und priorisieren Signale
              für schnelle Lageentscheidungen.
            </p>
          </Card>
        </div>
      </Section>

      <Section className="callout">
        <SectionHeader
          eyebrow="Briefing"
          title="Bereit für abgestufte Sicherheitsprogramme?"
          subtitle="Wir liefern Confidential-Ready Roadmaps, abgestimmte Response-Prozesse und sichere Produktentwicklung für staatliche Auftraggeber."
        />
        <a className="button" href="/contact">
          Vertrauliches Gespräch anfragen
        </a>
      </Section>
    </main>
  );
}
