import { Card } from "@/app/_components/atoms/Card";
import { Button } from "@/app/_components/atoms/Button";
import { Badge } from "@/app/_components/atoms/Badge";
import { PageHeader } from "@/app/_components/atoms/Section";
import { services } from "@/app/_data/marketplace";
import Link from "next/link";

function ServiceCard({
  title,
  category,
  price,
  provider,
  rating,
  completed,
}: {
  title: string;
  category: string;
  price: string;
  provider: string;
  rating: string;
  completed: string;
}) {
  return (
    <Card>
      <Badge tone="purple">{category}</Badge>
      <h3>{title}</h3>
      <p className="muted">
        By {provider} · ⭐{rating} · {completed} completed
      </p>
      <div className="section">
        <b>{price}</b>
        <Link href="/dashboard/service-detail" className="btn soft">
          View
        </Link>
      </div>
    </Card>
  );
}

export default function ServicesPage() {
  return (
    <section className="page">
      <PageHeader
        title="Services Marketplace"
        description="Browse and manage provider services."
        action={<Button href="/dashboard/create-service">+ Create Service</Button>}
      />
      <div className="grid3">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}