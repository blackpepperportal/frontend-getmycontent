import React from "react";
import { Row, Col, Image } from "react-bootstrap";
const NotFoundIndex = () => {
  return (
    <>
      <div className="no-data-found-sec-1">
        <Row>
          <Col sm="12" md="12">
            <div className="no-data-found-img-sec-1">
              <Image
                alt="not-found"
                src={window.location.origin + "/assets/images/no-data-found-1.svg"}
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default NotFoundIndex;
