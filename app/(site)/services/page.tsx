import Link from "next/link";
import { Icon, ArrowRight } from "@/components/Icons";
import {
  breadcrumb, btn, hDisplay, hSection, lede, pageHero, section, sectionTight, wrap, wrapBase,
} from "@/components/styles";
import { sanityFetch } from "@/sanity/lib/client";
import { allServicesQuery } from "@/sanity/lib/queries";
import { SERVICES_SEED } from "@/sanity/lib/seed";
import type { Service } from "@/sanity/lib/types";

export const metadata = {
  title: "Services",
  description:
    "What KuvarTech builds: payments infrastructure, data and infrastructure, AI and automation, blockchain, e-commerce and custom product engineering.",
};

export default async function ServicesPage() {
  const services = await sanityFetch<Service[]>(allServicesQuery, {}, SERVICES_SEED);

  return (
    <>
      <header className={pageHero} data-screen-label="Services — Hero">
        <div className={wrap}>
          <div className={breadcrumb}>
            <Link href="/" className="hover:text-ink">Home</Link> <span>/</span> <span>Services</span>
          </div>
          <span className="eyebrow" data-reveal>What we do</span>
          <h1 className={`${hDisplay} reveal-words mt-[18px] max-w-[15ch]`} data-reveal-words>
            Six things we do properly.
          </h1>
          <p className={`${lede} mt-6 max-w-[660px] [--reveal-delay:140ms]`} data-reveal>
            We are not tied to one industry or one stack. Bring us a problem and we will tell you
            what it actually needs — then build it.
          </p>
        </div>
      </header>

      {/* Capabilities */}
      <section className={section} data-screen-label="Services — Capabilities">
        <div className={wrap}>
          <div className="grid grid-cols-1 overflow-hidden rounded-brand border border-line bg-card w561:grid-cols-2 w881:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s._id}
                className="flex flex-col gap-3.5 border-r border-b border-line px-8 py-[34px] transition-[background-color] duration-200 hover:bg-card-2"
                data-reveal
                style={{ "--reveal-delay": `${(i % 3) * 80}ms` }}
              >
                <span className="grid size-[46px] place-items-center rounded-brand-md bg-accent text-accent-ink">
                  <Icon name={(s.icon ?? "grid") as Parameters<typeof Icon>[0]["name"]} size={23} sw={2} />
                </span>
                <h2 className="font-display text-[21px] font-bold tracking-[-0.02em]">{s.title}</h2>
                <p className="flex-1 text-[14.5px] text-ink-2">{s.summary}</p>
                {s.includes?.length ? (
                  <ul className="mt-1 flex flex-col gap-1.5 border-t border-line pt-3.5">
                    {s.includes.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[13.5px] text-ink-3">
                        <span className="mt-[7px] size-1 shrink-0 rounded-full bg-accent-deep" aria-hidden="true"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology stance */}
      <section className={sectionTight} data-screen-label="Services — Technology stance">
        <div className={wrap}>
          <div
            className="grid grid-cols-1 items-center gap-10 rounded-brand bg-band px-14 py-16 text-band-ink w881:grid-cols-[1.1fr_0.9fr] w881:gap-14"
            data-reveal
          >
            <div>
              <span className="eyebrow is-accent">How we choose</span>
              <h2 className={`${hSection} mt-4 text-band-ink`}>
                We don&apos;t commit to a technology in advance.
              </h2>
            </div>
            <p className="text-[16.5px] leading-[1.7] text-band-ink-3">
              Recommending the right stack for your problem is the service — not defending one we
              happen to like. We have shipped on the tools that suited the job, and we have thrown
              away the ones that didn&apos;t.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${sectionTight} pb-24`} data-screen-label="Services — CTA">
        <div className={`${wrapBase} mx-auto max-w-[760px] text-center`}>
          <h2 className={`${hSection} reveal-words`} data-reveal-words>
            Tell us what you&apos;re trying to build.
          </h2>
          <p className={`${lede} mx-auto mt-[18px] [--reveal-delay:100ms]`} data-reveal>
            Bring an idea, a half-built system, or a problem you cannot name yet.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5" data-reveal>
            <Link className={btn("primary", "lg")} href="/contact">
              Start a conversation
              <ArrowRight size={17} />
            </Link>
            <Link className={btn("ghost", "lg")} href="/about">About KuvarTech</Link>
          </div>
        </div>
      </section>
    </>
  );
}
