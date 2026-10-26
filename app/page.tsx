import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

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
          <p className="heroStatement">LA QUALITÉ<br /><strong>QUI VOUS</strong><br />FAIT AVANCER.</p>
          <span className="heroRightTraces" aria-hidden="true" />
        </div>
      </section>

      <section id="produits" className="section products">
        <div><p className="eyebrow">Nos références</p><h2>Des produits, bien classés.</h2></div>
        <div className="productGrid">{products.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section id="marques" className="section brands">
        <div><p className="eyebrow">Des marques reconnues</p><h2>La confiance commence par le bon choix.</h2></div>
        <div className="logoGrid">
          <div><img src="/shell.png" alt="Shell" /></div><div><img className="xteerImage" src="/xteer.png" alt="XTeer" /></div><div><img src="/cam2.png" alt="CAM2" /></div><div><img src="/art.png" alt="Automotive Art" /></div>
          <div><img src="/toro.png" alt="Toro" /></div><div><img src="/titan.png" alt="Titan" /></div><div><img src="/alomoto.png" alt="Alomoto" /></div>
        </div>
        <p className="brandNote">Aussi disponibles : <b>Alomoto TS</b>, <b>Alomoto PU</b>, <b>Alomoto DL60</b>, <b>Alomoto CH</b> et <b>Alomoto Turjetrau</b>.</p>
      </section>

      <section id="adresses" className="section locations">
        <div><p className="eyebrow pale">Retrouvez-nous</p><h2>Plus près de votre route.</h2></div>
        <div className="locationGrid">{locations.map(([number, title, address, city]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{address}<br />{city}</p></article>)}</div>
      </section>

      <footer className="siteFooter">
        <div className="footerInner">
          <div className="footerTop">
            <div><img className="footerBrand" src="/autobiz.png" alt="Autobiz SA" /><p>Votre partenaire pour les produits automobiles en Haïti.</p></div>
            <div className="footerColumn footerContact"><p className="footerLabel">Nous joindre</p><a className="contactItem" href="tel:+50934011919"><Phone size={15} />+509 3401 1919</a><a className="contactItem" href="tel:+50934021919"><Phone size={15} />+509 3402 1919</a><a className="contactItem footerEmail" href="mailto:info@autobizsa.com"><Mail size={15} />info@autobizsa.com</a><div className="socialLinks" aria-label="Réseaux sociaux"><span className="socialIcon" role="img" aria-label="Facebook"><FaFacebookF /></span><span className="socialIcon" role="img" aria-label="Instagram"><FaInstagram /></span><span className="socialIcon" role="img" aria-label="LinkedIn"><FaLinkedinIn /></span><a className="socialIcon" href="https://wa.me/50934011919" aria-label="WhatsApp"><FaWhatsapp /></a><a className="socialIcon" href="mailto:info@autobizsa.com" aria-label="Email"><Mail size={15} /></a></div></div>
            <div className="footerColumn footerAddress"><p className="footerLabel">Nos adresses</p><ul className="addressList"><li><MapPin size={15} /><span><b>Autobiz SA</b>Delmas 52, Port-au-Prince</span></li><li><MapPin size={15} /><span><b>Alomoto</b>Turgeau</span></li><li><MapPin size={15} /><span><b>Alomoto</b>Pétion-Ville</span></li><li><MapPin size={15} /><span><b>Alomoto</b>Delmas 60</span></li><li><MapPin size={15} /><span><b>Alomoto</b>Cap-Haïtien</span></li></ul></div>
          </div>
          <div className="footerLogos" aria-label="Nos marques"><img src="/shell.png" alt="Shell" /><img className="footerXteer" src="/xteer.png" alt="XTeer" /><img src="/cam2.png" alt="CAM2" /><img src="/art.png" alt="Automotive Art" /><img src="/toro.png" alt="Toro" /><img src="/titan.png" alt="Titan" /><img src="/alomoto.png" alt="Alomoto" /></div>
          <div className="footerBottom"><span>© Autobiz SA</span><span>Lubrifiants · Peinture · Moto</span></div>
        </div>
      </footer>
    </main>
  );
}
