import Link from "next/link";
import { Icon, ArrowRight } from "@/components/Icons";
import { sanityFetch } from "@/sanity/lib/client";
import { openRolesQuery } from "@/sanity/lib/queries";
import type { Role } from "@/sanity/lib/types";
import {
  breadcrumb, btn, card, hDisplay, hSection, lede, pageHero, section, sectionTight, wrap, wrapBase,
} from "@/components/styles";

export const metadata = {
  title: "Careers",
  description:
    "Join KuvarTech and help build the financial infrastructure for Africa. Open roles, culture and benefits.",
};

const WHY = [
  { icon: "globe", title: "Continent-scale impact", body: "The work you ship reaches businesses and families across Africa. Few problems are this hard — or this worth solving.", d: 0 },
  { icon: "file", title: "Real ownership", body: "Small teams, big mandates. You'll own meaningful surface area from day one — and the outcomes that come with it.", d: 80 },
  { icon: "building", title: "Build to last", body: "This is infrastructure. We hire people who care about getting the hard, unglamorous things right — at bank-grade quality.", d: 160 },
] as const;

const PERKS = [
  { icon: "clock", label: "Flexible, remote-first work" },
  { icon: "heart", label: "Comprehensive health cover" },
  { icon: "dollar", label: "Competitive pay & equity" },
  { icon: "book", label: "Learning & growth budget" },
  { icon: "calendar", label: "Generous paid time off" },
  { icon: "usersSmall", label: "Annual team off-sites" },
] as const;


const CULTURE_STATS = [
  { n: "4", l: "Team members" },
  { n: "2", l: "Products we build and run" },
  { n: "Remote", l: "First, async culture" },
];

