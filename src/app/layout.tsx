import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import DesktopHeader from "@/components/layout/DesktopHeader";
import ScrollWidget from "@/components/ui/ScrollWidget";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

const degular = localFont({
  src: [
    {
      path: "../../public/fonts/DegularTextDemo-Light.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/DegularTextDemo-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/DegularTextDemo-Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/DegularTextDemo-Semibold.otf",
      weight: "600",
    },
    {
      path: "../../public/fonts/DegularTextDemo-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-degular",
});

export const metadata: Metadata = {
  title: {
    default: "Nexterion CodeLabs | The Next Criterion for Digital Excellence",
    template: "%s | Nexterion CodeLabs",
  },
  description:
    "Nexterion CodeLabs is a premium software development agency specializing in high-performance Next.js and MERN stack applications. Engineering world-class digital innovation for global brands.",
  verification: {
    google: "OE-0fieArX5zBzSuUQBI3NkZHp-rWdzOCvLVCpUNVPU",
  },
  keywords: [
    "Software Development Agency",
    "Next.js Development",
    "MERN Stack Experts",
    "MERN Stack Development",
    "Custom Software Solutions",
    "Nexterion CodeLabs",
    "Full Stack Developer Pakistan",
    "Web Innovation",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexterioncodelabs.com",
    siteName: "Nexterion CodeLabs",
    title: "Nexterion CodeLabs | Premium Software Engineering",
    description:
      "Defining the future benchmark for high-end digital innovation and world-class UI/UX engineering.",
    images: [
      {
        url: "https://nexterioncodelabs.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexterion CodeLabs - Digital Excellence",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexterion CodeLabs | Software Excellence",
    description:
      "Premium MERN stack and Next.js development for global innovation.",
    images: ["https://nexterioncodelabs.com/images/og-image.png"],
  },

  alternates: {
    canonical: "https://nexterioncodelabs.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${monaSans.variable} ${degular.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nexterion CodeLabs",
              url: "https://nexterioncodelabs.com",
              logo: "https://nexterioncodelabs.com/images/og-image.png",
              description:
                "A premium software development agency specializing in high-performance Next.js and MERN stack engineering.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "PK",
              },
              founders: [
                {
                  "@type": "Person",
                  name: "Shanza",
                },
              ],
              sameAs: [
                "http://linkedin.com/in/shanza-tanveer-4a48731b7",
                "https://www.linkedin.com/company/nexterioncodelabs",
              ],
            }),
          }}
        />
      </head>
      <body className="font-degular antialiased min-h-screen">
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wrh3aareqr");
          `}
        </Script>
        <DesktopHeader />
        {children}
        <ScrollWidget />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
