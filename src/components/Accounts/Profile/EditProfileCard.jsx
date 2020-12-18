import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Button, Image } from "react-bootstrap";
import {
  editUserDetails,
  fetchUserDetailsStart,
  updateUserDetailsStart,
} from "../../../store/actions/UserAction";

const EditProfileCard = (props) => {
  const [profileInputData, setProfileInputData] = useState({});

  const [image, setImage] = useState({
    picture: "",
    cover: "",
  });

  useEffect(() => {
    if (props.profile.loading) props.dispatch(fetchUserDetailsStart());
  }, []);

  const handleChangeImage = (event) => {
    if (event.currentTarget.type === "file") {
      setProfileInputData({
        ...profileInputData,
        [event.currentTarget.name]: event.currentTarget.files[0],
      });
      let reader = new FileReader();
      let file = event.currentTarget.files[0];

      if (event.currentTarget.name === "cover") {
        reader.onloadend = () => {
          setImage({ ...image, cover: reader.result });
        };
      }

      if (event.currentTarget.name === "picture") {
        reader.onloadend = () => {
          setImage({ ...image, picture: reader.result });
        };
      }

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(profileInputData).length > 0)
      props.dispatch(updateUserDetailsStart(profileInputData));
    else props.dispatch(updateUserDetailsStart());
  };
  return (
    <>
      {props.profile.loading ? (
        "Loading..."
      ) : (
        <div
          role="tabpanel"
          className={
            props.activeSec === "profile-card"
              ? "tab-pane fade in active"
              : "tab-pane fade"
          }
          id="Section2"
        >
          <div className="profile-post-area">
            <div className="bookmarkes-list bookmarks-right-side border-btm-none">
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
                <Image
                  src={
                    image.cover === "" ? props.profile.data.cover : image.cover
                  }
                />

                <div className="layer">
                  <div className="loader"></div>
                </div>
                <a className="image-wrapper" href="#">
                  <Form id="coverForm" action="#">
                    <Form.Control
                      className="hidden-input"
                      id="changeCover"
                      type="file"
                      name="cover"
                      accept="image/*"
                      onChange={handleChangeImage}
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
                  <Image
                    src={
                      image.picture === ""
                        ? props.profile.data.picture
                        : image.picture
                    }
                  />
                  <div className="layer">
                    <div className="loader"></div>
                  </div>
                  <a className="image-wrapper" href="#">
                    <Form id="profile-img" action="#">
                      <Form.Control
                        className="hidden-input"
                        id="changePicture"
                        type="file"
                        accept="image/*"
                        name="picture"
                        onChange={handleChangeImage}
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
                      name="picture"
                      onChange={handleChangeImage}
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
            data-vv-as="username"
          >
            <Form.Label className="edit-input-label">
              Username <span className="edit-input-optional">(optional)</span>
            </Form.Label>
            <div className="">
              <Form.Control
                id="username"
                type="text"
                placeholder=""
                name="username"
                value={props.profile.data.username}
                maxlength="24"
                className="form-control edit-reset"
                onChange={(event) => {
                  props.dispatch(
                    editUserDetails(
                      event.currentTarget.name,
                      event.currentTarget.value
                    )
                  );
                }}
              />
              <span className="edit-new-username-status">
                <Image
                  src="assets/images/icons/tick.svg"
                  className="svg-clone"
                />
              </span>
            </div>
            <p className="input-help">
              {window.location.origin +
                `/m-profile/` +
                props.profile.data.user_unique_id}
            </p>
          </div>
          <div
            className="edit-input-wrapper"
            data-vv-delay="1000"
            data-vv-as="Display Name"
          >
            <Form.Label className="edit-input-label">
              Display name
              <span className="edit-input-optional">(optional)</span>
            </Form.Label>
            <div className="">
              <Form.Control
                id="name"
                type="text"
                placeholder=""
                defaultValue={props.profile.data.name}
                name="name"
                maxlength="24"
                className="form-control edit-reset"
                onChange={(event) => {
                  props.dispatch(
                    editUserDetails(
                      event.currentTarget.name,
                      event.currentTarget.value
                    )
                  );
                }}
              />
            </div>
          </div>
          <div
            className="edit-input-wrapper disabled"
            data-vv-delay="1000"
            data-vv-as="monthly_amount"
          >
            <Form.Label className="edit-input-label">
              Subscription price (per month)
              <span className="edit-input-optional">(optional)</span>
            </Form.Label>
            <div className="">
              <Form.Control
                id="monthly_amount"
                type="number"
                step="any"
                min="0"
                placeholder=""
                name="monthly_amount"
                className="form-control edit-reset"
                disabled={
                  localStorage.getItem("is_subscription_enabled") == 1
                    ? false
                    : true
                }
                defaultValue={props.profile.data.monthly_amount}
                onChange={(event) => {
                  props.dispatch(
                    editUserDetails(
                      event.currentTarget.monthly_amount,
                      event.currentTarget.value
                    )
                  );
                }}
              />
            </div>
          </div>
          <div
            className="edit-input-wrapper disabled"
            data-vv-delay="1000"
            data-vv-as="yearly_amount"
          >
            <Form.Label className="edit-input-label">
              Subscription price (Per Year)
              <span className="edit-input-optional">(optional)</span>
            </Form.Label>
            <div className="">
              <Form.Control
                id="yearly_amount"
                type="number"
                step="any"
                min="0"
                placeholder=""
                name="yearly_amount"
                className="form-control edit-reset"
                disabled={
                  localStorage.getItem("is_subscription_enabled") == 1
                    ? false
                    : true
                }
                defaultValue={props.profile.data.yearly_amount}
                onChange={(event) => {
                  props.dispatch(
                    editUserDetails(
                      event.currentTarget.yearly_amount,
                      event.currentTarget.value
                    )
                  );
                }}
              />
            </div>
            {localStorage.getItem("is_subscription_enabled") == 1 ? (
              <p className="inuput-help">
                You can change the
                <Link to={`/add-bank`}>
                  Bank Account or Payment Information
                </Link>{" "}
                at any time.
              </p>
            ) : (
              <p className="inuput-help">
                You must
                <Link to={`/add-bank`}>
                  Add a Bank Account or Payment Information
                </Link>{" "}
                before you can set your price or accept tips.
              </p>
            )}
          </div>
          <div
            className="edit-input-wrapper disabled"
            data-vv-delay="1000"
            data-vv-as="description"
          >
            <Form.Label className="edit-input-label">
              ABOUT <span className="edit-input-optional">(optional)</span>
            </Form.Label>
            <div className="">
              <Form.Control
                id="edit-description"
                type="text"
                autocomplete="off"
                placeholder=""
                value={props.profile.data.about}
                name="about"
                className="form-control edit-reset"
                onChange={(event) => {
                  props.dispatch(
                    editUserDetails(
                      event.currentTarget.name,
                      event.currentTarget.value
                    )
                  );
                }}
              />
            </div>
          </div>
          <div
            className="edit-input-wrapper disabled"
            data-vv-delay="1000"
            data-vv-as="Address"
          >
            <Form.Label className="edit-input-label">
              LOCATION <span className="edit-input-optional">(optional)</span>
            </Form.Label>
            <div className="">
              <Form.Control
                id="edit-address"
                type="text"
                autocomplete="off"
                value={props.profile.data.address}
                placeholder="Location"
                name="address"
                className="form-control edit-reset"
                onChange={(event) => {
                  props.dispatch(
                    editUserDetails(
                      event.currentTarget.name,
                      event.currentTarget.value
                    )
                  );
                }}
              />
            </div>
          </div>
          <div
            className="edit-input-wrapper disabled"
            data-vv-delay="1000"
            data-vv-as="Website"
          >
            <Form.Label className="edit-input-label">
              WEBSITE URL
              <span className="edit-input-optional">(optional)</span>
            </Form.Label>
            <div className="">
              <Form.Control
                id="edit-website"
                type="text"
                autocomplete="off"
                value={props.profile.data.website}
                placeholder="Website URL"
                name="website"
                maxlength="24"
                className="form-control edit-reset"
                onChange={(event) => {
                  props.dispatch(
                    editUserDetails(
                      event.currentTarget.name,
                      event.currentTarget.value
                    )
                  );
                }}
              />
            </div>
          </div>
          <div
            className="edit-input-wrapper disabled"
            data-vv-delay="1000"
            data-vv-as="Amazon Wishlist"
          >
            <Form.Label className="edit-input-label">
              AMAZON WISHLIST
              <span className="edit-input-optional">(optional)</span>
            </Form.Label>
            <div className="">
              <Form.Control
                id="edit-amazon-wishlist"
                type="text"
                autocomplete="off"
                value={props.profile.data.amazon_wishlist}
                placeholder="Amazon Wishlist"
                name="amazon_wishlist"
                maxlength="24"
                className="form-control edit-reset"
                onChange={(event) => {
                  props.dispatch(
                    editUserDetails(
                      event.currentTarget.name,
                      event.currentTarget.value
                    )
                  );
                }}
              />
            </div>
          </div>
          <div className="edit-save">
            <Button
              className="save-btn"
              onClick={handleSubmit}
              disabled={props.profileInputData.buttonDisable}
            >
              {props.profileInputData.loadingButtonContent !== null
                ? props.profileInputData.loadingButtonContent
                : "Submit"}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToPros = (state) => ({
  profile: state.users.profile,
  profileInputData: state.users.profileInputData,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(EditProfileCard);
