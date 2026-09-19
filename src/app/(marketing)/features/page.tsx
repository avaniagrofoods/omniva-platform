import Link from "next/link";
import {
  MessageSquare,
  Sparkles,
  PhoneCall,
  Bot,
  Zap,
  CheckCircle2,
  ArrowRight,
  Headphones,
  Users,
  BarChart3,
  Globe2,
  Workflow,
  ShieldCheck,
  Share2,
  Clock,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Features — OMNIVA AI Platform",
  description:
    "Explore OMNIVA's full suite of omnichannel customer conversation tools: WhatsApp Cloud API, Instagram DMs, AI Voice Agents, Unified Inbox, and CRM Automations.",
};

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24 space-y-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <Badge variant="brand">Enterprise Architecture</Badge>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
          Engineered for high-volume customer conversation velocity
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Everything your sales, support, and operations teams require to automate and manage customer touchpoints across all major messaging and voice protocols.
        </p>
      </div>

      {/* Feature 1: Unified Omnichannel Inbox */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <Badge variant="brand">Unified Inbox</Badge>
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
            One team inbox for WhatsApp, Instagram, Facebook, and Email
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Eliminate communication silos. Your agents manage conversations from every channel within a single, lightning-fast workspace with real-time collision detection.
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300 pt-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <strong>Agent Collision Detection:</strong> See who is typing or viewing in real-time.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <strong>Internal Notes & Mentions:</strong> Tag teammates privately right inside chat threads.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <strong>Canned Responses & Macros:</strong> Fire multi-step actions with one keystroke.
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900 shadow-xl">
          <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Active Queue (38)</span>
              <Badge variant="success">99.8% SLA Pass Rate</Badge>
            </div>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-3 text-xs dark:border-indigo-900 dark:bg-indigo-950/30 flex items-center justify-between">
                <div>
                  <p className="font-bold text-zinc-900 dark:text-white">Vikram Mehta (WhatsApp)</p>
                  <p className="text-zinc-500">"Looking to purchase 50 licenses for our logistics team..."</p>
                </div>
                <Badge variant="brand">Assigned: Rahul S.</Badge>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-3 text-xs dark:border-zinc-800 dark:bg-zinc-900 flex items-center justify-between">
                <div>
                  <p className="font-bold text-zinc-900 dark:text-white">Ananya Sharma (Instagram)</p>
                  <p className="text-zinc-500">"Story Reply: Loved your new voice assistant demo!"</p>
                </div>
                <Badge variant="outline">Unassigned</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 2: Real-time Voice Agents */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:flex-row-reverse">
        <div className="order-2 lg:order-1 rounded-3xl border border-zinc-200 bg-zinc-900 p-6 text-white shadow-xl">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div className="flex items-center gap-2">
              <PhoneCall className="h-5 w-5 text-indigo-400" />
              <span className="font-bold text-sm">OMNIVA Sub-Second Voice Stream</span>
            </div>
            <Badge variant="brand">WebSocket Real-time</Badge>
          </div>
          <div className="mt-6 space-y-3 font-mono text-xs">
            <div className="rounded-xl bg-zinc-800 p-3">
              <p className="text-indigo-300">[00:01.2] INBOUND CALL: +91 98200 11223</p>
              <p className="text-zinc-400 mt-1">AI Agent: "Welcome to Apex Logistics! Are you calling regarding shipment dispatch or billing?"</p>
            </div>
            <div className="rounded-xl bg-zinc-800 p-3">
              <p className="text-emerald-400">[00:03.4] CUSTOMER VOICE DETECTED</p>
              <p className="text-zinc-400 mt-1">Customer: "Shipment dispatch for invoice 4402 please."</p>
            </div>
            <div className="rounded-xl bg-indigo-950 p-3 border border-indigo-800">
              <p className="text-cyan-300">[00:04.1] ERP LOOKUP (180ms)</p>
              <p className="text-white mt-1">AI Agent: "Invoice 4402 is on delivery truck #12, expected at 2:30 PM today."</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-4">
          <Badge variant="brand">Autonomous Voice</Badge>
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
            Human-grade AI Phone Agents with Sub-Second Latency
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Eliminate traditional touchtone IVR menus that frustrate callers. OMNIVA AI speaks fluently, grasps customer intent in under 450 milliseconds, and executes live database actions during calls.
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300 pt-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <strong>Instant Natural Speech:</strong> No robotic awkward delays.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <strong>Appointment Booking:</strong> Real-time calendar sync with Google & Outlook.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <strong>Outbound Broadcast Calls:</strong> Automatically notify customers about deliveries or renewals.
            </li>
          </ul>
        </div>
      </div>

      {/* Feature 3: Visual Workflow Automations */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <Badge variant="brand">No-Code Canvas</Badge>
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
            Build complex omnichannel automations in minutes
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Combine event triggers, conditions, AI reasoning nodes, and external webhooks to craft automated customer journeys that convert.
          </p>
          <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300 pt-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <strong>Triggers:</strong> Inbound WhatsApp, IG Story mention, form submission, webhook.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <strong>AI Decision Nodes:</strong> Route by customer intent or lead score.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <strong>Multi-Channel Broadcasts:</strong> Fallback from WhatsApp to SMS if unread.
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900 shadow-xl">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 space-y-4">
            <div className="flex items-center gap-3 rounded-xl border border-emerald-300 bg-emerald-50/50 p-3 text-xs font-semibold text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
              <Zap className="h-4 w-4 text-emerald-600" />
              <span>TRIGGER: Customer sends WhatsApp with keyword "DEMO"</span>
            </div>
            <div className="flex justify-center">
              <div className="h-6 w-0.5 bg-zinc-300 dark:bg-zinc-700" />
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-indigo-300 bg-indigo-50/50 p-3 text-xs font-semibold text-indigo-800 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300">
              <Bot className="h-4 w-4 text-indigo-600" />
              <span>AI CONDITION: Qualify company size & budget automatically</span>
            </div>
            <div className="flex justify-center">
              <div className="h-6 w-0.5 bg-zinc-300 dark:bg-zinc-700" />
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-violet-300 bg-violet-50/50 p-3 text-xs font-semibold text-violet-800 dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-300">
              <Workflow className="h-4 w-4 text-violet-600" />
              <span>ACTION: Create Contact in CRM + Send Interactive Calendar Link</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Bottom Banner */}
      <div className="rounded-3xl bg-indigo-600 p-8 text-center text-white sm:p-12 shadow-xl">
        <h3 className="text-2xl font-bold sm:text-3xl">See OMNIVA in action for your brand</h3>
        <p className="mt-2 text-indigo-100 text-sm max-w-xl mx-auto">
          Start your 14-day free trial today. Connect WhatsApp and your first knowledge base in under 5 minutes.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href="/register">
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-zinc-100 font-bold">
              Start Free Trial
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="text-white border-white/40 hover:bg-white/10">
              Schedule Custom Walkthrough
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
