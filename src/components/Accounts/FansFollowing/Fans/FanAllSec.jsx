import React from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import UserCard from "../UserCard";
import NoDataFound from "../../../NoDataFound/NoDataFound";
import { translate, t } from "react-multi-lang";

const FanAllSec = (props) => {
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
        {props.followers.loading ? (
          t("loading")
        ) : (
          <>
            <div className="bookmarkes-list bookmarks-right-side">
              <div className="pull-left">
                <Link className="bookmarkes-list" to="#">
                  <span className="mr-2">
                    {props.followers.data.total
                      ? props.followers.data.total
                      : 0}{" "}
                  </span>{" "}
                  {t("all")}
                </Link>
              </div>
            </div>
            <Row>
              {props.followers.data.followers.length > 0 ? (
                props.followers.data.followers.map((follower) => (
                  <UserCard user={follower.otherUser} />
                ))
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

export default translate(FanAllSec);
