import React from "react";

export function Tag({ children }: { children: React.ReactNode }) {
  return <span className="tag">{children}</span>;
}

export function TagList({ items }: { items: string[] }) {
  if (!items.length) {
    return <p className="muted">No items listed yet.</p>;
  }
  return (
    <div className="tag-list">
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </div>
  );
}
