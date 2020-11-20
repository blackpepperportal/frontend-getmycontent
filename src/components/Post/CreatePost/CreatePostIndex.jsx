import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Image, Form } from "react-bootstrap";
import { connect } from "react-redux";
import {
  postFileUploadStart,
  savePostStart,
} from "../../../store/actions/PostAction";

const CreatePostIndex = (props) => {
  const [inputData, setInputData] = useState({});

  const [image, setImage] = useState({});

  const [fileUploadStatus, setFileUploadStatus] = useState(false);

  const handleChangeImage = (event, type) => {
    if (event.currentTarget.type === "file") {
      setFileUploadStatus(true);
      // setInputData({
      //   ...inputData,
      //   [event.currentTarget.name]: event.currentTarget.files[0],
      // });
      let reader = new FileReader();
      let file = event.currentTarget.files[0];
      reader.onloadend = () => {
        setImage({ ...image, profileImage: reader.result });
      };

      if (file) {
        reader.readAsDataURL(file);
      }
      props.dispatch(
        postFileUploadStart({
          file: event.currentTarget.files[0],
          file_type: type,
        })
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fileUploadStatus) {
      props.dispatch(
        savePostStart({
          content: inputData.content,
          amount: inputData.amount ? inputData.amount : "",
          post_files: props.fileUpload.data.file,
        })
      );
    } else {
      props.dispatch(
        savePostStart({
          content: inputData.content,
          amount: inputData.amount ? inputData.amount : "",
        })
      );
    }
  };

  return (
    <div className="notification-page create-post" id="tabs">
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col sm={12} md={12}>
              <div className="post-create-header">
                <div className="pull-left">
                  <Link className="bookmarkes-list notify-title" to={"/home"}>
                    <Image
                      src="assets/images/icons/back.svg"
                      className="svg-clone"
                    />
                    NEW POST
                  </Link>
                </div>
                <div className="pull-right">
                  <Button
                    type="submit"
                    className="post-btn btn-primary"
                    onClick={handleSubmit}
                    disabled={props.fileUpload.buttonDisable}
                  >
                    {props.fileUpload.loadingButtonContent !== null
                      ? props.fileUpload.loadingButtonContent
                      : "POST"}
                  </Button>
                </div>
              </div>
            </Col>

            <Col sm={12} md={12}>
              <div className="create-post-textarea">
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Compose new post..."
                    name="content"
                    maxlength="10000"
                    style={{ width: "100%", maxWidth: "100%" }}
                    value={inputData.content}
                    onChange={(event) =>
                      setInputData({
                        ...inputData,
                        content: event.currentTarget.value,
                      })
                    }
                  />
                </Form.Group>
              </div>
              <div className="left-half post-write">
                <Button>
                  <Form.Group className="mb-0">
                    <Form.Control
                      id="fileupload_photo"
                      type="file"
                      multiple="multiple"
                      accept=".gif,.jpg,.jpeg,.gif,.png,.jpg,.jpeg,.png,.mp4,.mov,.moov,.m4v,.mpg,.mpeg,.wmv,.avi,.webm,.mkv,.stream,.mp3,.wav,.ogg"
                      onChange={(event) => handleChangeImage(event, "image")}
                      name="post_files"
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
                <Button>
                  <Form.Group className="mb-0">
                    <Form.Control
                      id="fileupload_video"
                      type="file"
                      multiple="multiple"
                      accept="video/mp4,video/x-m4v,video/*"
                      onChange={(event) => handleChangeImage(event, "video")}
                      name="post_files"
                    />
                    <Form.Label
                      id="attach_file_video"
                      for="fileupload_video"
                      className="chat-attach_file"
                      data-original-title="null"
                    >
                      <Image
                        src="assets/images/icons/video.svg"
                        className="svg-clone"
                      />
                    </Form.Label>
                  </Form.Group>
                </Button>
              </div>
            </Col>
            <Col sm={12} md={12}>
              <Form.Group>
                <label className="text-muted m-1">Price (Optional)</label>
                <Form.Control
                  type="number"
                  placeholder="Set price for the post"
                  name="amount"
                  value={inputData.amount}
                  width="50%"
                  onChange={(event) =>
                    setInputData({
                      ...inputData,
                      amount: event.currentTarget.value,
                    })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

const mapStateToPros = (state) => ({
  savePost: state.post.savePost,
  fileUpload: state.post.fileUpload,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(CreatePostIndex);
