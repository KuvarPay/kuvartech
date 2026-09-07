import Link from "next/link";
import { Icon, ArrowRight } from "@/components/Icons";
import {
  breadcrumb, btn, card, hDisplay, hSection, lede, pageHero, section, sectionTight, wrap, wrapBase,
  teamInfo, teamInitials, teamName, teamPhoto, teamRole,
  valueBody, valueCell, valueGrid, valueIcon, valueTitle,
} from "@/components/styles";
import { sanityFetch } from "@/sanity/lib/client";
import { leadershipQuery } from "@/sanity/lib/queries";
import { PEOPLE_SEED } from "@/sanity/lib/seed";
import type { Person } from "@/sanity/lib/types";

export const metadata = {
  title: "About",
  description:
    "KuvarTech is a technology consultancy headquartered in Kigali. We build production software — and we run our own products on it.",
};

const VALUES = [
  { icon: "shield", title: "Trust is the product", body: "We hold other people's money and other people's research. Security, compliance and uptime are the foundation, not a feature.", d: 0 },
  { icon: "scale", title: "Right tool, not our tool", body: "We are not tied to a stack. Recommending what your problem actually needs is the service — including when the answer is that you don't need us.", d: 80 },
  { icon: "bolt", title: "Ship, then harden", body: "We move quickly to something real, then make it withstand the world. Neither half works without the other.", d: 160 },
  { icon: "grid", title: "Build to be maintained", body: "Someone inherits every system. We write for the person who arrives eighteen months after we leave.", d: 0 },
  { icon: "users", title: "Customers, not users", body: "Behind every transaction is a business making payroll. Behind every record is somebody's research. We never lose sight of who is on the other side.", d: 80 },
  { icon: "eye", title: "Say the uncomfortable thing", body: "If a plan won't work, the useful moment to say so is before it is built, not in the retrospective.", d: 160 },
] as const;

export default async function AboutPage() {
  const team = await sanityFetch<Person[]>(leadershipQuery, {}, PEOPLE_SEED);

  return (
    <>
      <header className={pageHero} data-screen-label="About — Hero">
        <div className={wrap}>
          <div className={breadcrumb}>
            <Link href="/" className="hover:text-ink">Home</Link> <span>/</span> <span>About</span>
          </div>
          <span className="eyebrow" data-reveal>About KuvarTech</span>
          <h1 className={`${hDisplay} reveal-words mt-[18px] max-w-[16ch]`} data-reveal-words>
            We build it, then we run it.
          </h1>
          <p className={`${lede} mt-6 max-w-[680px] [--reveal-delay:140ms]`} data-reveal>
            KuvarTech is a technology consultancy headquartered in Kigali. We work across
            payments, data, AI, blockchain and commerce — and we operate our own products on the
            same foundations we build for clients.
          </p>
        </div>
      </header>

      {/* Story */}
      <section className={`${section} bg-surface-2`} data-screen-label="About — Story">
        <div className={wrap}>
          <span className="eyebrow" data-reveal>Our story</span>
          <p
            className="mt-5 max-w-[20ch] font-display text-[clamp(24px,3vw,40px)] font-semibold leading-[1.28] tracking-[-0.03em] [--reveal-delay:80ms]"
            data-reveal
          >
            We started by solving our own problem, and discovered it was everyone&apos;s.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-7 w881:grid-cols-2 w881:gap-14 [&_p]:mb-5 [&_p]:text-[16.5px] [&_p]:leading-[1.7] [&_p]:text-ink-2">
            <div data-reveal>
              <p>
                KuvarTech began with a payments problem we wanted to fix ourselves. Building
                KuvarPay meant learning things that do not appear in documentation: how a
                settlement ledger behaves under load, what a compliance regime asks for in one
                market and not another, how much of a payment system is actually the boring parts
                done carefully.
              </p>
              <p>
                Then KuvarSend, on the same foundations. Then a payroll agent, smart contracts, a
                point of sale. Every one of them taught us something the previous one had not.
              </p>
            </div>
            <div data-reveal className="[--reveal-delay:120ms]">
              <p>
                Somewhere in there, other people started asking us to build things — and not only
                fintech. A storefront. A research platform mapping seventy years of Nigerian
                literature. Problems with nothing in common except that they were hard and had to
                actually work.
              </p>
              <p>
                What carried across was never the domain. It was the habits: assume it will be
                inherited, assume the network will fail, assume someone will one day need to
                explain a number to a regulator or a reviewer. That is what we sell now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={section} data-screen-label="About — Values">
        <div className={wrap}>
          <div className="mb-11 max-w-[640px]">
            <span className="eyebrow" data-reveal>What we stand for</span>
            <h2 className={`${hSection} reveal-words mt-4`} data-reveal-words>
              The values behind every decision.
            </h2>
          </div>
          <div className={valueGrid}>
            {VALUES.map((v) => (
              <div className={valueCell} key={v.title} data-reveal style={{ "--reveal-delay": `${v.d}ms` }}>
                <span className={valueIcon}><Icon name={v.icon} size={23} sw={2} /></span>
                <h3 className={valueTitle}>{v.title}</h3>
                <p className={valueBody}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`${section} bg-surface-2`} id="team" data-screen-label="About — Team">
        <div className={wrap}>
          <div className="mb-11 max-w-[640px]">
            <span className="eyebrow" data-reveal>The team</span>
            <h2 className={`${hSection} reveal-words mt-4`} data-reveal-words>
              Small on purpose.
            </h2>
            <p className={`${lede} mt-4 [--reveal-delay:120ms]`} data-reveal>
              Everyone here builds. There is no layer between the people you brief and the people
              who write the code.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-[22px] w521:grid-cols-2 w981:grid-cols-4">
            {team.map((m, i) => (
              <div className={`${card} tilt overflow-hidden`} key={m._id} data-reveal style={{ "--reveal-delay": `${i * 80}ms` }}>
                <div className={teamPhoto}>
                  <span className={teamInitials}>
                    {m.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </span>
                </div>
                <div className={teamInfo}>
                  <h3 className={teamName}>{m.name}</h3>
                  <p className={teamRole}>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${sectionTight} pb-24`} data-screen-label="About — CTA">
        <div className={`${wrapBase} mx-auto max-w-[760px] text-center`}>
          <h2 className={`${hSection} reveal-words`} data-reveal-words>Want to work with us?</h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5" data-reveal>
            <Link className={btn("primary", "lg")} href="/contact">
              Start a conversation
              <ArrowRight size={17} />
            </Link>
            <Link className={btn("ghost", "lg")} href="/work">See our work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
