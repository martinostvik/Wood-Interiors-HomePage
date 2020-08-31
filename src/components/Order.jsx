import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/order.css';

export default function Order() {
  return(
    <div id="order" className="order">
      <aside className="contact__section wow fadeInLeft animated">
        <div className="warranty__title">Hur beställer jag?</div>
        <p className="warranty__text">Kontakta oss via instagram eller våra kontaktuppgifter längre<br></br> 
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <div className="contact-link"><i class="fas fa-arrow-circle-up"></i> upp på denna sidan.</div>
          </Link>
        </p>
      </aside>
      <aside className="contact__section wow fadeInRight animated">
        <div className="warranty__title padding-top">LEVERANSTID</div>
        <p className="warranty__text">Vi tillverkar alla våra produkter för hand, därför tar det också tid för allt att bli klart. Från att ni lägger er beställning  till att den är redo för leverans tar vanligtvis 4-6 veckor, men vi reserverar oss för att det kan ta både kortare och längre tid ifall vi känner att något inte blivit så bra som vi vill att det ska vara när vi lämnar ifrån oss produkten eller om ordertrycket är högt.<br></br>
          Tillåt också några dagar för produkten att fraktas från oss till er.<br></br><br></br>Vid hemleverans av omonterade bord så gäller inte garantin för att benen ska vara korrekt monterade. Vi testmonterar alltid alla ben innan vi skickar iväg dom för att veta att bordet inte vickar. Tänk också på att alla golv är olika, därför kan borden ibland vicka beroende på vart man ställer det, oavsett om vi monterar benen eller om ni själva gör det.
          Produkten ska monteras inom 3 dagar för att vår garanti ska gälla.
        </p>
      </aside>
    </div>
  )
}