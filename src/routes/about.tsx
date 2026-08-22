import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Flag, Heart } from "lucide-react";
import ceo from "@/assets/ceo.png.asset.json";
import { company } from "@/data/company";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AgroMachGlobal — Vision, Mission & Message from the CEO" },
      {
        name: "description",
        content:
          "Established in 2024, AgroMachGlobal delivers affordable hi-tech agro machineries for the advancement of the agro sector of Bangladesh. Read our vision, mission, objectives and core values.",
      },
      { property: "og:title", content: "About AgroMachGlobal" },
      {
        property: "og:description",
        content: "Message from the CEO, vision, mission, objectives and core values of AgroMachGlobal.",
      },
    ],
  }),
  component: About,
});

const objectives = [
  "Make hi-tech agro machinery affordable and accessible for Bangladeshi entrepreneurs.",
  "Reduce production cost per tonne through correct process engineering and energy efficiency.",
  "Deliver every project as a single point of responsibility — design to commissioning.",
  "Build local capability through operator, maintenance and management training.",
  "Guarantee after-sales spare parts and consumable support for the full machine life.",
  "Promote sustainable practices: renewable energy, waste rendering and insect protein.",
];

const coreValues = [
  { title: "Integrity", text: "Honest technical advice and transparent pricing, even when it costs us the order." },
  { title: "Engineering First", text: "Every proposal starts with process calculation, not with a price list." },
  { title: "Affordability", text: "The right technology at a price that keeps our clients' investment viable." },
  { title: "Accountability", text: "We own the result until the plant runs at the guaranteed performance." },
  { title: "Partnership", text: "We stay with our clients through BMRE, audits and spare support for years." },
  { title: "Sustainability", text: "Solutions that save energy, reduce waste and respect the environment." },
];

function About() {
  return (
    <div>
      <section className="bg-ink py-16 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5">
          <p className="eyebrow text-accent">About Us</p>
          <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl">
            Established in {company.founded} for the advancement of the agro sector of Bangladesh
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-ink-foreground/75">
            {company.name} was founded to bring affordable hi-tech agro machineries from global sources to
            the mills, farms, hatcheries and processing plants of Bangladesh — with the engineering depth
            to make them perform.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <p className="eyebrow text-accent">Message from the CEO</p>
        <div className="mt-8 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <img
              src={ceo.url}
              alt={`${company.ceo.name}, CEO of AgroMachGlobal`}
              className="w-full object-cover ring-1 ring-border"
              width={706}
              height={748}
            />
            <div className="mt-4 border-l-4 border-accent pl-4">
              <p className="font-display text-lg font-bold">{company.ceo.name}</p>
              <p className="text-sm text-primary">{company.ceo.credential}</p>
              <p className="text-sm text-muted-foreground">{company.ceo.title}</p>
            </div>
          </div>

          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Bangladesh has one of the fastest growing agro-industrial sectors in South Asia. Our feed
              mills, poultry farms, hatcheries, rice and flour mills have grown remarkably — yet many are
              still operating with machinery that costs too much to run and delivers less than it should.
            </p>
            <p>
              I have spent my career on the plant floor of this industry, and I have seen the same problem
              again and again: modern technology is available in the world market, but it reaches our
              entrepreneurs either too expensive, or without the engineering support needed to make it
              work. AgroMachGlobal was established in {company.founded} to close that gap.
            </p>
            <p>
              We do not simply sell machines. We study your raw material, your capacity target and your
              budget, then select equipment from a vetted global supplier network and take responsibility
              for design, supply, erection, commissioning and training. After hand-over we remain your
              partner for spares, consumables, BMRE and process audits.
            </p>
            <p className="font-medium text-foreground">
              Our promise is simple — affordable hi-tech agro machineries from global source, backed by
              engineers who understand your plant. I invite you to share your next project with us.
            </p>
            <p className="font-display font-bold text-foreground">
              {company.ceo.name}
              <br />
              <span className="text-sm font-medium text-muted-foreground">{company.ceo.title}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-3">
          {[
            {
              icon: Eye,
              title: "Vision",
              text: "To be the most trusted engineering partner of the agro industry of Bangladesh, making hi-tech machinery affordable for every serious entrepreneur.",
            },
            {
              icon: Target,
              title: "Mission",
              text: "To source, engineer and deliver cost-effective agro machinery solutions from around the world, supported by honest advice, competent commissioning and dependable after-sales service.",
            },
            {
              icon: Flag,
              title: "Motto",
              text: company.motto,
            },
          ].map((b) => (
            <div key={b.title} className="border-t-2 border-primary bg-card p-8">
              <b.icon className="h-8 w-8 text-accent" />
              <h2 className="mt-5 text-2xl">{b.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <p className="eyebrow text-accent">Objectives</p>
        <h2 className="rule-brand mt-3 text-3xl md:text-4xl">What we set out to achieve</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-2">
          {objectives.map((o, i) => (
            <li key={o} className="flex gap-4 border-b border-border pb-5">
              <span className="font-display text-2xl font-extrabold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-muted-foreground">{o}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ink py-20 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5">
          <p className="eyebrow text-accent">Core Values</p>
          <h2 className="mt-3 text-3xl md:text-4xl">
            <Heart className="mb-2 inline h-7 w-7 text-primary" /> The way we work
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((v) => (
              <div key={v.title} className="border-t border-ink-foreground/20 pt-5">
                <h3 className="text-xl text-primary">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
