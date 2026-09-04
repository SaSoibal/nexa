import { Card, HeroCard } from "@/app/_components/atoms/Card";
import { Button } from "@/app/_components/atoms/Button";
import { Progress } from "@/app/_components/atoms/Progress";
import { ProfileHeader } from "@/app/_components/atoms/Avatar";
import { PageHeader } from "@/app/_components/atoms/Section";

function JobDescriptionCard() {
  return (
    <Card>
      <h3>Job Description</h3>
      <p className="muted">
        Prepare tax return documentation using client-provided information.
        Final hard copy may be handed over through PUDO.
      </p>
      <h3>Requirements</h3>
      <p>✓ Excel proficiency</p>
      <p>✓ Tax documentation experience</p>
      <p>✓ Delivery-ready</p>
    </Card>
  );
}

function MatchCard() {
  return (
    <div style={{ marginTop: 17 }}>
      <Card>
        <h3>Smart Match</h3>
        <Progress value={92} />
        <h2>92% Match</h2>
        <p className="muted">Skill 96% · Availability 90% · Location 88%</p>
      </Card>
    </div>
  );
}

function BudgetCard() {
  return (
    <HeroCard>
      <span className="muted">Budget</span>
      <div className="money">৳1,500</div>
      <span className="muted">Payment protected</span>
    </HeroCard>
  );
}

function CustomerCard() {
  return (
    <div style={{ marginTop: 17 }}>
      <Card>
        <h3>Customer</h3>
        <ProfileHeader letter="M" name="Mahin Ahmed" role="⭐4.8 · 24 hires" />
      </Card>
    </div>
  );
}

export default function JobDetailPage() {
  return (
    <section className="page">
      <PageHeader
        title="Tax Return Documentation"
        description="ABC Traders · Gulshan · Professional"
        action={<Button>Accept Work · ৳1,500</Button>}
      />
      <div className="grid2">
        <div>
          <JobDescriptionCard />
          <MatchCard />
        </div>
        <div>
          <BudgetCard />
          <CustomerCard />
        </div>
      </div>
    </section>
  );
}