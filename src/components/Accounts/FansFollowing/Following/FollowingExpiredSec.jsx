import React, { useState } from "react";
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
import SendTipModal from "../../../helper/SendTipModal";
import AddFavModal from "../../../helper/AddFavModal";
import UserCard from "../UserCard";

const FollowingExpiredSec = (props) => {
  return (
    <>
      <div
        role="tabpanel"
        className={
          props.activeSec === "expired-sec"
            ? "tab-pane fade in active"
            : "tab-pane fade"
        }
        id="Section2"
      >
        <div className="bookmarkes-list bookmarks-right-side">
          <div className="pull-left">
            <Link className="bookmarkes-list" to="#">
              <span className="mr-2">5 </span> Expired
            </Link>
          </div>
        </div>
        <Row>
          <UserCard />
        </Row>
      </div>
    </>
  );
};

export default FollowingExpiredSec;
