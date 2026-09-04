type Benefit = { icon: string; title: string; description: string };

const benefits: Benefit[] = [
  { icon: "💼", title: "Earn from skills", description: "Offer professional services and complete jobs." },
  { icon: "🛣️", title: "Earn from routes", description: "Get paid for zero-detour PUDO deliveries." },
  { icon: "⏱️", title: "Earn from time", description: "Monetize free hours with micro-tasks." },
  { icon: "📚", title: "Learn and grow", description: "Unlock paid work through guided courses." },
];

function BenefitRow({ icon, title, description }: Benefit) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          background: "#ffffff15",
          display: "grid",
          placeItems: "center",
          fontSize: 18,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <b style={{ display: "block", marginBottom: 2 }}>{title}</b>
        <span style={{ color: "#c5cce0", fontSize: 13 }}>{description}</span>
      </div>
    </div>
  );
}

export function LoginHeroPanel() {
  return (
    <div
      className="hero"
      style={{
        borderRadius: 22,
        padding: 36,
        color: "white",
        display: "flex",
        flexDirection: "column",
        gap: 22,
        minHeight: 480,
      }}
    >
      <span className="badge purple" style={{ alignSelf: "flex-start" }}>
        NEXT-GEN INCOME MARKETPLACE
      </span>
      <h1 style={{ fontSize: 44, lineHeight: 1.05, margin: 0 }}>
        Turn your <span style={{ color: "#b3a8ff" }}>time, skills & route</span> into income.
      </h1>
      <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#c5cce0" }}>
        Premium marketplace for customers, providers, micro-task workers and route-based delivery partners — built around Earn, Hire, Learn with smart matching and protected payments.
      </p>
      <div style={{ display: "grid", gap: 16, marginTop: "auto" }}>
        {benefits.map((b) => (
          <BenefitRow key={b.title} {...b} />
        ))}
      </div>
    </div>
  );
}