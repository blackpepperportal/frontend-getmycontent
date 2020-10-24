import React, { useState } from "react";
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
import AddFavModal from "../../helper/AddFavModal";
import SendTipModal from "../../helper/SendTipModal";
import UserCard from "../FansFollowing/UserCard";

const FavoritesIndex = (props) => {
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
                    Favorites
                  </h3>
                </div>
              </div>
            </div>
            <UserCard setAddFav={setAddFav} setSendTip={setSendTip} />
          </Col>
        </Row>
      </Container>
      <AddFavModal addFav={addFav} closeAddFavModal={closeAddFavModal} />
      <SendTipModal sendTip={sendTip} closeSendTipModal={closeSendTipModal} />
    </div>
  );
};

export default FavoritesIndex;
