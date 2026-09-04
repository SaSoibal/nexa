import { Card } from "@/app/_components/atoms/Card";
import { Badge } from "@/app/_components/atoms/Badge";
import { PageHeader } from "@/app/_components/atoms/Section";

type Req = {
  name: string;
  budget: string;
  matches: string;
  progress: string;
  status: string;
  tone: "blue" | "ok" | "warn";
};

const requests: Req[] = [
  { name: "Tax Return Documentation", budget: "৳1,500", matches: "7", progress: "70%", status: "MATCHING", tone: "blue" },
  { name: "Presentation Design", budget: "৳900", matches: "2", progress: "100%", status: "COMPLETED", tone: "ok" },
  { name: "AC Maintenance", budget: "৳1,800", matches: "4", progress: "35%", status: "ACTIVE", tone: "warn" },
];

export default function RequestsPage() {
  return (
    <section className="page">
      <PageHeader
        title="My Requests"
        description="Track active and completed work."
      />
      <Card>
        <table className="table">
          <thead>
            <tr>
              <th>Request</th>
              <th>Budget</th>
              <th>Matches</th>
              <th>Progress</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((r) => (
              <tr key={r.name}>
                <td>{r.name}</td>
                <td>{r.budget}</td>
                <td>{r.matches}</td>
                <td>{r.progress}</td>
                <td><Badge tone={r.tone}>{r.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  );
}