import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import { card, hDisplay, hSection, lede, section, wrap } from "@/components/styles";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Kuvar Technologies — partnerships, press, investor relations and product support.",
};

const OFFICES = [
  { badge: "Headquarters", h: "Lagos, Nigeria", lines: ["Victoria Island", "Lagos, Nigeria"], d: 0 },
  { badge: "East Africa", h: "Nairobi, Kenya", lines: ["Westlands", "Nairobi, Kenya"], d: 80 },
  { badge: "Everywhere else", h: "Remote-first", lines: ["A distributed team", "across 9 countries."], d: 160 },
];

export default function ContactPage() {
  return (
    <>
      <header className="page-hero" data-screen-label="Contact — Hero">
        <div className={wrap}>
          <div className="breadcrumb"><Link href="/">Home</Link> <span>/</span> <span>Contact</span></div>
          <span className="eyebrow" data-reveal>Get in touch</span>
          <h1 className={`${hDisplay} reveal-words`} data-reveal-words style={{ marginTop: "18px", maxWidth: "14ch" }}>
            Talk to the right team.
          </h1>
          <p className={lede} data-reveal style={{ "--reveal-delay": "140ms", marginTop: "24px", maxWidth: "640px" }}>
            Whether you&apos;re a bank, a business, a journalist or an investor — there&apos;s a direct line to
            the right people at Kuvar.
          </p>
        </div>
      </header>

      <section className={section} data-screen-label="Contact — Routing & form">
        <ContactSection />
      </section>

      {/* Offices */}
      <section className={section} style={{ background: "var(--bg-2)" }} data-screen-label="Contact — Offices">
        <div className={wrap}>
          <div style={{ maxWidth: "560px", marginBottom: "40px" }}>
            <span className="eyebrow" data-reveal>Where we are</span>
            <h2 className={`${hSection} reveal-words`} data-reveal-words style={{ marginTop: "16px" }}>
              Across the continent &amp; remote.
            </h2>
          </div>
          <div className="offices">
            {OFFICES.map((o) => (
              <div className={`${card} office`} key={o.h} data-reveal style={{ "--reveal-delay": `${o.d}ms` }}>
                <span className="badge">{o.badge}</span>
                <h4>{o.h}</h4>
                <p>{o.lines[0]}<br />{o.lines[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
