import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIWorkshop — Generative AI Training Platform",
  description: "Learn prompt engineering and MCP tools to build smarter AI projects on TAIKAI.",
  openGraph: {
    title: "AIWorkshop",
    description: "Generative AI Training Platform for Builders",
    siteName: "AIWorkshop",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
