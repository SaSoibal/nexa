import { Card } from "@/app/_components/atoms/Card";
import { Button } from "@/app/_components/atoms/Button";
import { Badge } from "@/app/_components/atoms/Badge";
import { PageHeader } from "@/app/_components/atoms/Section";

type Applicant = {
  name: string;
  type: string;
  submitted: string;
  risk: "Low" | "Medium";
};

const applicants: Applicant[] = [
  { name: "Nabila Khan", type: "Identity", submitted: "Today", risk: "Low" },
  { name: "Arif Hasan", type: "IT Skill", submitted: "Yesterday", risk: "Low" },
  { name: "Sakib Noor", type: "Delivery Partner", submitted: "Yesterday", risk: "Medium" },
];

export default function VerificationPage() {
  return (
    <section className="page">
      <PageHeader
        title="Verification Queue"
        description="Identity, skills and provider evidence."
      />
      <Card>
        <table className="table">
          <thead>
            <tr>
              <th>Applicant</th>
              <th>Type</th>
              <th>Submitted</th>
              <th>Risk</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((a) => (
              <tr key={a.name}>
                <td>{a.name}</td>
                <td>{a.type}</td>
                <td>{a.submitted}</td>
                <td>{a.risk}</td>
                <td><Badge tone="warn">PENDING</Badge></td>
                <td><Button variant="soft">Review</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  );
}