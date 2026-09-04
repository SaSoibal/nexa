import { Card } from "@/app/_components/atoms/Card";
import { Item } from "@/app/_components/atoms/Item";
import { Button } from "@/app/_components/atoms/Button";
import { Badge } from "@/app/_components/atoms/Badge";
import { PageHeader } from "@/app/_components/atoms/Section";
import { notifications } from "@/app/_data/marketplace";

export default function NotificationsPage() {
  return (
    <section className="page">
      <PageHeader
        title="Notifications"
        description="10 realistic activity notifications."
        action={<Button variant="outline">Mark all read</Button>}
      />
      <Card>
        {notifications.map((n, i) => (
          <Item
            key={i}
            left={
              <>
                <b>{n}</b>
                <br />
                <small className="muted">Today · {i + 1}h ago</small>
              </>
            }
            right={<Badge tone={i < 3 ? "blue" : "default"}>{i < 3 ? "NEW" : "VIEW"}</Badge>}
          />
        ))}
      </Card>
    </section>
  );
}