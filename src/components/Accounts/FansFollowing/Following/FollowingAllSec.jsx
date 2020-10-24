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

const FollowingAllSec = (props) => {
  return (
    <>
      <div
        role="tabpanel"
        className={
          props.activeSec === "all-sec"
            ? "tab-pane fade in active"
            : "tab-pane fade"
        }
        id="Section3"
      >
        <div className="bookmarkes-list bookmarks-right-side">
          <div className="pull-left">
            <Link className="bookmarkes-list" to="#">
              <span className="mr-2">5 </span> All
            </Link>
          </div>
          <div className="pull-right">
            <Dropdown>
              <Dropdown.Toggle
                className="btn btn-default dropdown-toggle bookmarks-filter"
                type="button"
                id="dropdown-basic"
              >
                <Image
                  src="assets/images/icons/sort.svg"
                  className="svg-clone"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu dropdown-menu-right model-filter-dropdown">
                <Form action="#">
                  <Media as="li">
                    <a role="heading" className="dropdown-header">
                      Subscription
                    </a>
                  </Media>
                  <Media as="li">
                    <a>
                      {["radio"].map((type) => (
                        <div key={`custom-inline-${type}`}>
                          <Form.Check
                            custom
                            inline
                            label="Recent"
                            type={type}
                            id={`custom-inline-${type}-1`}
                          />
                        </div>
                      ))}
                    </a>
                  </Media>
                  <Media as="li">
                    <a>
                      {["radio"].map((type) => (
                        <div key={`custom-inline-${type}`}>
                          <Form.Check
                            custom
                            inline
                            label="Name"
                            type={type}
                            id={`custom-inline-${type}-2`}
                          />
                        </div>
                      ))}
                    </a>
                  </Media>
                </Form>
                <Media as="li" className="divider"></Media>
                <Form action="#">
                  <Media as="li">
                    <a role="heading" className="dropdown-header">
                      Online Status
                    </a>
                  </Media>
                  <Media as="li">
                    <a>
                      {["radio"].map((type) => (
                        <div key={`custom-inline-${type}`}>
                          <Form.Check
                            custom
                            inline
                            label="Online"
                            type={type}
                            id={`custom-inline-${type}-3`}
                          />
                        </div>
                      ))}
                    </a>
                  </Media>
                  <Media as="li">
                    <a>
                      {["radio"].map((type) => (
                        <div key={`custom-inline-${type}`}>
                          <Form.Check
                            custom
                            inline
                            label="Online"
                            type={type}
                            id={`custom-inline-${type}-4`}
                          />
                        </div>
                      ))}
                    </a>
                  </Media>
                  <Media as="li">
                    <a>
                      {["radio"].map((type) => (
                        <div key={`custom-inline-${type}`}>
                          <Form.Check
                            custom
                            inline
                            label="Offline"
                            type={type}
                            id={`custom-inline-${type}-5`}
                          />
                        </div>
                      ))}
                    </a>
                  </Media>
                </Form>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <Row>
          <UserCard setAddFav={props.setAddFav} setSendTip={props.setSendTip} />
          <UserCard setAddFav={props.setAddFav} setSendTip={props.setSendTip} />
          <UserCard setAddFav={props.setAddFav} setSendTip={props.setSendTip} />
        </Row>
      </div>
    </>
  );
};

export default FollowingAllSec;
