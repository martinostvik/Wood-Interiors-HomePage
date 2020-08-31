import React from "react";
import '../styles/price.css';

export default function Price() {

  return(
    <div id="price" className="price">
      <aside className="contact__section wow fadeInDown animated">
      <div className="warranty__title padding-top">STANDARD PRISER</div>
      <p className="warranty__text"><span className="bold">Smögenbord</span><br></br><span className="italic-size">Ramläggning med kryssben som standard</span><br></br>
180x100 - 5099 SEK<br></br>
220x100 - 5499 SEK<br></br>
250x100 - 5799 SEK<br></br>
300x100 - 6299 SEK</p>
<p className="warranty__text"><span className="bold">Klevenbord </span><br></br><span className="italic-size">Rak läggning med kryssben som standard</span><br></br>
180x100 - 4099 SEK<br></br>
220x100 - 4499 SEK<br></br>
250x100 - 4799 SEK<br></br>
300x100 - 5299 SEK</p>
<p className="warranty__text small-size">Tillval av vita ben + 500 SEK<br></br>
Tillval av raka ben i återvunnet trä + 500 SEK<br></br>
Tillval för utomhusbruk + 500 SEK<br></br>

Ytterligare önskemål, vänligen kontakta oss för offert.</p>
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