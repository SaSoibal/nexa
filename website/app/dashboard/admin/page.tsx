import { Card } from "@/app/_components/atoms/Card";
import { StatCard } from "@/app/_components/atoms/StatCard";
import { Item } from "@/app/_components/atoms/Item";
import { Chart } from "@/app/_components/atoms/Chart";
import { Button } from "@/app/_components/atoms/Button";
import { PageHeader } from "@/app/_components/atoms/Section";

const revenue = [35, 45, 52, 63, 71, 78, 90, 100];

function AdminStats() {
  return (
    <div className="cards">
      <StatCard label="GMV" value="৳48.6L" trend="↑24.8%" />
      <StatCard label="Platform Revenue" value="৳4.86L" trend="10% take rate" />
      <StatCard label="Active Users" value="18,492" />
      <StatCard
        label="Open Disputes"
        value="23"
        trend="Needs review"
        trendColor="default"
      />
    </div>
  );
}

const healthRows = [
  { label: "Jobs fulfilled", value: "94.2%" },
  { label: "Payment success", value: "99.1%" },
  { label: "Provider response", value: "87.6%" },
  { label: "Dispute rate", value: "0.8%" },
];

function RevenueTrendCard() {
  return (
    <Card>
      <h3>Revenue Trend</h3>
      <Chart values={revenue} />
    </Card>
  );
}

function MarketplaceHealthCard() {
  return (
    <Card>
      <h3>Marketplace Health</h3>
      {healthRows.map((r) => (
        <Item key={r.label} left={r.label} right={<b>{r.value}</b>} />
      ))}
    </Card>
  );
}

export default function AdminPage() {
  return (
    <section className="page">
      <PageHeader
        title="Admin Dashboard"
        description="Platform health, revenue and operations."
        action={<Button href="/dashboard/reports">Analytics</Button>}
      />
      <AdminStats />
      <div className="grid2">
        <RevenueTrendCard />
        <MarketplaceHealthCard />
      </div>
    </section>
  );
}