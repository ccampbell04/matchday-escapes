import { Header } from "@/components/Header";
import { getTextFields } from "@/utils/textFieldUtils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "MatchdayEscapes",
  description: "MatchdayEscapes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerTextFields = getTextFields("header");
  return (
    <html lang="en">
      <body>
        <main>
          <SpeedInsights />
          <Analytics />
          <Header textFields={headerTextFields} />
          {children}
          <Footer footerTextFields={{}} />
        </main>
      </body>
    </html>
  );
}
