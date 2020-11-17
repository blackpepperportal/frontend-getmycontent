import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Image } from "react-bootstrap";
import AddFavModal from "../../helper/AddFavModal";
import SendTipModal from "../../helper/SendTipModal";
import { deleteFavStart, saveFavStart } from "../../../store/actions/FavAction";
import { connect } from "react-redux";

const UserCard = (props) => {
  const [sendTip, setSendTip] = useState(false);

  const closeSendTipModal = () => {
    setSendTip(false);
  };

  const [addFav, setAddFav] = useState(false);

  const closeAddFavModal = () => {
    setAddFav(false);
  };

  const removeFav = () => {
    props.dispatch(deleteFavStart({ user_id: props.user.user_id }));
  };

  const handleStar = (event) => {
    event.preventDefault();

    props.dispatch(
      saveFavStart({
        user_id: props.user.user_id,
      })
    );
  };

  return (
    <>
      <Col sm={12} md={6} lg={4} xs={12}>
        <div className="follower-lists">
          <div className="follower-subscription-lists">
            <div className="follower-subscription-inner">
              <Link to="user-profile.html">
                <div className="follower-wrapper">
                  <Image className="follower-cover" src={props.user.cover} />
                </div>
              </Link>
              <div className="follower-profile-header">
                <Link to={`/model-profile` + props.user.user_unique_id}>
                  <span className="follower-profile-avatar">
                    <Image src={props.user.picture} className="" />
                  </span>
                </Link>
                <div className="follower-info">
                  <div className="follower-profile-status">
                    <div className="follower-status-text">
                      Last seen
                      <span title="Oct 12, 1:33 pm">{props.user.updated}</span>
                    </div>
                    <div className="follower-profile-toggle-dropdown">
                      <Link to="#" className="btn dropdown-toggle btn-link">
                        <Image
                          src="assets/images/icons/vertical-dots.svg"
                          className="svg-clone vertical-dots"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="follower-wrapper-name">
                    <div className="follower-profile-names">
                      <div className="follower-name-row">
                        <Link to="user-profile.html">
                          <div className="follower-user-name">
                            {props.user.name}
                            <Image
                              src="assets/images/icons/verified.svg"
                              className="svg-clone m-verified"
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="follower-name-row">
                        <Link
                          to={`/model-profile` + props.user.user_unique_id}
                          className="g-user-realname__wrapper"
                        >
                          <div className="follower-user-id">
                            @{props.user.username}
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="group-follower-btns"
                      style={{ display: "none" }}
                    >
                      <Button
                        type="button"
                        className="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                      >
                        <Image
                          src="assets/images/icons/share.svg"
                          className="svg-clone"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-to-lists-button">
                <div className="swiper-favorite">
                  <Link
                    type="button"
                    className="swiper-btn-fav"
                    onClick={handleStar}
                  >
                    <Image
                      src="assets/images/icons/star.svg"
                      className="svg-clone my-p-icons"
                      width="12"
                    />
                    Add to favorites and other lists
                  </Link>
                </div>
              </div>
              <div className="lists-button-group post-icons">
                <Button
                  type="button"
                  className="g-btn m-rounded m-border m-profile m-with-icon"
                  onClick={() => setSendTip(true)}
                >
                  <Image
                    src="assets/images/icons/tip.svg"
                    className="svg-clone"
                  />
                  <span className="b-btn-text">Tip</span>
                </Button>
              </div>
              <div className="lists-button-group">
                <Link
                  type="button"
                  className="g-btn m-rounded m-border m-profile m-with-icon"
                >
                  <Image
                    src="assets/images/icons/subscribe.svg"
                    className="svg-clone"
                  />
                  <span className="b-btn-text">Subscribed for free</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <SendTipModal
        sendTip={sendTip}
        closeSendTipModal={closeSendTipModal}
        username={props.user.username}
        userPicture={props.user.picture}
        name={props.user.usernamee}
        post_id={null}
        user_id={props.user.user_id}
      />
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(null, mapDispatchToProps)(UserCard);
