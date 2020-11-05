import React, { useState } from "react";
import NotificationAllSec from "./NotificationAllSec";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";

const NotificationIndex = () => {
  const [activeSec, setActiveSec] = useState("notify-all-sec");

  return (
    <>
      <div className="notification-page">
        <Container>
          <Row>
            <Col sm={12} md={12} xs={12}>
              <div className="profile-post-area">
                <div className="bookmarkes-list bookmarks-right-side resp-sapce-center">
                  <div className="pull-left">
                    <Link
                      className="bookmarkes-list notify-title"
                      href="bookmarks.php"
                    >
                      <Image
                        src="assets/images/icons/back.svg"
                        className="svg-clone"
                      />
                      Notifications
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tabbable-panel">
                <div className="tab" role="tabpanel">
                  <div className="tab-content tabs padding-top-md">
                    <NotificationAllSec
                      activeSec={activeSec}
                      setActiveSec={setActiveSec}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NotificationIndex;
