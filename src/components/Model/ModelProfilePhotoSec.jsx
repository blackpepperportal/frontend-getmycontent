import React from "react";
import { Link } from "react-router-dom";
import { Image, Media } from "react-bootstrap";

const ModelProfilePhotoSec = (props) => {
  return (
    <div
      role="tabpanel"
      className={
        props.activeSec === "photo"
          ? "tab-pane fade in active"
          : "tab-pane fade"
      }
      id="Section2"
    >
      <ul className="box-container three-cols model-prof-photo-sec">
        <Media as="li" className="box">
          <div className="inner">
            <Link to="assets/images/g-6.jpg" className="glightbox">
              <Image src={window.location.origin + "/assets/images/g-6.jpg"} />
            </Link>
          </div>
        </Media>
        <Media as="li" className="box">
          <div className="inner">
            <Link to="assets/images/g-5.jpg" className="glightbox">
              <Image src={window.location.origin + "/assets/images/g-5.jpg"} />
            </Link>
          </div>
        </Media>
        <Media as="li" className="box">
          <div className="inner">
            <Link to="assets/images/g-4.jpg" className="glightbox">
              <Image src={window.location.origin + "/assets/images/g-4.jpg"} />
            </Link>
          </div>
        </Media>
        <Media as="li" className="box">
          <div className="inner">
            <Link to="assets/images/g-3.jpg" className="glightbox">
              <Image src={window.location.origin + "/assets/images/g-3.jpg"} />
            </Link>
          </div>
        </Media>
        <Media as="li" className="box">
          <div className="inner">
            <Link to="assets/images/g-2.jpg" className="glightbox">
              <Image src={window.location.origin + "/assets/images/g-2.jpg"} />
            </Link>
          </div>
        </Media>
        <Media className="box">
          <div className="inner">
            <Link to="assets/images/g-1.jpg" className="glightbox">
              <Image src={window.location.origin + "/assets/images/g-1.jpg"} />
            </Link>
          </div>
        </Media>
      </ul>
    </div>
  );
};

export default ModelProfilePhotoSec;
