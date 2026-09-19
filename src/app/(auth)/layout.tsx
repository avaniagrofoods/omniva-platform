import Link from "next/link";
import { MessageSquare } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-zinc-950 sm:px-6 lg:px-8">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-600/15" />
      </div>

      {/* Brand Header */}
      <div className="mb-8 flex flex-col items-center">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30 transition-transform group-hover:scale-105">
            <MessageSquare className="h-6 w-6" />
          </div>
          <span className="text-2xl font-black tracking-tight text-zinc-900 dark:text-white">
            OMNIVA
          </span>
        </Link>
      </div>

      <div className="w-full max-w-md">{children}</div>

      <div className="mt-8 text-center text-xs text-zinc-400 dark:text-zinc-500">
        &copy; {new Date().getFullYear()} OMNIVA Platform Inc. All rights reserved.
      </div>
    </div>
  );
}
