import React from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Dropdown,
  Image,
  Media,
} from "react-bootstrap";

const MessageIndex = () => {
  return (
    <div className="message-page">
      <Container>
        <Row>
          <Col
            sm={12}
            md={12}
            lg={5}
            xl={4}
            className="padding-msg resp-mrg-btn-xs"
          >
            <div className="chat-content">
              <div className="chat-header">
                <Link className="chat-header-back">
                  <Image
                    src="assets/images/icons/back.svg"
                    className="svg-clone"
                  />
                </Link>
                <h1 className="chat-page-title">Messages</h1>

                <Link type="button" className="search-btn-1">
                  <Image
                    src="assets/images/icons/search.svg"
                    className="svg-clone"
                  />
                </Link>

                <Link to="#" className="add-icon">
                  <Image
                    src="assets/images/icons/plus.svg"
                    className="svg-clone"
                  />
                </Link>
              </div>

              <div className="scrollbar">
                <div className="friend-chat-list-scroll overflow">
                  <div className="recent-chat">
                    <div className="alignleft">
                      <h2 className="chat-section-title">Recent</h2>
                    </div>
                    <div className="alignright">
                      <span className="post-icons">
                        <Dropdown>
                          <Dropdown.Toggle
                            className="btn btn-default dropdown-toggle"
                            type="button"
                            id="dropdown-basic"
                          >
                            <Image
                              src="assets/images/icons/vertical-dots.svg"
                              className="svg-clone vertical-dots"
                            />
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                            <Media as="li">
                              <Link to="#"> Copy link to post </Link>
                            </Media>
                            <Media as="li">
                              <Link to="#">
                                {" "}
                                Hide paid blurred from the home feed{" "}
                              </Link>
                            </Media>
                            <Media as="li" className="divider"></Media>
                            <Media as="li">
                              <Link to="#"> I don't like this post </Link>
                            </Media>
                            <Media as="li">
                              <Link to="#"> Hide user's posts from feed </Link>
                            </Media>
                          </Dropdown.Menu>
                        </Dropdown>
                      </span>
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
                      <Image
                        src="assets/images/avatar/user-4.jpg"
                        alt="Sarah"
                      />
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
                      <Image
                        src="assets/images/avatar/user-3.jpg"
                        alt="Sarah"
                      />
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
                      <Image
                        src="assets/images/avatar/user-5.jpg"
                        alt="Sarah"
                      />
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
                      <Image
                        src="assets/images/avatar/user-6.jpg"
                        alt="Sarah"
                      />
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
                      <Image
                        src="assets/images/avatar/user-2.jpg"
                        alt="Sarah"
                      />
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
          <Col
            sm={12}
            md={12}
            lg={7}
            xl={8}
            className="resp-mrg-btn-xs margin-col"
          >
            <Row className="msg-row-chat">
              <div className="msg-header">
                <Button className="chat-header-back">
                  <Image
                    src="assets/images/icons/back.svg"
                    className="svg-clone"
                  />
                </Button>
                <h1 className="chat-section-title">
                  <div className="chat-section-title-width">
                    <Link href="" className="chat-user-name">
                      Jessica
                    </Link>
                  </div>
                </h1>
                <span className="post-icons padding-top-lg">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="btn btn-default dropdown-toggle"
                      type="button"
                      id="dropdown-basic"
                    >
                      <Image
                        src="assets/images/icons/vertical-dots.svg"
                        className="svg-clone vertical-dots"
                      />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <Media as="li">
                        <Link to="#"> Copy link to post </Link>
                      </Media>
                      <Media as="li">
                        <Link to="#">
                          {" "}
                          Hide paid blurred from the home feed{" "}
                        </Link>
                      </Media>
                      <Media as="li" className="divider"></Media>
                      <Media as="li">
                        <Link to="#"> I don't like this post </Link>
                      </Media>
                      <Media as="li">
                        <Link to="#"> Hide user's posts from feed </Link>
                      </Media>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
                <div className="chat-subheader">
                  <div className="chat-user-status">
                    Last seen <span title="Sep 7, 3:12 pm"> 1 hour ago </span>
                  </div>

                  <Button type="button" className="chat-subheader-btn">
                    <Image
                      src="assets/images/icons/star.svg"
                      className="svg-clone"
                      width="12"
                    />
                  </Button>
                  <Button type="button" className="chat-subheader-btn">
                    <Image
                      src="assets/images/icons/notification.svg"
                      className="svg-clone"
                      width="12"
                    />
                  </Button>
                  <Button type="button" className="chat-subheader-btn">
                    <Image
                      src="assets/images/icons/gallery.svg"
                      className="svg-clone"
                      width="12"
                    />

                    <span>Gallery</span>
                  </Button>
                  <Button type="button" className="chat-subheader-btn">
                    <Image
                      src="assets/images/icons/search.svg"
                      className="svg-clone"
                      width="12"
                    />

                    <span>Find</span>
                  </Button>
                </div>
              </div>

              <div className="chat-area">
                <div className="chat-wrapper scrollbar">
                  <div className="chat-message padding overflow">
                    <div className="chat-message chat-message-recipient">
                      <Image
                        className="chat-image chat-image-default"
                        src="assets/images/avatar/user-2.jpg"
                      />

                      <div className="chat-message-wrapper">
                        <div className="chat-message-content">
                          <p>Sushi tonight?</p>
                        </div>

                        <div className="chat-details">
                          <span className="chat-message-localization font-size-small">
                            12:38 pm
                          </span>
                          <span className="chat-message-read-status font-size-small">
                            , $69 not paid yet
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="chat-message chat-message-sender">
                      <Image
                        className="chat-image chat-image-default"
                        src="assets/images/avatar/user-3.jpg"
                      />

                      <div className="chat-message-wrapper">
                        <div className="chat-message-content">
                          <p>Pizza?</p>
                        </div>

                        <div className="chat-details">
                          <span className="chat-message-localization font-size-small">
                            12:38 pm
                          </span>
                          <span className="chat-message-read-status font-size-small"></span>
                        </div>
                      </div>
                    </div>

                    <div className="chat-message chat-message-recipient">
                      <Image
                        className="chat-image chat-image-default"
                        src="assets/images/avatar/user-2.jpg"
                      />

                      <div className="chat-message-wrapper">
                        <div className="chat-message-content">
                          <p>Done. Delivery takes 5 minutes!</p>
                        </div>

                        <div className="chat-details">
                          <span className="chat-message-localisation font-size-small">
                            My Address
                          </span>
                          <span className="chat-message-read-status font-size-small">
                            - Read
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="chat-message chat-message-sender">
                      <Image
                        className="chat-image chat-image-default"
                        src="assets/images/avatar/user-3.jpg"
                      />

                      <div className="chat-message-wrapper">
                        <div className="chat-message-content">
                          <p>Awesome! See you later! : )</p>
                        </div>

                        <div className="chat-details">
                          <span className="chat-message-localization font-size-small">
                            My Address
                          </span>
                          <span className="chat-message-read-status font-size-small">
                            - Read
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="chat-message chat-message-recipient">
                      <Image
                        className="chat-image chat-image-default"
                        src="assets/images/avatar/user-2.jpg"
                      />

                      <div className="chat-message-wrapper">
                        <div className="chat-message-content">
                          <p>Done. Delivery takes 5 minutes!</p>
                        </div>

                        <div className="chat-details">
                          <span className="chat-message-localisation font-size-small">
                            My Address
                          </span>
                          <span className="chat-message-read-status font-size-small">
                            - Read
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="chat-message chat-message-sender">
                      <Image
                        className="chat-image chat-image-default"
                        src="assets/images/avatar/user-3.jpg"
                      />

                      <div className="chat-message-wrapper">
                        <div className="chat-message-content">
                          <p>Awesome! See you later! : )</p>
                        </div>

                        <div className="chat-details">
                          <span className="chat-message-localization font-size-small">
                            My Address
                          </span>
                          <span className="chat-message-read-status font-size-small">
                            - Read
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{ borderTop: "1px solid rgba(138, 150, 163, 0.2)" }}
                >
                  <Form id="chat_post_form" className="has-advanced-upload">
                    <div className="chats-post-footer">
                      <div></div>

                      <div className="chat-post">
                        <div className="chat-textarea-price-wrapper">
                          <div className="">
                            <Form.Group>
                              <Form.Control
                                id="chat-input-area"
                                placeholder="Type a message"
                                name="text"
                                rows="1"
                                maxlength="10000"
                                className="form-control chat-input"
                                style={{
                                  overflow: "hidden",
                                  overflowWrap: "break-word",
                                  height: "48px",
                                }}
                              />
                            </Form.Group>
                          </div>
                        </div>

                        <div className="chat-post__actions">
                          <Form.Control
                            id="fileupload_photo"
                            type="file"
                            multiple="multiple"
                            accept=".gif,.jpg,.jpeg,.gif,.png,.jpg,.jpeg,.png,.mp4,.mov,.moov,.m4v,.mpg,.mpeg,.wmv,.avi,.webm,.mkv,.stream,.mp3,.wav,.ogg"
                          />
                          <label
                            id="attach_file_photo"
                            for="fileupload_photo"
                            className="chat-attach_file"
                            data-original-title="null"
                          >
                            <Image
                              src="assets/images/icons/gallery.svg"
                              className="svg-clone"
                            />
                          </label>

                          <Button
                            type="button"
                            className="chat-send-tip-btn"
                            data-original-title="null"
                          >
                            <Image
                              src="assets/images/icons/tip.svg"
                              className="svg-clone"
                            />
                          </Button>
                        </div>

                        <Button
                          type="button"
                          data-can_send="true"
                          className="g-btn m-rounded b-chat__btn-submit"
                        >
                          <Image
                            src="assets/images/icons/send.svg"
                            className="svg-clone"
                          />
                        </Button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MessageIndex;
