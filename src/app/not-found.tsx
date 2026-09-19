import Link from "next/link";
import { MessageSquare, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-zinc-900 selection:bg-indigo-500/20 selection:text-indigo-600 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="mx-auto max-w-md space-y-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30">
          <MessageSquare className="h-8 w-8" />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            404 Error
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
            Page not found
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Sorry, the page you are looking for doesn’t exist or has been moved to a new route.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/">
            <Button variant="primary" className="w-full sm:w-auto gap-2">
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="w-full sm:w-auto gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Contact Support</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
