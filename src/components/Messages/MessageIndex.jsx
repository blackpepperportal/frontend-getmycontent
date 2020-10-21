import React from "react";

const MessageIndex = () => {
  return (
    <section className="message-page">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <div className="chat-content">
                <div className="chat-header">
                  <button className="chat-header-back">
                    <img
                      src="assets/images/icons/back.svg"
                      className="svg-clone"
                    />
                  </button>
                  <h1 className="chat-page-title">Messages</h1>

                  <button type="button" className="search-btn">
                    <img
                      src="assets/images/icons/search.svg"
                      className="svg-clone"
                    />
                  </button>

                  <a href="#" className="add-icon">
                    <img
                      src="assets/images/icons/plus.svg"
                      className="svg-clone"
                    />
                  </a>
                </div>

                <div className="scrollbar">
                  <div className="friend-chat-list-scroll overflow">
                    <div className="recent-chat">
                      <div className="alignleft">
                        <h2 className="chat-section-title">Recent</h2>
                      </div>
                      <div className="alignright">
                        <span className="post-icons">
                          <div className="dropdown">
                            <button
                              className="btn btn-default dropdown-toggle"
                              type="button"
                              data-toggle="dropdown"
                            >
                              <img
                                src="assets/images/icons/vertical-dots.svg"
                                className="svg-clone vertical-dots"
                              />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                              <li>
                                <a href="#"> Copy link to post </a>
                              </li>
                              <li>
                                <a href="#">
                                  {" "}
                                  Hide paid blurred from the home feed{" "}
                                </a>
                              </li>
                              <li className="divider"></li>
                              <li>
                                <a href="#"> I don't like this post </a>
                              </li>
                              <li>
                                <a href="#"> Hide user's posts from feed </a>
                              </li>
                            </ul>
                          </div>
                        </span>
                      </div>
                    </div>

                    <div className="chat-item active">
                      <button type="button" className="chat-btn-one">
                        <img
                          src="assets/images/icons/cut.svg"
                          className="svg-clone chat-close"
                        />
                      </button>
                      <a href="#" className="friend-profile">
                        <img
                          src="assets/images/avatar/user-4.jpg"
                          alt="Sarah"
                        />
                      </a>
                      <a href="#" className="chat-msg">
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
                      </a>
                    </div>
                    <hr className="solid" />

                    <div className="chat-item">
                      <button type="button" className="chat-btn-one">
                        <img
                          src="assets/images/icons/cut.svg"
                          className="svg-clone chat-close"
                        />
                      </button>
                      <a href="#" className="friend-profile">
                        <img
                          src="assets/images/avatar/user-3.jpg"
                          alt="Sarah"
                        />
                      </a>
                      <a href="#" className="chat-msg">
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
                      </a>
                    </div>
                    <hr className="solid" />

                    <div className="chat-item">
                      <button type="button" className="chat-btn-one">
                        <img
                          src="assets/images/icons/cut.svg"
                          className="svg-clone chat-close"
                        />
                      </button>
                      <a href="#" className="friend-profile">
                        <img
                          src="assets/images/avatar/user-5.jpg"
                          alt="Sarah"
                        />
                      </a>
                      <a href="#" className="chat-msg">
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
                      </a>
                    </div>
                    <hr className="solid" />

                    <div className="chat-item">
                      <button type="button" className="chat-btn-one">
                        <img
                          src="assets/images/icons/cut.svg"
                          className="svg-clone chat-close"
                        />
                      </button>
                      <a href="#" className="friend-profile">
                        <img
                          src="assets/images/avatar/user-6.jpg"
                          alt="Sarah"
                        />
                      </a>
                      <a href="#" className="chat-msg">
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
                      </a>
                    </div>
                    <hr className="solid" />

                    <div className="chat-item">
                      <button type="button" className="chat-btn-one">
                        <img
                          src="assets/images/icons/cut.svg"
                          className="svg-clone chat-close"
                        />
                      </button>
                      <a href="#" className="friend-profile">
                        <img
                          src="assets/images/avatar/user-2.jpg"
                          alt="Sarah"
                        />
                      </a>
                      <a href="#" className="chat-msg">
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
                      </a>
                    </div>
                    <hr className="solid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 hidden-xs">
            <div className="row msg-row-chat">
              <div className="msg-header">
                <button className="chat-header-back">
                  <img
                    src="assets/images/icons/back.svg"
                    className="svg-clone"
                  />
                </button>
                <h1 className="chat-section-title">
                  <div className="chat-section-title-width">
                    <a href="" className="chat-user-name">
                      Jessica
                    </a>
                  </div>
                </h1>

                <span className="post-icons">
                  <div className="dropdown">
                    <button
                      className="btn btn-default dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      <img
                        src="assets/images/icons/vertical-dots.svg"
                        className="svg-clone vertical-dots"
                      />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#"> Copy link to post </a>
                      </li>
                      <li>
                        <a href="#"> Hide paid blurred from the home feed </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <a href="#"> I don't like this post </a>
                      </li>
                      <li>
                        <a href="#"> Hide user's posts from feed </a>
                      </li>
                    </ul>
                  </div>
                </span>
                <div className="chat-subheader">
                  <div className="chat-user-status">
                    Last seen <span title="Sep 7, 3:12 pm"> 1 hour ago </span>
                  </div>

                  <button type="button" className="chat-subheader-btn">
                    <img
                      src="assets/images/icons/star.svg"
                      className="svg-clone"
                      width="12"
                    />
                  </button>
                  <button type="button" className="chat-subheader-btn">
                    <img
                      src="assets/images/icons/notification.svg"
                      className="svg-clone"
                      width="12"
                    />
                  </button>
                  <button type="button" className="chat-subheader-btn">
                    <img
                      src="assets/images/icons/gallery.svg"
                      className="svg-clone"
                      width="12"
                    />

                    <span>Gallery</span>
                  </button>
                  <button type="button" className="chat-subheader-btn">
                    <img
                      src="assets/images/icons/search.svg"
                      className="svg-clone"
                      width="12"
                    />

                    <span>Find</span>
                  </button>
                </div>
              </div>

              <div className="chat-area">
                <div className="chat-wrapper scrollbar">
                  <div className="chat-message padding overflow">
                    <div className="chat-message chat-message-recipient">
                      <img
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
                      <img
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
                      <img
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
                      <img
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
                      <img
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
                      <img
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
                  <form id="chat_post_form" className="has-advanced-upload">
                    <div className="chats-post-footer">
                      <div></div>

                      <div className="chat-post">
                        <div className="chat-textarea-price-wrapper">
                          <div className="">
                            <div>
                              <textarea
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
                              ></textarea>
                            </div>
                          </div>
                        </div>

                        <div className="chat-post__actions">
                          <input
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
                            <img
                              src="assets/images/icons/gallery.svg"
                              className="svg-clone"
                            />
                          </label>

                          <button
                            type="button"
                            className="chat-send-tip-btn"
                            data-original-title="null"
                          >
                            <img
                              src="assets/images/icons/tip.svg"
                              className="svg-clone"
                            />
                          </button>
                        </div>

                        <button
                          type="button"
                          data-can_send="true"
                          className="g-btn m-rounded b-chat__btn-submit"
                        >
                          <img
                            src="assets/images/icons/send.svg"
                            className="svg-clone"
                          />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageIndex;
