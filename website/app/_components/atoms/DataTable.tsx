import type { ReactNode } from "react";

export function DataTable<T>({
  columns,
  rows,
  getKey,
  renderRow,
}: {
  columns: string[];
  rows: T[];
  getKey: (row: T, i: number) => string;
  renderRow: (row: T, i: number) => ReactNode[];
}) {
  return (
    <div className="card">
      <div className="tablewrap">
        <table className="table">
          <thead>
            <tr>
              {columns.map((c) => (
                <th key={c}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={getKey(r, i)}>{renderRow(r, i).map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}