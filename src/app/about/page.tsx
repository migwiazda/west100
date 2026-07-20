import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | WEST-100 Metro View Realty",
  description:
    "Learn about WEST-100 Metro View Realty Ltd. — a Mississauga brokerage serving residential and commercial clients across the Greater Toronto Area since 1989.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-paper text-ink">
      <SiteHeader variant="overlay" />

      <main>
        <section className="relative min-h-[70svh] overflow-hidden md:min-h-[80svh]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80"
              alt="Established residential streetscape reflecting Mississauga communities"
              fill
              priority
              className="animate-hero-zoom object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/35" />
          </div>

          <div className="relative z-10 flex min-h-[70svh] flex-col justify-end px-6 pb-16 pt-28 md:min-h-[80svh] md:px-10 md:pb-24">
            <div className="mx-auto w-full max-w-7xl">
              <p className="animate-fade-up font-display text-[clamp(3rem,10vw,7rem)] font-extrabold leading-[0.9] tracking-tight text-white">
                {SITE.name}
              </p>
              <p className="animate-fade-up delay-1 mt-3 font-display text-lg font-medium tracking-[0.22em] text-brass md:text-xl">
                ABOUT US
              </p>
              <h1 className="animate-fade-up delay-2 mt-8 max-w-2xl font-display text-2xl font-semibold leading-snug text-white md:text-4xl">
                A Mississauga brokerage built on decades of local relationships.
              </h1>
              <p className="animate-fade-up delay-3 mt-4 max-w-xl text-base leading-relaxed text-mist md:text-lg">
                Since {SITE.founded}, we have helped families, investors, and
                businesses buy, sell, and lease property across Mississauga and
                the Greater Toronto Area.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(30,74,92,0.12),_transparent_55%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-14 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="font-display text-sm font-semibold tracking-[0.2em] text-lake">
                OUR STORY
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                Rooted here. Serving the GTA.
              </h2>
            </div>
            <div className="space-y-6 md:col-span-7 md:pt-10">
              <p className="text-lg leading-relaxed text-ink/80 md:text-xl">
                {SITE.fullName} is an independently owned brokerage based in
                Mississauga. Under Broker of Record {SITE.brokerOfRecord}, the
                firm has traded in residential and commercial real estate for
                more than three decades — staying close to the neighbourhoods,
                corridors, and clients that define the west GTA.
              </p>
              <p className="text-lg leading-relaxed text-ink/80 md:text-xl">
                We are not a franchise storefront. We are a local brokerage with
                deep market familiarity, steady representation, and a team that
                treats every transaction as a long-term relationship.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-ink px-6 py-24 text-paper md:px-10 md:py-32">
          <div className="mx-auto max-w-7xl">
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-brass">
              HOW WE WORK
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Clear advice. Local knowledge. Personal service.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist/90 md:text-lg">
              Clients come to WEST-100 for practical guidance — whether they
              are buying a first home, selling a long-held property, or
              navigating commercial and investment decisions.
            </p>

            <ul className="mt-14 divide-y divide-white/15 border-y border-white/15">
              {[
                {
                  title: "Local focus",
                  copy: "Mississauga is home base. Our work spans the Greater Toronto Area, with insight shaped by years of activity in the communities we serve.",
                },
                {
                  title: "Full representation",
                  copy: "From residential resale and new developments to commercial, industrial, and leasing — we support buyers, sellers, landlords, and tenants.",
                },
                {
                  title: "Direct communication",
                  copy: "You work with professionals who explain the market plainly, respect your timeline, and stay reachable throughout the process.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="grid gap-3 py-8 md:grid-cols-12 md:items-baseline md:gap-8"
                >
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-brass md:col-span-4 md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-mist/85 md:col-span-8 md:text-lg">
                    {item.copy}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,_rgba(30,74,92,0.08)_0%,_transparent_45%,_rgba(168,135,79,0.08)_100%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="font-display text-sm font-semibold tracking-[0.2em] text-lake">
                LEADERSHIP
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
                Broker of Record
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/75">
                {SITE.brokerOfRecord} owns and operates {SITE.name}, bringing
                decades of GTA trading experience to every client relationship
                and every agent on the team.
              </p>
            </div>

            <div className="space-y-8 border-t border-ink/10 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-16">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-ink/45 uppercase">
                  Office
                </p>
                <p className="mt-2 text-lg leading-relaxed">
                  {SITE.address}
                  <br />
                  {SITE.city}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-ink/45 uppercase">
                  Phone
                </p>
                <a
                  href={SITE.phoneHref}
                  className="mt-2 block text-lg transition-colors hover:text-lake"
                >
                  {SITE.phone}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-ink/45 uppercase">
                  Fax
                </p>
                <p className="mt-2 text-lg">{SITE.fax}</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto mt-16 flex max-w-7xl flex-wrap gap-3">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center bg-ink px-7 py-3.5 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-lake"
            >
              Call {SITE.phone}
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center border border-ink/25 px-7 py-3.5 text-sm font-semibold tracking-wide text-ink transition-colors hover:border-ink hover:bg-ink/5"
            >
              Contact details
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
