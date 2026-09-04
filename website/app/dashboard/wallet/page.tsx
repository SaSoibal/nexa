import { Card, HeroCard } from "@/app/_components/atoms/Card";
import { Item } from "@/app/_components/atoms/Item";
import { Button } from "@/app/_components/atoms/Button";
import { Badge } from "@/app/_components/atoms/Badge";
import { PageHeader } from "@/app/_components/atoms/Section";

function BalanceCard() {
  return (
    <HeroCard>
      <span className="muted">Available Balance</span>
      <div className="money">৳28,450.00</div>
      <span className="muted">Pending ৳4,820 · Total earned ৳2,84,600</span>
    </HeroCard>
  );
}

function PaymentMethodsCard() {
  return (
    <Card>
      <h3>Payment Methods</h3>
      <Item left="▣ bKash ····4821" right={<Badge tone="ok">Primary</Badge>} />
      <Item left="▣ Bank ····9012" right={<Button variant="outline">Edit</Button>} />
      <Button variant="soft">+ Add method</Button>
    </Card>
  );
}

type Txn = { ref: string; description: string; amount: string; tone: "ok" | "blue"; status: string };

const recent: Txn[] = [
  { ref: "#TXN-10842", description: "Tax Documentation", amount: "+৳1,350", tone: "ok", status: "RELEASED" },
  { ref: "#TXN-10841", description: "PUDO Delivery", amount: "+৳100", tone: "ok", status: "RELEASED" },
  { ref: "#TXN-10840", description: "Platform fee", amount: "-৳150", tone: "blue", status: "SETTLED" },
];

function RecentTransactionsCard() {
  return (
    <div style={{ marginTop: 17 }}>
      <Card>
        <h3>Recent Transactions</h3>
        <table className="table">
          <thead>
            <tr><th>Reference</th><th>Description</th><th>Amount</th><th>Status</th></tr>
          </thead>
          <tbody>
            {recent.map((t) => (
              <tr key={t.ref}>
                <td>{t.ref}</td>
                <td>{t.description}</td>
                <td>{t.amount}</td>
                <td><Badge tone={t.tone}>{t.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default function WalletPage() {
  return (
    <section className="page">
      <PageHeader
        title="Wallet"
        description="Balance, payouts and payment methods."
        action={<Button>Withdraw Funds</Button>}
      />
      <div className="grid2">
        <BalanceCard />
        <PaymentMethodsCard />
      </div>
      <RecentTransactionsCard />
    </section>
  );
}