import Link from "next/link";
import { Card, CardGrid } from "@/components/Card";
import { Section, SectionHeader } from "@/components/Section";
import { TagList } from "@/components/Tag";

export const metadata = {
  title: "V3S - Private Sector",
  description: "Sicherheitsprodukte und Services für Unternehmen und Endkunden.",
};

export default function PersonalPage() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Private Sector"
          title="Sicherheitsprodukte, die Menschen und Teams schützen"
          subtitle="Von Passwort-Safes bis zu sicheren Arbeitsräumen: Wir entwickeln Produkte, die sich nahtlos in den Alltag integrieren."
          as="h1"
        />
        <CardGrid>
          <Card>
            <h3>V3S Aegis Vault</h3>
            <p>
              Ein Zero-Knowledge Passwort- und Secrets-Safe mit modularer Verschlüsselung, sicheren Freigaben
              und automatischer Compliance-Überwachung.
            </p>
            <TagList items={["Password Safe", "Zero Knowledge", "Shared Vaults", "Encrypted Storage"]} />
            <Link className="button secondary" href="/personal/aegis-vault">
              Produkt ansehen
            </Link>
          </Card>
          <Card>
            <h3>Secure Identity Workspace</h3>
            <p>
              Kontrollierte Identitäts- und Zugriffssysteme für Startups und Enterprise-Teams. Inklusive MFA, Device Trust
              und Risiko-Scoring.
            </p>
            <TagList items={["Identity", "MFA", "Device Trust", "Policy Engine"]} />
          </Card>
          <Card>
            <h3>Privacy Advisory</h3>
            <p>
              Beratung für Produktteams zu Datenschutz, Secure UX und Auditability. Wir schließen die Lücke zwischen
              Compliance und echter Sicherheit.
            </p>
            <TagList items={["Secure UX", "Compliance", "Threat Modeling"]} />
          </Card>
        </CardGrid>
      </Section>

      <Section className="callout">
        <SectionHeader
          eyebrow="Support"
          title="Security, die mitwächst"
          subtitle="Wir begleiten Produkte über ihren gesamten Lebenszyklus und liefern klare Roadmaps für Risikoreduktion."
        />
        <div className="split">
          <div>
            <h3>Deliverables</h3>
            <ul className="list-clean">
              <li>Security-by-Design Reviews &amp; Code Audits</li>
              <li>Continuous Vulnerability Monitoring</li>
              <li>Executive Dashboards für Risikotransparenz</li>
            </ul>
          </div>
          <div>
            <h3>Kontakt</h3>
            <p>
              Planen Sie einen Workshop oder ein Produkt-Assessment. Wir passen unsere Security-Programme an Ihre
              Teamstruktur und Ihr Produkt an.
            </p>
            <Link className="button" href="/contact">
              Beratung anfragen
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
