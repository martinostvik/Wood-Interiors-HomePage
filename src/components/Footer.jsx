import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/footer.css';
import Logo from "../Images/WI_logo_sv.png";

export default function Footer() {
    return(
        <footer>
        	<div class="footer-top">
		        <div class="container">
		        	<div class="row">
		        		<div class="col-md-4 col-lg-4 footer-about wow fadeInUp animated">
		        			<img class="logo-footer" src={Logo} alt="logo-footer" data-at2x={Logo} width="200" height="93"></img>
		        			<p>
                            Vi är ett ungt företag som alltid strävar efter att leverera högsta kvalitet på våra produkter.
		        			</p>
		        			<p>
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                            >
                                <a href="#">Vårt Team</a>
                            </Link>
                            </p>
	                    </div>
		        		<div class="col-md-4 col-lg-4 offset-lg-1 footer-contact wow fadeInDown animated" >
		        			<h3>Kontakt</h3>
		                	<p><i class="fas fa-map-marker-alt"></i> Båtsmansgatan 6B, 45650 Smögen</p>
		                	<p><i class="fas fa-phone"></i> Telefon: +46 72 744 42 92</p>
		                	<p><i class="fas fa-envelope"></i> Email: <a href="mailto:adam@woodinteriors.se">adam@woodinteriors.se</a></p>
	                    </div>
	                    <div class="col-md-4 col-lg-3 footer-social wow fadeInUp animated">
	                    	<h3>Följ oss</h3>
	                    	<p>
	                    		<a href="https://www.facebook.com/hejwoodinteriors" target="_blank"><i class="fab fa-facebook"></i></a> 
								<a href="https://www.instagram.com/woodinteriors_/?hl=en" target="_blank"><i class="fab fa-instagram"></i></a> 
	                    	</p>
	                    </div>
		            </div>
		        </div>
	        </div>
	        <div class="footer-bottom">
	        	<div class="container">
	        		<div class="row">
	           			<div class="col-md-5 footer-copyright">
	                    	<p>© Website made and designed by <a href="http://ostvik.space" target="_blank">Martin Østvik</a></p>
	                    </div>
	           			<div class="col-md-7 footer-menu">
	                    	<nav class="navbar navbar-dark navbar-expand-md">
							    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							        <span class="navbar-toggler-icon"></span>
							    </button>
							    <div class="collapse navbar-collapse" id="navbarNav">
							        <ul class="navbar-nav ml-auto">
							            <li class="nav-item">
                                            <Link
                                                activeClass="active"
                                                to="product"
                                                spy={true}
                                                smooth={true}
                                                offset={-50}
                                                duration={500}
                                                >
                                                <a class="nav-link scroll-link" href="#">Tillverkning</a>
                                            </Link>
							            </li>
							            <li class="nav-item">
                                            <Link
                                                activeClass="active"
                                                to="warranty"
                                                spy={true}
                                                smooth={true}
                                                offset={-100}
                                                duration={500}
                                            >
                                                <a class="nav-link scroll-link" href="#">Reklamation</a>
                                            </Link>
							            </li>
							            <li class="nav-item">
                                            <Link
                                                activeClass="active"
                                                to="order"
                                                spy={true}
                                                smooth={true}
                                                offset={-50}
                                                duration={500}
                                            >
							                    <a class="nav-link scroll-link" href="#">Beställning</a>
                                            </Link>
							            </li>
                                        <li class="nav-item">
                                            <Link
                                                activeClass="active"
                                                to="about"
                                                spy={true}
                                                smooth={true}
                                                offset={-50}
                                                duration={500}
                                            >
                                                <a class="nav-link scroll-link" href="#section-4">Om Oss</a>
                                            </Link>
							            </li>
                                        <li class="nav-item">
                                            <Link
                                                activeClass="active"
                                                to="contact"
                                                spy={true}
                                                smooth={true}
                                                offset={-80}
                                                duration={500}
                                            >
                                                <a class="nav-link scroll-link" href="#section-4">Kontakt</a>
                                            </Link>
							            </li>
							        </ul>
							    </div>
							</nav>
	                    </div>
	           		</div>
	        	</div>
	        </div>
        </footer>
    )
}