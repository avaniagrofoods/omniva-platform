"use client";

import * as React from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, ArrowRight, Sparkles, HelpCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function PricingPage() {
  const [annual, setAnnual] = React.useState(true);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24 space-y-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <Badge variant="brand">Simple, Predictable Plans</Badge>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
          Transparent pricing that scales with your conversation volume
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          No hidden fees or surprise message markups. Upgrade, downgrade, or cancel anytime with one click.
        </p>

        {/* Monthly vs Annual Toggle */}
        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-zinc-100 p-1.5 dark:border-zinc-800 dark:bg-zinc-900">
          <button
            onClick={() => setAnnual(false)}
            className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
              !annual ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white" : "text-zinc-500"
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-bold transition-all ${
              annual ? "bg-indigo-600 text-white shadow-sm" : "text-zinc-500"
            }`}
          >
            <span>Annual Billing</span>
            <span className="rounded-full bg-emerald-400 px-1.5 py-0.5 text-[10px] font-extrabold text-zinc-900">
              SAVE 20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Starter */}
        <Card className="flex flex-col justify-between">
          <div>
            <CardHeader>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Starter</h3>
              <p className="text-xs text-zinc-500">For modern growing stores & boutique agencies.</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-zinc-900 dark:text-white">
                  ${annual ? "24" : "29"}
                </span>
                <span className="text-sm font-semibold text-zinc-500">/mo</span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-1">Billed {annual ? "annually ($288/yr)" : "monthly"}</p>
            </CardHeader>
            <CardContent className="space-y-3.5 text-sm text-zinc-600 dark:text-zinc-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>1,000 AI Conversations / mo</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>WhatsApp Cloud API + Instagram</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>2 Team Agent Seats</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>1 Knowledge Base Document</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-400">
                <XCircle className="h-4 w-4 shrink-0" />
                <span>AI Voice Calling</span>
              </div>
            </CardContent>
          </div>
          <div className="p-6 pt-0">
            <Link href="/register">
              <Button variant="outline" className="w-full">
                Start 14-Day Trial
              </Button>
            </Link>
          </div>
        </Card>

        {/* Pro Scale */}
        <Card className="relative flex flex-col justify-between border-indigo-500 ring-2 ring-indigo-500/40 shadow-2xl dark:border-indigo-400">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-white shadow-md">
            Recommended Choice
          </div>
          <div>
            <CardHeader>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Pro Scale</h3>
              <p className="text-xs text-zinc-500">For high-growth businesses requiring full omnichannel.</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-zinc-900 dark:text-white">
                  ${annual ? "64" : "79"}
                </span>
                <span className="text-sm font-semibold text-zinc-500">/mo</span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-1">Billed {annual ? "annually ($768/yr)" : "monthly"}</p>
            </CardHeader>
            <CardContent className="space-y-3.5 text-sm text-zinc-600 dark:text-zinc-300">
              <div className="flex items-center gap-2.5 font-semibold text-indigo-600 dark:text-indigo-400">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>10,000 AI Conversations / mo</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>WhatsApp, Instagram, Facebook, Voice</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>500 Voice Calling Minutes included</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>10 Team Agent Seats</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Unlimited Knowledge Base Docs</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Visual Workflow Automation Builder</span>
              </div>
            </CardContent>
          </div>
          <div className="p-6 pt-0">
            <Link href="/register">
              <Button variant="primary" className="w-full shadow-lg shadow-indigo-500/25">
                Start 14-Day Free Pro Trial
              </Button>
            </Link>
          </div>
        </Card>

        {/* Enterprise */}
        <Card className="flex flex-col justify-between">
          <div>
            <CardHeader>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Enterprise</h3>
              <p className="text-xs text-zinc-500">For large scale enterprises requiring custom SLAs.</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-zinc-900 dark:text-white">
                  ${annual ? "160" : "199"}
                </span>
                <span className="text-sm font-semibold text-zinc-500">/mo+</span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-1">Custom volume & seat configurations</p>
            </CardHeader>
            <CardContent className="space-y-3.5 text-sm text-zinc-600 dark:text-zinc-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Unlimited AI Conversations</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Outbound Voice Campaign Dialer</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Unlimited Agent Seats</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Dedicated Success Manager & Slack</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>BYOK (Bring Your Own Key) & Single Sign-On</span>
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

      {/* Feature Comparison Matrix */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white text-center">
          Compare plan capabilities
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/50 text-xs font-bold uppercase text-zinc-500">
              <tr>
                <th className="p-4">Feature</th>
                <th className="p-4 text-center">Starter</th>
                <th className="p-4 text-center text-indigo-600 dark:text-indigo-400">Pro Scale</th>
                <th className="p-4 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              <tr>
                <td className="p-4 font-semibold">WhatsApp Cloud API</td>
                <td className="p-4 text-center">Included</td>
                <td className="p-4 text-center">Included</td>
                <td className="p-4 text-center">High Throughput (80 msg/sec)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Instagram & Facebook DMs</td>
                <td className="p-4 text-center">Included</td>
                <td className="p-4 text-center">Included</td>
                <td className="p-4 text-center">Included</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">AI Voice Calling</td>
                <td className="p-4 text-center text-zinc-400">—</td>
                <td className="p-4 text-center">500 Mins / mo</td>
                <td className="p-4 text-center">Custom Pool + Outbound</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Knowledge Base Vector RAG</td>
                <td className="p-4 text-center">1 Doc</td>
                <td className="p-4 text-center">Unlimited</td>
                <td className="p-4 text-center">Unlimited + Custom Embeddings</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Webhooks & REST API</td>
                <td className="p-4 text-center">Standard</td>
                <td className="p-4 text-center">Advanced</td>
                <td className="p-4 text-center">Dedicated API Endpoints</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Support SLA</td>
                <td className="p-4 text-center">Email (24h)</td>
                <td className="p-4 text-center">Priority Chat (2h)</td>
                <td className="p-4 text-center">15-Min Critical Slack SLA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Pricing FAQs */}
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-center text-zinc-900 dark:text-white">
          Billing & Procurement FAQs
        </h2>
        <Accordion type="single" defaultValue="faq-1">
          <AccordionItem value="faq-1">
            <AccordionTrigger>Are Meta WhatsApp conversation fees included?</AccordionTrigger>
            <AccordionContent>
              Meta charges for business-initiated and user-initiated conversations directly to your Meta WhatsApp account at cost with zero platform markups from OMNIVA.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-2">
            <AccordionTrigger>Can I add more agent seats or voice minutes without changing plans?</AccordionTrigger>
            <AccordionContent>
              Yes! You can purchase additional seat packs ($10/seat/mo) or voice pools ($0.08/minute) right from your workspace dashboard anytime.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-3">
            <AccordionTrigger>What happens if I exceed my monthly AI conversation quota?</AccordionTrigger>
            <AccordionContent>
              Your service will never be unexpectedly cut off. Conversations continue smoothly, and extra conversations are billed at $0.005 per conversation or you can auto-upgrade with one click.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
