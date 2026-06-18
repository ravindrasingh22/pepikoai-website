import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "pepiko.ai | Safety APIs for child-first AI products",
  description:
    "Classify prompts, detect child-safety risks, and route AI responses with production-ready safety intelligence."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
