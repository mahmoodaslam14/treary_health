import React from "react";
import NavbarComponent from "./component/NavbarComponent";
import { Container } from "react-bootstrap";
import Services from "./component/Services";
import AboutCompany from "./component/AboutCompany";
import OurAmazingService from "./component/OurAmazingService";
import Aboutus from "./component/Aboutus";
import Footer from "./component/Footer";

function LandingPage() {
  return (
    <div>
      <NavbarComponent />
      <Services />
      <AboutCompany />
      <hr />
      <OurAmazingService />
      <hr />
      <Aboutus />
      <Footer />
    </div>
  );
}

export default LandingPage;
