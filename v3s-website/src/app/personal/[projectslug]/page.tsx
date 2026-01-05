import Link from "next/link";
import getProjects from "../../data/mapping";
import Project from "../../objects/project";
import { Card, CardGrid } from "@/components/Card";
import { Section, SectionHeader } from "@/components/Section";
import { TagList } from "@/components/Tag";

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ projectslug: string }>;
}) {
    const { projectslug } = await params;
    const ar: any[] = getProjects();
    const projects: Project[] = ar[0];
    const project = projects.find((p) => p.identifier.toLowerCase() === projectslug.toLowerCase());
    if (!project) {
        return (
            <main>
                <section className="section">
                    <div className="section-header">
                        <p className="eyebrow">Not Found</p>
                        <h1>Projekt nicht gefunden</h1>
                        <p className="section-subtitle">Das angeforderte Produkt ist nicht verfügbar.</p>
                    </div>
                    <Link className="button" href="/personal">
                        Zuruck zur Ubersicht
                    </Link>
                </section>
            </main>
        );
    } else {
        return (
            <main>
                <Section>
                    <SectionHeader
                        eyebrow="Private Security Product"
                        title={project.name}
                        subtitle={project.description}
                        as="h1"
                    />
                    <CardGrid>
                        <Card>
                            <h3>Status</h3>
                            <p>{project.activeSupport ? "Aktiver Support" : "Support pausiert"}</p>
                            <p>{project.firstVersionReleased ? "Bereits verfugbar" : "In Entwicklung"}</p>
                            <h4>Bereit fur</h4>
                            <TagList items={project.typeImplemented} />
                        </Card>
                        <Card>
                            <h3>Roadmap</h3>
                            <p>Geplante Zielumgebungen</p>
                            <TagList items={project.typeGoal} />
                            <h4>Plattformen</h4>
                            <TagList items={project.platformsGoal} />
                        </Card>
                        <Card>
                            <h3>Plattformen verfugbar</h3>
                            <TagList items={project.platformsReady} />
                        </Card>
                    </CardGrid>
                </Section>

                <Section>
                    <SectionHeader
                        eyebrow="Capabilities"
                        title="Funktionsumfang"
                        subtitle="Sicherheitsfeatures und Kernfunktionen des Produkts."
                    />
                    <Card>
                        <TagList items={project.features} />
                    </Card>
                </Section>

                <Section>
                    <SectionHeader
                        eyebrow="Technologien"
                        title="Technischer Stack"
                        subtitle="Sprachen und Frameworks, die im Produkt eingesetzt werden."
                    />
                    <CardGrid>
                        <Card>
                            <h3>Languages</h3>
                            <TagList items={project.languages} />
                        </Card>
                        <Card>
                            <h3>Frameworks</h3>
                            <TagList items={project.frameworks} />
                        </Card>
                    </CardGrid>
                </Section>

                <Section className="callout">
                    <SectionHeader
                        eyebrow="Connection"
                        title="Produktlinks"
                        subtitle="Offizielle Ressourcen und Repositories."
                    />
                    <ul className="list-clean">
                        {Array.from(project.connection.getActive().entries()).map(([key, value]) => (
                            <li key={key}>
                                <Link className="button secondary" href={value}>
                                    {key}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Section>
            </main>
        );
    }
}
