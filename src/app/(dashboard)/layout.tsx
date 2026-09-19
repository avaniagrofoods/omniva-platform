import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | OMNIVA",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-[var(--color-surface-1)]">
      {/* Sidebar will be mounted here in Phase 3 */}
      <aside id="omniva-sidebar" className="w-64 flex-shrink-0 border-r border-[var(--color-surface-3)] bg-[var(--color-surface-0)]" />
      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
