export function Chart({ values, height = 220 }: { values: number[]; height?: number }) {
  return (
    <div className="chart" style={{ height }}>
      {values.map((v, i) => (
        <i key={i} className="bar" style={{ height: `${v}%` }} />
      ))}
    </div>
  );
}