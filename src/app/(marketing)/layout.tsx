import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "OMNIVA — AI Customer Conversations, Everywhere.",
  description:
    "OMNIVA unifies WhatsApp Cloud API, Instagram, Facebook, and Real-time Voice into an autonomous AI engine. Close deals faster, resolve tickets in seconds, and scale customer operations effortlessly.",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-white text-zinc-900 selection:bg-indigo-500/20 selection:text-indigo-600 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gradient-to-tr from-indigo-500/15 via-violet-500/10 to-transparent blur-3xl dark:from-indigo-600/15 dark:via-purple-600/10" />
        <div className="absolute top-[800px] -left-48 h-[500px] w-[600px] rounded-full bg-emerald-500/5 blur-3xl dark:bg-emerald-500/10" />
        <div className="absolute top-[1800px] -right-48 h-[600px] w-[700px] rounded-full bg-indigo-500/5 blur-3xl dark:bg-indigo-500/10" />
      </div>

      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
