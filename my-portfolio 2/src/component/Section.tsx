import { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
};

export default function Section({ id, title, subtitle, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-6 py-20 scroll-mt-28 ${className}`}>
      <header className="mb-10 md:mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-white/60">{id}</p>
        <h2 className="mt-2 text-5xl md:text-7xl font-extrabold tracking-tight text-white">{title}</h2>
        {subtitle ? <p className="mt-4 text-lg text-white/75 max-w-2xl">{subtitle}</p> : null}
      </header>
      {children}
    </section>
  );
}
