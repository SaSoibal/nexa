import { Card } from "@/app/_components/atoms/Card";
import { Badge } from "@/app/_components/atoms/Badge";
import { PageHeader } from "@/app/_components/atoms/Section";

type Course = {
  title: string;
  badge: "POPULAR" | "SKILL" | "CAREER";
  tone: "purple" | "blue" | "ok";
  lessons: string;
  rating: string;
  price: string;
};

const courses: Course[] = [
  { title: "Advanced Excel", badge: "POPULAR", tone: "purple", lessons: "32 lessons", rating: "4.9 rating", price: "৳1,200" },
  { title: "Tax Documentation", badge: "SKILL", tone: "blue", lessons: "18 lessons", rating: "4.8 rating", price: "৳900" },
  { title: "Freelance Basics", badge: "CAREER", tone: "ok", lessons: "14 lessons", rating: "4.9 rating", price: "৳700" },
];

function CourseCard({ title, badge, tone, lessons, rating, price }: Course) {
  return (
    <Card>
      <Badge tone={tone}>{badge}</Badge>
      <h3>{title}</h3>
      <p className="muted">{lessons} · {rating}</p>
      <b>{price}</b>
    </Card>
  );
}

export default function LearningPage() {
  return (
    <section className="page">
      <PageHeader
        title="Learn & Earn"
        description="Courses connected to marketplace opportunities."
      />
      <div className="grid3">
        {courses.map((c) => (
          <CourseCard key={c.title} {...c} />
        ))}
      </div>
    </section>
  );
}