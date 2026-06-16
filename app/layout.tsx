import type { Metadata } from "next";
import { serifFont, sansFont, monoFont } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThemeScript from "@/components/layout/ThemeScript";
import "./globals.css";

const SHARED_DESCRIPTION =
  "Currently at Microsoft, where I've led design across Azure CXS, Resiliency, and Customer Health. Before that, scaled an enterprise platform past 20M devices as the founding designer. AI-native, drawn to mission work, still shipping the software myself.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jczabel.com"),
  title: {
    default: "JC Zabel: Senior designer, design leader, always building",
    template: "%s | JC Zabel",
  },
  description: SHARED_DESCRIPTION,
  openGraph: {
    title: "JC Zabel: Senior designer, design leader, always building",
    description: SHARED_DESCRIPTION,
    siteName: "JC Zabel",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JC Zabel: Senior designer, design leader, always building",
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
      </body>
    </html>
  );
}
