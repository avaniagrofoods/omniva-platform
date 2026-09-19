/**
 * OMNIVA Pricing Configuration
 * Centralized, configuration-driven pricing model.
 * NOTE: Initial pricing values are indicative and subject to change prior to commercial launch.
 */

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  ctaText: string;
  ctaHref: string;
  features: {
    included: boolean;
    label: string;
  }[];
}

export const PRICING_DISCLAIMER = "Initial pricing — subject to change during preview. Enterprise and volume custom agreements available.";

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    description: "For modern growing stores & boutique agencies launching conversation automation.",
    monthlyPrice: 29,
    annualPrice: 24,
    ctaText: "Start 14-Day Trial",
    ctaHref: "/register",
    features: [
      { included: true, label: "1,000 AI Conversations / mo" },
      { included: true, label: "WhatsApp Cloud API + Instagram" },
      { included: true, label: "2 Team Agent Seats" },
      { included: true, label: "1 Knowledge Base Document" },
      { included: false, label: "AI Voice Calling" },
      { included: false, label: "Custom CRM Webhooks" },
    ],
  },
  {
    id: "pro",
    name: "Pro Scale",
    badge: "Most Popular",
    popular: true,
    description: "For fast-scaling sales & support teams needing omnichannel voice & messaging.",
    monthlyPrice: 79,
    annualPrice: 65,
    ctaText: "Start 14-Day Trial",
    ctaHref: "/register",
    features: [
      { included: true, label: "10,000 AI Conversations / mo" },
      { included: true, label: "WhatsApp + Instagram + Facebook + Web" },
      { included: true, label: "AI Voice Calling (300 call mins/mo)" },
      { included: true, label: "10 Team Agent Seats" },
      { included: true, label: "Unlimited Knowledge Base Documents" },
      { included: true, label: "Automated Lead Routing & Workflows" },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For high-volume brands requiring dedicated infrastructure and custom AI pipelines.",
    monthlyPrice: 199,
    annualPrice: 169,
    ctaText: "Contact Solutions Team",
    ctaHref: "/contact",
    features: [
      { included: true, label: "Custom / Unlimited Conversations" },
      { included: true, label: "Unlimited Agent Seats" },
      { included: true, label: "Dedicated AI Voice SIP Trunking" },
      { included: true, label: "Custom LLM Fine-Tuning & BYOK" },
      { included: true, label: "Dedicated Solutions Engineer" },
      { included: true, label: "Custom SLA & Enterprise Security Review" },
    ],
  },
];
