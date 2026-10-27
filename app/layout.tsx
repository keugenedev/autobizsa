import type { Metadata } from "next";
import "./globals.css";
import "./hero-fix.css";
import "./navbar-fix.css";
import "./no-counts.css";
import "./page-hero-title.css";
import "./footer-mobile.css";

export const metadata: Metadata = {
  title: "Autobiz SA | Produits automobiles",
  description: "Lubrifiants, peinture, pneus et références automobiles en Haïti.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
    >
      <body>{children}</body>
    </html>
  );
}
