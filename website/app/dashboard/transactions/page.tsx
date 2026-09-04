import { Card } from "@/app/_components/atoms/Card";
import { Badge } from "@/app/_components/atoms/Badge";
import { DataTable } from "@/app/_components/atoms/DataTable";
import { PageHeader } from "@/app/_components/atoms/Section";
import { transactions } from "@/app/_data/marketplace";

export default function TransactionsPage() {
  return (
    <section className="page">
      <PageHeader
        title="Transaction History"
        description="Complete wallet ledger."
      />
      <Card>
        <DataTable
          columns={["#", "Type", "Reference", "Amount", "Balance", "Status"]}
          rows={transactions}
          getKey={(t) => t.ref}
          renderRow={(t) => [
            t.ref,
            t.type,
            t.description,
            t.amount,
            t.balance,
            <Badge key="s" tone="ok">{t.status}</Badge>,
          ]}
        />
      </Card>
    </section>
  );
}