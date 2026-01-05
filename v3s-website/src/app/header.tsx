import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.png" alt="V3S" width={46} height={46} />
          </Link>
          <div>
            <p className={styles.brand}>V3S Security</p>
            <span className={styles.tagline}>Defense • Intelligence • Prevention</span>
          </div>
        </div>
        <ul className={styles.links}>
          <li>
            <Link href="/personal">Private Sector</Link>
          </li>
          <li>
            <Link href="/cybersecurity">Public Sector</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/legal">Legal</Link>
          </li>
        </ul>
        <Link className={styles.cta} href="/contact">
          Request a briefing
        </Link>
      </nav>
    </header>
  );
}
