import { Card } from "@/app/_components/atoms/Card";
import { StatCard } from "@/app/_components/atoms/StatCard";
import { Section } from "@/app/_components/atoms/Section";
import { Chart } from "@/app/_components/atoms/Chart";
import { Item } from "@/app/_components/atoms/Item";
import { Button } from "@/app/_components/atoms/Button";
import { DataTable } from "@/app/_components/atoms/DataTable";
import { PageHeader } from "@/app/_components/atoms/Section";
import { Badge } from "@/app/_components/atoms/Badge";
import { jobs } from "@/app/_data/marketplace";
import Link from "next/link";

const earnings = [35, 50, 42, 68, 55, 82, 72, 95];

function OverviewStats() {
  return (
    <div className="cards">
      <StatCard label="Available Balance" value="৳28,450" trend="↑ 12.8%" />
      <StatCard label="Active Jobs" value="18" trend="+4 this week" />
      <StatCard label="Profile Match" value="92%" trend="Excellent" />
      <StatCard label="Trust Score" value="94/100" trend="Top 8%" />
    </div>
  );
}

function EarningsCard() {
  return (
    <Section title="Earnings Overview" action={<Badge tone="ok">+18.4%</Badge>}>
      <Chart values={earnings} />
    </Section>
  );
}

const matches = [
  { label: "📦 Gulshan → Demra", score: "98%" },
  { label: "📊 Excel Task", score: "95%" },
  { label: "📑 Tax Documentation", score: "92%" },
  { label: "🎨 Design Request", score: "87%" },
];

function SmartMatchesCard() {
  return (
    <Section title="Smart Matches" action={<Button variant="soft" href="/dashboard/matching">View all</Button>}>
      {matches.map((m) => (
        <Item key={m.label} left={m.label} right={<b>{m.score}</b>} />
      ))}
    </Section>
  );
}

function RecentJobsTable() {
  const recent = jobs.slice(0, 5);
  return (
    <Card>
      <h3>Recent Jobs</h3>
      <DataTable
        columns={["Job", "Customer", "Budget", "Status", "Match"]}
        rows={recent}
        getKey={(j) => j.title}
        renderRow={(j) => [
          <Link key="t" href="/dashboard/job-detail"><b>{j.title}</b></Link>,
          "Mahin",
          j.budget,
          j.status,
          <Badge key="m" tone="ok">{j.match}%</Badge>,
        ]}
      />
    </Card>
  );
}

export default function DashboardPage() {
  return (
    <section className="page">
      <PageHeader
        breadcrumb="Overview / Dashboard"
        title="Good evening, Rashed 👋"
        description="Your marketplace activity at a glance."
        action={<Button href="/dashboard/create-job">+ Post a Job</Button>}
      />
      <OverviewStats />
      <div className="grid2">
        <EarningsCard />
        <SmartMatchesCard />
      </div>
      <div style={{ marginTop: 17 }}>
        <RecentJobsTable />
      </div>
    </section>
  );
}