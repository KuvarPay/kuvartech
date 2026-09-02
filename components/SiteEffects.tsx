"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function splitWords(el: HTMLElement) {
      if (el.dataset.split === "1") return;
      el.dataset.split = "1";
      const text = el.textContent ?? "";
      el.textContent = "";
      const words = text.split(/(\s+)/);
      let idx = 0;
      words.forEach((w) => {
        if (/^\s+$/.test(w)) {
          el.appendChild(document.createTextNode(w));
          return;
        }
        const word = document.createElement("span");
        word.className = "word";
        const inner = document.createElement("span");
        inner.textContent = w;
        inner.style.setProperty("--word-delay", idx * 60 + "ms");
        word.appendChild(inner);
        el.appendChild(word);
        idx++;
      });
    }
    document.querySelectorAll<HTMLElement>("[data-reveal-words]").forEach(splitWords);

    const revealTargets = document.querySelectorAll<HTMLElement>("[data-reveal], .reveal-words");
    let revealIO: IntersectionObserver | undefined;
    if (prefersReduce || !("IntersectionObserver" in window)) {
      revealTargets.forEach((t) => t.classList.add("is-in"));
    } else {
      revealIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              (e.target as HTMLElement).classList.add("is-in");
              revealIO!.unobserve(e.target);
            }
          });
        },
        { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
      );
      revealTargets.forEach((t) => revealIO!.observe(t));
    }

    function formatNum(n: number, decimals: number): string {
      if (decimals) return n.toFixed(decimals);
      return Math.round(n).toLocaleString("en-US");
    }

    function runCounter(el: HTMLElement) {
      const to = parseFloat(el.getAttribute("data-to") ?? "0");
      const decimals = parseInt(el.getAttribute("data-decimals") ?? "0", 10);
      const prefix = el.getAttribute("data-prefix") ?? "";
      const suffix = el.getAttribute("data-suffix") ?? "";
      const dur = parseInt(el.getAttribute("data-dur") ?? "1600", 10);
      const start = performance.now();
      function tick(now: number) {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        el.innerHTML =
          prefix +
          '<span class="cval">' +
          formatNum(to * eased, decimals) +
          "</span>" +
          (suffix ? '<span class="suffix">' + suffix + "</span>" : "");
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    const counters = document.querySelectorAll<HTMLElement>("[data-counter]");
    let counterIO: IntersectionObserver | undefined;
    if (counters.length) {
      if (prefersReduce || !("IntersectionObserver" in window)) {
        counters.forEach((el) => {
          const prefix = el.getAttribute("data-prefix") ?? "";
          const suffix = el.getAttribute("data-suffix") ?? "";
          const decimals = parseInt(el.getAttribute("data-decimals") ?? "0", 10);
          el.innerHTML =
            prefix +
            formatNum(parseFloat(el.getAttribute("data-to") ?? "0"), decimals) +
            (suffix ? '<span class="suffix">' + suffix + "</span>" : "");
        });
      } else {
        counterIO = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                runCounter(e.target as HTMLElement);
                counterIO!.unobserve(e.target);
              }
            });
          },
          { threshold: 0.4 }
        );
        counters.forEach((el) => counterIO!.observe(el));
      }
    }

    const tiltCleanups: (() => void)[] = [];
    if (!window.matchMedia("(hover: none)").matches) {
      const max = 7;
      document.querySelectorAll<HTMLElement>(".tilt").forEach((el) => {
        const onMove = (ev: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const px = (ev.clientX - r.left) / r.width - 0.5;
          const py = (ev.clientY - r.top) / r.height - 0.5;
          el.style.setProperty("--ry", (px * max).toFixed(2) + "deg");
          el.style.setProperty("--rx", (-py * max).toFixed(2) + "deg");
        };
        const onLeave = () => {
          el.style.setProperty("--ry", "0deg");
          el.style.setProperty("--rx", "0deg");
        };
        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
        tiltCleanups.push(() => {
          el.removeEventListener("mousemove", onMove);
          el.removeEventListener("mouseleave", onLeave);
        });
      });
    }

    return () => {
      if (revealIO) revealIO.disconnect();
      if (counterIO) counterIO.disconnect();
      tiltCleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
