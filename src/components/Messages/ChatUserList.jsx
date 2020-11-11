import React from "react";
import { Button, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChatUserList = (props) => {
  const { chatUsers } = props;
  return (
    <Col sm={12} md={12} lg={5} xl={4} className="padding-msg resp-mrg-btn-xs">
      <div className="chat-content">
        <div className="chat-header">
          <Link className="chat-header-back">
            <Image src="assets/images/icons/back.svg" className="svg-clone" />
          </Link>
          <h1 className="chat-page-title">Messages</h1>

          <Link type="button" className="search-btn-1 hidden">
            <Image src="assets/images/icons/search.svg" className="svg-clone" />
          </Link>

          <Link to="#" className="add-icon hidden">
            <Image src="assets/images/icons/plus.svg" className="svg-clone" />
          </Link>
        </div>

        <div className="scrollbar">
          <div className="friend-chat-list-scroll overflow">
            <div className="recent-chat">
              <div className="alignleft">
                <h2 className="chat-section-title">Recent</h2>
              </div>
            </div>

            {chatUsers.users.map((chatUser, index) => (
              <div key={index}>
                <div
                  className={
                    props.activeChat === index
                      ? "chat-item active"
                      : "chat-item"
                  }
                >
                  <Button type="button" className="chat-btn-one">
                    <Image
                      src={chatUser.to_userpicture}
                      className="svg-clone chat-close"
                    />
                  </Button>
                  <Link to="#" className="friend-profile">
                    <Image
                      src={chatUser.to_userpicture}
                      alt={chatUser.to_displayname}
                    />
                  </Link>
                  <Link
                    to="#"
                    className="chat-msg"
                    onClick={(event) =>
                      props.changeUser(event, chatUser, index)
                    }
                  >
                    <div className="friend-name-row">
                      <div className="friend">
                        <span className="friend-name">
                          {chatUser.to_displayname}
                        </span>
                        <span className="friend-username">
                          @{chatUser.to_username}
                        </span>
                      </div>
                    </div>
                    <div className="chat-body">
                      <div className="chat-last-message">
                        <span className="chat-last-message-text">
                          {chatUser.message}
                        </span>
                        <span className="emoji-outer emoji-sizer"></span>
                      </div>
                      <div className="chat-time">
                        <span title={chatUser.time_formatted}>
                          {chatUser.time_formatted}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <hr className="solid" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ChatUserList;
