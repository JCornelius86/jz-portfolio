import type { Metadata } from "next";
import { pixelFont, bodyFont, monoFont } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CrtOverlay from "@/components/layout/CrtOverlay";
import StarField from "@/components/layout/StarField";
import SkyProvider from "@/components/sky/SkyProvider";
import SkyBackground from "@/components/sky/SkyBackground";
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
    <html lang="en" className="dark" data-sky="night">
      <body
        className={`${pixelFont.variable} ${bodyFont.variable} ${monoFont.variable} antialiased min-h-screen flex flex-col relative`}
      >
        <SkyProvider>
          <SkyBackground />
          <StarField />
          <CrtOverlay />
          <Header />
          <div className="relative z-10 flex-1 pt-16">{children}</div>
          <Footer />
        </SkyProvider>
      </body>
    </html>
  );
}
