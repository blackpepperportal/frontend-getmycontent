import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const InboxNoDataFound = () => {
  return (
    <>
      <div className="message-no-data-found-sec">
        <Row>
          <Col sm="12" md="12">
            <h4>
              Select any Coversation or Send a New Message from others profile
            </h4>
            {/* <Button className="save-btn">
                New Message
            </Button> */}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default InboxNoDataFound;
