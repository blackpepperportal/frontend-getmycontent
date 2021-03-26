import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Button, Image } from "react-bootstrap";
import configuration from "react-global-configuration";
import { translate, t } from "react-multi-lang";

import {
  editUserDetails,
  fetchUserDetailsStart,
  updateUserDetailsStart,
  usernameValidationStart,
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

  const handleUsernameValidation = (event, username, value) => {
    props.dispatch(editUserDetails(username, value));
    props.dispatch(usernameValidationStart({ username: value }));
  };

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
        t("loading")
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
                <h3>{t("edit_profile")}</h3>
                <p className="small-text">{t("change_photo")}</p>
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
                      {t("upload_cover_image")}
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
                      {t("upload_profile_photo")}
                    </Form.Label>
                  </Form>
                </a>
              </div>
            </div>
            <p className="inuput-help">
              {t("upload_profile_photo_para")}
            </p>
          </div>
          <div
            className="edit-input-wrapper"
            data-vv-delay="1000"
            data-vv-as="username"
          >
            <Form.Label className="edit-input-label">
              {t("username")} <span className="edit-input-optional">({t("optional")})</span>
            </Form.Label>
            <div className="">
              <Form.Control
                id="username"
                type="text"
                placeholder=""
                name="username"
                value={props.profile.data.username}
                className="form-control edit-reset"
                onChange={(event) =>
                  handleUsernameValidation(
                    event,
                    event.currentTarget.name,
                    event.currentTarget.value
                  )
                }
                isValid={props.validation.isValid}
                isInvalid={props.validation.isInValid}
              />
              {props.validation.isInValid ? 
                <Form.Control.Feedback type="invalid">{t("username_error")}</Form.Control.Feedback>
              : ''}
              {props.validation.isValid ? 
                <Form.Control.Feedback>{t("looks_good")}</Form.Control.Feedback>
              : ''}

            </div>
            <p className="input-help">
              {window.location.origin + "/" + props.profile.data.username}
            </p>
          </div>
          <div
            className="edit-input-wrapper"
            data-vv-delay="1000"
            data-vv-as="Display Name"
          >
            <Form.Label className="edit-input-label">
              {t("display_name")}
              <span className="edit-input-optional">({t("optional")})</span>
            </Form.Label>
            <div className="">
              <Form.Control
                id="name"
                type="text"
                placeholder=""
                defaultValue={props.profile.data.name}
                name="name"
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
          {/* {props.profile &&
          props.profile.data.categories &&
          props.profile.data.categories.length > 0 ? (
            <div
              className="edit-input-wrapper"
              data-vv-delay="1000"
              data-vv-as="Choose Category"
            >
              <Form.Label className="edit-input-label">
                Choose Category
                <span className="edit-input-optional">(optional)</span>
              </Form.Label>
              <Form.Control
                as="select"
                name="u_category_id"
                onChange={(event) => {
                  props.dispatch(
                    editUserDetails(
                      event.currentTarget.name,
                      event.currentTarget.value
                    )
                  );
                }}
              >
                <option value="">Choose Your Category</option>
                {props.profile.data.categories.map((category, index) => {
                  return [
                    <option
                      value={category.u_category_id}
                      selected={category.is_selected == 1 ? true : false}
                    >
                      {category.name}
                    </option>,
                  ];
                })}
              </Form.Control>
            </div>
          ) : null} */}
          <div
            className="edit-input-wrapper disabled"
            data-vv-delay="1000"
            data-vv-as="monthly_amount"
          >
            <Form.Label className="edit-input-label">
              {t("subscription_price")} ({t("per_month")}{" "}
              {configuration.get("configData.currency_code")})
              <span className="edit-input-optional">({t("optional")})</span>
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
            data-vv-as="yearly_amount"
          >
            <Form.Label className="edit-input-label">
              {t("subscription_price")} ({t("subscription_price")}{" "}
              {configuration.get("configData.currency_code")})
              <span className="edit-input-optional">({t("optional")})</span>
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
                      event.currentTarget.name,
                      event.currentTarget.value
                    )
                  );
                }}
              />
            </div>
            {localStorage.getItem("is_subscription_enabled") == 1 ? (
              <p className="inuput-help">
                {t("you_can_change_the")}
                <Link to={`/add-bank`}>
                  {t("you_can_change_the_para1")}
                </Link>{" "}
                {t("you_can_change_the_para2")}.
              </p>
            ) : (
              <p className="inuput-help">
                {t("you_can_change_the_para3")}
                <Link to={`/add-bank`}>
                  {t("you_can_change_the_para4")}
                </Link>{" "}
                {t("you_can_change_the_para5")}.
              </p>
            )}
          </div>
          <div
            className="edit-input-wrapper disabled"
            data-vv-delay="1000"
            data-vv-as="description"
          >
            <Form.Label className="edit-input-label">
              {t("about")} <span className="edit-input-optional">({t("optional")})</span>
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
              {t("location")} <span className="edit-input-optional">({t("optional")})</span>
            </Form.Label>
            <div className="">
              <Form.Control
                id="edit-address"
                type="text"
                autocomplete="off"
                value={props.profile.data.address}
                placeholder={t("location")}
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
              {t("website_url")} 
              <span className="edit-input-optional">({t("optional")})</span>
            </Form.Label>
            <div className="">
              <Form.Control
                id="edit-website"
                type="text"
                autocomplete="off"
                value={props.profile.data.website}
                placeholder={t("website_url")} 
                name="website"
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
              {t("amazon_wishlist")}
              <span className="edit-input-optional">({t("optional")})</span>
            </Form.Label>
            <div className="">
              <Form.Control
                id="edit-amazon-wishlist"
                type="text"
                autocomplete="off"
                value={props.profile.data.amazon_wishlist}
                placeholder={t("amazon_wishlist")}
                name="amazon_wishlist"
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
            data-vv-as="Instagram Link"
          >
            <Form.Label className="edit-input-label" for="edit_instagram_link">
              {t("instagaram_link")}
              <span className="edit-input-optional">({t("optional")})</span>
            </Form.Label>
            <div className="">
              <Form.Control
                id="edit_instagram_link"
                type="text"
                autocomplete="off"
                value={props.profile.data.instagram_link}
                placeholder={t("instagaram_link")}
                name="instagram_link"
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
            data-vv-as="Facebook Link"
          >
            <Form.Label className="edit-input-label" for="edit_facebook_link">
              {t("facebook_link")}
              <span className="edit-input-optional">({t("optional")})</span>
            </Form.Label>
            <div className="">
              <Form.Control
                id="edit_facebook_link"
                type="text"
                autocomplete="off"
                value={props.profile.data.facebook_link}
                placeholder={t("facebook_link")}
                name="facebook_link"
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
            data-vv-as="Twitter Link"
          >
            <Form.Label className="edit-input-label" for="edit_twitter_link">
              {t("twitter_link")}
              <span className="edit-input-optional">({t("optional")})</span>
            </Form.Label>
            <div className="">
              <Form.Control
                id="edit_twitter_link"
                type="text"
                autocomplete="off"
                value={props.profile.data.twitter_link}
                placeholder={t("twitter_link")}
                name="twitter_link"
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
            data-vv-as="Snapchat Link"
          >
            <Form.Label className="edit-input-label" for="edit_snapchat_link">
              {t("snapchat_link")}
              <span className="edit-input-optional">({t("optional")})</span>
            </Form.Label>
            <div className="">
              <Form.Control
                id="edit_snapchat_link"
                type="text"
                autocomplete="off"
                value={props.profile.data.snapchat_link}
                placeholder={t("snapchat_link")}
                name="snapchat_link"
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
            data-vv-as="Linkedin Link"
          >
            <Form.Label className="edit-input-label" for="edit_linkedin_link">
              {t("linkedin_link")}
              <span className="edit-input-optional">({t("optional")})</span>
            </Form.Label>
            <div className="">
              <Form.Control
                id="edit_linkedin_link"
                type="text"
                autocomplete="off"
                value={props.profile.data.linkedin_link}
                placeholder={t("linkedin_link")}
                name="linkedin_link"
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
            data-vv-as="PINTEREST Link"
          >
            <Form.Label className="edit-input-label" for="edit_pinterest_link">
              {t("pinterest_link")}
              <span className="edit-input-optional">({t("optional")})</span>
            </Form.Label>
            <div className="">
              <Form.Control
                id="edit_pinterest_link"
                type="text"
                autocomplete="off"
                value={props.profile.data.pinterest_link}
                placeholder={t("pinterest_link")}
                name="pinterest_link"
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
            data-vv-as="YOUTUBE Link"
          >
            <Form.Label className="edit-input-label" for="edit_youtube_link">
              {t("youtube_link")}
              <span className="edit-input-optional">({t("optional")})</span>
            </Form.Label>
            <div className="">
              <Form.Control
                id="edit_youtube_link"
                type="text"
                autocomplete="off"
                value={props.profile.data.youtube_link}
                placeholder={t("youtube_link")}
                name="youtube_link"
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
            data-vv-as="TWITCH Link"
          >
            <Form.Label className="edit-input-label" for="edit_twitch_link">
             {t("youtube_link")}
              <span className="edit-input-optional">({t("optional")})</span>
            </Form.Label>
            <div className="">
              <Form.Control
                id="edit_twitch_link"
                type="text"
                autocomplete="off"
                value={props.profile.data.twitch_link}
                placeholder={t("youtube_link")}
                name="twitch_link"
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
                : t("submit")}
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
  validation: state.users.validationInputData,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(translate(EditProfileCard));
