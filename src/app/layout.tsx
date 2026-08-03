import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alpha1 — Next.js Secure Stack 2026",
  description: "High-security Next.js architecture with Supabase, Tailwind CSS, and modern UI/UX.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
