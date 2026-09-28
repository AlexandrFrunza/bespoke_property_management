import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useLang } from "@/lib/i18n";
import { services } from "@/lib/services";
import { BeforeAfter } from "@/components/before-after";
import { featuredProject } from "@/lib/projects";
import villaHero from "@/assets/cyprus-villa-hero.jpg";

export const Route = createFileRoute("/{-$lang}/")({
  head: () => ({
    meta: [
      { title: "Bespoke Property Management | Property Care in Cyprus" },
      { name: "description", content: "Personal property management and maintenance in Cyprus for villas, apartments, holiday homes and residential complexes. Key holding, inspections, pool care and more." },
      { property: "og:title", content: "Bespoke Property Management | Property Care in Cyprus" },
      { property: "og:description", content: "Reliable, personal property management and maintenance across Cyprus. We care for your property all year round." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

// Homepage shows these four services: Communal & complex management,
// Property management & care, Renovation & construction, Pool maintenance.
const featuredNumbers = ["07", "08", "09", "03"];

function HomePage() {
  const { t, langParam } = useLang();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = t.testimonials;

  const featuredServices = featuredNumbers
    .map((number) => {
      const index = services.findIndex((s) => s.number === number);
      return index >= 0 ? { service: services[index], text: t.services[index] } : null;
    })
    .filter((x): x is { service: (typeof services)[number]; text: (typeof t.services)[number] } => Boolean(x));

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setActiveTestimonial((i) => (i + 1) % testimonials.length), 9000);
    return () => clearTimeout(id);
  }, [activeTestimonial, testimonials.length]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main id="top">
        <section aria-labelledby="hero-title" className="hero-enter relative isolate flex min-h-[600px] items-end overflow-hidden px-6 pb-14 pt-28 md:min-h-[660px] md:px-10 md:pb-20 lg:h-[min(78vh,780px)] lg:min-h-[600px] lg:px-14">
          <img src={villaHero} alt="Mediterranean villa and swimming pool overlooking the sea at sunset" width={1920} height={900} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/80 via-primary/30 to-transparent" />
          <div className="mx-auto w-full max-w-[1328px]">
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase text-primary-foreground"><span className="h-px w-9 bg-secondary" /> {t.hero.eyebrow}</p>
            <h1 id="hero-title" className="max-w-[650px] text-balance font-heading text-4xl font-semibold leading-[1.15] text-primary-foreground sm:text-5xl lg:text-6xl">{t.hero.title}</h1>
            <p className="mt-6 max-w-[550px] text-base leading-relaxed text-primary-foreground/90 md:text-lg">{t.hero.subtitle}</p>
            <Button asChild variant="hero" className="mt-8 h-12 rounded-sm px-6 text-sm">
              <Link to="/{-$lang}/services" params={{ lang: langParam }}>{t.hero.cta} <ArrowDown aria-hidden="true" /></Link>
            </Button>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-[1216px] px-6 py-20 md:px-10 md:py-28">
          <div className="mb-11 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase text-sea">{t.home.servicesEyebrow}</p>
              <h2 className="max-w-[600px] text-balance text-3xl font-semibold leading-tight md:text-4xl">{t.home.servicesTitle}</h2>
            </div>
            <p className="max-w-[380px] text-sm leading-relaxed text-muted-foreground md:text-right">{t.home.servicesIntro}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map(({ service, text }) => (
              <Link
                key={service.number}
                to="/{-$lang}/services/$slug"
                params={{ lang: langParam, slug: service.slug! }}
                className="group relative flex min-h-[210px] flex-col justify-between overflow-hidden rounded-md border border-border bg-card p-7 transition-colors hover:border-sea/60"
              >
                <img src={service.image} alt="" aria-hidden="true" width={512} height={512} loading="lazy" className={`pointer-events-none absolute -top-5 -right-5 object-contain opacity-[0.5] ${service.imageClass ?? "h-40 w-40"}`} />
                <div className="relative">
                  <h3 className="mt-14 text-lg font-semibold text-card-foreground">{text.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-9">
            <Button asChild variant="inquiry" className="h-12 rounded-sm px-6 text-sm">
              <Link to="/{-$lang}/services" params={{ lang: langParam }}>{t.home.allServices} <ArrowUpRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </section>

        <section id="projects" className="bg-card px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1216px]">
            <div className="mb-11 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase text-sea">{t.projectsSection.eyebrow}</p>
                <h2 className="max-w-[600px] text-balance text-3xl font-semibold leading-tight md:text-4xl">{t.projectsSection.title}</h2>
              </div>
              <p className="max-w-[380px] text-sm leading-relaxed text-muted-foreground md:text-right">{t.projectsSection.intro}</p>
            </div>

            <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
              <BeforeAfter before={featuredProject.before} after={featuredProject.after} className="aspect-[4/3]" />
              <div>
                <h3 className="text-balance text-xl font-semibold text-card-foreground md:text-2xl">{t.projects[0]!.title}</h3>
                <p className="mt-3 max-w-[480px] text-sm leading-relaxed text-muted-foreground">{t.projects[0]!.description}</p>
                <Button asChild variant="inquiry" className="mt-8 h-12 rounded-sm px-6 text-sm">
                  <Link to="/{-$lang}/projects" params={{ lang: langParam }}>{t.projectsSection.viewAll} <ArrowUpRight aria-hidden="true" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-primary px-6 py-20 text-primary-foreground md:px-10 md:py-24">
          <div className="mx-auto max-w-[820px] text-center">
            <p className="mb-6 text-xs font-semibold uppercase text-secondary">{t.home.testimonialsEyebrow}</p>
            <div className="grid" aria-live="polite">
              {testimonials.map((item, i) => (
                <blockquote
                  key={item.name}
                  aria-hidden={i !== activeTestimonial}
                  className={`[grid-area:1/1] transition-opacity duration-700 ${i === activeTestimonial ? "opacity-100" : "pointer-events-none opacity-0"}`}
                >
                  <p className="text-balance font-heading text-base font-medium leading-relaxed md:text-lg">“{item.quote}”</p>
                  <footer className="mt-7 text-sm text-primary-foreground/70">
                    {item.name} <span className="mx-2 text-secondary">/</span> {item.role}
                  </footer>
                </blockquote>
              ))}
            </div>
            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => setActiveTestimonial((i) => (i - 1 + testimonials.length) % testimonials.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/25 text-primary-foreground transition-colors hover:border-secondary hover:text-secondary"
              >
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-2.5">
                {testimonials.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    aria-label={`Show testimonial ${i + 1} of ${testimonials.length}`}
                    aria-current={i === activeTestimonial}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === activeTestimonial ? "w-7 bg-secondary" : "w-1.5 bg-primary-foreground/30 hover:bg-primary-foreground/60"}`}
                  />
                ))}
              </div>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => setActiveTestimonial((i) => (i + 1) % testimonials.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/25 text-primary-foreground transition-colors hover:border-secondary hover:text-secondary"
              >
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto grid max-w-[1216px] gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:gap-20 md:px-10 md:py-28">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase text-sea">{t.home.contactEyebrow}</p>
            <h2 className="max-w-[440px] text-balance text-3xl font-semibold leading-tight md:text-4xl">{t.home.contactTitle}</h2>
            <p className="mt-5 max-w-[490px] text-base leading-relaxed text-muted-foreground">{t.home.contactText}</p>
          </div>
          <div className="border-l border-border pl-7 md:pl-12">
            <p className="text-xs font-semibold uppercase text-muted-foreground">{t.common.enquiriesLabel}</p>
            <a className="mt-3 block w-fit font-heading text-xl font-medium hover:text-sea" href="tel:+35724322663">+357 24 322663</a>
            <a className="mt-2 block w-fit text-sm hover:text-sea" href="tel:+35796290399">{t.home.mobileLabel} +357 96 290399</a>
            <a className="mt-5 block w-fit break-all text-sm text-muted-foreground hover:text-sea" href="mailto:info@bespokepropertymanagementcyprus.com">info@bespokepropertymanagementcyprus.com</a>
            <Button asChild variant="inquiry" className="mt-8 h-12 rounded-sm px-6 text-sm">
              <Link to="/{-$lang}/contact" params={{ lang: langParam }}>{t.common.startConversation} <ArrowUpRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
