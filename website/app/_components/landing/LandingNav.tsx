import Link from "next/link";
import { Logo } from "@/app/_components/atoms/Logo";

const links = ["Find Work", "Services", "Learn", "How it works"];

export function LandingNav() {
  return (
    <nav className="lnav">
      <Logo light />
      <div className="links">
        {links.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
      <Link href="/dashboard" className="btn primary">
        Open Demo
      </Link>
    </nav>
  );
}