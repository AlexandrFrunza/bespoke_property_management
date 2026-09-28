import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLang, langs, stripLangPrefix, toLangParam } from "@/lib/i18n";
import currentLogo from "@/assets/bespoke-current-logo.webp";

function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang } = useLang();
  return (
    <div className={`flex items-center gap-0.5 ${className}`} role="group" aria-label="Language / Γλώσσα / Язык">
      {langs.map((l) => (
        <Link
          key={l.code}
          to="."
          params={(prev: Record<string, string | undefined>) => ({ ...prev, lang: toLangParam(l.code) })}
          hrefLang={l.code}
          aria-current={lang === l.code ? "true" : undefined}
          className={`rounded-sm px-2 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
            lang === l.code ? "text-sea" : "text-muted-foreground hover:text-sea"
          }`}
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const { t, langParam } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useLocation({ select: (s) => stripLangPrefix(s.pathname) });

  const items = [
    { label: t.nav.home, to: "/{-$lang}" as const, path: "/", hash: undefined as string | undefined },
    { label: t.nav.services, to: "/{-$lang}/services" as const, path: "/services", hash: undefined },
    { label: t.nav.payment, to: "/{-$lang}/payments" as const, path: "/payments", hash: undefined },
    { label: t.nav.contact, to: "/{-$lang}/contact" as const, path: "/contact", hash: undefined },
  ];

  const isActive = (path: string, hash?: string) =>
    hash ? pathname === path : pathname === path && path !== "/";

  return (
    <header className="relative z-20 border-b border-border bg-background">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-3 md:px-10 lg:px-14">
        <Link to="/{-$lang}" params={{ lang: langParam }} aria-label="Bespoke Property Management home" className="block min-w-0 shrink-0">
          <img src={currentLogo} alt="Bespoke Property Management" width={1500} height={386} className="h-auto w-[205px] sm:w-[255px] lg:w-[330px]" />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-9 text-xs font-semibold uppercase md:flex">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              params={{ lang: langParam }}
              {...(item.hash ? { hash: item.hash } : {})}
              className={`transition-colors hover:text-sea ${isActive(item.path, item.hash) ? "text-sea" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher className="max-sm:hidden" />
          <Button variant="ghost" size="icon" className="md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {menuOpen && (
        <nav aria-label="Mobile navigation" className="absolute inset-x-0 top-full flex flex-col gap-0 border-b border-border bg-background px-6 py-3 shadow-sm md:hidden">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              params={{ lang: langParam }}
              {...(item.hash ? { hash: item.hash } : {})}
              className={`border-b border-border py-3 text-sm font-medium last:border-0 ${isActive(item.path, item.hash) ? "text-sea" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center justify-between py-3">
            <span className="text-xs font-semibold uppercase text-muted-foreground">EN · ΕΛ · РУ</span>
            <LanguageSwitcher />
          </div>
        </nav>
      )}
    </header>
  );
}
