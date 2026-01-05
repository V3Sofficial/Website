import Link from "next/link";
import { Card, CardGrid } from "@/components/Card";
import { Section, SectionHeader } from "@/components/Section";

export const metadata = {
  title: "V3S - Legal",
  description: "Impressum, Datenschutz und rechtliche Hinweise.",
};

export default function LegalPage() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Rechtliches"
          title="Impressum &amp; Datenschutz"
          subtitle="V3S arbeitet mit sensiblen Daten. Datenschutz und Vertraulichkeit sind zentrale Bestandteile unserer Sicherheitskultur."
          as="h1"
        />
        <CardGrid>
          <Card>
            <h3>Datenschutz</h3>
            <p>
              Diese Website setzt keine eigenen Tracking-Cookies. Externe Anbieter können jedoch technische
              Zugriffsdaten verarbeiten.
            </p>
            <ul className="list-clean">
              <li>
                <Link href="https://vercel.com/legal/privacy-policy">Vercel Privacy Policy</Link>
              </li>
              <li>
                <Link href="https://www.strato.de/datenschutz/">Strato Datenschutz</Link>
              </li>
            </ul>
          </Card>
          <Card>
            <h3>Impressum</h3>
            <p>
              Angaben gemäß § 5 TMG folgen auf Anfrage. Für vertrauliche oder formelle Anfragen nutzen Sie bitte
              die Kontaktwege auf der Kontaktseite.
            </p>
            <Link className="button secondary" href="/contact">
              Kontaktseite öffnen
            </Link>
          </Card>
        </CardGrid>
      </Section>
    </main>
  );
}
