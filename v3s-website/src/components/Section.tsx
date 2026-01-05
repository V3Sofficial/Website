import React from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function Section({ children, className }: SectionProps) {
  return (
    <section className={["section", className].filter(Boolean).join(" ")}>
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as = "h2",
}: SectionHeaderProps) {
  const Heading = as;
  return (
    <div className={["section-header", align].join(" ")}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Heading>{title}</Heading>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}
