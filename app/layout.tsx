import type { Metadata } from "next";
import { serifFont, sansFont, monoFont } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThemeScript from "@/components/layout/ThemeScript";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jczabel.com"),
  title: {
    default: "JC Zabel | UX Leader",
    template: "%s | JC Zabel",
  },
  description:
    "UX leader with 15+ years of experience building products across green tech, defense, IoT platforms, and enterprise software. Currently at Microsoft.",
  openGraph: {
    title: "JC Zabel | UX Leader",
    description:
      "UX leader with 15+ years of experience building products across green tech, defense, IoT platforms, and enterprise software.",
    type: "website",
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
