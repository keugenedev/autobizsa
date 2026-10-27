import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Reveal from "../reveal";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import PageHeroTitle from "../page-hero-title";
import "./addresses.css";
import "./addresses-redesign.css";

export const metadata = { title: "Nos adresses | Autobiz SA", description: "Retrouvez les points de vente Autobiz SA et Alomoto en Haïti." };
const locations = [
  ["Autobiz SA", "Delmas 52", "Port-au-Prince", "https://www.google.com/maps/search/?api=1&query=Autobiz+SA+Delmas+52%2C+Port-au-Prince%2C+Haiti"],
  ["Alomoto", "Turgeau", "Port-au-Prince", "https://www.google.com/maps/search/?api=1&query=Alomoto+Turgeau%2C+Port-au-Prince%2C+Haiti"],
  ["Alomoto", "115, rue Faubert", "Pétion-Ville", "https://www.google.com/maps/search/?api=1&query=Alomoto+115+Rue+Faubert%2C+Petion-Ville%2C+Haiti"],
  ["Alomoto", "Delmas 60", "Port-au-Prince", "https://www.google.com/maps/search/?api=1&query=Alomoto+Delmas+60%2C+Port-au-Prince%2C+Haiti"],
  ["Alomoto", "Rue 5-6 A & E", "Cap-Haïtien", "https://www.google.com/maps/search/?api=1&query=Alomoto+Rue+5-6+A+%26+E%2C+Cap-Haitien%2C+Haiti"],
];

export default function AddressesPage(){return <main className="addressesPage"><SiteHeader />
  <section className="addressesHero"><div className="addressesHeroInner"><PageHeroTitle route="/adresses" lines={[{ text: "Toujours plus" }, { text: "près de vous.", emphasis: true }]} /></div></section>
  <Reveal><section className="addressesList"><div className="addressesListHeading"><div className="addressesListTitle"><p>Points de vente</p><h2>Cinq adresses.<br />Une même exigence.</h2></div><p className="addressesListIntro">Retrouvez nos équipes et nos produits près de chez vous.</p></div><div className="addressesCards">{locations.map(([name,line,city,mapUrl])=><article key={`${name}-${line}`}><MapPin aria-hidden="true" /><h3 className={name === "Alomoto" ? "addressBrandHeading" : name === "Autobiz SA" ? "addressAutobizHeading" : undefined}>{name === "Alomoto" ? <img className="addressBrandLogo" src="/alomoto.png" alt="Alomoto" /> : name === "Autobiz SA" ? <img className="addressAutobizLogo" src="/autobiz.png" alt="Autobiz SA" /> : name}</h3><p>{line}<br />{city}</p><a href={mapUrl} target="_blank" rel="noreferrer">Voir la position <ArrowUpRight aria-hidden="true" /></a><Link className="addressContactLink" href="/contact"><Phone aria-hidden="true" />Nous contacter</Link></article>)}</div></section></Reveal>
  <Reveal delay={0.08}><section className="addressesAssist"><div><Phone aria-hidden="true" /><p>Besoin d’être orienté ?</p><h2>Appelez-nous, on vous guide.</h2></div><a href="tel:+50934011919">+509 3401 1919 <ArrowUpRight aria-hidden="true" /></a></section></Reveal>
  <Reveal delay={0.1}><SiteFooter /></Reveal>
</main>}
