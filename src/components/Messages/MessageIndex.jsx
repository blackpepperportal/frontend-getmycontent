import React, { useEffect, useState, useRef } from "react";
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
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { connect } from "react-redux";
import {
  addMessageContent,
  fetchChatMessageStart,
  fetchChatUsersStart,
} from "../../store/actions/ChatAction";
import ChatUserList from "./ChatUserList";
import InboxNoDataFound from "../NoDataFound/InboxNoDataFound";
import io from "socket.io-client";
import configuration from "react-global-configuration";

import InboxLoader from "../Loader/InboxLoader";
import { getErrorNotificationMessage } from "../helper/NotificationMessage";
import { createNotification } from "react-redux-notify/lib/modules/Notifications";
const $ = window.$;

let chatSocket;

const MessageIndex = (props) => {
  const [activeChat, setActiveChat] = useState(0);
  const [toUserId, setToUserId] = useState(0);
  const [inputMessage, setInputMessage] = useState("");
  const [initialHeight, setInitialHeight] = useState(0);

  useEffect(() => {
    console.log("asdfasdf first");
    props.dispatch(fetchChatUsersStart());
    let chatSocketUrl = configuration.get("configData.chat_socket_url");
    if (chatSocketUrl === "") {
      const notificationMessage = getErrorNotificationMessage(
        "Socket URL is not configured. Chat wil not work..."
      );
      props.dispatch(createNotification(notificationMessage));
      window.location.assign("/home");
    }
  }, []);

  useEffect(() => {
    console.log("Number of times called");
    if (
      props.chatUsers.loading === false &&
      props.chatUsers.data.users.length > 0
    ) {
      console.log("Number of times called true  ");
      setToUserId(props.chatUsers.data.users[0].to_user_id);
      chatSocketConnect(props.chatUsers.data.users[0].to_user_id);
    } else {
    }
  }, [!props.chatUsers.loading]);

  // Scroll down function..
  useEffect(() => {
    console.log("Scroll down..");
    const objDiv = document.getElementById("options-holder");
    if (objDiv != null) {
      let differenceNumber =
        objDiv.offsetHeight > objDiv.scrollHeight
          ? objDiv.offsetHeight - objDiv.scrollHeight
          : objDiv.scrollHeight - objDiv.offsetHeight;

      if (differenceNumber > 280) {
        objDiv.scrollTop = objDiv.scrollHeight;
      } else {
        objDiv.scrollTop = initialHeight;
        setInitialHeight(initialHeight + 20);
      }
    }
  }, [props.chatMessages.data.messages]);

  const chatSocketConnect = (to_user_id) => {
    // check the socket url is configured
    let chatSocketUrl = configuration.get("configData.chat_socket_url");
    console.log("chatSocket", chatSocketUrl);
    console.log("Input ID", to_user_id);
    if (chatSocketUrl) {
      chatSocket = io(chatSocketUrl, {
        query:
          `commonid:'user_id_` +
          localStorage.getItem("userId") +
          `_to_user_id_` +
          to_user_id +
          `',myid:` +
          localStorage.getItem("userId"),
      });
      console.log("chatSocket", chatSocket);
      chatSocket.emit("update sender", {
        commonid:
          "user_id_" +
          localStorage.getItem("userId") +
          "_to_user_id_" +
          to_user_id,
        myid: localStorage.getItem("userId"),
      });
      let chatContent;
      chatSocket.on("message", (newData) => {
        let content = [];
        content.push(newData);
        // chatContent = [...this.state.chatData, ...content];
        // this.setState({ chatData: chatContent });
        props.dispatch(addMessageContent(content));
      });
    }
  };

  const changeUser = (event, chat, index) => {
    chatSocket.disconnect();
    event.preventDefault();
    setActiveChat(index);
    let to_user_id =
      chat.to_user_id == localStorage.getItem("userId")
        ? chat.from_user_id
        : chat.to_user_id;
    setToUserId(to_user_id);

    props.dispatch(
      fetchChatMessageStart({
        to_user_id: chat.to_user_id,
        from_user_id: chat.from_user_id,
      })
    );
    chatSocketConnect(to_user_id);
  };

  const handleChatSubmit = (event) => {
    event.preventDefault();
    let chatSocketUrl = configuration.get("configData.chat_socket_url");

    if (chatSocketUrl != undefined && inputMessage) {
      let chatData = [
        {
          from_user_id: localStorage.getItem("userId"),
          to_user_id: toUserId,
          message: inputMessage,
          type: "uu",
          user_picture: localStorage.getItem("user_picture"),
          loggedin_user_id: localStorage.getItem("userId"),
          created: Date(),
          from_username: localStorage.getItem("username"),
          from_displayname: localStorage.getItem("name"),
          from_userpicture: localStorage.getItem("user_picture"),
          from_user_unique_id: "",
          to_username: "",
          to_displayname: "",
          to_userpicture: "",
          to_user_unique_id: "",
        },
      ];
      chatSocket.emit("message", chatData[0]);
      let messages;
      if (props.chatMessages.data.messages != null) {
        messages = [...props.chatMessages.data.messages, ...chatData];
      } else {
        messages = [...chatData];
      }

      setInputMessage("");
      props.dispatch(addMessageContent(chatData));
    }
  };

  const chatInputChange = (value) => {
    setInputMessage(value);
  };

  return (
    <div className="message-page">
      <Container>
        <Row>
          {props.chatUsers.loading ? (
            <InboxLoader></InboxLoader>
          ) : props.chatUsers.data.users.length > 0 ? (
            <ChatUserList
              chatUsers={props.chatUsers.data}
              activeChat={activeChat}
              setActiveChat={setActiveChat}
              changeUser={changeUser}
            />
          ) : (
            <InboxNoDataFound />
          )}
          <Col
            sm={12}
            md={12}
            lg={7}
            xl={8}
            className="resp-mrg-btn-xs margin-col"
          >
            {props.chatMessages.loading ? (
              ""
            ) : (
              <Row className="msg-row-chat">
                <div className="msg-header">
                  {/* <Button className="chat-header-back">
                    <Image
                      src="assets/images/icons/back.svg"
                      className="svg-clone"
                    />
                  </Button> */}
                  <h1 className="chat-section-title">
                    <div className="chat-section-title-width">
                      <Link
                        to={`/` + props.chatMessages.data.user.user_unique_id}
                        className="chat-user-name"
                      >
                        {props.chatMessages.data.user.name}
                      </Link>
                    </div>
                  </h1>
                  <span
                    className="post-icons padding-top-lg"
                    style={{ display: "none" }}
                  >
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
                  <div className="chat-subheader hidden">
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
                  <div className="chat-wrapper scrollbar" id="options-holder">
                    <div className="chat-message padding overflow" id="check">
                      {props.chatMessages.data.messages.length > 0
                        ? props.chatMessages.data.messages.map(
                            (chatMessage, index) => (
                              <>
                                {chatMessage.from_user_id ==
                                localStorage.getItem("userId") ? (
                                  <div className="chat-message chat-message-sender">
                                    <Image
                                      className="chat-image chat-image-default"
                                      src={localStorage.getItem("user_picture")}
                                    />

                                    <div className="chat-message-wrapper">
                                      <div className="chat-message-content">
                                        <p>{chatMessage.message}</p>
                                      </div>

                                      <div className="chat-details">
                                        <span className="chat-message-localization font-size-small">
                                          {chatMessage.created}
                                        </span>
                                        <span className="chat-message-read-status font-size-small"></span>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="chat-message chat-message-recipient">
                                    <Image
                                      className="chat-image chat-image-default"
                                      src={chatMessage.from_userpicture}
                                    />

                                    <div className="chat-message-wrapper">
                                      <div className="chat-message-content">
                                        <p>{chatMessage.message}</p>
                                      </div>

                                      <div className="chat-details">
                                        <span className="chat-message-localization font-size-small">
                                          {chatMessage.created}
                                        </span>
                                        {/* <span className="chat-message-read-status font-size-small">
                                          , $69 not paid yet
                                        </span> */}
                                      </div>
                                    </div>
                                  </div>
                                )}{" "}
                              </>
                            )
                          )
                        : ""}
                    </div>
                  </div>

                  <div
                    style={{ borderTop: "1px solid rgba(138, 150, 163, 0.2)" }}
                  >
                    <Form
                      id="chat_post_form"
                      className="has-advanced-upload"
                      onSubmit={handleChatSubmit}
                    >
                      <div className="chats-post-footer">
                        <div></div>
                        <div className="chat-post">
                          <div className="chat-textarea-price-wrapper">
                            <div className="">
                              <InputGroup className="mb-3">
                                <FormControl
                                  controlId="chat-input-area"
                                  placeholder="Type a message"
                                  name="text"
                                  rows="1"
                                  className="form-control chat-input"
                                  style={{
                                    overflow: "hidden",
                                    overflowWrap: "break-word",
                                    height: "48px",
                                  }}
                                  value={inputMessage}
                                  onChange={(event) => {
                                    chatInputChange(event.currentTarget.value);
                                  }}
                                />
                                <InputGroup.Append>
                                  <InputGroup.Text id="basic-addon2">
                                    <Button
                                      type="button"
                                      data-can_send="true"
                                      className="g-btn m-rounded b-chat__btn-submit"
                                      onClick={handleChatSubmit}
                                    >
                                      <Image
                                        src="assets/images/icons/send.svg"
                                        className="svg-clone"
                                      />
                                    </Button>
                                  </InputGroup.Text>
                                </InputGroup.Append>
                              </InputGroup>
                            </div>
                          </div>

                          {/* <div className="chat-post__actions hidden">
                            <FormControl
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
                          </div> */}
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToPros = (state) => ({
  chatUsers: state.chat.chatUsers,
  chatMessages: state.chat.messages,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(MessageIndex);
