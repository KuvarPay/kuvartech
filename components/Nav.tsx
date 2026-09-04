"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, ArrowRight } from "./Icons";
import { btn } from "@/components/styles";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Press", href: "/press" },
];

function Brand() {
  return (
    <Link className="inline-flex items-center" href="/" aria-label="KuvarTech home">
      {/* Two lockups. The pill carries its own dark ground so the accent green
          reads on light surfaces; the bare lockup is used where the ground is
          already dark. The heights are chosen so both render ~155px wide, which
          stops the nav shifting when the theme is toggled. */}
      <img
        src="/assets/brand/wordmark-on-light.png"
        alt="KuvarTech"
        width={473}
        height={124}
        className="h-11 w-auto dark:hidden"
      />
      <img
        src="/assets/brand/wordmark-on-dark.png"
        alt="KuvarTech"
        width={472}
        height={72}
        className="hidden h-6 w-auto dark:block"
      />
    </Link>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function toggleTheme() {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const next = isDark ? "light" : "dark";
    if (next === "dark") document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.removeAttribute("data-theme");
    try {
      localStorage.setItem("kuvar-theme", next);
    } catch (e) {}
  }

  return (
    <div
      className={
        "sticky top-0 z-100 border-b bg-surface/82 backdrop-blur-[14px] backdrop-saturate-150 transition-[background-color,border-color] duration-300 ease-[ease] " +
        (scrolled ? "border-line" : "border-transparent")
      }
    >
      <nav className="mx-auto flex max-w-wrap items-center justify-between gap-6 px-gutter py-[18px]">
        <Brand />

        {/* Desktop: an inline row. Below 921px it collapses behind the burger
            and reopens as a full-width dropdown. */}
        <div
          className={
            "flex items-center gap-1 " +
            (open
              ? "max-w921:absolute max-w921:inset-x-0 max-w921:top-full max-w921:flex-col max-w921:items-stretch max-w921:gap-0.5 max-w921:border-b max-w921:border-line max-w921:bg-surface max-w921:px-gutter max-w921:pt-3 max-w921:pb-[22px]"
              : "max-w921:hidden")
          }
        >
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  "rounded-pill px-3.5 py-[9px] font-body text-[14.5px] transition-[color,background-color] duration-150 hover:bg-ink/6 hover:text-ink " +
                  (active ? "font-semibold text-ink " : "font-medium text-ink-2 ") +
                  (open ? "max-w921:rounded-brand-md max-w921:px-3 max-w921:py-3.5 max-w921:text-[17px]" : "")
                }
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="grid size-10 cursor-pointer place-items-center rounded-pill border border-line-2 bg-card text-ink-2 transition-[transform,border-color,color] duration-[180ms] hover:-translate-y-0.5 hover:border-ink hover:text-ink"
          >
            <span className="dark:hidden">
              <Icon name="sun" size={18} sw={1.8} />
            </span>
            <span className="hidden dark:block">
              <Icon name="moon" size={18} sw={1.8} />
            </span>
          </button>

          <Link className={btn("primary", "sm")} href="/contact">
            <span className="hidden w921:inline">Get in Touch</span>
            <ArrowRight />
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="grid size-10 cursor-pointer place-items-center rounded-pill border border-line-2 bg-card text-ink w921:hidden"
          >
            <Icon name="burger" size={20} sw={2} />
          </button>
        </div>
      </nav>
    </div>
  );
}
