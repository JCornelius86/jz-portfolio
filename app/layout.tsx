import type { Metadata } from "next";
import { serifFont, sansFont, monoFont } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThemeScript from "@/components/layout/ThemeScript";
import SiteAnalytics from "@/components/layout/SiteAnalytics";
import "./globals.css";

const SHARED_DESCRIPTION =
  "Currently at Microsoft, where I've led design across Azure Advisor, Resiliency, and Customer Health. Before that, founding designer on an enterprise platform now past 20M devices. AI-native, drawn to mission work, still shipping the software myself.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jczabel.com"),
  title: {
    default: "JC Zabel: Senior product designer, building in the AI age",
    template: "%s | JC Zabel",
  },
  description: SHARED_DESCRIPTION,
  openGraph: {
    title: "JC Zabel: Senior product designer, building in the AI age",
    description: SHARED_DESCRIPTION,
    siteName: "JC Zabel",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JC Zabel: Senior product designer, building in the AI age",
    description: SHARED_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 pt-16">{children}</div>
        <Footer />
        <SiteAnalytics />
      </body>
    </html>
  );
}
