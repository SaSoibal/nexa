import { Card } from "@/app/_components/atoms/Card";
import { Item } from "@/app/_components/atoms/Item";
import { Button } from "@/app/_components/atoms/Button";
import { Badge } from "@/app/_components/atoms/Badge";
import { PageHeader } from "@/app/_components/atoms/Section";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="field">
      <label>{label}</label>
      {children}
    </div>
  );
}

function SettingsForm() {
  return (
    <Card>
      <div className="fg">
        <Field label="Full Name"><input defaultValue="Rashed Rahman" /></Field>
        <Field label="Email"><input defaultValue="rashed@example.com" /></Field>
        <Field label="Mobile"><input defaultValue="+880 1712-000000" /></Field>
        <Field label="Language">
          <select defaultValue="English">
            <option>English</option>
            <option>বাংলা</option>
          </select>
        </Field>
      </div>
      <hr />
      <h3>Security</h3>
      <Item left="Two-factor authentication" right={<Badge tone="ok">Enabled</Badge>} />
      <Item left="Login alerts" right={<Badge tone="ok">Enabled</Badge>} />
    </Card>
  );
}

export default function SettingsPage() {
  return (
    <section className="page">
      <PageHeader
        title="Settings"
        description="Preferences, privacy and security."
        action={<Button>Save</Button>}
      />
      <SettingsForm />
    </section>
  );
}