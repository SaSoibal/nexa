import { Card } from "@/app/_components/atoms/Card";
import { Button } from "@/app/_components/atoms/Button";
import { Badge } from "@/app/_components/atoms/Badge";
import { PageHeader } from "@/app/_components/atoms/Section";

type User = {
  name: string;
  role: string;
  verification: string;
  jobs: string;
  rating: string;
  status: string;
  tone: "ok" | "warn";
};

const users: User[] = [
  { name: "Rashed Rahman", role: "Provider", verification: "Verified", jobs: "87", rating: "4.9", status: "ACTIVE", tone: "ok" },
  { name: "Mahin Ahmed", role: "Customer", verification: "Verified", jobs: "24", rating: "4.8", status: "ACTIVE", tone: "ok" },
  { name: "Nabila Khan", role: "Provider", verification: "Pending", jobs: "42", rating: "4.9", status: "REVIEW", tone: "warn" },
  { name: "Imran Hossain", role: "Provider", verification: "Verified", jobs: "112", rating: "4.7", status: "ACTIVE", tone: "ok" },
];

export default function UsersPage() {
  return (
    <section className="page">
      <PageHeader
        title="User Management"
        description="Customers, providers and admins."
        action={<Button>+ Invite User</Button>}
      />
      <Card>
        <table className="table">
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Verification</th>
              <th>Jobs</th>
              <th>Rating</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.name}>
                <td>{u.name}</td>
                <td>{u.role}</td>
                <td>{u.verification}</td>
                <td>{u.jobs}</td>
                <td>{u.rating}</td>
                <td><Badge tone={u.tone}>{u.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  );
}