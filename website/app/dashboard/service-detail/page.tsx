import { Card } from "@/app/_components/atoms/Card";
import { Item } from "@/app/_components/atoms/Item";
import { Button } from "@/app/_components/atoms/Button";
import { ProfileHeader } from "@/app/_components/atoms/Avatar";
import { PageHeader } from "@/app/_components/atoms/Section";

const inclusions = [
  "Dashboard design",
  "Data cleanup",
  "3 revisions",
  "48h delivery",
];

export default function ServiceDetailPage() {
  return (
    <section className="page">
      <PageHeader
        title="Excel Dashboard & Reporting"
        description="Professional service by Rashed Rahman"
        action={<Button>Request Service · ৳1,200</Button>}
      />
      <div className="grid2">
        <Card>
          <h3>What&apos;s included</h3>
          {inclusions.map((i) => (
            <Item key={i} left={i} right={<b>✓</b>} />
          ))}
        </Card>
        <Card>
          <h3>Provider</h3>
          <ProfileHeader letter="R" name="Rashed Rahman" role="⭐4.9 · 87 jobs · Verified" />
        </Card>
      </div>
    </section>
  );
}