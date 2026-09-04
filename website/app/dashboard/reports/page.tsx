import { Card } from "@/app/_components/atoms/Card";
import { Chart } from "@/app/_components/atoms/Chart";
import { Button } from "@/app/_components/atoms/Button";
import { PageHeader } from "@/app/_components/atoms/Section";

const monthly = [38, 48, 54, 61, 70, 82, 88, 100];

const kpis = [
  { title: "User Growth", value: "+18.4%", note: "Month over month" },
  { title: "GMV Growth", value: "+24.8%", note: "Month over month" },
  { title: "Retention", value: "71.2%", note: "30-day retention" },
];

function KpiCard({ title, value, note }: { title: string; value: string; note: string }) {
  return (
    <Card>
      <h3>{title}</h3>
      <h2>{value}</h2>
      <p className="muted">{note}</p>
    </Card>
  );
}

function PerformanceChartCard() {
  return (
    <div style={{ marginTop: 17 }}>
      <Card>
        <h3>Monthly Performance</h3>
        <Chart values={monthly} />
      </Card>
    </div>
  );
}

export default function ReportsPage() {
  return (
    <section className="page">
      <PageHeader
        title="Reports & Analytics"
        description="Marketplace business intelligence."
        action={<Button variant="outline">Export CSV</Button>}
      />
      <div className="grid3">
        {kpis.map((k) => (
          <KpiCard key={k.title} {...k} />
        ))}
      </div>
      <PerformanceChartCard />
    </section>
  );
}