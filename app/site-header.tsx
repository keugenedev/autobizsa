"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["/produits", "Produits"],
  ["/produits#marques", "Marques"],
  ["/adresses", "Nos adresses"],
  ["/contact", "Contact"],
] as const;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`siteHeader${menuOpen ? " menuOpen" : ""}`}>
      <Link href="/#accueil" aria-label="Autobiz SA, accueil" onClick={closeMenu}>
        <img className="brandLogo" src="/autobiz.png" alt="Autobiz SA" />
      </Link>

      <nav className="desktopNav" aria-label="Navigation principale">
        {links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>

      <button
        className="mobileMenuButton"
        type="button"
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav id="mobile-navigation" className="mobileNav" aria-label="Navigation mobile">
        {links.map(([href, label]) => <Link key={href} href={href} onClick={closeMenu}>{label}</Link>)}
      </nav>
    </header>
  );
}