export default async function CareersPage() {
  /* Roles come from the CMS so they can be opened and closed without a deploy.
     There are none open right now, and the page says so rather than inventing
     listings people could apply to. */
  const roles = await sanityFetch<Role[]>(openRolesQuery, {}, []);

  return (
    <>
      <header className={pageHero} data-screen-label="Careers — Hero">
        <div className={wrap}>
          <div className={breadcrumb}><Link href="/" className="hover:text-ink">Home</Link> <span>/</span> <span>Careers</span></div>
          <span className="eyebrow" data-reveal>Careers</span>
          <h1 className={`${hDisplay} reveal-words mt-[18px] max-w-[15ch]`} data-reveal-words>
            Build the money rails for a continent.
          </h1>
          <p className={`${lede} mt-6 max-w-[660px] [--reveal-delay:140ms]`} data-reveal>
            We&apos;re a team of builders solving one of the hardest, highest-impact problems in the world
            — and we&apos;re hiring across engineering, product, compliance and operations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5" data-reveal>
            <a className={btn("primary", "lg")} href="#roles">
              See open roles
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </header>

      {/* Why join */}
      <section className={section} data-screen-label="Careers — Why join">
        <div className={wrap}>
          <div className="mb-11 max-w-[640px]">
            <span className="eyebrow" data-reveal>Why Kuvar</span>
            <h2 className={`${hSection} reveal-words mt-4`} data-reveal-words>
              Work that actually moves the needle.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-[22px] w881:grid-cols-3">
            {WHY.map((w) => (
              <div className={`${card} p-8`} key={w.title} data-reveal style={{ "--reveal-delay": `${w.d}ms` }}>
                <span className="mb-[22px] grid size-[46px] place-items-center rounded-brand-md bg-accent text-accent-ink">
                  <Icon name={w.icon} size={23} sw={2} />
                </span>
                <h3 className="mb-3 font-display text-[21px] font-bold tracking-[-0.02em]">{w.title}</h3>
                <p className="text-[15px] text-ink-2">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className={sectionTight} data-screen-label="Careers — Culture">
        <div className={wrap}>
          <div
            className="grid grid-cols-1 items-center gap-10 rounded-brand bg-band px-14 py-16 text-band-ink w881:grid-cols-2 w881:gap-14"
            data-reveal
          >
            <div>
              <span className="eyebrow is-accent">Our culture</span>
              <p className="mt-[22px] max-w-[20ch] font-display text-[clamp(24px,3vw,38px)] font-bold leading-[1.28] tracking-[-0.03em] text-band-ink">
                We move with <em className="italic text-accent">urgency</em>, hold ourselves to <em className="italic text-accent">bank-grade</em> standards, and
                never forget there&apos;s a real person behind every transaction.
              </p>
            </div>
            <div className="flex flex-wrap gap-10">
              {CULTURE_STATS.map((s) => (
                <div key={s.l}>
                  <div className="font-display text-[38px] font-extrabold tracking-[-0.03em] text-accent">{s.n}</div>
                  <div className="text-[13.5px] text-band-ink-3">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className={`${section} bg-surface-2`} data-screen-label="Careers — Benefits">
        <div className={wrap}>
          <div className="mb-10 max-w-[640px]">
            <span className="eyebrow" data-reveal>Benefits</span>
            <h2 className={`${hSection} reveal-words mt-4`} data-reveal-words>
              How we take care of our team.
            </h2>
          </div>
          <div
            className="grid grid-cols-1 overflow-hidden rounded-brand border border-line bg-card w521:grid-cols-2 w881:grid-cols-3"
            data-reveal
          >
            {PERKS.map((p) => (
              <div
                className="flex items-center gap-3.5 border-r border-b border-line p-7 [&_svg]:size-[22px] [&_svg]:shrink-0 [&_svg]:text-accent-deep"
                key={p.label}
              >
                <Icon name={p.icon} size={22} sw={2} />
                <span className="font-body text-[15px] font-semibold">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className={section} id="roles" data-screen-label="Careers — Open roles">
        <div className={wrap}>
          <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
            <div className="max-w-[560px]">
              <span className="eyebrow" data-reveal>Open roles</span>
              <h2 className={`${hSection} reveal-words mt-4`} data-reveal-words>
                Find your seat.
              </h2>
            </div>
            <span className="text-[14px] text-ink-3" data-reveal>
              Don&apos;t see your role? Email{" "}
              <Link href="/contact" className="font-semibold text-ink">careers@kuvar.co</Link>
            </span>
          </div>
          {roles.length === 0 ? (
            <div className={`${card} px-9 py-12 text-center`} data-reveal>
              <p className="font-display text-[20px] font-bold tracking-[-0.02em] text-ink">
                No open roles right now.
              </p>
              <p className="mx-auto mt-3 max-w-[46ch] text-[15px] text-ink-2">
                We hire in bursts rather than continuously. If you build the kind of thing we
                build, send us a note anyway — we keep good people in mind.
              </p>
              <div className="mt-7 flex justify-center">
                <Link className={btn("primary")} href="/contact">
                  Introduce yourself
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col border-t border-line" data-reveal>
              {roles.map((r) => (
                <Link
                  className="group grid grid-cols-[1fr_auto] items-center gap-x-[18px] gap-y-1.5 border-b border-line px-1.5 py-6 transition-[padding,background-color] duration-[180ms] hover:pl-3.5 w721:grid-cols-[2fr_1fr_1fr_auto] w721:gap-[18px]"
                  href="/contact"
                  key={r._id}
                >
                  <div>
                    <span className="inline-flex items-center rounded-full bg-surface-2 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-ink-3">
                      {r.dept}
                    </span>
                    <div className="mt-2 font-display text-[18.5px] font-bold tracking-[-0.02em]">{r.title}</div>
                  </div>
                  <div className="col-start-1 text-[13.5px] text-ink-3 w721:col-start-auto">{r.dept}</div>
                  <div className="col-start-1 text-[13.5px] text-ink-3 w721:col-start-auto">{r.location}</div>
                  <span className="grid size-[38px] place-items-center rounded-full border border-line-2 text-ink-2 transition-[background-color,color,border-color] duration-[180ms] group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
                    <ArrowRight size={17} />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className={`${sectionTight} pb-24`} data-screen-label="Careers — CTA">
        <div className={`${wrapBase} max-w-[760px] text-center`}>
          <h2 className={`${hSection} reveal-words`} data-reveal-words>Let&apos;s build it together.</h2>
          <p className={`${lede} mx-auto mt-[18px] [--reveal-delay:100ms]`} data-reveal>
            Send us your CV and a note on what you&apos;d want to own.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5" data-reveal>
            <Link className={btn("primary", "lg")} href="/contact">
              Apply now
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
