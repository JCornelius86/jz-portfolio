import type { Metadata } from "next";
import { pixelFont, bodyFont, monoFont } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CrtOverlay from "@/components/layout/CrtOverlay";
import StarField from "@/components/layout/StarField";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jczabel.com"),
  title: {
    default: "James Zabel | UX Leader & Designer",
    template: "%s | James Zabel",
  },
  description:
    "UX leader and designer with 10+ years of experience building IoT platforms, cloud apps, and consumer products. Currently at Microsoft.",
  openGraph: {
    title: "James Zabel | UX Leader & Designer",
    description:
      "UX leader and designer with 10+ years of experience building IoT platforms, cloud apps, and consumer products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${pixelFont.variable} ${bodyFont.variable} ${monoFont.variable} antialiased min-h-screen flex flex-col`}
      >
        <StarField />
        <CrtOverlay />
        <Header />
        <div className="flex-1 pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
