import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, ShieldCheck, Wrench, LineChart } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { company } from "@/data/company";
import { categories } from "@/data/solutions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AgroMachGlobal — Hi-Tech Agro Machineries from Global Source" },
      {
        name: "description",
        content:
          "AgroMachGlobal supplies affordable hi-tech agro machineries and turnkey solutions for feed, flour, rice, poultry, hatchery and processing industries in Bangladesh.",
      },
      { property: "og:title", content: "AgroMachGlobal — Hi-Tech Agro Machineries from Global Source" },
      {
        property: "og:description",
        content:
          "Turnkey agro-industrial machinery solutions: storage, poultry, hatchery, processing, feed, flour, rice milling and more.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { value: `${categories.length}`, label: "Solution areas" },
  { value: "70+", label: "Equipment categories" },
  { value: `Since ${company.founded}`, label: "Serving Bangladesh" },
  { value: "Global", label: "Vetted machinery sources" },
];

const values = [
  {
    icon: Globe2,
    title: "Global Sourcing",
    text: "Machinery selected from proven European, Turkish, Chinese and Indian manufacturers — matched to your budget.",
  },
  {
    icon: Wrench,
    title: "Turnkey Delivery",
    text: "Design, supply, erection, commissioning and training handled under one single point of responsibility.",
  },
  {
    icon: LineChart,
    title: "Process Engineering",
    text: "Process and energy audits that lift yield and cut cost per tonne in mills and processing plants.",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Support",
    text: "Spare parts, consumables and technical support so your line keeps running season after season.",
  },
];

function Home() {
  return (
    <>
      <section className="relative isolate">
        <img
          src={hero}
          alt="Modern agro-industrial complex with grain silos at sunrise"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1088}
        />
        <div className="hero-mask absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 md:py-40">
          <p className="eyebrow text-accent">Established {company.founded} · Dhaka, Bangladesh</p>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] text-ink-foreground md:text-7xl">
            Your Partner for <span className="text-primary">Affordable Hi-Tech</span> Agro Machineries
            from Global Source
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-foreground/80">
            AgroMachGlobal delivers turnkey machinery and engineering solutions for the advancement of the
            agro-industrial sector of Bangladesh — from grain storage and feed milling to poultry
            processing and pre-engineered steel buildings.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 bg-primary px-7 py-4 font-display text-sm font-bold tracking-wide text-primary-foreground uppercase transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Explore Solutions <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-ink-foreground/40 px-7 py-4 font-display text-sm font-bold tracking-wide text-ink-foreground uppercase transition-colors hover:bg-ink-foreground/10"
            >
              Talk to an Engineer
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-r border-border/60 py-8 last:border-r-0">
              <div className="font-display text-3xl font-extrabold text-primary">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <p className="eyebrow text-accent">Why AgroMachGlobal</p>
        <h2 className="rule-brand mt-3 max-w-2xl text-3xl md:text-4xl">
          Hi-tech capability at a price the Bangladeshi agro industry can invest in
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="border-t-2 border-primary pt-5">
              <v.icon className="h-7 w-7 text-accent" />
              <h3 className="mt-4 text-lg">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-accent">Our Solutions</p>
              <h2 className="rule-brand mt-3 text-3xl md:text-4xl">
                {categories.length} solution areas for the agro industry
              </h2>
            </div>
            <Link to="/solutions" className="font-semibold text-primary hover:text-accent">
              View all solutions →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.slice(0, 6).map((c) => (
              <Link
                key={c.slug}
                to="/solutions/$category"
                params={{ category: c.slug }}
                className="group block bg-card transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-0 left-0 bg-primary px-3 py-2 font-display font-bold text-primary-foreground">
                    {c.letter}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg leading-snug group-hover:text-primary">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.tagline}</p>
                  <p className="mt-4 text-sm font-semibold text-accent">{c.items.length} equipment lines →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-ink-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-5">
          <div>
            <h2 className="max-w-xl text-3xl md:text-4xl">
              Planning a new plant or upgrading an existing one?
            </h2>
            <p className="mt-3 max-w-xl text-ink-foreground/70">
              Share your capacity target and budget. We will come back with a layout, machinery list and an
              honest cost estimate.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent px-7 py-4 font-display text-sm font-bold tracking-wide text-accent-foreground uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Request a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
