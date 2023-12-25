import Link from "next/link";

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}
