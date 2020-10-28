import React from "react";
import { Link } from "react-router-dom";
import {Row} from "react-bootstrap";
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
        </div>
        <Row>
          <UserCard />
          <UserCard />
          <UserCard />
        </Row>
      </div>
    </>
  );
};

export default FollowingAllSec;
