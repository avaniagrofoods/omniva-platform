// OMNIVA — Global TypeScript Types
import type { Models } from "../prisma/contract.d";

export type Workspace = Models.public_Workspace;
export type WorkspaceMember = Models.public_WorkspaceMember;
export type User = Models.public_User;
export type Contact = Models.public_Contact;
export type Conversation = Models.public_Conversation;
export type Message = Models.public_Message;
export type Channel = Models.public_Channel;
export type Campaign = Models.public_Campaign;
export type Automation = Models.public_Automation;
export type Appointment = Models.public_Appointment;
export type Call = Models.public_Call;
export type KnowledgeBase = Models.public_KnowledgeBase;
export type KbDocument = Models.public_KbDocument;
export type Subscription = Models.public_Subscription;
export type ApiKey = Models.public_ApiKey;
export type Tag = Models.public_Tag;

// ─── Enums (re-exported as enum objects & types) ─────────────────────────────
export enum UserRole {
  OWNER = "OWNER",
  ADMIN = "ADMIN",
  AGENT = "AGENT",
  VIEWER = "VIEWER",
}

export enum PlanTier {
  STARTER = "STARTER",
  PRO = "PRO",
  ENTERPRISE = "ENTERPRISE",
}

export enum ChannelType {
  WHATSAPP = "WHATSAPP",
  INSTAGRAM = "INSTAGRAM",
  FACEBOOK = "FACEBOOK",
  EMAIL = "EMAIL",
  SMS = "SMS",
  VOICE = "VOICE",
}

export enum ConversationStatus {
  OPEN = "OPEN",
  PENDING = "PENDING",
  RESOLVED = "RESOLVED",
  ARCHIVED = "ARCHIVED",
}

export enum MessageType {
  TEXT = "TEXT",
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  AUDIO = "AUDIO",
  DOCUMENT = "DOCUMENT",
  STICKER = "STICKER",
  LOCATION = "LOCATION",
  TEMPLATE = "TEMPLATE",
  INTERACTIVE = "INTERACTIVE",
  SYSTEM = "SYSTEM",
}

export enum MessageDirection {
  INBOUND = "INBOUND",
  OUTBOUND = "OUTBOUND",
}

export enum CampaignStatus {
  DRAFT = "DRAFT",
  SCHEDULED = "SCHEDULED",
  RUNNING = "RUNNING",
  PAUSED = "PAUSED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}

export enum AutomationTrigger {
  MESSAGE_RECEIVED = "MESSAGE_RECEIVED",
  CONVERSATION_OPENED = "CONVERSATION_OPENED",
  CONVERSATION_RESOLVED = "CONVERSATION_RESOLVED",
  CONTACT_CREATED = "CONTACT_CREATED",
  TAG_ADDED = "TAG_ADDED",
  APPOINTMENT_BOOKED = "APPOINTMENT_BOOKED",
  CAMPAIGN_ENROLLED = "CAMPAIGN_ENROLLED",
}

export enum AppointmentStatus {
  SCHEDULED = "SCHEDULED",
  CONFIRMED = "CONFIRMED",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  NO_SHOW = "NO_SHOW",
}

export enum CallDirection {
  INBOUND = "INBOUND",
  OUTBOUND = "OUTBOUND",
}

export enum CallStatus {
  INITIATED = "INITIATED",
  RINGING = "RINGING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  BUSY = "BUSY",
  NO_ANSWER = "NO_ANSWER",
}

export enum SubscriptionStatus {
  TRIALING = "TRIALING",
  ACTIVE = "ACTIVE",
  PAST_DUE = "PAST_DUE",
  CANCELED = "CANCELED",
  UNPAID = "UNPAID",
}

// ─── API Response Types ────────────────────────────────────────────────────────

export type ApiResponse<T = unknown> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};

export type PaginatedResponse<T> = ApiResponse<{
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}>;

// ─── Dashboard / UI Types ──────────────────────────────────────────────────────

export type NavItem = {
  label: string;
  href: string;
  icon?: string;
  badge?: number;
  children?: NavItem[];
};

export type ConversationWithRelations = {
  id: string;
  status: string;
  lastMessageAt: Date | string | null;
  isAiEnabled: boolean;
  contact: {
    id: string;
    name: string | null;
    phone: string | null;
    avatar: string | null;
  };
  channel: {
    id: string;
    type: string;
    name: string;
  };
  agent: {
    id: string;
    name: string | null;
    image: string | null;
  } | null;
  lastMessage?: {
    content: string | null;
    direction: string;
    type: string;
    createdAt: Date | string;
  };
};

export type MessageWithMeta = {
  id: string;
  type: string;
  direction: string;
  content: string | null;
  mediaUrl: string | null;
  mediaType: string | null;
  isAiGenerated: boolean;
  isRead: boolean;
  createdAt: Date | string;
};

// ─── Webhook Payloads ─────────────────────────────────────────────────────────

export type WhatsAppWebhookPayload = {
  object: string;
  entry: Array<{
    id: string;
    changes: Array<{
      value: {
        messaging_product: string;
        metadata: { display_phone_number: string; phone_number_id: string };
        contacts?: Array<{ profile: { name: string }; wa_id: string }>;
        messages?: Array<{
          id: string;
          from: string;
          timestamp: string;
          type: string;
          text?: { body: string };
          image?: { id: string; mime_type: string; sha256: string; caption?: string };
          audio?: { id: string; mime_type: string };
          video?: { id: string; mime_type: string; caption?: string };
          document?: { id: string; filename: string; mime_type: string };
          sticker?: { id: string; mime_type: string };
          location?: { latitude: number; longitude: number; name?: string; address?: string };
        }>;
        statuses?: Array<{
          id: string;
          status: "sent" | "delivered" | "read" | "failed";
          timestamp: string;
          recipient_id: string;
        }>;
      };
      field: string;
    }>;
  }>;
};
