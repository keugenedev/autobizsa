import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import HeroStatement from "./hero-statement";
import Reveal from "./reveal";
import AnimatedLogo from "./animated-logo";
import AnimatedProductCard from "./animated-product-card";

const products = [
  ["01", "Lubrifiants", "Shell · Hyundai · Cem2"],
  ["02", "Peinture auto", "Automotive Art"],
  ["03", "Moto", "Toro · Titan"],
];

const locations = [
  ["01", "Autobiz SA", "Delmas 52", "Port-au-Prince, Haïti"],
  ["02", "Alomoto", "Pétion-Ville", "Haïti"],
  ["03", "Alomoto", "Delmas 60", "Haïti"],
  ["04", "Alomoto", "Cap-Haïtien", "Haïti"],
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a href="#accueil" aria-label="Autobiz SA, accueil"><img className="brandLogo" src="/autobiz.png" alt="Autobiz SA" /></a>
        <nav aria-label="Navigation principale"><a href="#produits">Produits</a><a href="#marques">Marques</a><a href="#adresses">Nos adresses</a></nav>
        <a className="phoneTop" href="tel:+50934011919">+509 3401 1919</a>
      </header>

      <section id="accueil" className="hero">
        <div className="heroArt" aria-label="La qualité qui vous fait avancer">
          <HeroStatement />
        </div>
      </section>

      <Reveal><section id="produits" className="section products">
        <div><p className="eyebrow">Nos références</p><h2>Des produits, bien classés.</h2></div>
        <div className="productGrid">{products.map(([number, title, text], index) => <AnimatedProductCard key={number} number={number} title={title} text={text} index={index} />)}</div>
      </section></Reveal>

      <Reveal delay={0.08}><section id="marques" className="section brands">
        <div><p className="eyebrow">Des marques reconnues</p><h2>La confiance commence par le bon choix.</h2></div>
        <div className="logoGrid">
          <AnimatedLogo src="/shell.png" alt="Shell" index={0} />
          <AnimatedLogo src="/xteer.png" alt="XTeer" index={1} imageClassName="xteerImage" />
          <AnimatedLogo src="/cam2.png" alt="CAM2" index={2} />
          <AnimatedLogo src="/art.png" alt="Automotive Art" index={3} />
          <AnimatedLogo src="/toro.png" alt="Toro" index={4} />
          <AnimatedLogo src="/titan.png" alt="Titan" index={5} />
          <AnimatedLogo src="/alomoto.png" alt="Alomoto" index={6} />
        </div>
        <p className="brandNote">Aussi disponibles : <b>Alomoto TS</b>, <b>Alomoto PU</b>, <b>Alomoto DL60</b>, <b>Alomoto CH</b> et <b>Alomoto Turjetrau</b>.</p>
      </section></Reveal>

      <Reveal delay={0.08}><section id="adresses" className="section locations">
        <div><p className="eyebrow pale">Retrouvez-nous</p><h2>Plus près de votre route.</h2></div>
        <div className="locationGrid">{locations.map(([number, title, address, city]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{address}<br />{city}</p></article>)}</div>
      </section></Reveal>

      <Reveal delay={0.12}><footer className="siteFooter">
        <div className="footerInner">
          <div className="footerTop">
            <div><img className="footerBrand" src="/autobiz.png" alt="Autobiz SA" /><p>Votre partenaire pour les produits automobiles en Haïti.</p></div>
            <div className="footerColumn footerContact"><p className="footerLabel">Nous joindre</p><a className="contactItem" href="tel:+50934011919"><Phone size={15} />+509 3401 1919</a><a className="contactItem" href="tel:+50934021919"><Phone size={15} />+509 3402 1919</a><a className="contactItem footerEmail" href="mailto:info@autobizsa.com"><Mail size={15} />info@autobizsa.com</a><div className="socialLinks" aria-label="Réseaux sociaux"><span className="socialIcon" role="img" aria-label="Facebook"><FaFacebookF /></span><span className="socialIcon" role="img" aria-label="Instagram"><FaInstagram /></span><span className="socialIcon" role="img" aria-label="LinkedIn"><FaLinkedinIn /></span><a className="socialIcon" href="https://wa.me/50934011919" aria-label="WhatsApp"><FaWhatsapp /></a><a className="socialIcon" href="mailto:info@autobizsa.com" aria-label="Email"><Mail size={15} /></a></div></div>
            <div className="footerColumn footerAddress"><p className="footerLabel">Nos adresses</p><ul className="addressList"><li><MapPin size={15} /><span><b>Autobiz SA</b>Delmas 52, Port-au-Prince</span></li><li><MapPin size={15} /><span><b>Alomoto</b>Turgeau</span></li><li><MapPin size={15} /><span><b>Alomoto</b>Pétion-Ville</span></li><li><MapPin size={15} /><span><b>Alomoto</b>Delmas 60</span></li><li><MapPin size={15} /><span><b>Alomoto</b>Cap-Haïtien</span></li></ul></div>
          </div>
          <div className="footerLogos" aria-label="Nos marques"><AnimatedLogo src="/shell.png" alt="Shell" index={0} /><AnimatedLogo src="/xteer.png" alt="XTeer" index={1} imageClassName="footerXteer" /><AnimatedLogo src="/cam2.png" alt="CAM2" index={2} /><AnimatedLogo src="/art.png" alt="Automotive Art" index={3} /><AnimatedLogo src="/toro.png" alt="Toro" index={4} /><AnimatedLogo src="/titan.png" alt="Titan" index={5} /><AnimatedLogo src="/alomoto.png" alt="Alomoto" index={6} /></div>
          <div className="footerBottom"><span>© Autobiz SA</span><span>Lubrifiants · Peinture · Moto</span></div>
        </div>
      </footer></Reveal>
    </main>
  );
}
