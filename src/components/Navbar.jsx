import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/navbar.css'
import { fetchNav } from '../backend/fetch';

export default function Navbar() {
  const [ navItems, setNavItems ] = useState(null)
  useEffect(() => {
    fetchNav().then(obj => setNavItems(obj))
  }, []);
  return(
    navItems ?
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <a className="navbar-brand" href="#">WOOD INTERIORS</a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a className="nav-link" href="#">{navItems.page1} <span className="sr-only">(current)</span></a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {navItems.dropdown.titel}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link
                    activeClass="active"
                    to="product"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                  <a className="dropdown-item" href="#">{navItems.dropdown.page2}</a>
                </Link>
                <Link
                  activeClass="active"
                  to="warranty"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <a className="dropdown-item" href="#">{navItems.dropdown.page3}</a>
                </Link>
                <Link
                  activeClass="active"
                  to="order"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <a className="dropdown-item" href="#">{navItems.dropdown.page4}</a>
                </Link>
                <Link
                  activeClass="active"
                  to="price"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <a className="dropdown-item" href="#">{navItems.dropdown.page5}</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <a className="nav-link" href="#">{navItems.page6}</a>
                </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <a className="nav-link" href="#">{navItems.page7}</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav> :
      null
  )
}