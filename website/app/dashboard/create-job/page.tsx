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

export default function CreateJobPage() {
  return (
    <section className="page">
      <PageHeader
        title="Create Job Request"
        description="Tell the marketplace what you need."
      />
      <Card>
        <div className="form">
          <div className="fg">
            <Field label="Category">
              <select defaultValue="Tax Documentation">
                <option>Tax Documentation</option>
                <option>Design</option>
                <option>IT Support</option>
                <option>Delivery</option>
                <option>Tutor</option>
              </select>
            </Field>
            <Field label="Budget">
              <input defaultValue="1500" />
            </Field>
          </div>
          <Field label="Job Title">
            <input defaultValue="Tax Return Documentation" />
          </Field>
          <Field label="Description">
            <textarea defaultValue="Prepare tax return documentation from provided records." />
          </Field>
          <div className="fg">
            <Field label="Deadline">
              <input defaultValue="2 days" />
            </Field>
            <Field label="Provider Preference">
              <select defaultValue="Verified">
                <option>Verified</option>
                <option>Nearby</option>
                <option>Fastest</option>
                <option>Lowest price</option>
              </select>
            </Field>
          </div>
          <Button>Publish Request</Button>
        </div>
      </Card>
    </section>
  );
}