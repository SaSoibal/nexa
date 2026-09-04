import { StatCard } from "@/app/_components/atoms/StatCard";
import { Card } from "@/app/_components/atoms/Card";
import { Button } from "@/app/_components/atoms/Button";
import { Badge } from "@/app/_components/atoms/Badge";
import { PageHeader } from "@/app/_components/atoms/Section";

function DeliveryStats() {
  return (
    <div className="cards">
      <StatCard label="Active" value="42" />
      <StatCard label="Today" value="186" />
      <StatCard label="On-time" value="97.8%" />
      <StatCard label="Earnings" value="৳18,640" />
    </div>
  );
}

type Delivery = {
  route: string;
  parcels: string;
  partner: string;
  match: string;
  fee: string;
  status: string;
  tone: "ok" | "blue";
};

const deliveries: Delivery[] = [
  { route: "Gulshan → Demra", parcels: "5", partner: "Imran H.", match: "98%", fee: "৳100", status: "IN PROGRESS", tone: "ok" },
  { route: "Banani → Mirpur", parcels: "3", partner: "Rafi", match: "94%", fee: "৳80", status: "PICKUP", tone: "blue" },
  { route: "Dhanmondi → Uttara", parcels: "8", partner: "Sakib", match: "91%", fee: "৳160", status: "COMPLETED", tone: "ok" },
];

function DeliveriesTable() {
  return (
    <Card>
      <table className="table">
        <thead>
          <tr>
            <th>Route</th>
            <th>Parcels</th>
            <th>Partner</th>
            <th>Match</th>
            <th>Fee</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((d) => (
            <tr key={d.route}>
              <td>{d.route}</td>
              <td>{d.parcels}</td>
              <td>{d.partner}</td>
              <td>{d.match}</td>
              <td>{d.fee}</td>
              <td><Badge tone={d.tone}>{d.status}</Badge></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default function DeliveriesPage() {
  return (
    <section className="page">
      <PageHeader
        title="Deliveries / PUDO"
        description="QR/OTP privacy-first chain of custody."
        action={<Button href="/dashboard/delivery-detail">Track Active</Button>}
      />
      <DeliveryStats />
      <DeliveriesTable />
    </section>
  );
}