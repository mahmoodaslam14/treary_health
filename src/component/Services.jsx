import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import IMAGES from "../assets";
import { Container } from "react-bootstrap";

function Services() {
  return (
    <div className="background">
      <div className="carousel-text pt-5">
      <h4 className="mb-0 text-white w-75 text-center mx-auto">
        TREATY HEALTH IS THE GO-TO-SYSTEM TO IMPOROVE YOUR TEAMS COMMUNICAIION,
        WHILE CONNECTING YOU WITH THE PATIENTS & FAMILIES YOU SERVE
      </h4>
      </div>
      <Carousel autoPlay>
        <div>
          <img alt="" src={IMAGES.CAROSEL_ONE} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img alt="" src={IMAGES.CAROSEL_TWO} />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img alt="" src={IMAGES.CAROSEL_ONE} />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
}

export default Services;
