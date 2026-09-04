import { StatCard } from "@/app/_components/atoms/StatCard";
import { Card } from "@/app/_components/atoms/Card";
import { Item } from "@/app/_components/atoms/Item";
import { Progress } from "@/app/_components/atoms/Progress";
import { Button } from "@/app/_components/atoms/Button";
import { PageHeader } from "@/app/_components/atoms/Section";

function ProviderStats() {
  return (
    <div className="cards">
      <StatCard label="This Month" value="৳46,800" trend="↑18%" />
      <StatCard label="Completed" value="87" trend="4.9 rating" />
      <StatCard label="Repeat Clients" value="63%" />
      <StatCard label="Available" value="4h" trend="Today" />
    </div>
  );
}

function CapacityCard() {
  const rows = [
    { label: "🛣️ Route", value: "Demra ↔ Gulshan" },
    { label: "⏱️ Free time", value: "7 PM - 10 PM" },
    { label: "💻 Assets", value: "Bike + Laptop" },
    { label: "🧠 Skills", value: "Excel, Tax, Design" },
  ];
  return (
    <Card>
      <h3>My Capacity</h3>
      {rows.map((r) => (
        <Item key={r.label} left={r.label} right={<b>{r.value}</b>} />
      ))}
    </Card>
  );
}

function ProfileHealthCard() {
  const rows = [
    { label: "Identity", value: <b className="up">Verified</b> },
    { label: "Skills", value: <b className="up">3 verified</b> },
    { label: "Reliability", value: <b>94/100</b> },
  ];
  return (
    <Card>
      <h3>Profile Health</h3>
      <p className="muted">94% complete</p>
      <Progress value={94} />
      <div style={{ marginTop: 10 }}>
        {rows.map((r) => (
          <Item key={r.label} left={r.label} right={r.value} />
        ))}
      </div>
    </Card>
  );
}

export default function ProviderPage() {
  return (
    <section className="page">
      <PageHeader
        title="Provider Dashboard"
        description="Manage capacity, services and jobs."
        action={<Button href="/dashboard/services">Manage Services</Button>}
      />
      <ProviderStats />
      <div className="grid2">
        <CapacityCard />
        <ProfileHealthCard />
      </div>
    </section>
  );
}