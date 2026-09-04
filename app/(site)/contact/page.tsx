import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import { breadcrumb, card, hDisplay, hSection, lede, pageHero, section, wrap } from "@/components/styles";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with KuvarTech — partnerships, press, investor relations and product support.",
};

const OFFICES = [
  { badge: "Headquarters", h: "Lagos, Nigeria", lines: ["Victoria Island", "Lagos, Nigeria"], d: 0 },
  { badge: "East Africa", h: "Nairobi, Kenya", lines: ["Westlands", "Nairobi, Kenya"], d: 80 },
  { badge: "Everywhere else", h: "Remote-first", lines: ["A distributed team", "across 9 countries."], d: 160 },
];

export default function ContactPage() {
  return (
    <>
      <header className={pageHero} data-screen-label="Contact — Hero">
        <div className={wrap}>
          <div className={breadcrumb}>
            <Link href="/" className="hover:text-ink">Home</Link> <span>/</span> <span>Contact</span>
          </div>
          <span className="eyebrow" data-reveal>Get in touch</span>
          <h1 className={`${hDisplay} reveal-words mt-[18px] max-w-[14ch]`} data-reveal-words>
            Talk to the right team.
          </h1>
          <p className={`${lede} mt-6 max-w-[640px] [--reveal-delay:140ms]`} data-reveal>
            Whether you&apos;re a bank, a business, a journalist or an investor — there&apos;s a direct line to
            the right people at Kuvar.
          </p>
        </div>
      </header>

      <section className={section} data-screen-label="Contact — Routing & form">
        <ContactSection />
      </section>

      {/* Offices */}
      <section className={`${section} bg-surface-2`} data-screen-label="Contact — Offices">
        <div className={wrap}>
          <div className="mb-10 max-w-[560px]">
            <span className="eyebrow" data-reveal>Where we are</span>
            <h2 className={`${hSection} reveal-words mt-4`} data-reveal-words>
              Across the continent &amp; remote.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-[22px] w761:grid-cols-3">
            {OFFICES.map((o) => (
              /* The reveal delay is data-driven, so it stays an inline custom
                 property - Tailwind cannot see a class name built at runtime. */
              <div className={`${card} p-7`} key={o.h} data-reveal style={{ "--reveal-delay": `${o.d}ms` }}>
                <span className="mb-3.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-accent-deep">
                  {o.badge}
                </span>
                <h4 className="mb-2 font-display text-[18px] font-bold tracking-[-0.02em]">{o.h}</h4>
                <p className="text-[14px] leading-[1.6] text-ink-2">
                  {o.lines[0]}<br />{o.lines[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
