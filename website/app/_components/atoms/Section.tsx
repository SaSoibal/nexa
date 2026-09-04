import type { ReactNode } from "react";

export function Section({
  title,
  action,
  children,
}: {
  title?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="card">
      {(title || action) && (
        <div className="section">
          {title && <h3>{title}</h3>}
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

export function PageHeader({
  breadcrumb,
  title,
  description,
  action,
}: {
  breadcrumb?: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="title">
      <div>
        {breadcrumb && <div className="muted">{breadcrumb}</div>}
        <h1>{title}</h1>
        {description && <p className="muted">{description}</p>}
      </div>
      {action}
    </div>
  );
}