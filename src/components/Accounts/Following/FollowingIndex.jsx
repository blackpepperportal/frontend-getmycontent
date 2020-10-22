import React, { useState } from "react";
import FollowingAllSec from "./FollowingAllSec";
import FollowingActiveSec from "./FollowingActiveSec";
import FollowingExpiredSec from "./FollowingExpiredSec";
import FollowingTabSec from "./FollowingTabSec";
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
    const [activeSec, setActiveSec] = useState("active-sec");
  return (
    <div className="lists">
        <Container>
            <Row>
            <Col sm={12} md={12} xs={12}>
                <div className="profile-post-area">
                    <div className="bookmarkes-list bookmarks-right-side">
                        <div className="pull-left">
                            <h3>
                                <Image src="assets/images/icons/back.svg" className="svg-clone" width="" />{" "}
                                Following
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="listing-tab">
                    <div className="tab" role="tabpanel">
                        <FollowingTabSec
                            activeSec={activeSec}
                            setActiveSec={setActiveSec}
                        />
                    <div className="tab-content tabs">
                        <FollowingActiveSec
                            activeSec={activeSec}
                            setActiveSec={setActiveSec}
                        />

                        <FollowingExpiredSec
                            activeSec={activeSec}
                            setActiveSec={setActiveSec}
                        />

                        <FollowingAllSec
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
  );
};

export default FollowingIndex;
