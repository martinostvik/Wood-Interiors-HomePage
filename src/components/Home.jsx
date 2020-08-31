import React, { useState } from "react";
import '../styles/home.css';
import { Link, animateScroll as scroll } from "react-scroll";
import Down from "../Images/downArrow.svg";
import { fetchLogo } from '../backend/fetch';

export default function Home() {
  const [ logoURL, setLogoURL ] = useState(null)
  fetchLogo().then(res => setLogoURL(res))
  return (
    <div id="home" className="section">
      <div className="center-img wow animate fadeInUp">
        <img src={logoURL} className="img-fluid logo"></img>
      </div>
      <Link
      to="product"
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
    >
      <div className="arrow-wrapper"><div className="down-arrow-home"><img src={Down} className="img-fluid down-arrow"></img></div></div>
    </Link>
    </div>
  );
}
