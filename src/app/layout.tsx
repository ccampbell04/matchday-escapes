import { Header } from "@/components/Header";
import { getHeaderTextFields } from "@/utils/textFieldUtils";
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
  const headerTextFields = getHeaderTextFields("header");
  return (
    <html lang="en">
      <body>
        <main>
          <div className="content">
            <SpeedInsights />
            <Analytics />
            <Header textFields={headerTextFields} />
            {children}
          </div>
          <Footer footerTextFields={{}} />
        </main>
      </body>
    </html>
  );
}
