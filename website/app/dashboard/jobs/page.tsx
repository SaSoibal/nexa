import { Card } from "@/app/_components/atoms/Card";
import { Button } from "@/app/_components/atoms/Button";
import { Badge } from "@/app/_components/atoms/Badge";
import { PageHeader } from "@/app/_components/atoms/Section";
import { DataTable } from "@/app/_components/atoms/DataTable";
import { jobs } from "@/app/_data/marketplace";
import Link from "next/link";

export default function JobsPage() {
  return (
    <section className="page">
      <PageHeader
        title="Browse Jobs"
        description="10 realistic opportunities."
        action={<Button href="/dashboard/create-job">+ Post Job</Button>}
      />
      <Card>
        <DataTable
          columns={["Job", "Category", "Budget", "Location", "Deadline", "Status"]}
          rows={jobs}
          getKey={(j) => j.title}
          renderRow={(j) => [
            <Link key="t" href="/dashboard/job-detail"><b>{j.title}</b></Link>,
            j.category,
            j.budget,
            j.location,
            j.deadline,
            <Badge key="s" tone={j.status === "ACTIVE" ? "ok" : "blue"}>{j.status}</Badge>,
          ]}
        />
      </Card>
    </section>
  );
}