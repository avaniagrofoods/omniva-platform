"use client";

import * as React from "react";
import { Mail, Phone, MessageSquare, MapPin, CheckCircle2, Send, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24 space-y-16">
      <div className="text-center max-w-3xl mx-auto">
        <Badge variant="brand">Get In Touch</Badge>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
          Let’s discuss your conversation automation strategy
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Our solutions engineering team will map out a customized WhatsApp, AI Voice, and Omnichannel architecture for your business.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Contact Information & Channels */}
        <div className="space-y-8 lg:col-span-5">
          <Card>
            <CardHeader>
              <CardTitle>Direct Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white">Enterprise Sales</h4>
                  <p className="text-xs text-zinc-500">Fast response within 2 hours</p>
                  <a href="mailto:sales@omniva.com" className="font-semibold text-indigo-600 dark:text-indigo-400 mt-1 block">
                    sales@omniva.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366] shrink-0">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white">WhatsApp Direct Line</h4>
                  <p className="text-xs text-zinc-500">Live demonstration bot</p>
                  <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#25D366] mt-1 block">
                    +1 (800) 555-OMNIVA
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white">Hours & Global Coverage</h4>
                  <p className="text-xs text-zinc-500">24/7/365 Tier 1 Support Coverage</p>
                  <span className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">Americas • EMEA • APAC</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-6 dark:border-indigo-900/60 dark:bg-indigo-950/40">
            <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold text-sm">
              <Sparkles className="h-4 w-4" />
              <span>Looking for a fast rollout?</span>
            </div>
            <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Standard onboarding takes less than 24 hours. Connect your WhatsApp Business Account with our guided onboarding assistant.
            </p>
          </div>
        </div>

        {/* Interactive Form */}
        <div className="lg:col-span-7">
          <Card className="p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Demo Request Received (Frontend Preview)
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
                  Thank you for testing the OMNIVA demo form. In Phase 3, this form will connect directly to the automated CRM Lead capture pipeline, database persistence, and email notifications.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline">
                  Submit another inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="mb-2 inline-flex items-center gap-1.5 rounded-md border border-indigo-500/20 bg-indigo-50/50 px-2.5 py-1 text-[11px] font-medium text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-950/40 dark:text-indigo-300">
                    <Sparkles className="h-3 w-3" />
                    <span>Frontend Preview — Automated CRM wiring in Phase 3</span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    Book a Live Demo & Architecture Session
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    Fill out your requirements and our team will prepare a customized live sandbox for your demo.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                      Full Name *
                    </label>
                    <Input placeholder="Alex Morgan" required />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                      Work Email *
                    </label>
                    <Input type="email" placeholder="alex@example.com" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                      Company Name *
                    </label>
                    <Input placeholder="Acme Logistics Inc." required />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                      Phone / WhatsApp Number
                    </label>
                    <Input placeholder="+1 (555) 019-2834" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                    Monthly Conversation Volume
                  </label>
                  <select className="flex h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-900 transition-colors focus-visible:border-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/20 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
                    <option>1,000 – 10,000 conversations / mo</option>
                    <option>10,000 – 50,000 conversations / mo</option>
                    <option>50,000 – 200,000 conversations / mo</option>
                    <option>200,000+ Enterprise volume</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                    What channels do you plan to automate?
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                    <label className="flex items-center gap-2 rounded-lg border border-zinc-200 p-2.5 dark:border-zinc-800">
                      <input type="checkbox" defaultChecked className="rounded text-indigo-600" />
                      <span>WhatsApp Cloud API</span>
                    </label>
                    <label className="flex items-center gap-2 rounded-lg border border-zinc-200 p-2.5 dark:border-zinc-800">
                      <input type="checkbox" defaultChecked className="rounded text-indigo-600" />
                      <span>AI Voice Calling</span>
                    </label>
                    <label className="flex items-center gap-2 rounded-lg border border-zinc-200 p-2.5 dark:border-zinc-800">
                      <input type="checkbox" defaultChecked className="rounded text-indigo-600" />
                      <span>Instagram Direct</span>
                    </label>
                    <label className="flex items-center gap-2 rounded-lg border border-zinc-200 p-2.5 dark:border-zinc-800">
                      <input type="checkbox" className="rounded text-indigo-600" />
                      <span>Unified Inbox CRM</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                    Tell us about your requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your current team size, pain points, or timeline..."
                    className="flex w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm text-zinc-900 transition-colors focus-visible:border-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/20 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full gap-2" isLoading={loading}>
                  <Send className="h-4 w-4" />
                  <span>Request Custom Live Demo</span>
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
