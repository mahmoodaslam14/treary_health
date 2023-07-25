import { Col, Row } from "antd";
import React from "react";
import IMAGES from "../assets";

function OurAmazingService() {
  return (
    <div className="our-services p-5">
      <Row gutter={24}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div className="our-services-img mb-2">
            <img
              className="imgage-fluid h-100"
              src={IMAGES.SLICING_IMG}
              alt=""
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div className="pt-5 service-card mt-2">
            <h3 className="d-flex heading-our-service justify-content-start">
              OUR AMAZING SERVICES
            </h3>
            <div className="main-title">Engage the families you serve</div>
            <div className="mb-1">
              <img src={IMAGES.BAR} alt="" width={54} />
            </div>
            <h3 className="service-heading mt-2">
              ELIMINATE HAND WRITTEN MEDICATION LISTS
            </h3>
            <p className="service-discription">
              Patients and families deserve to have upto date, mobile access to
              their latest medication list.
            </p>
            <h3 className="service-heading mt-2">EMPOWER THE FAMILIES YOU SERVE</h3>
            <p className="service-discription">
              Families can now have mobile access to your team's visiting
              Schedule and can also request medication and supply refills with a
              touch of a button.
            </p>
            <h3 className="service-heading mt-2">ACCESS THE IMPORTANT DOCUMENTS</h3>
            <p className="service-discription">
              Allow families to have mobile access to important documents such
              as consents, plan of care, etc.
            </p>
            <h3 className="service-heading mt-2">
              KEEP OTHER FAMILY MEMBERS IN THE LOOP
            </h3>
            <p className="service-discription">
              Allow your patient's POA to invite other family members to have
              mobile access of their loved one's profile.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default OurAmazingService;
