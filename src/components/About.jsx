import React from "react";
import ArrowDown from "./ArrowDown";
import '../styles/about.css';
import Logo from "../Images/logo.svg";
import Instagram from "../Images/instagram.svg";

export default function About() {
  return (
    <div id="about" className="about">
      <div className="about-wrapper">
        <aside className="about__section main-width wow animate fadeInLeft">
          <img src={Logo} className="img-fluid about__logo"></img>
          <p className="about__text">Vi är två par från Smögen som tillsammans vill kunna förverkliga våra skapardrömmar.<br></br>
Jacob & Diana och Adam & Fredrika är det som sitter bakom rodret på Wood Interiors.<br></br><br></br>

Jacob har hand om ekonomi och tillverkning.
Diana har hand om försäljning, mässor och företagsmöten.
Adam har hand om tillverkning, leverans, mässor och kundkontakt.
Fredrika har hand om våra sociala medier, försäljning, samarbeten och digital marknadsföring.</p>
        </aside>
        <div class="vl"></div>
        <aside className="about__section wow animate fadeInRight">
          <div className="instagram">
            <img src={Instagram} alt="instagram" className="instagram__logo"/>
            <div className="instagram__text">
              <p className="instagram__header">FÖLJ OSS PÅ INSTAGRAM!</p>
              <p className="instagram__sub">@WoodInteriors_</p>
            </div>
          </div>
          <iframe src="//lightwidget.com/widgets/74be7df98b175ae09d742b95a7292d20.html" scrolling="no" allowtransparency="true" class="lightwidget-widget"></iframe>
        </aside>
      </div>
    </div>
  )
}