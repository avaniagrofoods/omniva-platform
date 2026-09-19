import Link from "next/link";
import { MessageSquare, ShieldCheck, Lock } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 bg-zinc-50/50 dark:border-zinc-800/80 dark:bg-zinc-950/50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand & Mission */}
          <div className="flex flex-col space-y-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white shadow-md">
                <MessageSquare className="h-5 w-5" />
              </div>
              <span className="text-xl font-black tracking-tight text-zinc-900 dark:text-white">
                OMNIVA
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              The unified customer communication engine. Turn WhatsApp, Instagram, Facebook, and AI Voice into closed revenue with autonomous AI agents.
            </p>

            {/* Live Status Badge */}
            <div className="flex items-center gap-2 pt-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                All Systems Operational (Production Ready)
              </span>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-4 text-xs font-medium text-zinc-500 dark:text-zinc-400">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-2.5 py-1 dark:border-zinc-800 dark:bg-zinc-900">
                <ShieldCheck className="h-3.5 w-3.5 text-indigo-500" />
                WhatsApp Cloud API Ready
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-2.5 py-1 dark:border-zinc-800 dark:bg-zinc-900">
                <Lock className="h-3.5 w-3.5 text-emerald-500" />
                End-to-End Encrypted
              </span>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            {/* Product */}
            <div className="flex flex-col space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                Product
              </h4>
              <ul className="flex flex-col space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <Link href="/features" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Omnichannel Inbox
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    WhatsApp Cloud API
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    AI Voice Agents
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Custom Knowledge Base
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Automations & CRM
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Pricing Plans
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div className="flex flex-col space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                Solutions
              </h4>
              <ul className="flex flex-col space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <Link href="/features" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    E-Commerce Brands
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Agencies & Resellers
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Fintech & Banking
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Healthcare & Clinics
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Real Estate Sales
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company & Legal */}
            <div className="flex flex-col space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                Company
              </h4>
              <ul className="flex flex-col space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Contact Sales
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Book Live Demo
                  </Link>
                </li>
                <li>
                  <a href="#privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-200/80 pt-8 sm:flex-row dark:border-zinc-800/80">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} OMNIVA Platform Inc. All rights reserved. Built for ultra-high velocity customer operations.
          </p>

          {/* Social Icons with clean SVG paths */}
          <div className="flex items-center gap-4 text-zinc-400 dark:text-zinc-500">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28M7.86 18.5V10.13H5.07V18.5h2.79z"/>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
