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

const ModelProfileVideoSec = (props) => {
  return (
    <div
      role="tabpanel"
      className={
        props.activeSec === "video"
          ? "tab-pane fade in active"
          : "tab-pane fade"
      }
      id="Section3"
    >
      <ul className="box-container three-cols model-prof-photo-sec">
        <Media as="li" className="box">
          <div className="inner">
            <Link to="assets/images/videos/demo-1.mp4" className="glightbox3">
              <Image
                src={window.location.origin + "/assets/images/g-4.jpg"}
                alt="image"
              />
            </Link>
          </div>
        </Media>
        <Media as="li" className="box">
          <div className="inner">
            <Link to="assets/images/videos/demo-2.mp4" className="glightbox3">
              <Image
                src={window.location.origin + "/assets/images/g-2.jpg"}
                alt="image"
              />
            </Link>
          </div>
        </Media>
        <Media as="li" className="box">
          <div className="inner">
            <Link to="assets/images/videos/demo-1.mp4" className="glightbox3">
              <Image
                src={window.location.origin + "/assets/images/g-3.jpg"}
                alt="image"
              />
            </Link>
          </div>
        </Media>
      </ul>
    </div>
  );
};

export default ModelProfileVideoSec;
