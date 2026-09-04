import type { ReactNode } from "react";

export function StatCard({
  label,
  value,
  trend,
  trendColor = "up",
}: {
  label: ReactNode;
  value: ReactNode;
  trend?: ReactNode;
  trendColor?: "up" | "default";
}) {
  return (
    <div className="card stat">
      <span className="label">{label}</span>
      <strong>{value}</strong>
      {trend && <span className={trendColor}>{trend}</span>}
    </div>
  );
}