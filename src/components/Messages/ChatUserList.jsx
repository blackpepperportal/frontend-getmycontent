import React from "react";
import { Button, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChatUserList = () => {
  return (
    <Col sm={12} md={12} lg={5} xl={4} className="padding-msg resp-mrg-btn-xs">
      <div className="chat-content">
        <div className="chat-header">
          <Link className="chat-header-back">
            <Image src="assets/images/icons/back.svg" className="svg-clone" />
          </Link>
          <h1 className="chat-page-title">Messages</h1>

          <Link type="button" className="search-btn-1">
            <Image src="assets/images/icons/search.svg" className="svg-clone" />
          </Link>

          <Link to="#" className="add-icon">
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

            <div className="chat-item active">
              <Button type="button" className="chat-btn-one">
                <Image
                  src="assets/images/icons/cut.svg"
                  className="svg-clone chat-close"
                />
              </Button>
              <Link to="#" className="friend-profile">
                <Image src="assets/images/avatar/user-4.jpg" alt="Sarah" />
              </Link>
              <Link to="#" className="chat-msg">
                <div className="friend-name-row">
                  <div className="friend">
                    <span className="friend-name">Sarah</span>
                    <span className="friend-username">@sarahstage</span>
                  </div>
                </div>
                <div className="chat-body">
                  <div className="chat-last-message">
                    <span className="chat-last-message-text">
                      Did you like my new lingerie piece?{" "}
                    </span>
                    <span className="emoji-outer emoji-sizer"></span>
                  </div>
                  <div className="chat-time">
                    <span title="8:07 am"> 8:07 am </span>
                  </div>
                </div>
              </Link>
            </div>
            <hr className="solid" />

            <div className="chat-item">
              <Button type="button" className="chat-btn-one">
                <Image
                  src="assets/images/icons/cut.svg"
                  className="svg-clone chat-close"
                />
              </Button>
              <Link to="#" className="friend-profile">
                <Image src="assets/images/avatar/user-3.jpg" alt="Sarah" />
              </Link>
              <Link to="#" className="chat-msg">
                <div className="friend-name-row">
                  <div className="friend">
                    <span className="friend-name">Lexy</span>
                    <span className="friend-username">@Lexy</span>
                  </div>
                </div>
                <div className="chat-body">
                  <div className="chat-last-message">
                    <span className="chat-last-message-text">
                      Did you like my new lingerie piece?{" "}
                    </span>
                    <span className="emoji-outer emoji-sizer"></span>
                  </div>
                  <div className="chat-time">
                    <span title="8:07 am"> 01:07 am </span>
                  </div>
                </div>
              </Link>
            </div>
            <hr className="solid" />

            <div className="chat-item">
              <Button type="button" className="chat-btn-one">
                <Image
                  src="assets/images/icons/cut.svg"
                  className="svg-clone chat-close"
                />
              </Button>
              <Link to="#" className="friend-profile">
                <Image src="assets/images/avatar/user-5.jpg" alt="Sarah" />
              </Link>
              <Link to="#" className="chat-msg">
                <div className="friend-name-row">
                  <div className="friend">
                    <span className="friend-name">Jessica</span>
                    <span className="friend-username">@jessica</span>
                  </div>
                </div>
                <div className="chat-body">
                  <div className="chat-last-message">
                    <span className="chat-last-message-text">
                      Did you like my new lingerie piece?{" "}
                    </span>
                    <span className="emoji-outer emoji-sizer"></span>
                  </div>
                  <div className="chat-time">
                    <span title="8:07 am"> 6:07 am </span>
                  </div>
                </div>
              </Link>
            </div>
            <hr className="solid" />

            <div className="chat-item">
              <Button type="button" className="chat-btn-one">
                <Image
                  src="assets/images/icons/cut.svg"
                  className="svg-clone chat-close"
                />
              </Button>
              <Link href="#" className="friend-profile">
                <Image src="assets/images/avatar/user-6.jpg" alt="Sarah" />
              </Link>
              <Link to="#" className="chat-msg">
                <div className="friend-name-row">
                  <div className="friend">
                    <span className="friend-name">Jessica</span>
                    <span className="friend-username">@jessica</span>
                  </div>
                </div>
                <div className="chat-body">
                  <div className="chat-last-message">
                    <span className="chat-last-message-text">
                      Did you like my new lingerie piece?{" "}
                    </span>
                    <span className="emoji-outer emoji-sizer"></span>
                  </div>
                  <div className="chat-time">
                    <span title="8:07 am"> 6:07 am </span>
                  </div>
                </div>
              </Link>
            </div>
            <hr className="solid" />

            <div className="chat-item">
              <Button type="button" className="chat-btn-one">
                <Image
                  src="assets/images/icons/cut.svg"
                  className="svg-clone chat-close"
                />
              </Button>
              <Link to="#" className="friend-profile">
                <Image src="assets/images/avatar/user-2.jpg" alt="Sarah" />
              </Link>
              <Link to="#" className="chat-msg">
                <div className="friend-name-row">
                  <div className="friend">
                    <span className="friend-name">Alex Mara</span>
                    <span className="friend-username">@alexmara</span>
                  </div>
                </div>
                <div className="chat-body">
                  <div className="chat-last-message">
                    <span className="chat-last-message-text">
                      Did you like my new lingerie piece?{" "}
                    </span>
                    <span className="emoji-outer emoji-sizer"></span>
                  </div>
                  <div className="chat-time">
                    <span title="8:07 am"> 4:07 am </span>
                  </div>
                </div>
              </Link>
            </div>
            <hr className="solid" />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ChatUserList;
