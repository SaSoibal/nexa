import Link from "next/link";

export function Topbar() {
  return (
    <header className="top">
      <input className="search" placeholder="Search jobs, users, services..." />
      <Link href="/dashboard/notifications" className="btn outline">
        🔔 3
      </Link>
    </header>
  );
}