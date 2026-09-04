import Link from "next/link";
import { navSections } from "@/app/_data/marketplace";
import { Logo } from "@/app/_components/atoms/Logo";

export function Sidebar() {
  return (
    <aside className="side">
      <Logo />
      {navSections.map((section) => (
        <div key={section.heading}>
          <small>{section.heading}</small>
          {section.items.map((item) => (
            <Link key={item.href} href={item.href} className="nav">
              {item.icon} {item.label}
            </Link>
          ))}
        </div>
      ))}
    </aside>
  );
}