import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import NoDataFound from "../NoDataFound/NoDataFound";

const NotificationAllSec = (props) => {
  const { notifications } = props;

  return (
    <>
      <div
        role="tabpanel"
        className={
          props.activeSec === "notify-all-sec"
            ? "tab-pane fade in active"
            : "tab-pane fade"
        }
        id="Section1"
      >
        <h3 className="notify-title">ALL</h3>
        <div className="notification-list">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div className="notify-item">
                <div className="post-header">
                  <div className="alignleft">
                    <a
                      className="title-container"
                      href={notification.action_url}
                      target="_blank"
                    >
                      <Image
                        src={notification.from_userpicture}
                        className="user-image img-responsive notification-user-img "
                      />
                      <div className="user-name">
                        <span className="post-user-name">
                          {notification.from_displayname}{" "}
                          {notification.from_user.is_verified_badge == 1 ? (
                            <img
                              className="verified-badge"
                              alt="verified-badge"
                              src={
                                window.location.origin +
                                "/assets/images/verified.svg"
                              }
                            />
                          ) : null}
                          <span className="user-id">
                            <Link
                              target="_blank"
                              to={notification.from_username}
                            >
                              @{notification.from_username}
                            </Link>
                          </span>
                        </span>
                        <span className="post-user-notify">
                          {notification.message}
                        </span>
                        <span className="post-user-notify-date">
                          {notification.updated_formatted}
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <NoDataFound></NoDataFound>
          )}
        </div>
      </div>
    </>
  );
};

export default NotificationAllSec;
