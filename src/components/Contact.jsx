import React from "react";
import ContactForm from './ContactForm';
import '../styles/contact.css';
import Jacob from "../Images/jacob.jpg";
import Fredrika from "../Images/fredrika.jpg";
import Adam from "../Images/adam.jpg";
import Diana from "../Images/diana.jpg";

export default function Contact() {
  return(
    <div id="contact" className="contact">
      <aside className="contact__section">
      <div className="contact__title wow animate fadeInUp">Du hittar oss här</div>
        <div className="contact-cards">
          <div className="contact-card wow animate fadeInLeft">
            <img src={Jacob} className="avatar-img rounded-circle"></img>
            <div className="contact-card__text">
              <div className="contact-card__name">
              Jacob Öhrberg
              </div>
              <div className="contact-card__details">
              jacob@woodinteriors.se 
              </div>
            </div>
          </div>
          <div className="contact-card wow animate fadeInRight">
            <img src={Adam} className="avatar-img rounded-circle"></img>
            <div className="contact-card__text">
              <div className="contact-card__name">
              Adam Samuelsson
              </div>
              <div className="contact-card__details">
              +46 72 744 42 92<br></br>
              adam@woodinteriors.se 
              </div>
            </div>
          </div>
          <div className="contact-card wow animate fadeInLeft">
            <img src={Diana} className="avatar-img rounded-circle"></img>
            <div className="contact-card__text">
              <div className="contact-card__name">
              Diana Öhrberg
              </div>
              <div className="contact-card__details">
              +46 70 522 33 66<br></br>
              diana@woodinteriors.se 
              </div>
            </div>
          </div>
          <div className="contact-card wow animate fadeInRight">
            <img src={Fredrika} className="avatar-img rounded-circle"></img>
            <div className="contact-card__text">
              <div className="contact-card__name">
              Fredrika Andersson
              </div>
              <div className="contact-card__details">
              fredrika@woodinteriors.se 
              </div>
            </div>
          </div>
        </div>
        
      </aside>
      <aside className="contact__section wow animate fadeInUp">
        <div className="contact__title">Kontaktformulär</div>
        <ContactForm />
     </aside>
    </div>
  )
}
