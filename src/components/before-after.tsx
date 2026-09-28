import { useRef, useState, type PointerEvent } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function BeforeAfter({ before, after, className = "" }: { before: string; after: string; className?: string }) {
  const { t } = useLang();
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const moveTo = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100)));
  };

  const stopDragging = () => {
    dragging.current = false;
  };

  return (
    // Drag anywhere on the photo to move the divider. touch-action: pan-y keeps vertical
    // swipes scrolling the page while horizontal swipes move the divider.
    <div
      className={`relative touch-pan-y select-none overflow-hidden rounded-md border border-border cursor-ew-resize ${className}`}
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        moveTo(e);
      }}
      onPointerMove={(e) => {
        if (dragging.current) moveTo(e);
      }}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
    >
      <img src={after} alt="" loading="lazy" draggable={false} className="block h-full w-full object-cover" />
      <img
        src={before}
        alt=""
        loading="lazy"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <span className="pointer-events-none absolute left-3 top-3 rounded-sm bg-primary/80 px-2 py-1 text-[11px] font-semibold uppercase text-primary-foreground">{t.projectsSection.before}</span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-sm bg-secondary/90 px-2 py-1 text-[11px] font-semibold uppercase text-primary">{t.projectsSection.after}</span>
      <div className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white/90 shadow-sm" style={{ left: `${pos}%` }} aria-hidden="true">
        <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-md">
          <ChevronsLeftRight className="h-4 w-4" />
        </span>
      </div>
      {/* Keyboard access only (Tab + arrow keys); pointer input is handled by the container. */}
      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        aria-label={`${t.projectsSection.before} / ${t.projectsSection.after}`}
        onChange={(e) => setPos(Number(e.target.value))}
        className="pointer-events-none absolute inset-0 h-full w-full opacity-0"
      />
    </div>
  );
}
