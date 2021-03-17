import React from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import UserCard from "../UserCard";
import NoDataFound from "../../../NoDataFound/NoDataFound";

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
        id="all"
      >
        {props.following.loading ? (
          "Loading..."
        ) : (
          <>
            <div className="bookmarkes-list bookmarks-right-side">
              <div className="pull-left">
                <Link className="bookmarkes-list" to="#">
                  <span className="mr-2">
                    {props.following.data.total
                      ? props.following.data.total
                      : 0}{" "}
                  </span>{" "}
                  ALL
                </Link>
              </div>
            </div>
            <Row>
              {props.following.data.followers.length > 0 ? (
                props.following.data.followers.map((follower) =>
                  follower.otherUser ? (
                    <UserCard user={follower.otherUser} />
                  ) : (
                    ""
                  )
                )
              ) : (
                <NoDataFound></NoDataFound>
              )}
            </Row>
          </>
        )}
      </div>
    </>
  );
};

export default FollowingAllSec;
