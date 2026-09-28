import { createFileRoute, notFound, Outlet, redirect } from "@tanstack/react-router";
import { langs, localizePath, stripLangPrefix, type Lang } from "@/lib/i18n";

// Production origin, used for canonical and hreflang URLs (search engines require absolute URLs).
const SITE_URL = "https://bespokepropertymanagementcyprus.com";

// Wraps every page: "/services" is English, "/el/services" and "/ru/services" are Greek and Russian.
export const Route = createFileRoute("/{-$lang}")({
  beforeLoad: ({ params, location }) => {
    if (params.lang === undefined) return;
    // English has no prefix, so /en/services permanently redirects to /services.
    if (params.lang === "en") {
      throw redirect({ href: stripLangPrefix(location.pathname), statusCode: 301 });
    }
    if (params.lang !== "el" && params.lang !== "ru") throw notFound();
  },
  head: ({ matches, params }) => {
    const lang = (params.lang ?? "en") as Lang;
    const path = stripLangPrefix(matches[matches.length - 1]?.pathname ?? "/");
    const url = (l: Lang) => SITE_URL + localizePath(path, l);
    return {
      links: [
        { rel: "canonical", href: url(lang) },
        ...langs.map((l) => ({ rel: "alternate", hrefLang: l.code, href: url(l.code) })),
        { rel: "alternate", hrefLang: "x-default", href: url("en") },
      ],
    };
  },
  component: Outlet,
});
