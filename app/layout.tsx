import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://kuvar.co"),
  title: {
    default: "KuvarTech — We build software businesses run on",
    template: "%s — KuvarTech",
  },
  description:
    "KuvarTech is a technology consultancy. We build production software across payments, data, AI, blockchain, commerce and custom products.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

/* Root layout is deliberately thin: it owns <html>/<body>, fonts and the
   no-flash theme script only. Nav and Footer live in app/(site)/layout.tsx
   so that /studio can render without them. */
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

        {children}
      </body>
    </html>
  );
}
