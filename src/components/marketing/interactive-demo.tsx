"use client";

import * as React from "react";
import {
  MessageSquare,
  Bot,
  User,
  Sparkles,
  PhoneCall,
  PhoneIncoming,
  CheckCheck,
  ArrowRight,
  ShieldAlert,
  Zap,
  Tag,
  Clock,
  Send,
  Volume2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/helpers";

type TabMode = "whatsapp" | "instagram" | "voice" | "crm";

export function InteractiveDemo() {
  const [activeTab, setActiveTab] = React.useState<TabMode>("whatsapp");
  const [voiceCallState, setVoiceCallState] = React.useState<"idle" | "calling" | "connected">("idle");
  const [callDuration, setCallDuration] = React.useState(0);

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (voiceCallState === "connected") {
      interval = setInterval(() => setCallDuration((c) => c + 1), 1000);
    } else {
      setCallDuration(0);
    }
    return () => clearInterval(interval);
  }, [voiceCallState]);

  const formatCallTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remainder.toString().padStart(2, "0")}`;
  };

  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-zinc-200/80 bg-gradient-to-b from-white to-zinc-50/80 p-4 shadow-2xl backdrop-blur-xl sm:p-6 lg:p-8 dark:border-zinc-800 dark:from-zinc-900/90 dark:to-zinc-950">
      {/* Top Channel Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200/80 pb-6 dark:border-zinc-800">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab("whatsapp")}
            className={cn(
              "flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all",
              activeTab === "whatsapp"
                ? "bg-[#25D366]/15 text-[#25D366] ring-1 ring-[#25D366]/40 shadow-sm"
                : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            )}
          >
            <span className="h-2 w-2 rounded-full bg-[#25D366]" />
            WhatsApp Cloud API
          </button>

          <button
            onClick={() => setActiveTab("instagram")}
            className={cn(
              "flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all",
              activeTab === "instagram"
                ? "bg-[#E1306C]/15 text-[#E1306C] ring-1 ring-[#E1306C]/40 shadow-sm"
                : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            )}
          >
            <span className="h-2 w-2 rounded-full bg-[#E1306C]" />
            Instagram Direct DM
          </button>

          <button
            onClick={() => setActiveTab("voice")}
            className={cn(
              "flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all",
              activeTab === "voice"
                ? "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 ring-1 ring-indigo-500/40 shadow-sm"
                : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            )}
          >
            <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            AI Voice Calling (Sub-Second)
          </button>

          <button
            onClick={() => setActiveTab("crm")}
            className={cn(
              "flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all",
              activeTab === "crm"
                ? "bg-violet-500/15 text-violet-600 dark:text-violet-400 ring-1 ring-violet-500/40 shadow-sm"
                : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            )}
          >
            <span className="h-2 w-2 rounded-full bg-violet-500" />
            Unified Inbox & CRM
          </button>
        </div>

        {/* Live Status indicator */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Interactive Demonstration (Illustrative Workflows)</span>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="mt-6">
        {/* WHATSAPP TAB */}
        {activeTab === "whatsapp" && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Conversation View */}
            <div className="lg:col-span-2 flex flex-col justify-between rounded-2xl border border-zinc-200 bg-[#f0f2f5] dark:border-zinc-800 dark:bg-zinc-950/60 p-4 min-h-[420px]">
              {/* WhatsApp Header */}
              <div className="flex items-center justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold">
                    RA
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                      Rohan Agarwal (Example Workflow)
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      +1 (555) 019-2834 • Illustrative Demo
                    </p>
                  </div>
                </div>
                <Badge variant="whatsapp">WhatsApp Cloud API</Badge>
              </div>

              {/* Chat Thread */}
              <div className="my-4 flex flex-col space-y-3 overflow-y-auto">
                {/* Customer message */}
                <div className="flex items-end gap-2 max-w-[80%]">
                  <div className="rounded-2xl rounded-bl-none bg-white p-3.5 shadow-sm text-sm text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
                    <p>Hi! Can you check if order #ON-84920 has shipped? Also does it include the annual warranty?</p>
                    <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-zinc-400">
                      <span>11:42 AM</span>
                    </div>
                  </div>
                </div>

                {/* AI Reasoning Log */}
                <div className="mx-auto flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3 py-1 text-[11px] font-medium text-indigo-700 dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>OMNIVA AI Agent matched order in Shopify DB & retrieved warranty docs</span>
                </div>

                {/* AI Assistant Reply */}
                <div className="flex items-end justify-end gap-2 self-end max-w-[85%]">
                  <div className="rounded-2xl rounded-br-none bg-gradient-to-br from-indigo-600 to-violet-600 p-3.5 text-white shadow-md text-sm">
                    <p className="font-semibold text-xs text-indigo-200 mb-1 flex items-center gap-1.5">
                      <Bot className="h-3.5 w-3.5" /> OMNIVA Autonomous Agent
                    </p>
                    <p>
                      Hello Rohan! 👋 Yes, order <strong>#ON-84920</strong> was dispatched this morning via BlueDart Express (Tracking: <strong>BL-771890</strong>). Expected delivery is tomorrow before 4 PM.
                    </p>
                    <p className="mt-2 text-indigo-100">
                      ✅ Your 1-Year Comprehensive Replacement Warranty is automatically registered and activated with this dispatch!
                    </p>
                    <div className="mt-2 flex items-center justify-end gap-1 text-[10px] text-indigo-200">
                      <span>11:42 AM</span>
                      <CheckCheck className="h-3.5 w-3.5 text-cyan-300" />
                    </div>
                  </div>
                </div>

                {/* Interactive Action Chips */}
                <div className="flex flex-wrap gap-2 pt-2 justify-end">
                  <span className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 shadow-xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    🚚 Track Live Courier
                  </span>
                  <span className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 shadow-xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    📄 Download Warranty PDF
                  </span>
                </div>
              </div>

              {/* Chat Input Bar */}
              <div className="flex items-center gap-2 rounded-xl bg-white p-2 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <input
                  type="text"
                  placeholder="Simulated WhatsApp reply..."
                  className="flex-1 bg-transparent px-3 text-sm focus:outline-none dark:text-zinc-100"
                  readOnly
                  value="Human agent can take over seamlessly anytime with 1-click."
                />
                <Button size="sm" variant="whatsapp" className="h-8 px-3">
                  <Send className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>

            {/* Sidebar Insights */}
            <div className="flex flex-col space-y-4">
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
                <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  AI Sentiment & Intent
                </h5>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Customer Mood:</span>
                  <Badge variant="success">Delighted (Positive)</Badge>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Turnaround Speed:</span>
                  <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">0.72 seconds</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Human Touch:</span>
                  <span className="text-xs text-zinc-500">Zero human effort required</span>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
                <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Automated Actions Taken
                </h5>
                <ul className="mt-3 space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Queried live ERP database for Order #ON-84920
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Sent automated tracking notification
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Updated CRM Contact record with Warranty Tag
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* INSTAGRAM TAB */}
        {activeTab === "instagram" && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 flex flex-col justify-between rounded-2xl border border-zinc-200 bg-[#fafafa] dark:border-zinc-800 dark:bg-zinc-950/60 p-4 min-h-[420px]">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    SP
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                      @brand_creator (Example Workflow)
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Replied to your Story • Illustrative Use Case
                    </p>
                  </div>
                </div>
                <Badge variant="instagram">Instagram Direct API</Badge>
              </div>

              <div className="my-4 flex flex-col space-y-3">
                {/* Story Mention Card */}
                <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="h-12 w-12 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-600 font-bold text-xs">
                    STORY
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold text-zinc-800 dark:text-zinc-200">
                      Mentioned your product in their story
                    </p>
                    <p className="text-zinc-500">"Obsessed with this workflow speed! How do I get the Enterprise tier?"</p>
                  </div>
                </div>

                {/* Instant DM Automation */}
                <div className="flex items-end justify-end gap-2 self-end max-w-[85%]">
                  <div className="rounded-2xl rounded-br-none bg-gradient-to-tr from-rose-600 to-purple-600 p-3.5 text-white shadow-md text-sm">
                    <p className="font-semibold text-xs text-rose-200 mb-1 flex items-center gap-1.5">
                      <Bot className="h-3.5 w-3.5" /> OMNIVA Instant Story Lead Bot
                    </p>
                    <p>
                      Hey Sneha! ✨ Thank you so much for the love! We just unlocked VIP Enterprise access for your team with customized WhatsApp + Voice onboarding.
                    </p>
                    <p className="mt-2 text-rose-100">
                      Would you like our Solution Architect to run a 15-min tailored setup for you today at 4 PM?
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900 flex items-center justify-between text-xs">
                <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                  Lead Score Assigned: <strong className="text-emerald-600">98/100 (High-Ticket Influencer)</strong>
                </span>
                <Badge variant="brand">Pushed to CRM</Badge>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
                <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Instagram Growth Engine
                </h5>
                <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Never miss an Instagram Story mention, post comment, or Reel reply. OMNIVA AI triggers instant DMs that turn casual viewers into paying clients.
                </p>
                <div className="mt-4 rounded-xl bg-indigo-50 p-3 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300">
                  ⚡ Converts 4.2x higher than traditional link-in-bio forms.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VOICE CALL TAB */}
        {activeTab === "voice" && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 flex flex-col justify-between rounded-2xl border border-zinc-200 bg-zinc-900 p-6 text-white min-h-[420px]">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500 shadow-md">
                    <PhoneCall className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      OMNIVA Real-time Voice Agent
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Inbound IVR & Outbound Calling Engine
                    </p>
                  </div>
                </div>
                <Badge variant="brand">Real-Time Voice Pipeline</Badge>
              </div>

              {/* Live Call Simulator */}
              <div className="my-6 flex flex-col items-center justify-center text-center">
                {voiceCallState === "idle" && (
                  <div className="flex flex-col items-center space-y-4">
                    <div className="h-20 w-20 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                      <PhoneIncoming className="h-8 w-8 animate-bounce" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white">Experience AI Voice Calling</p>
                      <p className="text-xs text-zinc-400 max-w-sm">
                        Experience ultra-human speech with zero awkward pauses, background noise cancellation, and automated CRM logging.
                      </p>
                    </div>
                    <Button
                      onClick={() => setVoiceCallState("connected")}
                      variant="primary"
                      className="gap-2 px-6"
                    >
                      <PhoneCall className="h-4 w-4" />
                      <span>Start Simulated Inbound Call</span>
                    </Button>
                  </div>
                )}

                {voiceCallState === "connected" && (
                  <div className="flex flex-col items-center space-y-4 w-full">
                    <div className="flex items-center gap-1.5 h-12">
                      <span className="h-8 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
                      <span className="h-12 w-1.5 rounded-full bg-indigo-400 animate-pulse delay-75" />
                      <span className="h-6 w-1.5 rounded-full bg-indigo-600 animate-pulse delay-150" />
                      <span className="h-10 w-1.5 rounded-full bg-violet-400 animate-pulse delay-100" />
                      <span className="h-14 w-1.5 rounded-full bg-indigo-300 animate-pulse delay-200" />
                    </div>

                    <div className="text-center">
                      <p className="text-xl font-bold text-white tracking-widest font-mono">
                        {formatCallTime(callDuration)}
                      </p>
                      <p className="text-xs text-emerald-400 font-semibold flex items-center justify-center gap-1 mt-1">
                        <Volume2 className="h-3.5 w-3.5" /> Call Active • Human Voice Synthesis (12 Languages)
                      </p>
                    </div>

                    <div className="w-full max-w-md rounded-xl bg-zinc-800/80 p-3 text-left text-xs text-zinc-300 space-y-1.5 border border-zinc-700">
                      <p className="text-indigo-400 font-semibold">🎙️ Live Transcript Preview:</p>
                      <p className="italic">
                        "Good afternoon! I'm Omniva Voice Assistant. I see you submitted an appointment inquiry for tomorrow at 3 PM. Would you like me to lock that in for you?"
                      </p>
                    </div>

                    <Button
                      onClick={() => setVoiceCallState("idle")}
                      variant="destructive"
                      className="bg-rose-600 hover:bg-rose-700 text-white rounded-xl px-6"
                    >
                      End Call & View Call Summary
                    </Button>
                  </div>
                )}
              </div>

              {/* Call Capabilities Footer */}
              <div className="grid grid-cols-3 gap-2 border-t border-zinc-800 pt-3 text-center text-xs text-zinc-400">
                <div>
                  <span className="block font-bold text-white">Streaming</span>
                  <span>Audio Pipeline</span>
                </div>
                <div>
                  <span className="block font-bold text-white">Multilingual</span>
                  <span>Dialects Supported</span>
                </div>
                <div>
                  <span className="block font-bold text-white">Auto-CRM</span>
                  <span>Summary & Sentiment</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
                <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Enterprise Voice Highlights
                </h5>
                <ul className="mt-3 space-y-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                  <li className="flex items-start gap-2">
                    <CheckCheck className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Handles thousands of simultaneous phone calls with zero hold queues.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCheck className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Transfers to live human agents with zero-loss context briefing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCheck className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Post-call transcription, sentiment score, and automatic action items.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* UNIFIED INBOX & CRM TAB */}
        {activeTab === "crm" && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950/60 min-h-[420px]">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                  Omnichannel Customer Timeline
                </h4>
                <Badge variant="brand">360° Contact Profile</Badge>
              </div>

              {/* Visual Timeline Events */}
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366] shrink-0">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div className="flex-1 rounded-xl bg-zinc-50 p-3 text-xs dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-zinc-900 dark:text-white">WhatsApp Order Inquired</span>
                      <span className="text-[10px] text-zinc-400">10 mins ago</span>
                    </div>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                      Customer checked dispatch date for Order #ON-84920 via WhatsApp API.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-600 shrink-0">
                    <PhoneCall className="h-4 w-4" />
                  </div>
                  <div className="flex-1 rounded-xl bg-zinc-50 p-3 text-xs dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-zinc-900 dark:text-white">AI Voice Follow-up Call</span>
                      <span className="text-[10px] text-zinc-400">2 hours ago</span>
                    </div>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                      Confirmed address alteration. Call duration: 42 seconds.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E1306C]/20 text-[#E1306C] shrink-0">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div className="flex-1 rounded-xl bg-zinc-50 p-3 text-xs dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-zinc-900 dark:text-white">Instagram Story Lead Enrolled</span>
                      <span className="text-[10px] text-zinc-400">Yesterday</span>
                    </div>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                      Triggered automated workflow: "High-Intent VIP Retargeting".
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
                <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  CRM Synchronized
                </h5>
                <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  All channels feed into a single unified customer profile. No fragmented chat history across multiple agent tools.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <Badge variant="brand">HubSpot Sync</Badge>
                  <Badge variant="brand">Salesforce</Badge>
                  <Badge variant="brand">Shopify</Badge>
                  <Badge variant="brand">Custom Webhooks</Badge>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
