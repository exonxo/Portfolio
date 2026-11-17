import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header-1";
import { ThemeProvider } from "@/components/theme-provider";
import { TabProvider } from "@/lib/tab-context";
import { PageLoader } from "@/components/ui/page-loader";
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
  title: "Proloy Karmakar | Product Designer",
  description:
    "Product Designer specializing in enterprise workflows for retail, supply chain, and operational software. Translating operational complexity into scalable, usable systems.",
  keywords: [
    "UX Designer",
    "Product Designer",
    "Enterprise UX",
    "B2B SaaS",
    "Operational Design",
    "Proloy Karmakar",
  ],
  authors: [{ name: "Proloy Karmakar" }],
  openGraph: {
    title: "Proloy Karmakar | Product Designer",
    description:
      "Translating operational complexity into scalable, usable systems.",
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
        <PageLoader />
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
