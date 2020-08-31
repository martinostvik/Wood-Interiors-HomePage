import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Down from "../Images/downArrow.svg";
import "../App.css";

export default function ArrowDown({section}) {
  return (
    <Link
      to={section}
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
    >
      <img src={Down} className="img-fluid down-arrow"></img>
    </Link>
  )
}
