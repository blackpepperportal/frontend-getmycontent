import React from "react";

const MessageIndex = () => {
  return (
    <section class="message-page">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="row">
              <div class="chat-content">
                <div class="chat-header">
                  <button class="chat-header-back">
                    <img src="assets/images/icons/back.svg" class="svg-clone" />
                  </button>
                  <h1 class="chat-page-title">Messages</h1>

                  <button type="button" class="search-btn">
                    <img
                      src="assets/images/icons/search.svg"
                      class="svg-clone"
                    />
                  </button>

                  <a href="#" class="add-icon">
                    <img src="assets/images/icons/plus.svg" class="svg-clone" />
                  </a>
                </div>

                <div class="scrollbar">
                  <div class="friend-chat-list-scroll overflow">
                    <div class="recent-chat">
                      <div class="alignleft">
                        <h2 class="chat-section-title">Recent</h2>
                      </div>
                      <div class="alignright">
                        <span class="post-icons">
                          <div class="dropdown">
                            <button
                              class="btn btn-default dropdown-toggle"
                              type="button"
                              data-toggle="dropdown"
                            >
                              <img
                                src="assets/images/icons/vertical-dots.svg"
                                class="svg-clone vertical-dots"
                              />
                            </button>
                            <ul class="dropdown-menu dropdown-menu-right">
                              <li>
                                <a href="#"> Copy link to post </a>
                              </li>
                              <li>
                                <a href="#">
                                  {" "}
                                  Hide paid blurred from the home feed{" "}
                                </a>
                              </li>
                              <li class="divider"></li>
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

                    <div class="chat-item active">
                      <button type="button" class="chat-btn-one">
                        <img
                          src="assets/images/icons/cut.svg"
                          class="svg-clone chat-close"
                        />
                      </button>
                      <a href="#" class="friend-profile">
                        <img
                          src="assets/images/avatar/user-4.jpg"
                          alt="Sarah"
                        />
                      </a>
                      <a href="#" class="chat-msg">
                        <div class="friend-name-row">
                          <div class="friend">
                            <span class="friend-name">Sarah</span>
                            <span class="friend-username">@sarahstage</span>
                          </div>
                        </div>
                        <div class="chat-body">
                          <div class="chat-last-message">
                            <span class="chat-last-message-text">
                              Did you like my new lingerie piece?{" "}
                            </span>
                            <span class="emoji-outer emoji-sizer"></span>
                          </div>
                          <div class="chat-time">
                            <span title="8:07 am"> 8:07 am </span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <hr class="solid" />

                    <div class="chat-item">
                      <button type="button" class="chat-btn-one">
                        <img
                          src="assets/images/icons/cut.svg"
                          class="svg-clone chat-close"
                        />
                      </button>
                      <a href="#" class="friend-profile">
                        <img
                          src="assets/images/avatar/user-3.jpg"
                          alt="Sarah"
                        />
                      </a>
                      <a href="#" class="chat-msg">
                        <div class="friend-name-row">
                          <div class="friend">
                            <span class="friend-name">Lexy</span>
                            <span class="friend-username">@Lexy</span>
                          </div>
                        </div>
                        <div class="chat-body">
                          <div class="chat-last-message">
                            <span class="chat-last-message-text">
                              Did you like my new lingerie piece?{" "}
                            </span>
                            <span class="emoji-outer emoji-sizer"></span>
                          </div>
                          <div class="chat-time">
                            <span title="8:07 am"> 01:07 am </span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <hr class="solid" />

                    <div class="chat-item">
                      <button type="button" class="chat-btn-one">
                        <img
                          src="assets/images/icons/cut.svg"
                          class="svg-clone chat-close"
                        />
                      </button>
                      <a href="#" class="friend-profile">
                        <img
                          src="assets/images/avatar/user-5.jpg"
                          alt="Sarah"
                        />
                      </a>
                      <a href="#" class="chat-msg">
                        <div class="friend-name-row">
                          <div class="friend">
                            <span class="friend-name">Jessica</span>
                            <span class="friend-username">@jessica</span>
                          </div>
                        </div>
                        <div class="chat-body">
                          <div class="chat-last-message">
                            <span class="chat-last-message-text">
                              Did you like my new lingerie piece?{" "}
                            </span>
                            <span class="emoji-outer emoji-sizer"></span>
                          </div>
                          <div class="chat-time">
                            <span title="8:07 am"> 6:07 am </span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <hr class="solid" />

                    <div class="chat-item">
                      <button type="button" class="chat-btn-one">
                        <img
                          src="assets/images/icons/cut.svg"
                          class="svg-clone chat-close"
                        />
                      </button>
                      <a href="#" class="friend-profile">
                        <img
                          src="assets/images/avatar/user-6.jpg"
                          alt="Sarah"
                        />
                      </a>
                      <a href="#" class="chat-msg">
                        <div class="friend-name-row">
                          <div class="friend">
                            <span class="friend-name">Jessica</span>
                            <span class="friend-username">@jessica</span>
                          </div>
                        </div>
                        <div class="chat-body">
                          <div class="chat-last-message">
                            <span class="chat-last-message-text">
                              Did you like my new lingerie piece?{" "}
                            </span>
                            <span class="emoji-outer emoji-sizer"></span>
                          </div>
                          <div class="chat-time">
                            <span title="8:07 am"> 6:07 am </span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <hr class="solid" />

                    <div class="chat-item">
                      <button type="button" class="chat-btn-one">
                        <img
                          src="assets/images/icons/cut.svg"
                          class="svg-clone chat-close"
                        />
                      </button>
                      <a href="#" class="friend-profile">
                        <img
                          src="assets/images/avatar/user-2.jpg"
                          alt="Sarah"
                        />
                      </a>
                      <a href="#" class="chat-msg">
                        <div class="friend-name-row">
                          <div class="friend">
                            <span class="friend-name">Alex Mara</span>
                            <span class="friend-username">@alexmara</span>
                          </div>
                        </div>
                        <div class="chat-body">
                          <div class="chat-last-message">
                            <span class="chat-last-message-text">
                              Did you like my new lingerie piece?{" "}
                            </span>
                            <span class="emoji-outer emoji-sizer"></span>
                          </div>
                          <div class="chat-time">
                            <span title="8:07 am"> 4:07 am </span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <hr class="solid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 hidden-xs">
            <div class="row msg-row-chat">
              <div class="msg-header">
                <button class="chat-header-back">
                  <img src="assets/images/icons/back.svg" class="svg-clone" />
                </button>
                <h1 class="chat-section-title">
                  <div class="chat-section-title-width">
                    <a href="" class="chat-user-name">
                      Jessica
                    </a>
                  </div>
                </h1>

                <span class="post-icons">
                  <div class="dropdown">
                    <button
                      class="btn btn-default dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      <img
                        src="assets/images/icons/vertical-dots.svg"
                        class="svg-clone vertical-dots"
                      />
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="#"> Copy link to post </a>
                      </li>
                      <li>
                        <a href="#"> Hide paid blurred from the home feed </a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a href="#"> I don't like this post </a>
                      </li>
                      <li>
                        <a href="#"> Hide user's posts from feed </a>
                      </li>
                    </ul>
                  </div>
                </span>
                <div class="chat-subheader">
                  <div class="chat-user-status">
                    Last seen <span title="Sep 7, 3:12 pm"> 1 hour ago </span>
                  </div>

                  <button type="button" class="chat-subheader-btn">
                    <img
                      src="assets/images/icons/star.svg"
                      class="svg-clone"
                      width="12"
                    />
                  </button>
                  <button type="button" class="chat-subheader-btn">
                    <img
                      src="assets/images/icons/notification.svg"
                      class="svg-clone"
                      width="12"
                    />
                  </button>
                  <button type="button" class="chat-subheader-btn">
                    <img
                      src="assets/images/icons/gallery.svg"
                      class="svg-clone"
                      width="12"
                    />

                    <span>Gallery</span>
                  </button>
                  <button type="button" class="chat-subheader-btn">
                    <img
                      src="assets/images/icons/search.svg"
                      class="svg-clone"
                      width="12"
                    />

                    <span>Find</span>
                  </button>
                </div>
              </div>

              <div class="chat-area">
                <div class="chat-wrapper scrollbar">
                  <div class="chat-message padding overflow">
                    <div class="chat-message chat-message-recipient">
                      <img
                        class="chat-image chat-image-default"
                        src="assets/images/avatar/user-2.jpg"
                      />

                      <div class="chat-message-wrapper">
                        <div class="chat-message-content">
                          <p>Sushi tonight?</p>
                        </div>

                        <div class="chat-details">
                          <span class="chat-message-localization font-size-small">
                            12:38 pm
                          </span>
                          <span class="chat-message-read-status font-size-small">
                            , $69 not paid yet
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="chat-message chat-message-sender">
                      <img
                        class="chat-image chat-image-default"
                        src="assets/images/avatar/user-3.jpg"
                      />

                      <div class="chat-message-wrapper">
                        <div class="chat-message-content">
                          <p>Pizza?</p>
                        </div>

                        <div class="chat-details">
                          <span class="chat-message-localization font-size-small">
                            12:38 pm
                          </span>
                          <span class="chat-message-read-status font-size-small"></span>
                        </div>
                      </div>
                    </div>

                    <div class="chat-message chat-message-recipient">
                      <img
                        class="chat-image chat-image-default"
                        src="assets/images/avatar/user-2.jpg"
                      />

                      <div class="chat-message-wrapper">
                        <div class="chat-message-content">
                          <p>Done. Delivery takes 5 minutes!</p>
                        </div>

                        <div class="chat-details">
                          <span class="chat-message-localisation font-size-small">
                            My Address
                          </span>
                          <span class="chat-message-read-status font-size-small">
                            - Read
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="chat-message chat-message-sender">
                      <img
                        class="chat-image chat-image-default"
                        src="assets/images/avatar/user-3.jpg"
                      />

                      <div class="chat-message-wrapper">
                        <div class="chat-message-content">
                          <p>Awesome! See you later! : )</p>
                        </div>

                        <div class="chat-details">
                          <span class="chat-message-localization font-size-small">
                            My Address
                          </span>
                          <span class="chat-message-read-status font-size-small">
                            - Read
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="chat-message chat-message-recipient">
                      <img
                        class="chat-image chat-image-default"
                        src="assets/images/avatar/user-2.jpg"
                      />

                      <div class="chat-message-wrapper">
                        <div class="chat-message-content">
                          <p>Done. Delivery takes 5 minutes!</p>
                        </div>

                        <div class="chat-details">
                          <span class="chat-message-localisation font-size-small">
                            My Address
                          </span>
                          <span class="chat-message-read-status font-size-small">
                            - Read
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="chat-message chat-message-sender">
                      <img
                        class="chat-image chat-image-default"
                        src="assets/images/avatar/user-3.jpg"
                      />

                      <div class="chat-message-wrapper">
                        <div class="chat-message-content">
                          <p>Awesome! See you later! : )</p>
                        </div>

                        <div class="chat-details">
                          <span class="chat-message-localization font-size-small">
                            My Address
                          </span>
                          <span class="chat-message-read-status font-size-small">
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
                  <form id="chat_post_form" class="has-advanced-upload">
                    <div class="chats-post-footer">
                      <div></div>

                      <div class="chat-post">
                        <div class="chat-textarea-price-wrapper">
                          <div class="">
                            <div>
                              <textarea
                                id="chat-input-area"
                                placeholder="Type a message"
                                name="text"
                                rows="1"
                                maxlength="10000"
                                class="form-control chat-input"
                                style={{
                                  overflow: "hidden",
                                  overflowWrap: "break-word",
                                  height: "48px",
                                }}
                              ></textarea>
                            </div>
                          </div>
                        </div>

                        <div class="chat-post__actions">
                          <input
                            id="fileupload_photo"
                            type="file"
                            multiple="multiple"
                            accept=".gif,.jpg,.jpeg,.gif,.png,.jpg,.jpeg,.png,.mp4,.mov,.moov,.m4v,.mpg,.mpeg,.wmv,.avi,.webm,.mkv,.stream,.mp3,.wav,.ogg"
                          />
                          <label
                            id="attach_file_photo"
                            for="fileupload_photo"
                            class="chat-attach_file"
                            data-original-title="null"
                          >
                            <img
                              src="assets/images/icons/gallery.svg"
                              class="svg-clone"
                            />
                          </label>

                          <button
                            type="button"
                            class="chat-send-tip-btn"
                            data-original-title="null"
                          >
                            <img
                              src="assets/images/icons/tip.svg"
                              class="svg-clone"
                            />
                          </button>
                        </div>

                        <button
                          type="button"
                          data-can_send="true"
                          class="g-btn m-rounded b-chat__btn-submit"
                        >
                          <img
                            src="assets/images/icons/send.svg"
                            class="svg-clone"
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
