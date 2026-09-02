import Link from "next/link";
import { BrandMark } from "./Icons";

function Social({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} aria-label="social">
      <svg viewBox="0 0 24 24" fill="currentColor">
        {children}
      </svg>
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand-block">
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
            <p className="footer-tag">
              Building the financial infrastructure that moves money across Africa — and connects
              the continent to the world.
            </p>
            <div className="footer-social">
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
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li>
                <Link href="/solutions#kuvarpay">KuvarPay</Link>
              </li>
              <li>
                <Link href="/solutions#kuvarsend">KuvarSend</Link>
              </li>
              <li>
                <Link href="/solutions#platform">Developer Platform</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/press">Press</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Compliance</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">
            © {year} Kuvar Technologies. All rights reserved.
          </span>
          <div className="footer-legal">
            <span>Lagos · Nairobi · Remote</span>
            <a href="#">Status</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
