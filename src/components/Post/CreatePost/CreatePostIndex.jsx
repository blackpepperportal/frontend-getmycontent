import React from "react";
import CreatePollModal from "../../helper/CreatePollModal";
import { Link } from "react-router-dom";
import {Button, Container, Row, Col, Image, Form} from "react-bootstrap";

const CreatePostIndex = () => {
  return (
    <div className="notification-page create-post" id="tabs">
      <Container>
        <Row>
          <Col sm={12} md={12}>
            <div className="post-create-header">
              <div className="pull-left">
                <Link
                  className="bookmarkes-list notify-title"
                  to="bookmarks.php"
                >
                  <Image
                    src="assets/images/icons/back.svg"
                    className="svg-clone"
                  />
                  NEW POST
                </Link>
              </div>
              <div className="pull-right">
                <Button type="button" className="post-btn" disabled>
                  Post
                </Button>
              </div>
            </div>
          </Col>

          <Col sm={12} md={12}>
            <Form>
            <div className="create-post-textarea">
              <Form.Group>
              <Form.Control as="textarea" 
              rows={3}
              placeholder="Compose new post..."
                name="text"
                maxlength="10000"
                style={{ width: "100%", maxWidth: "100%" }}
              />
              
              </Form.Group>
            </div>
            <div style={{ clear: "both" }}></div>
            <Col sm={12} md={12}>
              <div id="poll-toggle">
                <div className="poll-toggle-div">
                  <div className="left-half">
                    <Image
                      src="assets/images/icons/analytics.svg"
                      className="svg-clone"
                    />
                    <p>Poll Duration</p>
                  </div>
                  <div className="right-half">
                    <Button
                      type="button"
                      className="poll-duration"
                      data-toggle="modal"
                      data-target="#pollDuration"
                    >
                      <span>7 days</span>
                    </Button>

                    <Button
                      type="button"
                      title="Delete"
                      className="b-dropzone__preview__delete b-btn-remove"
                    >
                      <Image
                        src="assets/images/icons/cut.svg"
                        className="svg-clone"
                        width="20"
                      />
                    </Button>
                  </div>
                  <div className="add-remove-field">
                    <div className="input_fields_wrap">
                      <div className="poll-now">
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Control  placeholder="Enter Option"
                            type="text"
                            name="mytext[]" />
                          </Form.Group>
                      </div>
                      <div className="poll-now">
                      <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Control   placeholder="Enter Option"
                          type="text"
                          name="mytext[]" />
                          </Form.Group>
                      </div>
                      <button className="add_field_button">
                        Add More Fields
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <div className="left-half post-write">
              <Button>
              <Form.Group controlId="exampleForm.ControlInput1" className="mb-0">
                <Form.Control
                  id="fileupload_photo"
                  type="file"
                  multiple="multiple"
                  accept=".gif,.jpg,.jpeg,.gif,.png,.jpg,.jpeg,.png,.mp4,.mov,.moov,.m4v,.mpg,.mpeg,.wmv,.avi,.webm,.mkv,.stream,.mp3,.wav,.ogg"
                />
                <Form.Label
                  id="attach_file_photo"
                  for="fileupload_photo"
                  className="chat-attach_file"
                  data-original-title="null"
                >
                  <Image
                    src="assets/images/icons/gallery.svg"
                    className="svg-clone"
                  />
                </Form.Label>
                </Form.Group>
              </Button>

              <Button
                onclick="showhide()"
                id="scrollmap"
                className=""
                style={{ cursor: "pointer" }}
              >
                <Image
                  src="assets/images/icons/analytics.svg"
                  className="svg-clone"
                />
              </Button>
            </div>
            <div style={{ clear: "both" }}></div>
            </Form>
          </Col>
        </Row>
      </Container>
      <CreatePollModal />
    </div>
  );
};

export default CreatePostIndex;
