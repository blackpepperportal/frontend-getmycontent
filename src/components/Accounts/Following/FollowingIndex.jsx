import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  Tabs,
  Tab,
  Dropdown,
  DropdownButton,
  Image,
  Badge,
  Media,
} from "react-bootstrap";

const FollowingIndex = () => {
  return (
    <div className="lists">
      <Container>
        <Row>
          <div className="profile-post-area">
            <div className="bookmarkes-list bookmarks-right-side">
              <div className="pull-left">
                <h3>
                  <Image
                    src="assets/images/icons/back.svg"
                    className="svg-clone"
                    width=""
                  />{" "}
                  Following
                </h3>
              </div>
            </div>
          </div>

          <Col sm={12} md={12} xs={12}>
            <div className="listing-tab">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={12}>
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first" className="no-fade">
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" className="no-fade">
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FollowingIndex;
