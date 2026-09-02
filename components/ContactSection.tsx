"use client";

import { useEffect, useRef, useState } from "react";
import { Icon, ArrowRight } from "./Icons";
import { btn, wrap } from "@/components/styles";

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
    <div className={`${wrap} contact-layout`}>
      <div>
        <span className="eyebrow" data-reveal>
          Departments
        </span>
        <h2
          style={{
            fontFamily: "var(--display)",
            fontWeight: 800,
            fontSize: "24px",
            letterSpacing: "-0.03em",
            margin: "14px 0 24px",
          }}
          data-reveal
        >
          Route your message.
        </h2>
        <div className="dept-cards" data-reveal style={{ "--reveal-delay": "120ms" }}>
          {DEPTS.map((d) => (
            <div
              key={d.id}
              className={"dept-card" + (target === d.id ? " is-target" : "")}
              id={d.id}
            >
              <span className="dept-icon">
                <Icon name={d.icon as Parameters<typeof Icon>[0]["name"]} size={21} sw={2} />
              </span>
              <div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
                <a href={`mailto:${d.email}`}>{d.email}</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="form-card" data-reveal style={{ "--reveal-delay": "160ms" }}>
        <div className={"form-success-msg" + (sent ? " show" : "")}>
          <span className="ck">
            <Icon name="check" size={18} sw={3} />
          </span>
          <div>
            <strong style={{ fontFamily: "var(--display)", fontSize: "15px" }}>Message sent.</strong>
            <div style={{ fontSize: "13px", opacity: 0.8 }}>
              We'll route it to the right team and reply soon.
            </div>
          </div>
        </div>
        {!sent && (
          <form ref={formRef} onSubmit={onSubmit} noValidate>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@company.com" required />
              </div>
              <div className="field">
                <label htmlFor="company">Company / organisation</label>
                <input id="company" name="company" type="text" placeholder="Optional" />
              </div>
              <div className="field">
                <label htmlFor="dept">What&apos;s this about?</label>
                <select id="dept" name="dept" ref={selectRef} defaultValue="partnerships">
                  <option value="partnerships">Partnerships</option>
                  <option value="press">Press &amp; media</option>
                  <option value="investors">Investor relations</option>
                  <option value="support">Product support</option>
                  <option value="careers">Careers</option>
                  <option value="other">Something else</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell us how we can help…" required></textarea>
              </div>
              <div
                className="full"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span className="text-ink-3" style={{ fontSize: "12.5px" }}>
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
