import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "../reveal";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import PageHeroTitle from "../page-hero-title";
import ContactIntroMotion from "../contact-intro-motion";
import SlideReveal from "../slide-reveal";
import AnimatedDescription from "../animated-description";
import "./contact.css";
import "./contact-logos.css";

export const metadata = { title: "Contact | Autobiz SA", description: "Contactez Autobiz SA et retrouvez nos points de vente en Haïti." };

const locations = [
  ["/autobiz.png", "Autobiz SA", "Delmas 52, Port-au-Prince", "contactAutobizLogo"],
  ["/alomoto.png", "Alomoto", "Turgeau", "contactAlomotoLogo"],
  ["/alomoto.png", "Alomoto", "Pétion-Ville", "contactAlomotoLogo"],
  ["/alomoto.png", "Alomoto", "Delmas 60", "contactAlomotoLogo"],
  ["/alomoto.png", "Alomoto", "Cap-Haïtien", "contactAlomotoLogo"],
];

export default function ContactPage() {
  return <main className="contactPage"><SiteHeader />
    <section className="contactHero"><div className="contactHeroVisual" aria-hidden="true"><span /><span /><span /></div><div className="contactHeroInner"><div className="contactHeroCopy"><PageHeroTitle lines={[{ text: "Un besoin." }, { text: "Une réponse.", emphasis: true }]} /><AnimatedDescription className="contactIntro" delay={0.9} text="Parlez directement à notre équipe pour trouver le bon produit automobile, au bon endroit." /></div></div></section>
    <section className="contactArea"><ContactIntroMotion /><div className="contactGrid"><SlideReveal from="top"><a className="contactCard contactPhoneCard" href="tel:+50934011919"><span className="contactIcon"><Phone aria-hidden="true" /></span><span className="contactCardLabel">Téléphone</span><strong>+(509) 3401 1919</strong><span className="contactSecondaryPhone">+(509) 3402 1919</span><span className="contactCardAction">Appeler maintenant <ArrowUpRight aria-hidden="true" /></span></a></SlideReveal><SlideReveal from="bottom" delay={0.12}><a className="contactCard" href="mailto:info@autobizsa.com"><span className="contactIcon"><Mail aria-hidden="true" /></span><span className="contactCardLabel">Email</span><strong>info@autobizsa.com</strong><span className="contactSecondaryEmail">sales@autobizsa.com</span><span className="contactCardAction">Nous écrire <ArrowUpRight aria-hidden="true" /></span></a></SlideReveal></div></section>
    <Reveal delay={0.08}><section className="contactAddresses"><div className="contactAddressesInner"><div className="contactAddressesHeading"><div><p className="contactEyebrow">Points de vente</p><h2>Plus près de votre route.</h2></div><p>Retrouvez Autobiz SA et Alomoto dans cinq emplacements à travers Haïti.</p></div><div className="contactLocationGrid">{locations.map(([src, name, address, logoClass]) => <article key={address} className="contactLocationCard"><MapPin aria-hidden="true" /><h3><span className={`contactLocationLogo ${logoClass}`}><img src={src} alt={name} /></span></h3><p>{address}</p></article>)}</div></div></section></Reveal>
    <Reveal delay={0.1}><SiteFooter /></Reveal>
  </main>;
}
