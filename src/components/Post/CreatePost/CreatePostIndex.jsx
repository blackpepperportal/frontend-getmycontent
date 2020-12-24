import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Image, Form } from "react-bootstrap";
import { connect } from "react-redux";
import {
  postFileUploadStart,
  savePostStart,
} from "../../../store/actions/PostAction";
import { createNotification } from "react-redux-notify/lib/modules/Notifications";
import { getErrorNotificationMessage } from "../../helper/NotificationMessage";

const CreatePostIndex = (props) => {
  const [inputData, setInputData] = useState({});

  const [image, setImage] = useState({ previewImage: "" });
  const [paidPost, setPaidPost] = useState(false);
  const [videoTitle, setVideoTitle] = useState("");

  const [fileUploadStatus, setFileUploadStatus] = useState(false);

  const [videoThumbnail, setVideoThumbnail] = useState(false);

  const handleChangeImage = (event, fileType) => {
    if (event.currentTarget.type === "file") {
      setFileUploadStatus(true);
      let reader = new FileReader();
      let file = event.currentTarget.files[0];
      reader.onloadend = () => {
        setImage({ ...image, previewImage: reader.result });
      };

      if (file) {
        reader.readAsDataURL(file);
      }
      props.dispatch(
        postFileUploadStart({
          file: event.currentTarget.files[0],
          file_type: fileType,
        })
      );
      setPaidPost(true);
    }
  };

  const handleChangeVideo = (event, fileType) => {
    setVideoTitle(event.currentTarget.files[0].name);
    if (event.currentTarget.type === "file") {
      setFileUploadStatus(true);
      let reader = new FileReader();
      let file = event.currentTarget.files[0];

      if (file) {
        reader.readAsDataURL(file);
      }
      props.dispatch(
        postFileUploadStart({
          file: event.currentTarget.files[0],
          file_type: fileType,
        })
      );
      setPaidPost(true);
      setVideoThumbnail(true);
    }
  };

  const imageClose = (event) => {
    event.preventDefault();
    if (props.fileUpload.loadingButtonContent !== null) {
      const notificationMessage = getErrorNotificationMessage(
        "File is being uploaded.. Please wait"
      );
      props.dispatch(createNotification(notificationMessage));
    } else {
      setImage({ previewImage: "" });
      setFileUploadStatus(false);
    }
  };

  const videoClose = (event) => {
    event.preventDefault();
    if (props.fileUpload.loadingButtonContent !== null) {
      const notificationMessage = getErrorNotificationMessage(
        "File is being uploaded.. Please wait"
      );
      props.dispatch(createNotification(notificationMessage));
    } else {
      setFileUploadStatus(false);
      setVideoTitle("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fileUploadStatus) {
      props.dispatch(
        savePostStart({
          content: inputData.content,
          amount: inputData.amount ? inputData.amount : "",
          post_files: props.fileUpload.data.post_file.post_file_id,
          preview_file: inputData.preview_file ? inputData.preview_file : "",
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
                    disabled={
                      props.fileUpload.buttonDisable ||
                      props.savePost.buttonDisable
                    }
                  >
                    {props.fileUpload.loadingButtonContent !== null
                      ? props.fileUpload.loadingButtonContent
                      : props.savePost.loadingButtonContent !== null
                      ? props.savePost.loadingButtonContent
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
                      accept=".gif,.jpg,.jpeg,.gif,.png,.jpg,.jpeg,.png"
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
                      onChange={(event) => handleChangeVideo(event, "video")}
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
                {videoTitle !== "" ? (
                  <div className="post-title-content">
                    <h4>{videoTitle}</h4>
                    <Link to="#" onClick={videoClose}>
                      <i class="far fa-window-close"></i>
                    </Link>
                  </div>
                ) : null}
              </div>
              {image.previewImage !== "" ? (
                <Row>
                  <Col sm={12} md={3}>
                    <div className="post-img-preview-sec">
                      <Link to="#" onClick={imageClose}>
                        <i class="far fa-times-circle"></i>
                      </Link>
                      <Image
                        alt="#"
                        src={image.previewImage}
                        className="post-video-preview"
                      />
                    </div>
                  </Col>
                </Row>
              ) : null}
            </Col>
            {paidPost == true ? (
              <Col sm={12} md={12}>
                <Form.Group className="md-mrg-btm">
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
            ) : (
              ""
            )}
            {videoThumbnail === true ? (
              <Col sm={12} md={12}>
                <Form.Group className="md-mrg-btm">
                  <label className="text-muted m-1 mt-3 f-12 text-uppercase">
                    Upload Video Thumbnail:
                  </label>
                  <Form.Control
                    style={{ display: "block" }}
                    type="file"
                    placeholder="Video Thumbnail Image"
                    name="preview_file"
                    width="50%"
                    className="form-control"
                    accept=".gif,.jpg,.jpeg,.gif,.png,.jpg,.jpeg,.png"
                    onChange={(event) =>
                      setInputData({
                        ...inputData,
                        preview_file: event.currentTarget.files[0],
                      })
                    }
                  />
                </Form.Group>
              </Col>
            ) : (
              ""
            )}
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
