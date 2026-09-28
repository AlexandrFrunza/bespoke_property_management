import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import currentLogo from "@/assets/bespoke-current-logo.webp";

const FACEBOOK_URL = "https://www.facebook.com/BespokePropertyManagement1";
const INSTAGRAM_URL = "https://www.instagram.com/bespokepropertymanagement/?hl=en";
const PHONE = "+357 24 322663";
const MOBILE = "+357 96 290399";
const EMAIL = "info@bespokepropertymanagementcyprus.com";

export function SiteFooter() {
  const { t, langParam } = useLang();
  return (
    <footer className="border-t border-border px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1328px] flex-col gap-10 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4">
          <Link to="/{-$lang}" params={{ lang: langParam }} className="block w-fit">
            <img src={currentLogo} alt={t.footer.logoAlt} width={1500} height={386} className="h-auto w-[220px]" loading="lazy" />
          </Link>
          <span className="text-xs text-muted-foreground">{t.footer.tagline}</span>
          <div className="flex gap-3">
            <a
              aria-label="Facebook"
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-sea hover:text-sea"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              aria-label="Instagram"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-sea hover:text-sea"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="mb-1 font-heading text-base font-medium">{t.footer.contactTitle}</p>
          <a className="flex items-center gap-2 w-fit hover:text-sea" href="tel:+35724322663">
            <Phone className="h-4 w-4 text-sea" aria-hidden="true" />
            {PHONE}
          </a>
          <a className="flex items-center gap-2 w-fit hover:text-sea" href="tel:+35796290399">
            <Phone className="h-4 w-4 text-sea" aria-hidden="true" />
            {MOBILE}
          </a>
          <a className="flex items-center gap-2 w-fit break-all hover:text-sea" href={`mailto:${EMAIL}`}>
            <Mail className="h-4 w-4 shrink-0 text-sea" aria-hidden="true" />
            {EMAIL}
          </a>
          <p className="mt-1 flex max-w-xs items-start gap-2 text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sea" aria-hidden="true" />
            {t.footer.address}
          </p>
          <p className="text-muted-foreground">{t.footer.hours}</p>
        </div>
      </div>
    </footer>
  );
}
