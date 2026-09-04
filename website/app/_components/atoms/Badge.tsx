import type { ReactNode } from "react";

type Tone = "default" | "ok" | "warn" | "blue" | "purple";

const toneClass: Record<Tone, string> = {
  default: "badge",
  ok: "badge ok",
  warn: "badge warn",
  blue: "badge blue",
  purple: "badge purple",
};

export function Badge({ tone = "default", children }: { tone?: Tone; children: ReactNode }) {
  return <span className={toneClass[tone]}>{children}</span>;
}