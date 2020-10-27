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

const EditProfileTabSec = (props) => {
  return (
    <ul className="nav nav-tabs edit-profile-tabs" role="tablist">
      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "settings-card" ? "active" : ""}
      >
        <Link
          to="#Section1"
          aria-controls="profile"
          role="tab"
          className="bookmarkes-list"
          data-toggle="tab"
          onClick={() => props.setActiveSec("settings-card")}
        >
          <Image src="assets/images/icons/back.svg" className="svg-clone" />
          Settings
        </Link>
      </Media>
      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "profile-card" ? "active" : ""}
      >
        <Link
          to="#Section2"
          aria-controls="profile"
          role="tab"
          className="bookmarkes-list"
          data-toggle="tab"
          onClick={() => props.setActiveSec("profile-card")}
        >
          <Image src="assets/images/icons/profile.svg" className="svg-clone" />
          Profile
        </Link>
      </Media>
      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "change-password-card" ? "active" : ""}
      >
        <Link
          to="#Section3"
          aria-controls="profile"
          role="tab"
          className="bookmarkes-list"
          data-toggle="tab"
          onClick={() => props.setActiveSec("change-password-card")}
        >
          <Image src="assets/images/icons/change-1.svg" className="svg-clone" />
          Change Password
        </Link>
      </Media>
      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "delete-account-card" ? "active" : ""}
      >
        <Link
          to="#Section4"
          aria-controls="profile"
          role="tab"
          className="bookmarkes-list"
          data-toggle="tab"
          onClick={() => props.setActiveSec("delete-account-card")}
        >
          <Image src="assets/images/icons/delete.svg" className="svg-clone" />
          Delete Account
        </Link>
      </Media>
      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "account-card" ? "active" : ""}
      >
        <Link
          to={"/add-bank"}
          aria-controls="profile"
          role="tab"
          className="bookmarkes-list"
          data-toggle="tab"
        >
          <Image src="assets/images/icons/account.svg" className="svg-clone" />
          Add Bank
        </Link>
      </Media>

      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "notifications-card" ? "active" : ""}
      >
        <Link
          to={"/payments"}
          aria-controls="profile"
          role="tab"
          className="bookmarkes-list"
          data-toggle="tab"
        >
          <Image
            src="assets/images/icons/notification.svg"
            className="svg-clone"
          />
          Payments
        </Link>
      </Media>
      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "security-card" ? "active" : ""}
      >
        <Link
          to="#Section7"
          aria-controls="profile"
          role="tab"
          className="bookmarkes-list"
          data-toggle="tab"
          onClick={() => props.setActiveSec("security-card")}
        >
          <Image src="assets/images/icons/security.svg" className="svg-clone" />
          Security
        </Link>
      </Media>
      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "whts-new-card" ? "active" : ""}
      >
        <Link
          to="#Section8"
          aria-controls="profile"
          role="tab"
          className="bookmarkes-list"
          data-toggle="tab"
          onClick={() => props.setActiveSec("whts-new-card")}
        >
          <Image src="assets/images/icons/new.svg" className="svg-clone" />
          What's New
        </Link>
      </Media>
    </ul>
  );
};

export default EditProfileTabSec;
