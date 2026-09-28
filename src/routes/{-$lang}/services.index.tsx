import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useLang } from "@/lib/i18n";
import { services } from "@/lib/services";
import servicesHero from "@/assets/services-hero.jpg";

export const Route = createFileRoute("/{-$lang}/services/")({
  head: () => ({
    meta: [
      { title: "Our Services | Bespoke Property Management Cyprus" },
      { name: "description", content: "All our property services in Cyprus: key holding, inspections, pool maintenance, cleaning, gardening, repairs, communal and complex management, renovation, rental services and more." },
      { property: "og:title", content: "Our Services | Bespoke Property Management Cyprus" },
      { property: "og:description", content: "From key holding and inspections to renovation and rental services — everything your Cyprus property needs, all year round." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t, langParam } = useLang();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="relative isolate flex min-h-[420px] items-end overflow-hidden px-6 pb-12 pt-28 md:min-h-[480px] md:px-10 md:pb-16 lg:px-14">
          <img src={servicesHero} alt="Mediterranean villa with pool and garden being cared for at sunrise" width={1920} height={800} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
          <div className="mx-auto w-full max-w-[1328px]">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase text-primary-foreground"><span className="h-px w-9 bg-secondary" /> {t.servicesPage.eyebrow}</p>
            <h1 className="max-w-[650px] text-balance font-heading text-3xl font-semibold leading-[1.15] text-primary-foreground sm:text-4xl lg:text-5xl">{t.servicesPage.title}</h1>
            <p className="mt-5 max-w-[550px] text-base leading-relaxed text-primary-foreground/90 md:text-lg">{t.servicesPage.intro}</p>
          </div>
        </section>

        <section className="mx-auto max-w-[1216px] px-6 py-16 md:px-10 md:py-24">

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const text = t.services[i]!;
              const cardClass = "group relative flex min-h-[210px] flex-col justify-between overflow-hidden rounded-md border border-border bg-card p-7 transition-colors hover:border-sea/60";
              const inner = (
                <>
                  <img src={service.image} alt="" aria-hidden="true" width={512} height={512} loading="lazy" className={`pointer-events-none absolute -top-5 -right-5 object-contain opacity-[0.5] ${service.imageClass ?? "h-40 w-40"}`} />
                  <div className="relative">
                    <h2 className="mt-14 text-lg font-semibold text-card-foreground">{text.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text.description}</p>
                  </div>
                </>
              );
              return service.slug ? (
                <Link key={service.number} to="/{-$lang}/services/$slug" params={{ lang: langParam, slug: service.slug }} className={cardClass}>
                  {inner}
                </Link>
              ) : (
                <article key={service.number} className={cardClass}>
                  {inner}
                </article>
              );
            })}
          </div>

          <div className="mt-14 border-t border-border pt-10">
            <p className="max-w-[560px] text-base leading-relaxed text-muted-foreground">{t.servicesPage.closingText}</p>
            <Button asChild variant="inquiry" className="mt-6 h-12 rounded-sm px-6 text-sm">
              <Link to="/{-$lang}/contact" params={{ lang: langParam }}>{t.common.startConversation} <ArrowUpRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
