"use client";

import { useEffect, useRef, useState } from "react";
import { Icon, ArrowRight } from "./Icons";
import { btn, field, fieldControl, fieldLabel, wrap } from "@/components/styles";

interface Dept {
  id: string;
  icon: string;
  title: string;
  desc: string;
  email: string;
}

const DEPTS: Dept[] = [
  {
    id: "partnerships",
    icon: "users",
    title: "Partnerships",
    desc: "Banks, telcos, mobile money & infrastructure providers.",
    email: "partners@kuvar.co",
  },
  {
    id: "press",
    icon: "fileLines",
    title: "Press & media",
    desc: "Interviews, statements, and brand assets.",
    email: "press@kuvar.co",
  },
  {
    id: "investors",
    icon: "chartUp",
    title: "Investor relations",
    desc: "For current & prospective investors.",
    email: "investors@kuvar.co",
  },
  {
    id: "support",
    icon: "helpCircle",
    title: "Product support",
    desc: "Help with KuvarPay or KuvarSend.",
    email: "support@kuvar.co",
  },
];

export default function ContactSection() {
  const [target, setTarget] = useState("");
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    function sync() {
      const id = location.hash.replace("#", "");
      const known = DEPTS.some((d) => d.id === id);
      setTarget(known ? id : "");
      if (known && selectRef.current) selectRef.current.value = id;
    }
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const els = formRef.current!.elements;
    const name = els.namedItem("name") as HTMLInputElement;
    const email = els.namedItem("email") as HTMLInputElement;
    const message = els.namedItem("message") as HTMLTextAreaElement;
    let ok = true;
    [name, email, message].forEach((f) => {
      if (!f.value.trim()) {
        f.style.borderColor = "#DC2626";
        ok = false;
      } else {
        f.style.borderColor = "";
      }
    });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.style.borderColor = "#DC2626";
      ok = false;
    }
    if (!ok) return;
    setSent(true);
  }

  return (
    <div className={`${wrap} grid grid-cols-1 items-start gap-11 w921:grid-cols-[0.9fr_1.1fr] w921:gap-14`}>
      <div>
        <span className="eyebrow" data-reveal>
          Departments
        </span>
        <h2
          className="mt-[14px] mb-6 font-display text-[24px] font-extrabold tracking-[-0.03em]"
          data-reveal
        >
          Route your message.
        </h2>
        <div className="flex flex-col gap-3 [--reveal-delay:120ms]" data-reveal>
          {DEPTS.map((d) => (
            <div
              key={d.id}
              id={d.id}
              className={
                "flex scroll-mt-[110px] items-start gap-4 rounded-brand-md border bg-card p-[22px] transition-[border-color,transform] duration-[180ms] " +
                (target === d.id
                  ? "border-accent-deep shadow-[0_0_0_3px_var(--accent-glow)]"
                  : "border-line")
              }
            >
              <span className="grid size-[42px] shrink-0 place-items-center rounded-brand-sm bg-surface-2 text-ink-2">
                <Icon name={d.icon as Parameters<typeof Icon>[0]["name"]} size={21} sw={2} />
              </span>
              <div>
                <h3 className="mb-1 font-display text-[17px] font-bold tracking-[-0.02em]">{d.title}</h3>
                <p className="mb-1.5 text-[13.5px] text-ink-3">{d.desc}</p>
                <a href={`mailto:${d.email}`} className="text-[13.5px] font-semibold text-accent-deep">
                  {d.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-brand border border-line bg-card p-9 [--reveal-delay:160ms]" data-reveal>
        <div
          className={
            "mb-5 items-center gap-3.5 rounded-brand-md bg-ink px-[18px] py-4 text-surface " +
            (sent ? "flex" : "hidden")
          }
        >
          <span className="grid size-[34px] shrink-0 place-items-center rounded-[9px] bg-accent text-[#0A0A0A]">
            <Icon name="check" size={18} sw={3} />
          </span>
          <div>
            <strong className="font-display text-[15px]">Message sent.</strong>
            <div className="text-[13px] opacity-80">
              We&apos;ll route it to the right team and reply soon.
            </div>
          </div>
        </div>
        {!sent && (
          <form ref={formRef} onSubmit={onSubmit} noValidate>
            <div className="grid grid-cols-1 gap-[18px] w561:grid-cols-2">
              <div className={field}>
                <label htmlFor="name" className={fieldLabel}>Full name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required className={fieldControl} />
              </div>
              <div className={field}>
                <label htmlFor="email" className={fieldLabel}>Email</label>
                <input id="email" name="email" type="email" placeholder="you@company.com" required className={fieldControl} />
              </div>
              <div className={field}>
                <label htmlFor="company" className={fieldLabel}>Company / organisation</label>
                <input id="company" name="company" type="text" placeholder="Optional" className={fieldControl} />
              </div>
              <div className={field}>
                <label htmlFor="dept" className={fieldLabel}>What&apos;s this about?</label>
                <select id="dept" name="dept" ref={selectRef} defaultValue="partnerships" className={fieldControl}>
                  <option value="partnerships">Partnerships</option>
                  <option value="press">Press &amp; media</option>
                  <option value="investors">Investor relations</option>
                  <option value="support">Product support</option>
                  <option value="careers">Careers</option>
                  <option value="other">Something else</option>
                </select>
              </div>
              <div className={`${field} col-span-full`}>
                <label htmlFor="message" className={fieldLabel}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help…"
                  required
                  className={`${fieldControl} min-h-[130px] resize-y`}
                ></textarea>
              </div>
              <div className="col-span-full flex flex-wrap items-center justify-between gap-4">
                <span className="text-[12.5px] text-ink-3">
                  We typically reply within 1–2 business days.
                </span>
                <button type="submit" className={btn("primary", "lg")}>
                  Send message
                  <ArrowRight />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
