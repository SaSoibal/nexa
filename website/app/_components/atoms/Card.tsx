import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`card ${className}`}>{children}</div>;
}

export function HeroCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`card hero ${className}`}>{children}</div>;
}