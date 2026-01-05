import Link from "next/link";
import { Card, CardGrid } from "@/components/Card";
import { Section, SectionHeader } from "@/components/Section";
import { TagList } from "@/components/Tag";

export const metadata = {
  title: "V3S - Cyber Security",
  description: "Cyber Defense für Unternehmen, Privatpersonen und öffentliche Auftraggeber.",
};

export default function Home() {
  return (
    <main>
      <Section className="hero">
        <div className="section-header">
          <p className="eyebrow">V3S Cyber Security</p>
          <h1>Vertrauenswürdige Cyber Security für private und staatliche Missionen.</h1>
          <p className="section-subtitle">
            Wir vereinen Passwort-Safes, digitale Identität und Zero-Trust-Engineering mit Threat Intelligence,
            Prävention und operativer Verteidigung für kritische Infrastrukturen.
          </p>
          <div className="tag-list">
            <span className="tag">SOC &amp; Incident Response</span>
            <span className="tag">Threat Intelligence</span>
            <span className="tag">Secure Products</span>
            <span className="tag">Public Sector Ready</span>
          </div>
          <div className="split">
            <Link className="button" href="/contact">
              Security Briefing anfragen
            </Link>
            <Link className="button secondary" href="/cybersecurity">
              Public Sector Portfolio
            </Link>
          </div>
        </div>
        <div className="hero-panel">
          <h3>Operational Readiness</h3>
          <p>
            Von der Endnutzer-Sicherheit bis zur strategischen Bedrohungsabwehr liefern wir belastbare Programme,
            die Compliance, Lagebild und Response verbinden.
          </p>
          <div className="hero-metrics">
            <div className="metric">
              <span>Coverage</span>
              <strong>Cloud • Endpoint • Identity</strong>
            </div>
            <div className="metric">
              <span>Intelligence</span>
              <strong>APT Mapping &amp; Geopolitics</strong>
            </div>
            <div className="metric">
              <span>Availability</span>
              <strong>24/7 Security Command</strong>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Portfolio"
          title="Sicherheitsschichten für den privaten und den öffentlichen Sektor"
          subtitle="Unsere Teams liefern Produkte und Services, die sich vom Passwort-Safe bis zur nationalen Bedrohungsabwehr skalieren lassen."
        />
        <CardGrid>
          <Card>
            <h3>Private Sector Security</h3>
            <p>
              Produktnahe Sicherheit für Unternehmen und Endkunden: Passwort-Safes, sichere Identitäten, verschlüsselte Kommunikation
              und sichere Software-Lieferketten.
            </p>
            <TagList items={["Password Safes", "Secure Access", "Product Hardening", "Secure UX"]} />
            <Link className="button secondary" href="/personal">
              Private Portfolio
            </Link>
          </Card>
          <Card>
            <h3>Public Sector &amp; Defense</h3>
            <p>
              Strategische Threat Intelligence, präventive Abwehrkonzepte und operative Response für öffentliche Auftraggeber,
              Regierungsstellen und kritische Infrastruktur.
            </p>
            <TagList items={["Threat Intel", "Prevention", "Critical Infrastructure", "Sovereign Ops"]} />
            <Link className="button secondary" href="/cybersecurity">
              Public Portfolio
            </Link>
          </Card>
        </CardGrid>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Capabilities"
          title="Ein Security Stack, der alles verbindet"
          subtitle="Modular, auditierbar und bereit für regulierte Umgebungen."
        />
        <CardGrid>
          <Card>
            <h3>Threat Intelligence Fusion</h3>
            <p>
              Analyse von APTs, geopolitischen Risiken und Supply-Chain-Signalen. Wir liefern handlungsfähige Lagebilder
              für strategische Entscheider.
            </p>
          </Card>
          <Card>
            <h3>Prevention Engineering</h3>
            <p>
              Zero-Trust-Architektur, Hardening und kontinuierliche Exposure-Reduktion. Fokus auf Systemsicherheit
              statt auf reaktive Maßnahmen.
            </p>
          </Card>
          <Card>
            <h3>Secure Product Studio</h3>
            <p>
              Von Passwort-Safes bis Identity Vaults: wir bauen Produkte mit Security-by-Design, nachvollziehbarer Kryptografie
              und erstklassiger UX.
            </p>
          </Card>
          <Card>
            <h3>Incident Response Command</h3>
            <p>
              24/7 Response, Forensik und Recovery. Integrierte Playbooks für Behörden, Unternehmen und SaaS-Teams.
            </p>
          </Card>
        </CardGrid>
      </Section>

      <Section className="callout">
        <SectionHeader
          eyebrow="Vertrauen"
          title="Wir sichern digitale Missionen, in denen Ausfall keine Option ist."
          subtitle="V3S kombiniert Produktentwicklung, Intelligence und Operations zu einem ganzheitlichen Security-Programm."
        />
        <div className="split">
          <div>
            <h3>Warum V3S</h3>
            <ul className="list-clean">
              <li>End-to-End Security von der App bis zur nationalen Infrastruktur</li>
              <li>Transparente Prozesse mit klaren Sicherheitsmetriken</li>
              <li>Erfahrenes Team aus Engineering, Intelligence und Operations</li>
            </ul>
          </div>
          <div>
            <h3>Nächster Schritt</h3>
            <p>
              Teilen Sie uns Ihre Mission, Ihr Produkt oder Ihre Bedrohungslage mit. Wir erstellen ein präzises
              Sicherheitskonzept und priorisieren schnelle Risikoreduktion.
            </p>
            <Link className="button" href="/contact">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
