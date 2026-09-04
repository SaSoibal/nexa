export function Avatar({ letter }: { letter: string }) {
  return <div className="ava">{letter}</div>;
}

export function ProfileHeader({
  letter,
  name,
  role,
  verified,
}: {
  letter: string;
  name: string;
  role: string;
  verified?: boolean;
}) {
  return (
    <div className="profile">
      <Avatar letter={letter} />
      <div>
        <h2 style={{ margin: 0 }}>{name}</h2>
        <p className="muted">{role}</p>
        {verified && <span className="badge ok">✓ Identity Verified</span>}
      </div>
    </div>
  );
}