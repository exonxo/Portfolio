import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header-1";
import { ThemeProvider } from "@/components/theme-provider";
import { TabProvider } from "@/lib/tab-context";
import { MobileTabBar } from "@/components/ui/mobile-tab-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Proloy Karmakar | UX Engineer and Product Designer",
  description:
    "UX engineer and product designer in Kolkata. I design retail software for Ginesys One and build the front end myself: a mobile POS used by 1,000+ retailers and the Ginesys Insights report builder.",
  keywords: [
    "UX Engineer",
    "UX Designer",
    "Product Designer",
    "Enterprise UX",
    "B2B SaaS",
    "Operational Design",
    "Proloy Karmakar",
  ],
  authors: [{ name: "Proloy Karmakar" }],
  openGraph: {
    title: "Proloy Karmakar | UX Engineer and Product Designer",
    description:
      "A product designer who builds the front end of what he designs.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <TabProvider>
            <Header />
            <main className="flex-1 pt-20">{children}</main>
            <MobileTabBar />
          </TabProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
