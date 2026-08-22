import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { company } from "@/data/company";
import { categories } from "@/data/solutions";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <img src={logo.url} alt="AgroMachGlobal" className="h-14 w-auto" width={691} height={288} />
          <p className="mt-4 max-w-xs text-sm text-ink-foreground/70">{company.motto}</p>
          <p className="mt-4 text-sm text-ink-foreground/60">
            Established {company.founded}, Dhaka, Bangladesh.
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-accent">Solutions</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/75">
            {categories.slice(0, 7).map((c) => (
              <li key={c.slug}>
                <Link to="/solutions/$category" params={{ category: c.slug }} className="hover:text-accent">
                  {c.letter}. {c.title.replace(" Solution", "")}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/solutions" className="font-semibold text-accent">
                View all {categories.length} solution areas →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-accent">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {company.address}
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                {company.phones[0]} (WhatsApp)
                <br />
                {company.phones[1]}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                {company.emails[0]}
                <br />
                {company.emails[1]}
              </span>
            </li>
            <li className="flex gap-3">
              <Globe className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {company.website}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10 px-5 py-5 text-center text-xs text-ink-foreground/50">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
