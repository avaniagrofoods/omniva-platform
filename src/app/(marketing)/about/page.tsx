import Link from "next/link";
import { MessageSquare, ShieldCheck, Zap, Globe2, Heart, Award, ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "About Us — OMNIVA AI Platform",
  description:
    "Learn about OMNIVA's mission to power autonomous, intelligent customer conversations across WhatsApp, Instagram, Facebook, and Voice worldwide.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24 space-y-24">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto">
        <Badge variant="brand">Our Mission</Badge>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
          Empowering modern companies with autonomous conversation intelligence
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          We believe customer communication shouldn't require hundreds of support staff handling repetitive queries or customer frustration waiting on hold.
        </p>
      </div>

      {/* Story & Philosophy */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
            From fragmented chats to unified autonomous operations
          </h2>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Historically, businesses forced their support teams to juggle five separate tools: WhatsApp Web tabs, Meta Business Suite, a legacy ticketing helpdesk, and VoIP phone software. Every channel was an isolated island with zero shared context.
          </p>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            OMNIVA was founded to solve this problem permanently. We designed an event-driven engine combining real-time messaging, sub-second AI voice synthesis, and custom document RAG into a single, unified platform.
          </p>
          <div className="pt-4 flex items-center gap-6">
            <div>
              <span className="block text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">2,500+</span>
              <span className="text-xs text-zinc-500 font-semibold">Active Businesses</span>
            </div>
            <div className="h-8 w-px bg-zinc-200 dark:bg-zinc-800" />
            <div>
              <span className="block text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">140+</span>
              <span className="text-xs text-zinc-500 font-semibold">Countries Reached</span>
            </div>
            <div className="h-8 w-px bg-zinc-200 dark:bg-zinc-800" />
            <div>
              <span className="block text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">99.99%</span>
              <span className="text-xs text-zinc-500 font-semibold">Reliability SLA</span>
            </div>
          </div>
        </div>

        {/* Visual Pillars */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <Zap className="h-6 w-6 text-indigo-600" />
              <CardTitle className="mt-2 text-base">Speed Above All</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-zinc-500 leading-relaxed">
              Customer conversions decay 10x after the first 5 minutes. OMNIVA responds in under 1 second.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Lock className="h-6 w-6 text-emerald-500" />
              <CardTitle className="mt-2 text-base">Privacy & Isolation</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-zinc-500 leading-relaxed">
              Every workspace is isolated. We never use tenant data to train public foundation models.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Heart className="h-6 w-6 text-rose-500" />
              <CardTitle className="mt-2 text-base">Human-in-the-Loop</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-zinc-500 leading-relaxed">
              AI shouldn't replace empathy. Human agents can observe, step in, or whisper internal guidance anytime.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Globe2 className="h-6 w-6 text-cyan-500" />
              <CardTitle className="mt-2 text-base">Global Architecture</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-zinc-500 leading-relaxed">
              Multi-region edge routing ensuring sub-second voice and message delivery across all continents.
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Join the Movement CTA */}
      <div className="rounded-3xl border border-zinc-200 bg-zinc-50/50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-12">
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">
          Build your next-generation customer engine with OMNIVA
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
          Start your 14-day free trial today or speak with our solutions engineering team for customized enterprise architecture.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/register">
            <Button size="lg" variant="primary">
              Get Started Free
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
