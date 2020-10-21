import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchUserDetailsStart,
  editUserDetails,
  updateUserDetailsStart,
} from "../../../store/actions/UserAction";

const EditProfile = () => {
  return (
    <section className="edit-profile">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <div className="vertical-menu edit-p">
              <a
                className="bookmarkes-list"
                href=""
                style={{ color: "#000 !Important" }}
              >
                <img src="assets/images/icons/back.svg" className="svg-clone" />
                Settings
              </a>
              <a className="bookmarkes-list active" aria-hidden="true">
                <img
                  src="assets/images/icons/profile.svg"
                  className="svg-clone"
                />{" "}
                Profile
              </a>
              <a className="bookmarkes-list" href="bookmarks-videos.php">
                <img
                  src="assets/images/icons/account.svg"
                  className="svg-clone"
                />
                Account
              </a>
              <a className="bookmarkes-list" href="bookmarks-audio.php">
                <img
                  src="assets/images/icons/notification.svg"
                  className="svg-clone"
                />
                Notifications
              </a>
              <a className="bookmarkes-list" href="bookmarks-other.php">
                <img
                  src="assets/images/icons/security.svg"
                  className="svg-clone"
                />
                Security
              </a>
              <a className="bookmarkes-list" href="bookmarks-locked.php">
                <img src="assets/images/icons/new.svg" className="svg-clone" />
                What's New
              </a>
            </div>
          </div>
          <div className="col-md-8">
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
                  <img src="assets/images/b-4.jpg" />
                  <div className="layer">
                    <div className="loader"></div>
                  </div>
                  <a className="image-wrapper" href="#">
                    <form id="coverForm" action="#">
                      <input
                        className="hidden-input"
                        id="changeCover"
                        type="file"
                      />
                      <label
                        className="edit "
                        for="changeCover"
                        title="Change cover"
                      >
                        {" "}
                        Upload cover image{" "}
                      </label>
                    </form>
                  </a>
                </div>
                <div className="user-info">
                  <div className="profile-pic">
                    <img src="assets/images/avatar/harish-jee.png" />
                    <div className="layer">
                      <div className="loader"></div>
                    </div>
                    <a className="" href="#">
                      <form id="profilePictureForm" action="#">
                        <input
                          className="hidden-input"
                          id="changePicture"
                          type="file"
                        />
                        <label
                          className="edit"
                          for="changePicture"
                          type="file"
                          title="Change picture"
                        ></label>
                      </form>
                    </a>
                  </div>
                  <a className="upload-profile-picture">
                    <form id="profilePictureForm" action="#">
                      <input
                        className="hidden-input"
                        id="changePicture"
                        type="file"
                      />
                      <label
                        className="edit"
                        for="changePicture"
                        type="file"
                        title="Change picture"
                      >
                        {" "}
                        Upload profile photo{" "}
                      </label>
                    </form>
                  </a>
                </div>
              </div>
              <p className="inuput-help">
                {" "}
                Profile images must not contain nudity or explicit material.{" "}
              </p>
            </div>

            <div
              className="edit-input-wrapper"
              data-vv-delay="1000"
              data-vv-as="Username"
            >
              <label className="edit-input-label">
                {" "}
                Username <span className="edit-input-optional">(optional)</span>
              </label>
              <div className="">
                <input
                  id="edit-login"
                  type="text"
                  autocomplete="on"
                  placeholder=""
                  name="username"
                  maxlength="24"
                  className="form-control edit-reset"
                />
                <span className="edit-new-username-status">
                  <img
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
              <label className="edit-input-label">
                {" "}
                Display name{" "}
                <span className="edit-input-optional">(optional)</span>
              </label>
              <div className="">
                <input
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
              <label className="edit-input-label">
                {" "}
                Subscription price ($ per month){" "}
                <span className="edit-input-optional">(optional)</span>
              </label>
              <div className="">
                <input
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
                You must{" "}
                <a href="#">Add a Bank Account or Payment Information</a> before
                you can set your price or accept tips.
              </p>
            </div>

            <div
              className="edit-input-wrapper disabled"
              data-vv-delay="1000"
              data-vv-as="Username"
            >
              <label className="edit-input-label">
                {" "}
                ABOUT <span className="edit-input-optional">(optional)</span>
              </label>
              <div className="">
                <input
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
              <label className="edit-input-label">
                {" "}
                LOCATION <span className="edit-input-optional">(optional)</span>
              </label>
              <div className="">
                <input
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
              <label className="edit-input-label">
                {" "}
                WEBSITE URL{" "}
                <span className="edit-input-optional">(optional)</span>
              </label>
              <div className="">
                <input
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
              <label className="edit-input-label">
                {" "}
                AMAZON WISHLIST{" "}
                <span className="edit-input-optional">(optional)</span>
              </label>
              <div className="">
                <input
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
              <button className="save-btn"> Save changes </button>
            </div>

            <div className="connect-spotify-section">
              <div className="pull-left">
                <h2 className="g-section-title"> Spotify account </h2>
              </div>
              <div className="pull-right">
                <a href="" className="connect-spotify">
                  Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToPros = (state) => ({
  userData: state.users,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(EditProfile);
