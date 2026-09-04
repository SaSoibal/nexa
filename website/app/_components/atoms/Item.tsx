import type { ReactNode } from "react";

export function Item({
  left,
  right,
  muted,
}: {
  left: ReactNode;
  right: ReactNode;
  muted?: ReactNode;
}) {
  return (
    <div className="item">
      <span>
        {left}
        {muted && (
          <>
            <br />
            <small className="muted">{muted}</small>
          </>
        )}
      </span>
      {right}
    </div>
  );
}