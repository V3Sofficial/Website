import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
          </Link>
        </div>
        <ul className={styles.links}>
          <li>
            <Link href="/personal">Personal</Link>
          </li>
          <li>
            <Link href="/cybersecurity">Cyber Security</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
