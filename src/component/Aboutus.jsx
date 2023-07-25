import { Button, Card, Col, Form, Input, Row } from "antd";
import React from "react";
import IMAGES from "../assets";

function Aboutus() {
  return (
    <div className="contact-us">
    <div className="py-5 px-5 mx-5 contact-us-row">
      <Row gutter={24}>
        <Col xs={24} sm={24} md={24} lg={10} xl={10}>
          <div className="contact-us-main">STAY IN TOUCH</div>
          <h2 className="contact-us-heading">Contact Us</h2>
          <img src={IMAGES.BAR} alt="" width={40} />
          <div className="pt-5 d-flex align-items-center justify-content-start">
            <img src={IMAGES.PHONE_ICON} alt="" width={40} />
            <h6 className="mb-0 contact-discription">1-541-754-3010</h6>
          </div>
          <div className="pt-4 d-flex align-items-center justify-content-start">
            <img src={IMAGES.ENVELOPE_ICON} alt="" width={40} />
            <h6 className="mb-0 contact-discription">support@jointreaty.com</h6>
          </div>
          <div className="pt-4 d-flex align-items-center justify-content-start">
            <img src={IMAGES.LOCATION_ICON} alt="" width={40} />
            <h6 className="mb-0 contact-discription">
              3782 Shady Pines Drive USA
            </h6>
          </div>
          <div className="pt-4 d-flex align-items-center">
            <span className="mr-3">
              <img src={IMAGES.FACEBOOK_ICON} alt="" width={45} />
            </span>
            <span className="mx-3">
              <img src={IMAGES.INSTA_ICON} alt="" width={45} />
            </span>
            <span className="mx-3">
              <img src={IMAGES.YOUTUBE_ICON} alt="" width={45} />
            </span>
            <span className="mx-3">
              <img src={IMAGES.TWITTER_ICOC} alt="" width={45} />
            </span>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={14} xl={14} className="mt-1 form-card">
          <Card bordered>
            <Form
              name="basic"
              labelCol={{
                span: 0,
              }}
              wrapperCol={{
                span: 24,
              }}
              // style={{
              //   maxWidth: 600,
              // }}
              // initialValues={{
              //   remember: true,
              // }}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Row gutter={24}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    // label="Username"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your name!",
                      },
                    ]}
                  >
                    <Input placeholder="NAME *" />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input type="email" placeholder="EMAIL *" />
                  </Form.Item>
                  <Form.Item
                    name="subject"
                    rules={[
                      {
                        required: true,
                        message: "Please input your subject!",
                      },
                    ]}
                  >
                    <Input placeholder="SUBJECT *" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name="message"
                    rules={[
                      {
                        required: true,
                        message: "Please input your message!",
                      },
                    ]}
                  >
                    <Input.TextArea placeholder="MESSAGE *" rows={7} />
                  </Form.Item>
                </Col>
              </Row>
              <Button
                type="primary"
                htmlType="submit"
                className="float-end mt-4"
              >
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
    </div>
  );
}

export default Aboutus;
