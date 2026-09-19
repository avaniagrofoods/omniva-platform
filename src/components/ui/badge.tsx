import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/helpers";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-indigo-600 text-white shadow hover:bg-indigo-700",
        secondary:
          "border-transparent bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100",
        outline:
          "border border-zinc-200 text-zinc-800 dark:border-zinc-800 dark:text-zinc-200",
        success:
          "border-transparent bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400",
        warning:
          "border-transparent bg-amber-500/15 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400",
        error:
          "border-transparent bg-rose-500/15 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400",
        brand:
          "border border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-800/60 dark:bg-indigo-950/50 dark:text-indigo-300",
        whatsapp:
          "border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] dark:bg-[#25D366]/15",
        instagram:
          "border border-[#E1306C]/30 bg-[#E1306C]/10 text-[#E1306C] dark:bg-[#E1306C]/15",
        facebook:
          "border border-[#1877F2]/30 bg-[#1877F2]/10 text-[#1877F2] dark:bg-[#1877F2]/15",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
