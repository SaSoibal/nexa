"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/app/_components/atoms/Button";

type Mode = "login" | "register";

function AuthTabs({ mode, onChange }: { mode: Mode; onChange: (m: Mode) => void }) {
  return (
    <div style={{ display: "flex", gap: 6, background: "#f5f7fb", padding: 4, borderRadius: 10, marginBottom: 18 }}>
      {(["login", "register"] as const).map((m) => (
        <button
          key={m}
          type="button"
          onClick={() => onChange(m)}
          style={{
            flex: 1,
            border: 0,
            padding: "10px 12px",
            borderRadius: 8,
            fontWeight: 750,
            cursor: "pointer",
            background: mode === m ? "#fff" : "transparent",
            color: mode === m ? "#182033" : "#718097",
            boxShadow: mode === m ? "0 2px 8px #17203310" : "none",
          }}
        >
          {m === "login" ? "Sign in" : "Create account"}
        </button>
      ))}
    </div>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
  defaultValue,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
}) {
  return (
    <div className="field">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} defaultValue={defaultValue} />
    </div>
  );
}

function SocialButton({ label, icon }: { label: string; icon: string }) {
  return (
    <button
      type="button"
      style={{
        flex: 1,
        border: "1px solid #e1e5ed",
        background: "#fff",
        borderRadius: 9,
        padding: "10px 12px",
        fontWeight: 700,
        color: "#182033",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
      }}
    >
      <span aria-hidden>{icon}</span>
      {label}
    </button>
  );
}

export function LoginForm() {
  const [mode, setMode] = useState<Mode>("login");
  const router = useRouter();

  return (
    <div className="card" style={{ padding: 28 }}>
      <h2 style={{ margin: "0 0 4px" }}>
        {mode === "login" ? "Welcome back" : "Join NEXA"}
      </h2>
      <p className="muted" style={{ marginBottom: 18 }}>
        {mode === "login"
          ? "Sign in to manage jobs, services and earnings."
          : "Create an account to start earning or hiring."}
      </p>

      <AuthTabs mode={mode} onChange={setMode} />

      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/dashboard");
        }}
      >
        {mode === "register" && (
          <div className="fg">
            <Field label="First name" placeholder="Rashed" />
            <Field label="Last name" placeholder="Rahman" />
          </div>
        )}
        <Field label="Email" type="email" placeholder="you@example.com" />
        <Field label="Password" type="password" placeholder="••••••••" />
        {mode === "register" && (
          <Field label="Confirm password" type="password" placeholder="••••••••" />
        )}

        {mode === "login" && (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12 }}>
            <label style={{ display: "flex", gap: 6, alignItems: "center", color: "#59657b" }}>
              <input type="checkbox" /> Remember me
            </label>
            <Link href="#" style={{ color: "#5048df", fontWeight: 700, textDecoration: "none" }}>
              Forgot password?
            </Link>
          </div>
        )}

        <Button type="submit">
          {mode === "login" ? "Sign in" : "Create account"}
        </Button>

        <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#718097", fontSize: 12 }}>
          <div style={{ flex: 1, height: 1, background: "#edf0f4" }} />
          OR CONTINUE WITH
          <div style={{ flex: 1, height: 1, background: "#edf0f4" }} />
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <SocialButton label="Google" icon="🇬" />
          <SocialButton label="Facebook" icon="🇫" />
          <SocialButton label="GitHub" icon="🐙" />
        </div>

        <p className="muted" style={{ fontSize: 12, textAlign: "center", margin: 0 }}>
          {mode === "login" ? (
            <>
              New to NEXA?{" "}
              <button
                type="button"
                onClick={() => setMode("register")}
                style={{ background: "transparent", border: 0, color: "#5048df", fontWeight: 700, cursor: "pointer", padding: 0 }}
              >
                Create an account
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("login")}
                style={{ background: "transparent", border: 0, color: "#5048df", fontWeight: 700, cursor: "pointer", padding: 0 }}
              >
                Sign in
              </button>
            </>
          )}
        </p>
      </form>
    </div>
  );
}