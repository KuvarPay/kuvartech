import Link from "next/link";
import { BrandMark } from "./Icons";
import { wrap } from "@/components/styles";

function Social({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label="social"
      className="grid size-[38px] place-items-center rounded-pill border border-white/16 transition-[background-color,border-color,color] duration-[180ms] hover:border-accent hover:bg-accent hover:text-accent-ink"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-[17px]">
        {children}
      </svg>
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-white/78 transition-colors duration-150 hover:text-accent"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    /* The footer is a dark panel in both themes, so its text is always
       light — it does not follow the --ink/--bg flip. */
    <footer className="bg-ink pt-[72px] pb-9 text-white dark:border-t dark:border-line dark:bg-[#0F0F0F]">
      <div className={wrap}>
        <div className="grid grid-cols-1 gap-x-6 gap-y-9 border-b border-white/12 pb-14 w521:grid-cols-2 w881:grid-cols-[1.6fr_1fr_1fr_1fr] w881:gap-10 dark:border-line">
          <div className="flex max-w-[320px] flex-col gap-[18px]">
            <Link className="inline-flex items-center gap-[11px]" href="/" aria-label="Kuvar Technologies home">
              <span className="size-[38px] shrink-0">
                <BrandMark size={38} />
              </span>
              <span className="flex flex-col gap-0.5 leading-none">
                <span className="font-display text-[19px] font-extrabold tracking-[-0.03em] text-white">
                  Kuvar<em className="font-semibold not-italic text-white/55">Technologies</em>
                </span>
                <span className="font-body text-[9.5px] font-semibold uppercase tracking-[0.22em] text-white/45">
                  Financial infrastructure
                </span>
              </span>
            </Link>
            <p className="text-[14px] leading-[1.6] text-white/60">
              Building the financial infrastructure that moves money across Africa — and connects
              the continent to the world.
            </p>
            <div className="flex gap-2.5">
              <Social href="#">
                <path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5a4.1 4.1 0 0 0 3.3 4 4.1 4.1 0 0 1-1.8.1 4.1 4.1 0 0 0 3.8 2.8A8.2 8.2 0 0 1 2 18.1a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2z" />
              </Social>
              <Social href="#">
                <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18.3H5.7V9.8h2.6v8.5zM7 8.6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.3 9.7h-2.6v-4.1c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3 1-.1.2-.1.4-.1.7v4.1h-2.6V9.8h2.6v1.1c.3-.5 1-1.3 2.4-1.3 1.8 0 3 1.1 3 3.6v5.1z" />
              </Social>
              <Social href="#">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1a3.5 3.5 0 0 0-.8-1.3 3.5 3.5 0 0 0-1.3-.8c-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 8a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm6.2-8.2a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0z" />
              </Social>
            </div>
          </div>

          <div>
            <h4 className="mb-[18px] font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-white/50">
              Products
            </h4>
            <ul className="flex flex-col gap-3 text-[14.5px]">
              <li><FooterLink href="/solutions#kuvarpay">KuvarPay</FooterLink></li>
              <li><FooterLink href="/solutions#kuvarsend">KuvarSend</FooterLink></li>
              <li><FooterLink href="/solutions#platform">Developer Platform</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-[18px] font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-white/50">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-[14.5px]">
              <li><FooterLink href="/about">About</FooterLink></li>
              <li><FooterLink href="/careers">Careers</FooterLink></li>
              <li><FooterLink href="/press">Press</FooterLink></li>
              <li><FooterLink href="/contact">Contact</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-[18px] font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-white/50">
              Legal
            </h4>
            <ul className="flex flex-col gap-3 text-[14.5px]">
              <li><FooterLink href="#">Privacy</FooterLink></li>
              <li><FooterLink href="#">Terms</FooterLink></li>
              <li><FooterLink href="#">Security</FooterLink></li>
              <li><FooterLink href="#">Compliance</FooterLink></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 pt-7">
          <span className="text-[13px] text-white/50">
            © {year} Kuvar Technologies. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-[22px] text-[13px] text-white/55">
            <span>Lagos · Nairobi · Remote</span>
            <FooterLink href="#">Status</FooterLink>
            <FooterLink href="#">Cookies</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
