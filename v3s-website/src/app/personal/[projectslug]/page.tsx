export default async function ProjectPage({
    params,
}: {
    params: Promise<{ projectslug: string }>;
}) {
    const { projectslug } = await params;
    return (
        <main>
            <h1>{projectslug}</h1>
            <p>Nothing to see here yet</p>
            <p>This page is not finished yet</p>
        </main>
    );
}
