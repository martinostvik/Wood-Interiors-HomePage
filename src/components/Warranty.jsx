import React from "react";
import Logo from "../Images/logo.svg";
import '../styles/warranty.css';

export default function Warranty() {
  return(
    <div id="warranty" className="warranty">
      <aside className="contact__section wow fadeInDown animated">
      <img src={Logo} className="img-fluid about__logo"></img>
      <div className="warranty__title padding-top">GARANTI</div>
      <p className="warranty__text">Då det är levande material vi arbetar med så kan träet i produkten röra på sig. Men är det en väsentlig skillnad på tex bordsskivan, minst 3 cm så vill vi att ni kontaktar oss inom ett (1) år för åtgärd/kompensation.<br></br><br></br>
        Vi vill jättegärna ha bilder på hur våra produkter ser ut i era hem. Får vi bilder av er förbehåller vi oss rätten att använda dessa i våra sociala medier utan att på förhand fråga personen som tagit fotot. Upphovsrätten tillfaller Wood Interiors Sweden AB.</p>
      </aside>
      <aside className="contact__section wow fadeInUp animated">
      <div className="warranty__title">BETALNING</div>
      <p className="warranty__text">Vi erbjuder följande betalningsmetoder;<br></br>
Swish, Banköverföring, Kontant och avbetalning.<br></br>
Till företag erbjuder vi faktura.<br></br><br></br>

Avbetalningsplan:<br></br>
            6 Mån Avbetalning<br></br>
295:- i uppläggningsavgift<br></br>
59:- / Månad i fakturaavgift
.
</p>
<div className="warranty__title">REKLAMATION</div>
      <p className="warranty__text">Är ni inte nöjda med produkten?<br></br>
Hör då av er när ni mottagit den och förklara vad ni är missnöjda med så ska vi försöka lösa problemet. 
</p>
      </aside>
    </div>
  )
}