import { useState } from "react";
import { useLang } from "@/lib/i18n";

export function BeforeAfter({ before, after, className = "" }: { before: string; after: string; className?: string }) {
  const { t } = useLang();
  const [pos, setPos] = useState(50);

  return (
    <div className={`relative overflow-hidden rounded-md border border-border ${className}`}>
      <img src={after} alt="" loading="lazy" className="block h-full w-full object-cover" />
      <img
        src={before}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <span className="pointer-events-none absolute left-3 top-3 rounded-sm bg-primary/80 px-2 py-1 text-[11px] font-semibold uppercase text-primary-foreground">{t.projectsSection.before}</span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-sm bg-secondary/90 px-2 py-1 text-[11px] font-semibold uppercase text-primary">{t.projectsSection.after}</span>
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white/90 shadow-sm" style={{ left: `${pos}%` }} aria-hidden="true" />
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        aria-label={`${t.projectsSection.before} / ${t.projectsSection.after}`}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
