import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashtanga Yoga Studio — Find Your Flow",
  description:
    "A modern yoga studio offering Ashtanga, Vinyasa, Hatha and Prenatal classes, retreats and a curated shop of mindful essentials.",
  keywords: [
    "yoga studio",
    "Ashtanga",
    "Vinyasa",
    "Hatha",
    "Prenatal yoga",
    "yoga retreats",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-sand-50 text-ink antialiased font-sans">
        {children}
      </body>
    </html>
  );
}