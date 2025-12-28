import Link from "next/link"

export const metadata = {
    title: 'V3S - Legal',
    description: 'Legal Information and Privacy Policy',
}

export default function LegalPage() {
    return (
        <main>
            <h1> Website </h1>
            <h2> General </h2>
            <p>
                This Website itself does not use Cookies and / or tracking to track you.
                However, the Hoster of the Website and / or provider may do that.
                Those privacy policies are here to find:
            </p>
            <ul>
                <li>
                    <a href="https://vercel.com/legal/privacy-policy">Hoster</a>
                </li>
                <li>
                    <a href="https://www.strato.de/datenschutz/">Provider</a>
                </li>
            </ul>
        </main>

    )
}
