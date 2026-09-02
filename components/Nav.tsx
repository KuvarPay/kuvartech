"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, ArrowRight, BrandMark } from "./Icons";

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
    <Link className="brand" href="/" aria-label="Kuvar Technologies home">
      <span className="brand-mark">
        <BrandMark size={38} />
      </span>
      <span className="brand-text">
        <span className="brand-name">
          Kuvar<em>Technologies</em>
        </span>
        <span className="brand-sub">Financial infrastructure</span>
      </span>
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
    <div className={"nav-outer" + (scrolled ? " is-scrolled" : "")}>
      <nav className="nav">
        <Brand />
        <div className={"nav-links" + (open ? " is-open" : "")}>
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                className={"nav-link" + (active ? " is-active" : "")}
                href={l.href}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            <span className="icon-sun">
              <Icon name="sun" size={18} sw={1.8} />
            </span>
            <span className="icon-moon">
              <Icon name="moon" size={18} sw={1.8} />
            </span>
          </button>
          <Link className="btn btn-primary btn-sm" href="/contact">
            <span className="nav-cta-text">Get in Touch</span>
            <ArrowRight />
          </Link>
          <button
            className="nav-burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <Icon name="burger" size={20} sw={2} />
          </button>
        </div>
      </nav>
    </div>
  );
}
