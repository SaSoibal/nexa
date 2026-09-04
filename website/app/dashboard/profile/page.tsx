import { Card } from "@/app/_components/atoms/Card";
import { Item } from "@/app/_components/atoms/Item";
import { Button } from "@/app/_components/atoms/Button";
import { Badge } from "@/app/_components/atoms/Badge";
import { ProfileHeader } from "@/app/_components/atoms/Avatar";
import { PageHeader } from "@/app/_components/atoms/Section";

function ProfileIdentityCard() {
  return (
    <Card>
      <ProfileHeader
        letter="R"
        name="Rashed Rahman"
        role="Excel & Tax Documentation Specialist"
        verified
      />
      <hr />
      <h3>Bio</h3>
      <p className="muted">
        Detail-focused professional helping SMEs with Excel, documentation and
        administrative workflows.
      </p>
      <h3>Skills</h3>
      <Badge tone="blue">Excel</Badge>{" "}
      <Badge tone="purple">Tax Documentation</Badge>{" "}
      <Badge>Data Entry</Badge>
    </Card>
  );
}

const trustRows = [
  { label: "Identity", value: <b className="up">100%</b> },
  { label: "Skill verification", value: <b className="up">3 verified</b> },
  { label: "Completed jobs", value: <b>87</b> },
  { label: "Repeat clients", value: <b>63%</b> },
  { label: "Cancellation", value: <b>1.2%</b> },
  { label: "Trust score", value: <b>94/100</b> },
];

function TrustCard() {
  return (
    <Card>
      <h3>Trust & Reliability</h3>
      {trustRows.map((r) => (
        <Item key={r.label} left={r.label} right={r.value} />
      ))}
    </Card>
  );
}

export default function ProfilePage() {
  return (
    <section className="page">
      <PageHeader
        title="My Profile"
        description="Public provider identity and trust profile."
        action={<Button>Save Changes</Button>}
      />
      <div className="grid2">
        <ProfileIdentityCard />
        <TrustCard />
      </div>
    </section>
  );
}