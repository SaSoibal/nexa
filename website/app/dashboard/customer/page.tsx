import { StatCard } from "@/app/_components/atoms/StatCard";
import { Card } from "@/app/_components/atoms/Card";
import { Item } from "@/app/_components/atoms/Item";
import { Button } from "@/app/_components/atoms/Button";
import { Badge } from "@/app/_components/atoms/Badge";
import { PageHeader } from "@/app/_components/atoms/Section";

function CustomerStats() {
  return (
    <div className="cards">
      <StatCard label="Active Requests" value="7" trend="3 awaiting offers" />
      <StatCard label="Providers Hired" value="24" />
      <StatCard label="Total Spent" value="৳1.84L" />
      <StatCard label="Avg Rating" value="4.8" />
    </div>
  );
}

type Request = { title: string; meta: string; tone: "blue" | "warn" | "ok"; label: string };

const requests: Request[] = [
  { title: "Tax Return Documentation", meta: "7 matches · ৳1,500", tone: "blue", label: "MATCHING" },
  { title: "Presentation Design", meta: "2 offers · ৳900", tone: "warn", label: "OFFERS" },
  { title: "AC Maintenance", meta: "Provider assigned", tone: "ok", label: "ACTIVE" },
];

function ActiveRequestsCard() {
  return (
    <Card>
      <h3>Active Requests</h3>
      {requests.map((r) => (
        <Item key={r.title} left={r.title} muted={r.meta} right={<Badge tone={r.tone}>{r.label}</Badge>} />
      ))}
    </Card>
  );
}

type Provider = { label: string; score: string };

const providers: Provider[] = [
  { label: "👤 Nabila · Design · ⭐4.9", score: "96%" },
  { label: "👤 Rashed · Excel · ⭐4.9", score: "92%" },
  { label: "👤 Arif · IT · ⭐4.8", score: "89%" },
];

function RecommendedProvidersCard() {
  return (
    <Card>
      <h3>Recommended Providers</h3>
      {providers.map((p) => (
        <Item key={p.label} left={p.label} right={<b>{p.score}</b>} />
      ))}
    </Card>
  );
}

export default function CustomerPage() {
  return (
    <section className="page">
      <PageHeader
        title="Customer Dashboard"
        description="Requests, providers and spending."
        action={<Button href="/dashboard/create-job">+ Create Request</Button>}
      />
      <CustomerStats />
      <div className="grid2">
        <ActiveRequestsCard />
        <RecommendedProvidersCard />
      </div>
    </section>
  );
}