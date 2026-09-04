import { Card } from "@/app/_components/atoms/Card";
import { StatCard } from "@/app/_components/atoms/StatCard";
import { Badge } from "@/app/_components/atoms/Badge";
import { PageHeader } from "@/app/_components/atoms/Section";

function DisputesStats() {
  return (
    <div className="cards">
      <StatCard label="Open" value="23" />
      <StatCard label="Under Review" value="9" />
      <StatCard label="Resolved" value="184" />
      <StatCard label="Avg Resolution" value="9.4h" />
    </div>
  );
}

type Dispute = {
  id: string;
  job: string;
  raisedBy: string;
  amount: string;
  reason: string;
  status: string;
  tone: "warn" | "blue";
};

const disputes: Dispute[] = [
  { id: "#DSP-1042", job: "Presentation Design", raisedBy: "Customer", amount: "৳900", reason: "Quality issue", status: "REVIEW", tone: "warn" },
  { id: "#DSP-1041", job: "Delivery #PD-882", raisedBy: "Provider", amount: "৳100", reason: "Late pickup", status: "MEDIATION", tone: "blue" },
];

export default function DisputesPage() {
  return (
    <section className="page">
      <PageHeader
        title="Disputes & Resolution"
        description="Evidence-based resolution workflows."
      />
      <DisputesStats />
      <Card>
        <table className="table">
          <thead>
            <tr>
              <th>Case</th>
              <th>Job</th>
              <th>Raised By</th>
              <th>Amount</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {disputes.map((d) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.job}</td>
                <td>{d.raisedBy}</td>
                <td>{d.amount}</td>
                <td>{d.reason}</td>
                <td><Badge tone={d.tone}>{d.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  );
}