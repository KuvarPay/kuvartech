import "./globals.css";
import Script from "next/script";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";

export const metadata = {
  metadataBase: new URL("https://kuvar.co"),
  title: {
    default: "Kuvar Technologies — Africa's financial infrastructure layer",
    template: "%s — Kuvar Technologies",
  },
  description:
    "Kuvar Technologies builds the payment and money-movement infrastructure that powers commerce across Africa. Home of KuvarPay and KuvarSend.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&display=swap"
        />

        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{if(localStorage.getItem('kuvar-theme')==='dark')document.documentElement.setAttribute('data-theme','dark');}catch(e){}})();`}
        </Script>

        <Nav />
        <main>{children}</main>
        <Footer />
        <SiteEffects />

        <Script src="/image-slot.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
