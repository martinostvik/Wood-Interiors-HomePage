import React from "react";
import Slide1 from '../Images/slide1.jpg'
import Slide2 from '../Images/slide2.jpg'
import Slide3 from '../Images/slide3.jpg'

export default function Carousel() {
  return(
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="4000">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={Slide1} alt="Våra ljusare bruna färger" />
          <div class="carousel-caption d-md-block">
            <h5>Våra ljusare bruna färger</h5>
            <p className="sub-flex"><span>A</span><span>B</span><span>C</span></p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={Slide3} alt="Våra gråa nyanser" />
          <div class="carousel-caption d-md-block">
            <h5>Våra gråa nyanser</h5>
            <p className="sub-flex"><span>D</span><span>E</span><span>F</span></p>
          </div>
        </div>
        <div class="carousel-item">
        <img class="d-block w-100" src={Slide2} alt="Våra rödbruna nyanser" />
        <div class="carousel-caption d-md-block">
          <h5>Våra rödbruna nyanser</h5>
          <p className="sub-flex"><span>G</span><span>H</span><span>I</span><span>J</span></p>
        </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  )
}