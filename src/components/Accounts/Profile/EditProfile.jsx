import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchUserDetailsStart,
  editUserDetails,
  updateUserDetailsStart,
} from "../../../store/actions/UserAction";
import { Link } from "react-router-dom";
import {
  Nav,
  Container,
  Row,
  Col,
  Tab,
  Dropdown,
  Image,
  ListGroup,
  Media,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const EditProfile = () => {
  return (
    <div className="edit-profile">
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <div className="vertical-menu edit-p">
              <Link
                className="bookmarkes-list"
                to=""
                style={{ color: "#000 !Important" }}
              >
                <Image src="assets/images/icons/back.svg" className="svg-clone" />
                Settings
              </Link>
              <Link className="bookmarkes-list active" aria-hidden="true">
                <Image
                  src="assets/images/icons/profile.svg"
                  className="svg-clone"
                />
                Profile
              </Link>
              <Link className="bookmarkes-list" to="bookmarks-videos.php">
                <Image
                  src="assets/images/icons/account.svg"
                  className="svg-clone"
                />
                Account
              </Link>
              <Link className="bookmarkes-list" to="bookmarks-audio.php">
                <Image
                  src="assets/images/icons/notification.svg"
                  className="svg-clone"
                />
                Notifications
              </Link>
              <Link className="bookmarkes-list" to="bookmarks-other.php">
                <Image
                  src="assets/images/icons/security.svg"
                  className="svg-clone"
                />
                Security
              </Link>
              <Link className="bookmarkes-list" to="bookmarks-locked.php">
                <Image src="assets/images/icons/new.svg" className="svg-clone" />
                What's New
              </Link>
            </div>
          </Col>
          <Col md={8} sm={12}>
            <div className="profile-post-area">
              <div className="bookmarkes-list bookmarks-right-side">
                <div className="pull-left">
                  <h3>EDIT PROFILE</h3>
                  <p className="small-text">CHANGE PROFILE AND COVER PHOTOS</p>
                </div>
                <div className="pull-right"></div>
              </div>
            </div>
            <div className="edit-profile-photo">
              <div className="profile large">
                <div className="cover">
                  <Image src="assets/images/b-4.jpg" />
                  <div className="layer">
                    <div className="loader"></div>
                  </div>
                  <a className="image-wrapper" href="#">
                    <Form id="coverForm" action="#">
                      <Form.Control
                        className="hidden-input"
                        id="changeCover"
                        type="file"
                      />
                      <Form.Label
                        className="edit "
                        for="changeCover"
                        title="Change cover"
                      >
                        Upload cover image
                      </Form.Label>
                    </Form>
                  </a>
                </div>
                <div className="user-info">
                  <div className="profile-pic">
                    <Image src="assets/images/avatar/harish-jee.png" />
                    <div className="layer">
                      <div className="loader"></div>
                    </div>
                    <a className="image-wrapper" href="#">
                      <Form id="profile-img" action="#">
                        <Form.Control
                          className="hidden-input"
                          id="changePicture"
                          type="file"
                        />
                        <Form.Label
                          className="edit"
                          for="changePicture"
                          type="file"
                          title="Change picture"
                        ></Form.Label>
                      </Form>
                    </a>
                  </div>
                  <a className="upload-profile-picture">
                    <Form id="profilePictureForm" action="#">
                      <Form.Control
                        className="hidden-input"
                        id="changePicture"
                        type="file"
                      />
                      <Form.Label
                        className="edit"
                        for="changePicture"
                        type="file"
                        title="Change picture"
                      >
                        
                        Upload profile photo
                      </Form.Label>
                    </Form>
                  </a>
                </div>
              </div>
              <p className="inuput-help">
                
                Profile images must not contain nudity or explicit material.
              </p>
            </div>

            <div
              className="edit-input-wrapper"
              data-vv-delay="1000"
              data-vv-as="Username"
            >
              <Form.Label className="edit-input-label">
                
                Username <span className="edit-input-optional">(optional)</span>
              </Form.Label>
              <div className="">
                <Form.Control
                  id="edit-login"
                  type="text"
                  autocomplete="on"
                  placeholder=""
                  name="username"
                  maxlength="24"
                  className="form-control edit-reset"
                />
                <span className="edit-new-username-status">
                  <Image
                    src="assets/images/icons/tick.svg"
                    className="svg-clone"
                  />
                </span>
              </div>
              <p className="inuput-help">https://fansclub.com/u63484651</p>
            </div>

            <div
              className="edit-input-wrapper"
              data-vv-delay="1000"
              data-vv-as="Username"
            >
              <Form.Label className="edit-input-label">
                
                Display name
                <span className="edit-input-optional">(optional)</span>
              </Form.Label>
              <div className="">
                <Form.Control
                  id="edit-login"
                  type="text"
                  autocomplete="on"
                  placeholder=""
                  value="Johnpaul"
                  name="username"
                  maxlength="24"
                  className="form-control edit-reset"
                />
              </div>
            </div>

            <div
              className="edit-input-wrapper disabled"
              data-vv-delay="1000"
              data-vv-as="Username"
            >
              <Form.Label className="edit-input-label">
                
                Subscription price ($ per month)
                <span className="edit-input-optional">(optional)</span>
              </Form.Label>
              <div className="">
                <Form.Control
                  id="edit-login"
                  type="text"
                  autocomplete="on"
                  value="$ FREE"
                  placeholder=""
                  name="username"
                  maxlength="24"
                  className="form-control edit-reset"
                />
              </div>
              <p className="inuput-help">
                You must
                <Link to="#">Add a Bank Account or Payment Information</Link> before
                you can set your price or accept tips.
              </p>
            </div>

            <div
              className="edit-input-wrapper disabled"
              data-vv-delay="1000"
              data-vv-as="Username"
            >
              <Form.Label className="edit-input-label">
                
                ABOUT <span className="edit-input-optional">(optional)</span>
              </Form.Label>
              <div className="">
                <Form.Control
                  id="edit-login"
                  type="text"
                  autocomplete="on"
                  value="Nutrition | Motivation"
                  placeholder=""
                  name="username"
                  maxlength="24"
                  className="form-control edit-reset"
                />
              </div>
            </div>

            <div
              className="edit-input-wrapper disabled"
              data-vv-delay="1000"
              data-vv-as="Username"
            >
              <Form.Label className="edit-input-label">
                
                LOCATION <span className="edit-input-optional">(optional)</span>
              </Form.Label>
              <div className="">
                <Form.Control
                  id="edit-login"
                  type="text"
                  autocomplete="on"
                  value=""
                  placeholder="Location"
                  name="username"
                  maxlength="24"
                  className="form-control edit-reset"
                />
              </div>
            </div>

            <div
              className="edit-input-wrapper disabled"
              data-vv-delay="1000"
              data-vv-as="Username"
            >
              <Form.Label className="edit-input-label">
                
                WEBSITE URL
                <span className="edit-input-optional">(optional)</span>
              </Form.Label>
              <div className="">
                <Form.Control
                  id="edit-login"
                  type="text"
                  autocomplete="on"
                  value=""
                  placeholder="Website URL"
                  name="username"
                  maxlength="24"
                  className="form-control edit-reset"
                />
              </div>
            </div>

            <div
              className="edit-input-wrapper disabled"
              data-vv-delay="1000"
              data-vv-as="Username"
            >
              <Form.Label className="edit-input-label">
                
                AMAZON WISHLIST
                <span className="edit-input-optional">(optional)</span>
              </Form.Label>
              <div className="">
                <Form.Control
                  id="edit-login"
                  type="text"
                  autocomplete="on"
                  value=""
                  placeholder="Amazon Wishlist"
                  name="username"
                  maxlength="24"
                  className="form-control edit-reset"
                />
              </div>
            </div>

            <div className="edit-save">
              <Button className="save-btn"> Save changes </Button>
            </div>

            <div className="connect-spotify-section">
              <div className="pull-left">
                <h2 className="g-section-title"> Spotify account </h2>
              </div>
              <div className="pull-right">
                <Link to="" className="connect-spotify">
                  Connect
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToPros = (state) => ({
  userData: state.users,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(EditProfile);
