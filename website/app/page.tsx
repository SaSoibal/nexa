import { LoginForm } from "@/app/_components/landing/LoginForm";
import { LoginHeroPanel } from "@/app/_components/landing/LoginHeroPanel";

export default function LoginPage() {
  return (
    <div className="landing" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <section
        style={{
          flex: 1,
          padding: "60px 7%",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 50,
          alignItems: "center",
          background: "radial-gradient(circle at 90% 10%, #e8e6ff, transparent 35%)",
        }}
      >
        <LoginHeroPanel />
        <LoginForm />
      </section>
    </div>
  );
}