import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "../reveal";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import "./contact.css";

export const metadata = { title: "Contact | Autobiz SA", description: "Contactez Autobiz SA et retrouvez nos points de vente en Haïti." };
const locations = [["Autobiz SA", "Delmas 52, Port-au-Prince"], ["Alomoto", "Turgeau"], ["Alomoto", "Pétion-Ville"], ["Alomoto", "Delmas 60"], ["Alomoto", "Cap-Haïtien"]];

export default function ContactPage() { return <main className="contactPage"><SiteHeader />
  <section className="contactHero"><div className="contactHeroVisual" aria-hidden="true"><span /><span /><span /></div><div className="contactHeroInner"><div className="contactHeroCopy"><h1>Un besoin.<br /><strong>Une réponse.</strong></h1><p className="contactIntro">Parlez directement à notre équipe pour trouver le bon produit automobile, au bon endroit.</p><a className="contactDirectLine" href="tel:+50934011919"><Phone aria-hidden="true" />+509 3401 1919</a></div></div></section>
  <Reveal><section className="contactArea"><div className="contactIntroBlock"><p className="contactEyebrow">Nous joindre</p><h2>Choisissez le moyen le plus simple.</h2><p>Notre équipe est à votre écoute pour les lubrifiants, la peinture automobile et les produits moto.</p></div><div className="contactGrid"><a className="contactCard contactPhoneCard" href="tel:+50934011919"><span className="contactIcon"><Phone aria-hidden="true" /></span><span className="contactCardLabel">Téléphone</span><strong>+509 3401 1919</strong><span className="contactCardAction">Appeler maintenant <ArrowUpRight aria-hidden="true" /></span></a><a className="contactCard" href="mailto:info@autobizsa.com"><span className="contactIcon"><Mail aria-hidden="true" /></span><span className="contactCardLabel">Email</span><strong>info@autobizsa.com</strong><span className="contactCardAction">Nous écrire <ArrowUpRight aria-hidden="true" /></span></a></div></section></Reveal>
  <Reveal delay={0.08}><section className="contactAddresses"><div className="contactAddressesInner"><div className="contactAddressesHeading"><div><p className="contactEyebrow">Points de vente</p><h2>Plus près de votre route.</h2></div><p>Retrouvez Autobiz SA et Alomoto dans cinq emplacements à travers Haïti.</p></div><div className="contactLocationGrid">{locations.map(([name, address]) => <article key={`${name}-${address}`} className="contactLocationCard"><MapPin aria-hidden="true" /><h3>{name}</h3><p>{address}</p></article>)}</div></div></section></Reveal>
  <Reveal delay={0.1}><SiteFooter /></Reveal>
</main>; }
