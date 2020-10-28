import React from "react";
import { Link } from "react-router-dom";
import {Row} from "react-bootstrap";
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
