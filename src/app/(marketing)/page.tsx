import Link from "next/link";
import {
  MessageSquare,
  Sparkles,
  PhoneCall,
  Bot,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Headphones,
  Users,
  BarChart3,
  Globe2,
  Workflow,
  HelpCircle,
  Star,
  Layers,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { InteractiveDemo } from "@/components/marketing/interactive-demo";

export default function MarketingHomePage() {
  return (
    <div className="flex flex-col space-y-24 pb-20 pt-8 sm:pt-16 sm:space-y-32">
      {/* ─── 1. HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="relative px-6 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Announcement Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold text-indigo-700 backdrop-blur-md dark:border-indigo-900/60 dark:bg-indigo-950/60 dark:text-indigo-300">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
            <span>Omnichannel 2.0 with Real-time Voice Agents is Live</span>
            <ArrowRight className="h-3 w-3" />
          </div>

          {/* Main Headline */}
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl sm:leading-[1.1] lg:text-7xl dark:text-white">
            AI Customer Conversations,{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
              Everywhere.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-lg text-zinc-600 sm:text-xl dark:text-zinc-400">
            Unify WhatsApp Cloud API, Instagram, Facebook, and AI Voice into one autonomous engine. Resolve 70% of inquiries instantly, route high-value leads, and scale your support 24/7 without growing headcount.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-4">
            <Link href="/register">
              <Button size="lg" variant="primary" className="gap-2 shadow-lg shadow-indigo-500/25">
                <span>Start Free 14-Day Trial</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="gap-2">
                <span>Book Live Architecture Demo</span>
              </Button>
            </Link>
          </div>

          {/* Social Proof Highlights */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-zinc-500 dark:text-zinc-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Official Meta Cloud API Partner
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              5-minute quick onboarding
            </span>
          </div>
        </div>

        {/* Interactive Live Demo Stage */}
        <div className="mt-14 sm:mt-18">
          <InteractiveDemo />
        </div>
      </section>

      {/* ─── 2. CHANNEL ECOSYSTEM GRID ────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="brand">Native Integrations</Badge>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Connect every customer touchpoint into one brain
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
            Stop switching between disjointed browser tabs. Omniva aggregates all customer communication into a unified high-throughput infrastructure.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* WhatsApp Card */}
          <Card className="hover:border-emerald-500/40 transition-colors">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366]/15 text-[#25D366]">
                <MessageSquare className="h-6 w-6" />
              </div>
              <CardTitle className="mt-4">WhatsApp Cloud API</CardTitle>
              <CardDescription>
                Official Meta Cloud integration with green tick support, interactive catalogs, bulk broadcasts, and zero template delays.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#25D366]" />
                  Pre-approved Meta HSM message templates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#25D366]" />
                  Carousel & quick-reply buttons
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#25D366]" />
                  Shopify & WooCommerce order webhooks
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Instagram Direct */}
          <Card className="hover:border-[#E1306C]/40 transition-colors">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E1306C]/15 text-[#E1306C]">
                <Sparkles className="h-6 w-6" />
              </div>
              <CardTitle className="mt-4">Instagram Direct DMs</CardTitle>
              <CardDescription>
                Auto-reply to Story mentions, post comments, and direct messages to capture warm social leads while your competitors sleep.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#E1306C]" />
                  Story mention auto-responders
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#E1306C]" />
                  Comment-to-DM automated lead flows
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#E1306C]" />
                  Influencer detection & priority VIP tags
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* AI Voice Calling */}
          <Card className="hover:border-indigo-500/40 transition-colors">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-600">
                <PhoneCall className="h-6 w-6" />
              </div>
              <CardTitle className="mt-4">Autonomous Voice Agents</CardTitle>
              <CardDescription>
                Human-sounding AI callers with 450ms audio latency. Handles phone inquiries, books appointments, and qualifies inbound leads.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-indigo-500" />
                  Natural interruption handling & pauses
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-indigo-500" />
                  Live warm transfer to human agents
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-indigo-500" />
                  Automated post-call summary in CRM
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ─── 3. AI KNOWLEDGE BASE & COPILOT ──────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge variant="brand">Custom AI Intelligence</Badge>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              Ground your AI in your company documents, not generic hallucinations
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Upload your product PDFs, policy sheets, Notion docs, or website URLs. OMNIVA vectorizes and indexes your knowledge base so every agent response is 100% accurate, citeable, and compliant.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    Dual Mode: Autonomous or Agent Assist
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    Let AI answer common questions automatically, or configure it as an internal copilot drafting suggested replies for human team review.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                  <Globe2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    100+ Languages with Auto-Detection
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    Customer texts in Hindi, Spanish, or Marathi? OMNIVA responds fluently while your team reads everything in English.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    Zero Customer Data Training
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    Your company data is never used to train public LLMs. Fully compliant with enterprise isolation standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual AI Card */}
          <div className="rounded-3xl border border-zinc-200/80 bg-zinc-900 p-8 text-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-indigo-400" />
                <span className="font-bold text-sm">Knowledge Base Ingestion Engine</span>
              </div>
              <Badge variant="brand">Vector Search Active</Badge>
            </div>

            <div className="mt-6 space-y-4 text-xs font-mono">
              <div className="flex items-center justify-between rounded-xl bg-zinc-800/80 p-3.5 border border-zinc-700">
                <span className="text-zinc-300">📄 Product_Catalog_2026.pdf</span>
                <span className="text-emerald-400 font-semibold">Indexed (418 chunks)</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-zinc-800/80 p-3.5 border border-zinc-700">
                <span className="text-zinc-300">🔗 https://help.omniva.com/policies</span>
                <span className="text-emerald-400 font-semibold">Synced (Real-time)</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-zinc-800/80 p-3.5 border border-zinc-700">
                <span className="text-zinc-300">📊 Pricing_Matrix_Enterprise.xlsx</span>
                <span className="text-emerald-400 font-semibold">Indexed (92 chunks)</span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-indigo-950/60 p-4 border border-indigo-800/60">
              <p className="text-xs text-indigo-200">
                🎯 <strong>Semantic Grounding Accuracy:</strong> 99.4% precision with source verification cited before each answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. STATS & SOCIAL PROOF ─────────────────────────────────────────── */}
      <section className="border-y border-zinc-200/80 bg-zinc-50/50 py-16 dark:border-zinc-800/80 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            <div>
              <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 sm:text-5xl">
                450ms
              </div>
              <p className="mt-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                Voice Audio Latency
              </p>
            </div>

            <div>
              <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 sm:text-5xl">
                72%
              </div>
              <p className="mt-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                Tickets Auto-Resolved
              </p>
            </div>

            <div>
              <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 sm:text-5xl">
                10M+
              </div>
              <p className="mt-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                Conversations Handled
              </p>
            </div>

            <div>
              <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 sm:text-5xl">
                99.99%
              </div>
              <p className="mt-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                Guaranteed Uptime SLA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. PRICING SECTION ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="brand">Simple, Transparent Pricing</Badge>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Choose the plan built for your growth velocity
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
            All plans include full WhatsApp Cloud API access, unified omnichannel inbox, and 14-day risk-free trial.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* STARTER */}
          <Card className="flex flex-col justify-between">
            <div>
              <CardHeader>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Starter</h3>
                <p className="text-xs text-zinc-500">Perfect for boutique brands and early businesses.</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-zinc-900 dark:text-white">$29</span>
                  <span className="text-sm font-semibold text-zinc-500">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>1,000 AI Conversations / mo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>WhatsApp + Instagram DMs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>2 Team Agent Seats</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>1 Knowledge Base source</span>
                </div>
              </CardContent>
            </div>
            <div className="p-6 pt-0">
              <Link href="/register">
                <Button variant="outline" className="w-full">
                  Start Starter Trial
                </Button>
              </Link>
            </div>
          </Card>

          {/* PRO (Popular) */}
          <Card className="relative flex flex-col justify-between border-indigo-500 ring-2 ring-indigo-500/50 shadow-xl dark:border-indigo-400">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-white shadow-md">
              Most Popular
            </div>
            <div>
              <CardHeader>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Pro Scale</h3>
                <p className="text-xs text-zinc-500">For fast-growing companies demanding full automation.</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-zinc-900 dark:text-white">$79</span>
                  <span className="text-sm font-semibold text-zinc-500">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                <div className="flex items-center gap-2 font-semibold text-indigo-600 dark:text-indigo-400">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>10,000 AI Conversations / mo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>WhatsApp, IG, FB, Voice Inbound</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>500 Voice Calling Minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>10 Team Agent Seats</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Unlimited Knowledge Base Docs</span>
                </div>
              </CardContent>
            </div>
            <div className="p-6 pt-0">
              <Link href="/register">
                <Button variant="primary" className="w-full shadow-md">
                  Start 14-Day Free Pro Trial
                </Button>
              </Link>
            </div>
          </Card>

          {/* ENTERPRISE */}
          <Card className="flex flex-col justify-between">
            <div>
              <CardHeader>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Enterprise</h3>
                <p className="text-xs text-zinc-500">Tailored custom deployments & dedicated SLAs.</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-zinc-900 dark:text-white">$199</span>
                  <span className="text-sm font-semibold text-zinc-500">/mo / Custom</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Unlimited AI Conversations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Outbound Voice Campaign Dialer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Unlimited Agent Seats</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Dedicated Slack Channel & SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>BYOK & On-Premise option</span>
                </div>
              </CardContent>
            </div>
            <div className="p-6 pt-0">
              <Link href="/contact">
                <Button variant="outline" className="w-full">
                  Contact Enterprise Sales
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* ─── 6. FAQ ACCORDION ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="text-center">
          <Badge variant="brand">Frequently Asked Questions</Badge>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Everything you need to know about OMNIVA
          </h2>
        </div>

        <div className="mt-10">
          <Accordion type="single" defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does WhatsApp Cloud API integration work?</AccordionTrigger>
              <AccordionContent>
                OMNIVA integrates directly with Meta's official WhatsApp Business Cloud API. You can connect your existing phone number or register a new one in 5 minutes with zero server maintenance, no third-party markups, and instant template synchronization.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Can human support agents intervene when AI is chatting?</AccordionTrigger>
              <AccordionContent>
                Yes! OMNIVA features seamless Agent Handover. Whenever the AI detects negative sentiment, high purchase intent, or if the customer requests a human, the ticket immediately routes to your team's unified inbox with a smart summary.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>How fast is the AI Voice Agent?</AccordionTrigger>
              <AccordionContent>
                Our real-time voice pipeline clocks at sub-450ms audio latency, making conversations feel completely natural and human-like with zero awkward pauses. It natively supports interruption handling and multiple languages.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Can I bring my own OpenAI or Anthropic API keys (BYOK)?</AccordionTrigger>
              <AccordionContent>
                Yes! Enterprise and Pro tier workspaces can toggle BYOK (Bring Your Own Key) to use their own LLM accounts, or utilize OMNIVA's ultra-optimized hosted infrastructure with unified billing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* ─── 7. FINAL CALL TO ACTION ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-indigo-900 via-indigo-800 to-violet-900 px-8 py-16 text-center text-white shadow-2xl sm:px-16 lg:py-24">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
              Ready to transform your customer operations?
            </h2>
            <p className="mt-4 text-base text-indigo-200 sm:text-lg">
              Join thousands of businesses automating WhatsApp, Instagram, and Voice with OMNIVA today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/register">
                <Button size="lg" variant="glow" className="bg-white text-indigo-900 hover:bg-zinc-100 shadow-none font-bold">
                  Start Your Free 14-Day Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="ghost" className="text-white hover:bg-white/10">
                  Talk to an Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
