import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OMNIVA — AI Customer Conversations, Everywhere.",
  description:
    "OMNIVA unifies WhatsApp, Instagram, and Facebook into one AI-powered inbox. Automate conversations, manage your CRM, run campaigns, and grow your business.",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
