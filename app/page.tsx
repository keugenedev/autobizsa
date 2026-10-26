import HeroStatement from "./hero-statement";
import Reveal from "./reveal";
import AnimatedLogo from "./animated-logo";
import AnimatedProductCard from "./animated-product-card";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

const products = [["Lubrifiants", "Shell · Hyundai · Cem2"], ["Peinture auto", "Automotive Art"], ["Moto", "Toro · Titan"]];
const locations = [["Autobiz SA", "Delmas 52", "Port-au-Prince, Haïti"], ["Alomoto", "Pétion-Ville", "Haïti"], ["Alomoto", "Delmas 60", "Haïti"], ["Alomoto", "Cap-Haïtien", "Haïti"]];

export default function Home() {
  return <main>
    <SiteHeader />
    <section id="accueil" className="hero"><div className="heroArt" aria-label="La qualité qui vous fait avancer"><HeroStatement /></div></section>
    <Reveal><section id="produits" className="section products"><div><p className="eyebrow">Nos références</p><h2>Des produits, bien classés.</h2></div><div className="productGrid">{products.map(([title, text], index) => <AnimatedProductCard key={title} title={title} text={text} index={index} />)}</div></section></Reveal>
    <Reveal delay={0.08}><section id="marques" className="section brands"><div><p className="eyebrow">Des marques reconnues</p><h2>La confiance commence par le bon choix.</h2></div><div className="logoGrid"><AnimatedLogo src="/shell.png" alt="Shell" index={0} /><AnimatedLogo src="/xteer.png" alt="XTeer" index={1} imageClassName="xteerImage" /><AnimatedLogo src="/cam2.png" alt="CAM2" index={2} /><AnimatedLogo src="/art.png" alt="Automotive Art" index={3} /><AnimatedLogo src="/toro.png" alt="Toro" index={4} /><AnimatedLogo src="/titan.png" alt="Titan" index={5} /><AnimatedLogo src="/alomoto.png" alt="Alomoto" index={6} /></div><p className="brandNote">Aussi disponibles : <b>Alomoto TS</b>, <b>Alomoto PU</b>, <b>Alomoto DL60</b>, <b>Alomoto CH</b> et <b>Alomoto Turjetrau</b>.</p></section></Reveal>
    <Reveal delay={0.08}><section id="adresses" className="section locations"><div><p className="eyebrow pale">Retrouvez-nous</p><h2>Plus près de votre route.</h2></div><div className="locationGrid">{locations.map(([title, address, city]) => <article key={`${title}-${address}`}><h3>{title}</h3><p>{address}<br />{city}</p></article>)}</div></section></Reveal>
    <Reveal delay={0.12}><SiteFooter /></Reveal>
  </main>;
}
