import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Globe, MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { categories } from "@/data/solutions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AgroMachGlobal — Dhaka, Bangladesh" },
      {
        name: "description",
        content:
          "Contact AgroMachGlobal at Ka-115/6/1, Mohakhali Dakkhinpara, Banani, Dhaka-1212. Call +8801323878050 (WhatsApp) or email ceo@agromach-global.com.",
      },
      { property: "og:title", content: "Contact AgroMachGlobal" },
      {
        property: "og:description",
        content: "Talk to our engineers about your agro machinery project in Bangladesh.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const mailBody = encodeURIComponent(
    "Company:\nSolution area of interest:\nRequired capacity:\nSite location:\nBudget range:\n\nDetails:\n",
  );

  return (
    <div className="mx-auto max-w-7xl px-5 py-16">
      <p className="eyebrow text-accent">Contact Us</p>
      <h1 className="rule-brand mt-3 max-w-3xl text-4xl md:text-5xl">
        Let us engineer your next agro project together
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Share your capacity target, site condition and budget. Our engineers will respond with a proposed
        layout, machinery list and an honest cost estimate.
      </p>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="flex gap-4 border-l-4 border-primary bg-surface p-6">
            <MapPin className="h-6 w-6 shrink-0 text-primary" />
            <div>
              <h2 className="text-lg">Office Address</h2>
              <p className="mt-1 text-muted-foreground">{company.address}</p>
            </div>
          </div>

          <div className="flex gap-4 border-l-4 border-accent bg-surface p-6">
            <Phone className="h-6 w-6 shrink-0 text-accent" />
            <div>
              <h2 className="text-lg">Phone</h2>
              <p className="mt-1">
                <a href={`tel:${company.phones[0]}`} className="text-muted-foreground hover:text-primary">
                  {company.phones[0]} (WhatsApp)
                </a>
                <br />
                <a href={`tel:${company.phones[1]}`} className="text-muted-foreground hover:text-primary">
                  {company.phones[1]}
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-4 border-l-4 border-primary bg-surface p-6">
            <Mail className="h-6 w-6 shrink-0 text-primary" />
            <div>
              <h2 className="text-lg">Email</h2>
              <p className="mt-1">
                {company.emails.map((e) => (
                  <a
                    key={e}
                    href={`mailto:${e}?subject=${encodeURIComponent("Enquiry from website")}&body=${mailBody}`}
                    className="block text-muted-foreground hover:text-primary"
                  >
                    {e}
                  </a>
                ))}
              </p>
            </div>
          </div>

          <div className="flex gap-4 border-l-4 border-accent bg-surface p-6">
            <Globe className="h-6 w-6 shrink-0 text-accent" />
            <div>
              <h2 className="text-lg">Website</h2>
              <p className="mt-1 text-muted-foreground">{company.website}</p>
            </div>
          </div>

          <a
            href={`https://wa.me/${company.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary px-7 py-4 font-display text-sm font-bold tracking-wide text-primary-foreground uppercase hover:bg-accent hover:text-accent-foreground"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>

        <div className="bg-ink p-8 text-ink-foreground">
          <h2 className="text-2xl">Enquiry checklist</h2>
          <p className="mt-3 text-ink-foreground/70">
            Include the following in your email or WhatsApp message so we can reply with a meaningful
            proposal at the first response:
          </p>
          <ul className="mt-6 space-y-3 text-ink-foreground/80">
            {[
              "Solution area and equipment of interest",
              "Required capacity (TPH / MTPD / birds per hour / eggs per hour)",
              "Raw material and finished product specification",
              "Site location, available land or building dimensions",
              "Utility availability: power, gas, steam, water",
              "Indicative budget range and expected commissioning date",
            ].map((t) => (
              <li key={t} className="flex gap-3 border-b border-ink-foreground/10 pb-3">
                <span className="text-accent">•</span>
                {t}
              </li>
            ))}
          </ul>

          <h3 className="eyebrow mt-8 text-accent">Solution areas</h3>
          <p className="mt-3 text-sm text-ink-foreground/60">
            {categories.map((c) => `${c.letter}. ${c.title.replace(" Solution", "")}`).join(" · ")}
          </p>
        </div>
      </div>
    </div>
  );
}
