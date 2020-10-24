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
import AddFavModal from "../../../helper/AddFavModal";
import SendTipModal from "../../../helper/SendTipModal";

const FollowingIndex = (props) => {
  const [activeSec, setActiveSec] = useState("active-sec");

  const [sendTip, setSendTip] = useState(false);

  const closeSendTipModal = () => {
    setSendTip(false);
  };

  const [addFav, setAddFav] = useState(false);

  const closeAddFavModal = () => {
    setAddFav(false);
  };

  return (
    <div className="lists">
      <Container>
        <Row>
          <Col sm={12} md={12} xs={12}>
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
                    sendTip={sendTip}
                    closeSendTipModal={closeSendTipModal}
                    setSendTip={setSendTip}
                    addFav={addFav}
                    closeAddFavModal={closeAddFavModal}
                    setAddFav={setAddFav}
                  />

                  <FollowingExpiredSec
                    activeSec={activeSec}
                    setActiveSec={setActiveSec}
                    sendTip={sendTip}
                    closeSendTipModal={closeSendTipModal}
                    setSendTip={setSendTip}
                    addFav={addFav}
                    closeAddFavModal={closeAddFavModal}
                    setAddFav={setAddFav}
                  />

                  <FollowingAllSec
                    activeSec={activeSec}
                    setActiveSec={setActiveSec}
                    sendTip={sendTip}
                    closeSendTipModal={closeSendTipModal}
                    setSendTip={setSendTip}
                    addFav={addFav}
                    closeAddFavModal={closeAddFavModal}
                    setAddFav={setAddFav}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <AddFavModal addFav={addFav} closeAddFavModal={closeAddFavModal} />
      <SendTipModal sendTip={sendTip} closeSendTipModal={closeSendTipModal} />
    </div>
  );
};

export default FollowingIndex;
