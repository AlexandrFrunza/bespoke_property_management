import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/{-$lang}/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Bespoke Property Management Cyprus" },
      { name: "description", content: "Contact Bespoke Property Management Cyprus for property management, maintenance, repairs and property care. Our office is in Oroklini, Larnaca, Cyprus." },
      { property: "og:title", content: "Contact | Bespoke Property Management Cyprus" },
      { property: "og:description", content: "Get in touch about property management, maintenance or renovation in Cyprus. Telephone +357 24 322663, Oroklini, Larnaca." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const EMAIL = "info@bespokepropertymanagementcyprus.com";

function ContactPage() {
  const { t } = useLang();
  const c = t.contactPage;
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Enquiry — ${form.name || "website"}`;
    const body = [
      form.message,
      "",
      `${c.formName}: ${form.name}`,
      `${c.formEmail}: ${form.email}`,
      form.phone ? `${c.formPhone}: ${form.phone}` : "",
    ].filter(Boolean).join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputClass = "h-11 w-full rounded-sm border border-border bg-card px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-sea";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-[1216px] px-6 py-16 md:px-10 md:py-24">
          <p className="mb-4 text-xs font-semibold uppercase text-sea">{c.eyebrow}</p>
          <h1 className="max-w-[700px] text-balance text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">{c.title}</h1>
          <p className="mt-5 max-w-[620px] text-base leading-relaxed text-muted-foreground">{c.intro}</p>

          <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-20">
            <div>
              <h2 className="text-lg font-semibold text-card-foreground">{c.inquiriesTitle}</h2>
              <p className="mt-3 max-w-[520px] text-sm leading-relaxed text-muted-foreground">{c.inquiriesText}</p>

              <form className="mt-8 space-y-4" onSubmit={submit}>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={c.formName}
                  aria-label={c.formName}
                  className={inputClass}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={c.formEmail}
                    aria-label={c.formEmail}
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder={c.formPhone}
                    aria-label={c.formPhone}
                    className={inputClass}
                  />
                </div>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={c.formMessage}
                  aria-label={c.formMessage}
                  className="w-full rounded-sm border border-border bg-card px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-sea"
                />
                <Button type="submit" variant="inquiry" className="h-12 w-full rounded-sm px-6 text-sm sm:w-auto">
                  {c.formSend}
                </Button>
                <p className="text-xs text-muted-foreground">{c.formNote}</p>
              </form>
            </div>

            <div className="space-y-10 border-t border-border pt-10 md:border-l md:border-t-0 md:pl-12 md:pt-0">
              <div>
                <h2 className="text-lg font-semibold text-card-foreground">{c.getInTouch}</h2>
                <div className="mt-5 space-y-4 text-sm">
                  <div>
                    <p className="text-xs font-semibold uppercase text-muted-foreground">{c.telephone}</p>
                    <a className="mt-1 block w-fit font-heading text-xl font-medium hover:text-sea" href="tel:+35724322663">+357 24 322663</a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-muted-foreground">{c.emergency}</p>
                    <a className="mt-1 block w-fit hover:text-sea" href="tel:+35796290399">+357 96 290399</a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-muted-foreground">{c.emailLabel}</p>
                    <a className="mt-1 block w-fit break-all hover:text-sea" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-card-foreground">{c.detailsTitle}</h2>
                <div className="mt-5 space-y-4 text-sm">
                  <div>
                    <p className="text-xs font-semibold uppercase text-muted-foreground">{c.headOffice}</p>
                    <p className="mt-1 text-muted-foreground">Griva Digeni Ave 24<br />A.K Building, Shop 6<br />Oroklini 7040<br />Larnaca, Cyprus</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-muted-foreground">{c.officeHours}</p>
                    <p className="mt-1 text-muted-foreground">{c.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
