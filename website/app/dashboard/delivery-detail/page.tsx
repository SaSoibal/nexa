import { Card, HeroCard } from "@/app/_components/atoms/Card";
import { Button } from "@/app/_components/atoms/Button";
import { Badge } from "@/app/_components/atoms/Badge";
import { PageHeader } from "@/app/_components/atoms/Section";

function ChainOfCustodyCard() {
  return (
    <Card>
      <h3>Chain of Custody</h3>
      <p>✓ Pickup point · QR scanned</p>
      <p>● On route · Zero detour</p>
      <p>○ Drop point · Waiting</p>
      <Button>Scan Drop QR</Button>
    </Card>
  );
}

function DeliveryEarningsCard() {
  return (
    <HeroCard>
      <span className="muted">Delivery earning</span>
      <div className="money">৳100</div>
      <span className="muted">5 parcels · 20 min handling</span>
    </HeroCard>
  );
}

export default function DeliveryDetailPage() {
  return (
    <section className="page">
      <PageHeader
        title="Active Delivery"
        description="Gulshan PUDO → Demra PUDO"
        action={<Badge tone="ok">IN PROGRESS</Badge>}
      />
      <div className="grid2">
        <ChainOfCustodyCard />
        <DeliveryEarningsCard />
      </div>
    </section>
  );
}