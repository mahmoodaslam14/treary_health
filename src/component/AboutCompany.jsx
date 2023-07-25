import { Col, Row } from "antd";
import { Container } from "react-bootstrap";
import IMAGES from "../assets";

function AboutCompany() {
  return (
    <div className="about-company">
    <div className="py-5 about-company-row mx-5">
      <Row className="justify-content-between company-card text-sm-center px-5" gutter={24}>
        <Col xs={24} sm={12} md={12} lg={4} xl={4}>
          <div className="d-flex flex-column align-items-center text-center mb-2">
            <span className="aboutcompany-icon">
              <img src={IMAGES.CHAT_ICOn} alt="" width={50} />
            </span>
            <span className="aboutcompany-heading pt-3">Messaging</span>
            <p className="aboutcompany-discription">
              Direct and group message your team.
            </p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={4} xl={4}>
          <div className="d-flex flex-column align-items-center text-center mb-2">
            <span className="aboutcompany-icon">
              <img src={IMAGES.MEDICATION} alt="" width={50} />
            </span>
            <span className="aboutcompany-heading pt-3">Medication</span>
            <span className="aboutcompany-discription">
              Track Supply & medication refills by last last requested date by
              patient's family.
            </span>
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={4} xl={4}>
          <div className="d-flex flex-column align-items-center text-center mb-2">
            <span className="aboutcompany-icon">
              <img src={IMAGES.SCHEDULE} alt="" width={50} />
            </span>
            <span className="aboutcompany-heading pt-3">Schedule</span>
            <span className="aboutcompany-discription text-center">
              Transparent Schedule for all team members on shared calendars with
              mobile access.
            </span>
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={4} xl={4}>
          <div className="d-flex flex-column align-items-center text-center mb-2">
            <span className="aboutcompany-icon">
              <img src={IMAGES.COMPILANCE_ICON} alt="" width={50} />
            </span>
            <span className="aboutcompany-heading pt-3">Compliance</span>
            <span className="aboutcompany-discription">
              Ensure compilance by allowing patients to have mobile, upto date
              access to their medication list.
            </span>
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={4} xl={4}>
          <div className="d-flex flex-column align-items-center text-center mb-2">
            <span className="aboutcompany-icon">
              <img src={IMAGES.TRACK_VISIT} alt="" width={50} />
            </span>
            <span className="aboutcompany-heading pt-3">Track Visit</span>
            <span className="aboutcompany-discription">
              Track your staff's made visits to each patient.
            </span>
          </div>
        </Col>
      </Row>
    </div>
    </div>
  );
}

export default AboutCompany;
