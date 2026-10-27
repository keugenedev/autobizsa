import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import AnimatedLogo from "./animated-logo";

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <div className="footerTop">
          <div><img className="footerBrand" src="/autobiz.png" alt="Autobiz SA" /><p>Votre partenaire pour les produits automobiles en Haïti.</p></div>
          <div className="footerColumn footerContact"><p className="footerLabel">Nous joindre</p><a className="contactItem" href="tel:+50934011919"><Phone size={15} />+509 3401 1919</a><a className="contactItem" href="tel:+50934021919"><Phone size={15} />+509 3402 1919</a><a className="contactItem footerEmail" href="mailto:info@autobizsa.com"><Mail size={15} />info@autobizsa.com</a><div className="socialLinks" aria-label="Réseaux sociaux"><a className="socialIcon" href="https://www.facebook.com/autobizsa/" aria-label="Facebook"><FaFacebookF /></a><a className="socialIcon" href="https://www.instagram.com/shell_haiti/" aria-label="Instagram"><FaInstagram /></a><a className="socialIcon" href="https://wa.me/50934011919" aria-label="WhatsApp"><FaWhatsapp /></a><a className="socialIcon" href="mailto:info@autobizsa.com" aria-label="Email"><Mail size={15} /></a></div></div>
          <div className="footerColumn footerAddress"><p className="footerLabel">Nos adresses</p><ul className="addressList"><li><MapPin size={15} /><span><b>Autobiz SA</b>Delmas 52, Port-au-Prince</span></li><li><MapPin size={15} /><span><b>Alomoto</b>Turgeau</span></li><li><MapPin size={15} /><span><b>Alomoto</b>Pétion-Ville</span></li><li><MapPin size={15} /><span><b>Alomoto</b>Delmas 60</span></li><li><MapPin size={15} /><span><b>Alomoto</b>Cap-Haïtien</span></li></ul></div>
        </div>
        <div className="footerLogos" aria-label="Nos marques"><AnimatedLogo src="/shell.png" alt="Shell" index={0} href="https://www.shell.com/motorist/find-the-right-oil.html#iframe=L21vdG9yaXN0L2ZpbmQtdGhlLXJpZ2h0LW9pbC9famNyX2NvbnRlbnQvcm9vdC9tYWluL3NlY3Rpb24vd2ViX2NvbXBvbmVudC9saW5rcy9pdGVtMC5zdHJlYW0vMTc4OTA0OTU4OTU4Mi9jOTEwZDg3N2U0NjE0NWJjMTA3NTJhMDczZGJiNTNjOGIyMjQ5NjAzL2lmcmFtZS5odG1sIy9nYi9lbi1nYg%3D%3D" /><AnimatedLogo src="/art.png" alt="Automotive Art" index={1} /><AnimatedLogo src="/toro.png" alt="Toro" index={2} /><AnimatedLogo src="/titan.png" alt="Titan" index={3} /><AnimatedLogo src="/alomoto.png" alt="Alomoto" index={4} /></div>
        <div className="footerBottom"><span>© Autobiz SA</span><span>Lubrifiants · Peinture · Moto</span></div>
      </div>
    </footer>
  );
}
