import React, { useEffect, useState } from "react";
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
  fetchChatMessageStart,
  fetchChatUsersStart,
} from "../../store/actions/ChatAction";
import ChatUserList from "./ChatUserList";
import InboxNoDataFound from "../NoDataFound/InboxNoDataFound";
import io from "socket.io-client";
import configuration from "react-global-configuration";

const MessageIndex = (props) => {
  useEffect(() => {
    props.dispatch(fetchChatUsersStart());
  }, []);

  const [activeChat, setActiveChat] = useState(0);
  const [socketStatus, setSocketStatus] = useState(0);
  const [toUserId, setToUserId] = useState(0);
  const [inputMessage, setInputMessage] = useState("");

  let chatSocket;

  const changeUser = async (event, chat, index) => {
    event.preventDefault();
    setActiveChat(index);
    let to_user_id =
      chat.to_user_id == localStorage.getItem("userId")
        ? chat.from_user_id
        : chat.to_user_id;
    setToUserId(to_user_id);
    console.log("to_user_id" + to_user_id);
    console.log("toUserId" + toUserId);
    props.dispatch(
      fetchChatMessageStart({
        to_user_id: chat.to_user_id,
        from_user_id: chat.from_user_id,
      })
    );
    await chatSocketConnect();
  };

  const chatSocketConnect = async () => {
    // check the socket url is configured
    let chatSocketUrl = configuration.get("configData.chat_socket_url");
    console.log(toUserId);
    if (chatSocketUrl) {
      chatSocket = await io(chatSocketUrl, {
        query:
          `commonid: 'user_id_` +
          localStorage.getItem("userId") +
          `_to_user_id_` +
          toUserId +
          `', myid: ` +
          localStorage.getItem("userId"),
      });

      await chatSocket.emit("update sender", {
        commonid:
          "user_id_" +
          localStorage.getItem("userId") +
          "_to_user_id_" +
          toUserId,
        myid: localStorage.getItem("userId"),
      });

      let chatContent;
      chatSocket.on("message", (newData) => {
        let content = [];
        content.push(newData);
        chatContent = [...this.state.chatData, ...content];
        this.setState({ chatData: chatContent });
      });
    }
  };

  const handleChatSubmit = (event) => {
    event.preventDefault();
    let chatSocketUrl = configuration.get("configData.chat_socket_url");
    console.log("chatSocketUrl" + chatSocketUrl);
    if (chatSocketUrl != undefined && this.state.chatInputMessage) {
      let chatData = [
        {
          from_user_id: localStorage.getItem("userId"),
          to_user_id: toUserId,
          message: this.state.chatInputMessage,
          type: "uu",
          user_name: localStorage.getItem("name"),
          user_picture: localStorage.getItem("user_picture"),
        },
      ];
      chatSocket.emit("message", chatData[0]);
      let messages;
      if (this.state.chatData != null) {
        messages = [...this.state.chatData, ...chatData];
      } else {
        messages = [...chatData];
      }
      this.setState({
        chatData: messages,
        chatInputMessage: "",
      });
    }
  };

  const chatInputChange = (value) => {
    console.log(value);
    setInputMessage(value);
    console.log(inputMessage);
    // this.setState({ chatInputMessage: input.value });
  };

  return (
    <div className="message-page">
      <Container>
        <Row>
          {props.chatUsers.loading ? (
            "Loading.."
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
                  <Button className="chat-header-back">
                    <Image
                      src="assets/images/icons/back.svg"
                      className="svg-clone"
                    />
                  </Button>
                  <h1 className="chat-section-title">
                    <div className="chat-section-title-width">
                      <Link
                        to={
                          `/model-profile` +
                          props.chatMessages.data.user.user_unique_id
                        }
                        className="chat-user-name"
                      >
                        {props.chatMessages.data.user.name}
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
                  <div className="chat-wrapper scrollbar">
                    <div className="chat-message padding overflow">
                      {props.chatMessages.data.messages.length > 0
                        ? props.chatMessages.data.messages.map(
                            (chatMessage, index) => (
                              <>
                                {chatMessage.from_user_id ==
                                localStorage.getItem("userId") ? (
                                  <div className="chat-message chat-message-sender">
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
                                        <span className="chat-message-read-status font-size-small"></span>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="chat-message chat-message-recipient">
                                    <Image
                                      className="chat-image chat-image-default"
                                      src={chatMessage.to_userpicture}
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
                    <Form id="chat_post_form" className="has-advanced-upload">
                      <div className="chats-post-footer">
                        <div></div>
                        <div className="chat-post">
                          <div className="chat-textarea-price-wrapper">
                            <div className="">
                              <InputGroup className="mb-3">
                                <FormControl
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
