import Link from "next/link";
import styles from "./page.module.scss";

export default function PersonalPage() {
  return (
    <main>
      <h1>Personal</h1>
      <p>
        This site lists all applications and projects applicable to personal
        use.
      </p>
      <h2>Apps</h2>
      <ul>
        <li>
          <div className={styles.linkContainer}>
            <Link href="/personal/protect-pass" className={styles.link}>
              <h4>Protecto Pass</h4>
              <p>A password manager with extra functionality</p>
            </Link>
          </div>
        </li>
      </ul>
      <p>Stay tuned for more projects!</p>
      <p>
        You can always find working processes and projects on out{" "}
        <Link href="https://github.com/V3Sofficial">GitHub</Link>
      </p>
    </main>
  );
}
