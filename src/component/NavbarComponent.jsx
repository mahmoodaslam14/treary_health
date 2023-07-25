import { Menu, Button, Drawer, Col, Layout, Row } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import IMAGES from "../assets";

const { Header } = Layout;
function NavbarComponent() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <div className="navbarComponent">
        <Layout className="layout">
          <Header className="home-header">
            <Row
              justify="space-between"
              align="middle"
              className="header-row mx-5 px-4"
            >
              <Col xs={18} sm={15} md={9} lg={9} xl={9}>
                <div className="logo">
                  <img alt="logo" src={IMAGES.LOGO} width={75} />
                  <h3 className="font-monospace mb-0 text-black">treaty</h3>
                </div>
              </Col>
              <Col
                xs={0}
                sm={0}
                md={0}
                lg={15}
                xl={15}
                className="d-flex align-items-center justify-content-end main-navbar"
              >
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={["1"]}
                  className="menu-item d-flex justify-content-end align-items-center"
                >
                  <Menu.Item key="1" className="px-0 mx-4">
                    Home
                  </Menu.Item>
                  <Menu.Item key="2" className="px-0 mx-4">
                    About us
                  </Menu.Item>
                  <Menu.Item key="3" className="px-0 mx-4">
                    Services
                  </Menu.Item>
                  <Menu.Item key="4" className="px-0 mx-4">
                    Contact us
                  </Menu.Item>
                </Menu>
                <Button type="primary" className="navbar-btn">
                  <h6 className="mb-0 btn-text"> Login / Register </h6>
                </Button>
              </Col>
              <Col sm={2} xs={2} md={2} xl={0} lg={0}>
                <Button type="primary" className="bar-btn" onClick={showDrawer}>
                  <MenuOutlined />
                </Button>
              </Col>
            </Row>
            <Drawer
              title="Menu"
              placement="right"
              onClick={onClose}
              onClose={onClose}
              open={visible}
            >
              <Menu
                mode="vertical"
                defaultSelectedKeys={["1"]}
                className="drawer-menu"
              >
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">About us</Menu.Item>
                <Menu.Item key="3">Services</Menu.Item>
                <Menu.Item key="4">Contact us</Menu.Item>
              </Menu>
              <Button type="primary" className="navbar-btn mt-3">
                <h6 className="mb-0 btn-text"> Login / Register </h6>
              </Button>
            </Drawer>
          </Header>
        </Layout>
      </div>
    </div>
  );
}

export default NavbarComponent;
