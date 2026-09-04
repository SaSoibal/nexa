import { Card } from "@/app/_components/atoms/Card";
import { Button } from "@/app/_components/atoms/Button";
import { PageHeader } from "@/app/_components/atoms/Section";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="field">
      <label>{label}</label>
      {children}
    </div>
  );
}

export default function CreateServicePage() {
  return (
    <section className="page">
      <PageHeader
        title="Create Service"
        description="Turn a skill into a marketplace offer."
      />
      <Card>
        <div className="form">
          <div className="fg">
            <Field label="Service Title">
              <input defaultValue="Excel Dashboard & Reporting" />
            </Field>
            <Field label="Starting Price">
              <input defaultValue="1200" />
            </Field>
            <Field label="Category">
              <select defaultValue="Business">
                <option>Business</option>
                <option>Design</option>
                <option>IT</option>
              </select>
            </Field>
            <Field label="Delivery Time">
              <input defaultValue="48 hours" />
            </Field>
          </div>
          <Field label="Description">
            <textarea defaultValue="Professional Excel dashboard, reporting and data cleanup." />
          </Field>
          <Button>Publish Service</Button>
        </div>
      </Card>
    </section>
  );
}