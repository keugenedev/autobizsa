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
        <div className="heroCopy">
          <p className="eyebrow">Depuis Haïti, pour votre véhicule</p>
          <h1>Votre partenaire automobile, <span>tout simplement.</span></h1>
          <p className="lead">Autobiz SA vous accompagne avec une sélection fiable de lubrifiants, peintures, pneus et accessoires automobiles.</p>
        </div>
        <div className="heroArt" aria-label="La qualité au service de la route">
          <p>LA QUALITÉ<br /><strong>AU SERVICE</strong><br />DE LA ROUTE</p><div className="wheel" aria-hidden="true" />
        </div>
      </section>

      <section id="produits" className="section products">
        <div><p className="eyebrow">Nos références</p><h2>Des produits, bien classés.</h2></div>
        <div className="productGrid">{products.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section id="marques" className="section brands">
        <div><p className="eyebrow">Des marques reconnues</p><h2>La confiance commence par le bon choix.</h2></div>
        <div className="logoGrid">
          <div><img src="/shell.png" alt="Shell" /></div><div className="xteerLogo" aria-label="XTeer Hyundai"><span>XTEER</span><small>HYUNDAI</small></div><div><img src="/art.png" alt="Automotive Art" /></div>
          <div><img src="/toro.png" alt="Toro" /></div><div><img src="/titan.png" alt="Titan" /></div><div><img src="/alomoto.png" alt="Alomoto" /></div>
        </div>
        <p className="brandNote">Aussi disponibles : <b>Alomoto TS</b>, <b>Alomoto PU</b>, <b>Alomoto DL60</b>, <b>Alomoto CH</b> et <b>Alomoto Turjetrau</b>.</p>
      </section>

      <section id="adresses" className="section locations">
        <div><p className="eyebrow pale">Retrouvez-nous</p><h2>Plus près de votre route.</h2></div>
        <div className="locationGrid">{locations.map(([number, title, address, city]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{address}<br />{city}</p></article>)}</div>
      </section>

      <footer><div><img className="brandLogo" src="/autobiz.png" alt="Autobiz SA" /><p>Produits automobiles en Haïti.</p></div><div className="contact"><a href="tel:+50934011919">+509 3401 1919</a><a href="tel:+50934021919">+509 3402 1919</a><a href="mailto:info@autobizsa.com">info@autobizsa.com</a></div><p className="copyright">© Autobiz SA</p></footer>
    </main>
  );
}
