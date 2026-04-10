import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Nexterion CodeLabs | The Next Criterion for Digital Excellence",
  description:
    "Nexterion represents 'The Next Criterion,' defining the future benchmark for high-end digital innovation, premium MERN stack development, and world-class UI/UX engineering.",
  openGraph: {
    images: [
      {
        url: "/icons/nexterioncodelabs-icon.png",
        width: 1200,
        height: 630,
        alt: "Nexterion CodeLabs",
      },
    ],
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
      <body className="font-degular antialiased min-h-screen flex flex-col bg-[#050505]">
        {children}
      </body>
    </html>
  );
}
