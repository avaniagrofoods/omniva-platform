"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/helpers";

interface AccordionContextType {
  openItems: string[];
  toggleItem: (value: string) => void;
  type: "single" | "multiple";
}

const AccordionContext = React.createContext<AccordionContextType | null>(null);

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
}

export function Accordion({
  type = "single",
  defaultValue,
  children,
  className,
  ...props
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>(() => {
    if (!defaultValue) return [];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  });

  const toggleItem = (value: string) => {
    setOpenItems((prev) => {
      if (type === "single") {
        return prev.includes(value) ? [] : [value];
      }
      return prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value];
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={cn("divide-y divide-zinc-200 dark:divide-zinc-800", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function AccordionItem({ value, className, children, ...props }: AccordionItemProps) {
  return (
    <div className={cn("py-2", className)} data-value={value} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{ value: string }>, { value });
        }
        return child;
      })}
    </div>
  );
}

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string;
}

export function AccordionTrigger({
  value,
  children,
  className,
  ...props
}: AccordionTriggerProps) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionTrigger must be used within Accordion");

  const isOpen = value ? context.openItems.includes(value) : false;

  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-medium text-zinc-900 transition-all hover:text-indigo-600 dark:text-zinc-100 dark:hover:text-indigo-400",
        className
      )}
      onClick={() => value && context.toggleItem(value)}
      aria-expanded={isOpen}
      {...props}
    >
      <span className="text-base font-semibold">{children}</span>
      <ChevronDown
        className={cn(
          "h-5 w-5 text-zinc-400 transition-transform duration-200",
          isOpen && "rotate-180 text-indigo-600 dark:text-indigo-400"
        )}
      />
    </button>
  );
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
}

export function AccordionContent({
  value,
  children,
  className,
  ...props
}: AccordionContentProps) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionContent must be used within Accordion");

  const isOpen = value ? context.openItems.includes(value) : false;

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "pb-4 pt-1 text-sm text-zinc-600 animate-in fade-in-50 duration-200 dark:text-zinc-400",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
