import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div>
                    Information: This website is not active yet, the same applies to all contents of this page.
                    This is a pure placeholder and demo for possible upcoming changes and content.
                    If there is an issue, please contact us via <Link href="mailto:support@v3s.tech">email</Link>.
                    <p className="footer-title">V3S Security</p>
                    <p className="footer-note">
                        Cyber Security
                    </p>
                </div>
                <div>
                    <p className="footer-title">Support</p>
                    <ul className="footer-links">
                        <li>
                            <Link href="mailto:support@v3s.tech">support@v3s.tech</Link>
                        </li>
                        <li>
                            <Link href="/contact">Security Briefing</Link>
                        </li>
                        <li>
                            <Link href="/legal">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="footer-title">Social</p>
                    <ul className="footer-links">
                        <li>
                            <Link href="https://github.com/V3Sofficial">GitHub</Link>
                        </li>
                        <li>
                            <Link href="https://x.com/v3sofficial">X / Twitter</Link>
                        </li>
                        <li>
                            <Link href="https://instagram.com/v3sofficial">Instagram</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="footer-note">© 2026 Julian Schumacher. All rights reserved.</p>
        </footer>
    );
}
