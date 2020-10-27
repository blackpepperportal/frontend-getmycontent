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
import UserCard from "../UserCard";

const FollowingActiveSec = (props) => {
  return (
    <>
      <div
        role="tabpanel"
        className={
          props.activeSec === "active-sec"
            ? "tab-pane fade in active"
            : "tab-pane fade"
        }
        id="Section1"
      >
        <div className="bookmarkes-list bookmarks-right-side">
          <div className="pull-left">
            <Link className="bookmarkes-list" to="#">
              <span className="mr-2">5 </span> ACTIVE
            </Link>
          </div>
        </div>
        <Row>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </Row>
      </div>
    </>
  );
};

export default FollowingActiveSec;
