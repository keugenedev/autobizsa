import HeroStatement from "./hero-statement";
import Reveal from "./reveal";
import AnimatedLogo from "./animated-logo";
import AnimatedProductCard from "./animated-product-card";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import "./home-addresses.css";

const products = [["Lubrifiants", "Shell · Hyundai · Cam2"], ["Peinture auto", "Automotive Art"], ["Moto", "Toro · Titan"]];
const locations = [["/autobiz.png", "Autobiz SA", "Delmas 52", "Port-au-Prince, Haïti"], ["/alomoto.png", "Alomoto", "Turgeau", "Port-au-Prince, Haïti"], ["/alomoto.png", "Alomoto", "Pétion-Ville", "Port-au-Prince, Haïti"], ["/alomoto.png", "Alomoto", "Delmas 60", "Port-au-Prince, Haïti"], ["/alomoto.png", "Alomoto", "Cap-Haïtien", "Haïti"]];

export default function Home() {
  return <main>
    <SiteHeader />
    <section id="accueil" className="hero"><div className="heroArt" aria-label="La qualité qui vous fait avancer"><HeroStatement /></div></section>
    <Reveal><section id="produits" className="section products"><div><p className="eyebrow">Nos références</p><h2>Des produits, bien classés.</h2></div><div className="productGrid">{products.map(([title, text], index) => <AnimatedProductCard key={title} title={title} text={text} index={index} />)}</div></section></Reveal>
    <Reveal delay={0.08}><section id="marques" className="section brands"><div><p className="eyebrow">Des marques reconnues</p><h2>La confiance commence par le bon choix.</h2></div><div className="logoGrid"><AnimatedLogo src="/shell.png" alt="Shell" index={0} /><AnimatedLogo src="/xteer.png" alt="XTeer" index={1} imageClassName="xteerImage" /><AnimatedLogo src="/cam2.png" alt="CAM2" index={2} /><AnimatedLogo src="/art.png" alt="Automotive Art" index={3} /><AnimatedLogo src="/toro.png" alt="Toro" index={4} /><AnimatedLogo src="/titan.png" alt="Titan" index={5} /><AnimatedLogo src="/alomoto.png" alt="Alomoto" index={6} /></div></section></Reveal>
    <Reveal delay={0.08}><section id="adresses" className="section locations"><div><p className="eyebrow pale">Retrouvez-nous</p><h2>Plus près de votre route.</h2></div><div className="locationGrid">{locations.map(([src, title, address, city]) => <article key={`${title}-${address}`}><img className="homeLocationLogo" src={src} alt={title} /><p>{address}<br />{city}</p>{title === "Alomoto" && <div className="homeLocationContact"><a href="tel:+50934021919">+(509) 3402 1919</a><a href="mailto:alomoto@autobizsa.com">alomoto@autobizsa.com</a></div>}{title === "Autobiz SA" && <div className="homeLocationContact"><a href="tel:+50934011919">+(509) 3401 1919</a><a href="mailto:sales@autobizsa.com">sales@autobizsa.com</a></div>}</article>)}</div></section></Reveal>
    <Reveal delay={0.12}><SiteFooter /></Reveal>
  </main>;
}
