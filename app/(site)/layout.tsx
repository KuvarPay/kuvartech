import Script from "next/script";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";

/* Everything with the site chrome. /studio sits outside this group so the
   CMS renders without a marketing nav wrapped around it. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      <SiteEffects />
      <Script src="/image-slot.js" strategy="afterInteractive" />
    </>
  );
}
