import { Card } from "@/app/_components/atoms/Card";
import { Item } from "@/app/_components/atoms/Item";
import { Button } from "@/app/_components/atoms/Button";
import { PageHeader } from "@/app/_components/atoms/Section";

const conversations = [
  { who: "Nabila", msg: "Can you share the brief?", time: "2m" },
  { who: "Mahin", msg: "Payment is secured.", time: "18m" },
  { who: "Arif", msg: "Job completed.", time: "1h" },
];

const messages = [
  "Hi Rashed, I reviewed your requirements.",
  "Great. Please start with the first draft.",
  "Sure. I will submit it tonight.",
];

function ConversationList() {
  return (
    <Card>
      {conversations.map((c) => (
        <Item
          key={c.who}
          left={
            <>
              👤 {c.who} · <span className="muted">{c.msg}</span>
            </>
          }
          right={<small>{c.time}</small>}
        />
      ))}
    </Card>
  );
}

function ConversationView() {
  return (
    <Card>
      <h3>Nabila · Presentation Design</h3>
      {messages.map((m, i) => (
        <p key={i} className="notice">{m}</p>
      ))}
      <input className="search" style={{ width: "75%" }} placeholder="Type a message..." />
      <Button>Send</Button>
    </Card>
  );
}

export default function ChatPage() {
  return (
    <section className="page">
      <PageHeader
        title="Messages"
        description="Secure customer-provider conversations."
      />
      <div className="grid2">
        <ConversationList />
        <ConversationView />
      </div>
    </section>
  );
}