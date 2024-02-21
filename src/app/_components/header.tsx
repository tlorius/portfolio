import Link from "next/link";

export function Header() {
  return (
    <header key="header" className="flex flex-row gap-30 justify-around">
      <Link href="/">Tom Lorius</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </header>
  );
}
