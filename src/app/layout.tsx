import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OMNIVA — AI Customer Conversations, Everywhere.",
    template: "%s | OMNIVA",
  },
  description:
    "OMNIVA unifies WhatsApp, Instagram, and Facebook into one AI-powered inbox. Automate conversations, manage your CRM, run campaigns, and grow your business.",
  keywords: [
    "WhatsApp Business API",
    "unified inbox",
    "AI chatbot",
    "customer conversations",
    "CRM",
    "Instagram DM automation",
    "Facebook Messenger",
    "omnichannel",
  ],
  authors: [{ name: "OMNIVA" }],
  creator: "OMNIVA",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "OMNIVA",
    title: "OMNIVA — AI Customer Conversations, Everywhere.",
    description:
      "Unified WhatsApp, Instagram & Facebook inbox powered by AI. Automate, convert and delight customers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OMNIVA — AI Customer Conversations, Everywhere.",
    description:
      "Unified WhatsApp, Instagram & Facebook inbox powered by AI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#6366f1" },
    { media: "(prefers-color-scheme: dark)", color: "#4f46e5" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
