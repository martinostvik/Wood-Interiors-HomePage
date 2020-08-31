import React from "react";
import Carousel from './Carousel';
import ArrowDown from "./ArrowDown";
import '../styles/product.css';
import Material from '../Images/material.jpg'
import Langd from '../Images/langd2.jpg'
import Behandling from '../Images/behandling3.jpg'

export default function Product() {
  return (
    <div id="product" className="section2">
        <div className="info-card right offset-left wow fadeInLeftBig animated">
          <div className="info-card__text">
            <h1 className="info-card__title">MATERIAL</h1>
            <p>Vi bygger våra bord och bänkar av massivt svensk furu eller gran. Materialet trä är levande även efter att det kapats upp vilket medför att det kan röra sig när bordet är färdigbyggt. Vi reserverar oss för att skivan och benen kan röra sig med åren, och även i olika miljöer i olika hem.<br/><br/>
              Vi kontrollerar alltid produkterna innan dom skickas eller levereras till er kunder, och det kan finnas nyansskillnader, virket kan bukta lite och det kan finnas märken efter tillverkningen. Detta är en del av vad vi tycker är charmen med våra rustika och handtillverkade produkter, ingen vara är den andra lik och du kan alltid vara säker på att just du får en unik produkt!
            </p>
          </div>
          <span><img className="info-card__img right" src={Material} alt="wood" /></span>
        </div>
        <div className="info-card left offset-right wow fadeInRightBig animated">
          <span><img className="info-card__img left" src={Langd} alt="wood" /></span>
          <div className="info-card__text">
            <h1 className="info-card__title">LÄNGD</h1>
            <p>Alla våra produkter kan tillverkas i valfri längd, bredd och i viss mån höjd. Dock så är vårat material 17cm brett, vilket betyder att bredden blir liknande detta: 17&gt;34&gt;51&gt;68&gt;85&gt;102 etc.<br/><br/>
              Längden på borden begränsas endast av totalmåttet på råmaterialet som i dagsläget är 3 m. Men önskas något att mått på antingen bredd eller längd så kontakta oss för prisförslag. Alla mått handkapas vilket betyder att det kan skilja på upp till två cm på längden.
            </p>
          </div>
        </div>
        <div className="info-card right offset-left wow fadeInLeftBig animated">
          <div className="info-card__text">
            <h1 className="info-card__title">BEHANDLING</h1>
            <p>Våra skivor behandlas med bets och slitytan lackas med två lager ultramatt klarlack för att tåla användning.<br/><br/>
            Spiller du vätska på bordet?
Torka av det direkt med en trasa. Torka av bordet med en våt trasa när du städar, undvik starka tvättprodukter.
            </p>
          </div>
          <span><img className="info-card__img right" src={Behandling} alt="wood" /></span>
        </div>
        <div className="info-card left right wow fadeInUp animated">
          <div className="info-card__text">
            <h1 className="info-card__title">VI TILLVERKAR</h1>
            <p>MATSALSBORD - SOFFBORD - HALLBORD - SITTBÄNKAR - TV BÄNKAR - HYLLOR - SÄNGBORD</p>
            <p>Är ni ute efter något annat? Hör av er så ser vi om vi kan hjälpa er med det!</p>
            <Carousel />
          </div>
        </div>
    </div>
  );
}
