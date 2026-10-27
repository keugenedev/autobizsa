import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Reveal from "../reveal";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import PageHeroTitle from "../page-hero-title";
import "./products.css";
import "./products-layout.css";
import "./products-brands-redesign.css";

export const metadata = { title: "Produits et marques | Autobiz SA", description: "Découvrez les produits et marques distribués par Autobiz SA." };

const brands = [["/shell.png", "Shell"], ["/xteer.png", "XTeer"], ["/cam2.png", "CAM2"], ["/art.png", "Automotive Art"], ["/toro.png", "Toro"], ["/titan.png", "Titan"], ["/alomoto.png", "Alomoto"]];
const categories = [["Lubrifiants", "Une sélection pensée pour protéger et faire durer vos moteurs."], ["Peinture auto", "Les solutions Automotive Art pour un rendu précis et durable."], ["Moto", "L’essentiel pour vos déplacements à deux roues, au quotidien."]];

export default function ProductsPage() {
  return <main className="productsPage"><SiteHeader />
    <section className="productsHero"><div className="productsSlash" aria-hidden="true" /><div className="productsHeroInner"><PageHeroTitle lines={[{ text: "Les bonnes marques." }, { text: "Au bon endroit.", emphasis: true }]} /></div></section>
    <Reveal><section className="productsCategories"><div className="productsCategoriesHeading"><p>Nos références</p><h2>Pour chaque véhicule,<br />la solution juste.</h2></div><div className="productsCategoryGrid">{categories.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section></Reveal>
    <Reveal delay={0.08}><section id="marques" className="productsBrands"><div className="productsBrandsInner"><div className="productsBrandsHeading"><div className="productsBrandsTitle"><p>Nos marques</p><h2>La confiance commence<br />par le bon choix.</h2></div></div><div className="productsLogoGrid">{brands.map(([src, alt]) => <article key={alt}><img src={src} alt={alt} /></article>)}</div></div></section></Reveal>
    <Reveal delay={0.08}><section className="productsCta"><div><p>Un conseil avant de choisir ?</p><h2>Notre équipe vous répond.</h2></div><Link href="/contact">Nous contacter <ArrowUpRight aria-hidden="true" /></Link></section></Reveal>
    <Reveal delay={0.1}><SiteFooter /></Reveal>
  </main>;
}
