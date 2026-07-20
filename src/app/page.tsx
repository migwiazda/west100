import Image from "next/image";

const PHONE = "905-238-8336";
const PHONE_HREF = "tel:+19052388336";
const FAX = "905-238-0020";
const ADDRESS = "129 Fairview Road West";
const CITY = "Mississauga, Ontario L5B 1K7";

export default function Home() {
  return (
    <div className="flex flex-col bg-paper text-ink">
      <header className="animate-fade-in absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a
            href="#top"
            className="font-display text-sm font-semibold tracking-[0.18em] text-white"
          >
            WEST-1000
          </a>
          <a
            href={PHONE_HREF}
            className="text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-white"
          >
            {PHONE}
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero — brand first, one composition */}
        <section className="relative min-h-[100svh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80"
              alt="Modern Greater Toronto Area skyline at dusk"
              fill
              priority
              className="animate-hero-zoom object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/40" />
          </div>

          <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-16 pt-28 md:px-10 md:pb-24">
            <div className="mx-auto w-full max-w-7xl">
              <p className="animate-fade-up font-display text-[clamp(3.5rem,12vw,9rem)] font-extrabold leading-[0.9] tracking-tight text-white">
                WEST-100
              </p>
              <p className="animate-fade-up delay-1 mt-3 font-display text-lg font-medium tracking-[0.22em] text-brass md:text-xl">
                METRO VIEW REALTY
              </p>
              <h1 className="animate-fade-up delay-2 mt-8 max-w-xl font-display text-2xl font-semibold leading-snug text-white md:text-4xl">
                Mississauga real estate, rooted in the GTA for decades.
              </h1>
              <p className="animate-fade-up delay-3 mt-4 max-w-lg text-base leading-relaxed text-mist md:text-lg">
                A local brokerage helping buyers and sellers navigate
                residential and commercial property across Mississauga and the
                Greater Toronto Area.
              </p>
              <div className="animate-fade-up delay-4 mt-10 flex flex-wrap gap-3">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center bg-brass px-7 py-3.5 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-brass-deep hover:text-white"
                >
                  Call {PHONE}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center border border-white/40 px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  Visit the office
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(30,74,92,0.12),_transparent_55%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-14 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="font-display text-sm font-semibold tracking-[0.2em] text-lake">
                SINCE 1989
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                Built in Mississauga. Trusted across the GTA.
              </h2>
            </div>
            <div className="md:col-span-7 md:pt-10">
              <p className="text-lg leading-relaxed text-ink/80 md:text-xl">
                WEST-100 Metro View Realty Ltd. is a Mississauga-based
                brokerage led by Broker of Record Simon Mahdessian. For more
                than three decades, our team has guided clients through buying,
                selling, and leasing — with the market knowledge that only
                comes from staying close to the communities we serve.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-ink/80 md:text-xl">
                From family homes to commercial opportunities, we bring
                steady, professional representation to every transaction.
              </p>
            </div>
          </div>
        </section>

        {/* Visual + services */}
        <section className="bg-ink text-paper">
          <div className="relative min-h-[50vh] overflow-hidden md:min-h-[60vh]">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2400&q=80"
              alt="Residential property representing homes across Mississauga"
              fill
              className="object-cover opacity-70"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/30 to-ink" />
            <div className="absolute inset-x-0 bottom-0 px-6 pb-12 md:px-10 md:pb-16">
              <div className="mx-auto max-w-7xl">
                <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
                  Residential and commercial expertise, side by side.
                </h2>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
            <p className="max-w-2xl text-base leading-relaxed text-mist/90 md:text-lg">
              Whether you are relocating in Mississauga, investing across the
              GTA, or leasing commercial space, our agents work with you one
              conversation at a time.
            </p>
            <ul className="mt-14 divide-y divide-white/15 border-y border-white/15">
              {[
                {
                  title: "Buy",
                  copy: "Find the right home or investment with local insight and clear guidance from first showing to closing.",
                },
                {
                  title: "Sell",
                  copy: "Position your property with pricing strategy, presentation, and representation that respect your timeline.",
                },
                {
                  title: "Lease",
                  copy: "Support for landlords and tenants across residential and commercial leasing in the Greater Toronto Area.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="grid gap-3 py-8 md:grid-cols-12 md:items-baseline md:gap-8"
                >
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-brass md:col-span-3 md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-mist/85 md:col-span-9 md:text-lg">
                    {item.copy}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,_rgba(30,74,92,0.08)_0%,_transparent_45%,_rgba(168,135,79,0.08)_100%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="font-display text-sm font-semibold tracking-[0.2em] text-lake">
                CONTACT
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
                Speak with the brokerage.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/75">
                Reach us by phone or visit our Mississauga office. We are ready
                to talk through your next move.
              </p>
              <a
                href={PHONE_HREF}
                className="mt-10 inline-flex items-center justify-center bg-ink px-7 py-3.5 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-lake"
              >
                Call {PHONE}
              </a>
            </div>

            <div className="space-y-8 border-t border-ink/10 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-16">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-ink/45 uppercase">
                  Office
                </p>
                <p className="mt-2 text-lg leading-relaxed">
                  {ADDRESS}
                  <br />
                  {CITY}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-ink/45 uppercase">
                  Phone
                </p>
                <a
                  href={PHONE_HREF}
                  className="mt-2 block text-lg transition-colors hover:text-lake"
                >
                  {PHONE}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-ink/45 uppercase">
                  Fax
                </p>
                <p className="mt-2 text-lg">{FAX}</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-ink/45 uppercase">
                  Broker of Record
                </p>
                <p className="mt-2 text-lg">Simon Mahdessian</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 bg-ink px-6 py-10 text-mist/70 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight text-white">
              WEST-100
            </p>
            <p className="mt-1 text-sm tracking-wide">
              Metro View Realty Ltd., Brokerage
            </p>
          </div>
          <p className="max-w-md text-sm leading-relaxed">
            Independently owned and operated. Serving Mississauga and the
            Greater Toronto Area. Listings available through REALTOR.ca and the
            Toronto Regional Real Estate Board.
          </p>
        </div>
      </footer>
    </div>
  );
}
