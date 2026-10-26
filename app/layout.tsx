import type { Metadata } from "next";
import "./globals.css";
import "./hero-fix.css";

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
