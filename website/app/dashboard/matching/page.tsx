import { StatCard } from "@/app/_components/atoms/StatCard";
import { Card } from "@/app/_components/atoms/Card";
import { Button } from "@/app/_components/atoms/Button";
import { PageHeader } from "@/app/_components/atoms/Section";

function MatchingStats() {
  return (
    <div className="cards">
      <StatCard label="Matches Today" value="1,284" trend="↑22%" />
      <StatCard label="Avg Score" value="91.6%" />
      <StatCard label="Accepted" value="68%" />
      <StatCard label="Zero Detour" value="74%" />
    </div>
  );
}

type Match = {
  opportunity: string;
  provider: string;
  skill: string;
  route: string;
  score: string;
  action: string;
};

const matches: Match[] = [
  { opportunity: "Tax Documentation", provider: "Rashed", skill: "96%", route: "92%", score: "96%", action: "Review" },
  { opportunity: "Gulshan → Demra", provider: "Imran", skill: "74%", route: "100%", score: "94%", action: "Notify" },
  { opportunity: "Excel Cleanup", provider: "Nabila", skill: "99%", route: "Remote", score: "93%", action: "Invite" },
];

function MatchesTable() {
  return (
    <Card>
      <table className="table">
        <thead>
          <tr>
            <th>Opportunity</th>
            <th>Provider</th>
            <th>Skill</th>
            <th>Route</th>
            <th>Score</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((m) => (
            <tr key={m.opportunity}>
              <td>{m.opportunity}</td>
              <td>{m.provider}</td>
              <td>{m.skill}</td>
              <td>{m.route}</td>
              <td><b>{m.score}</b></td>
              <td><Button variant="soft">{m.action}</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default function MatchingPage() {
  return (
    <section className="page">
      <PageHeader
        title="Smart Matching"
        description="Capacity + skill + route + time based matching."
      />
      <MatchingStats />
      <MatchesTable />
    </section>
  );
}