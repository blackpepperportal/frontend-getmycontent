import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Image,
  Media,
} from "react-bootstrap";
import PostDisplayCard from "../../helper/PostDisplayCard";
import { fetchPostsStart } from "../../../store/actions/PostAction";
import { fetchUserDetailsStart } from "../../../store/actions/UserAction";
import NoDataFound from "../../NoDataFound/NoDataFound";
import { getSuccessNotificationMessage } from "../../helper/NotificationMessage";
import ProfileLoader from "../../Loader/ProfileLoader";
import { createNotification } from "react-redux-notify/lib/modules/Notifications";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ProfileIndex = (props) => {
  useEffect(() => {
    if (props.posts.loading) props.dispatch(fetchPostsStart());
    if (props.profile.loading) props.dispatch(fetchUserDetailsStart());
  }, []);

  const onCopy = (event) => {
    const notificationMessage = getSuccessNotificationMessage(
      "Link to profile was copied to clipboard!"
    );
    props.dispatch(createNotification(notificationMessage));
  };

  return (
    <>
      <div className="my-profile">
        <Container>
          <Row>
            <Col sm={12} xs={12} md={12}>
              {props.profile.loading ? (
                <ProfileLoader></ProfileLoader>
              ) : (
                <>
                  <div className="cover-area">
                    <div className="profile-cover">
                      <Image
                        src={props.profile.data.cover}
                        alt={props.profile.data.name}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="top-left">
                      <Button className="chat-header-back">
                        <Image
                          src="assets/images/icons/back.svg"
                          className="svg-clone"
                        />
                      </Button>
                      <h1 className="chat-page-title">
                        {props.profile.data.name}
                      </h1>
                    </div>

                    <div className="top-right">
                      {/* <Link
                        to="#"
                        className="g-page__header__btn m-with-round-hover has-tooltip"
                        data-original-title="null"
                      >
                        <Image
                          src="assets/images/icons/vertical-dots.svg"
                          className="svg-clone"
                        />
                      </Link> */}
                    </div>
                  </div>

                  <div className="profile--user">
                    <span className="my-profile-status">
                      <Image src={props.profile.data.picture} />
                    </span>
                    <div className="profile-btn-group">
                      <Link
                        to={"/edit-profile"}
                        className="g-btn m-rounded m-border m-uppercase m-flex m-fluid-width m-profile"
                      >
                        <Image
                          src="assets/images/icons/settings.svg"
                          className="svg-clone my-p-icons"
                        />
                        Edit profile
                      </Link>

                      <CopyToClipboard
                        text={props.profile.data.share_link}
                        onCopy={onCopy}
                      >
                        <Button
                          type="button"
                          className="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                        >
                          <Image
                            src="assets/images/icons/share.svg"
                            className="svg-clone "
                          />
                        </Button>
                      </CopyToClipboard>
                    </div>
                    <div className="my-profile-names">
                      <div className="user-name-base-row">
                        <Link to={`/profile`} className="my-name-lg">
                          <div className="g-user--name">
                            {props.profile.data.name}
                          </div>
                        </Link>
                      </div>
                      <div className="user-id-row-base">
                        <Link to={`/profile`} className="user-my-id-text">
                          <div className="current-user--name">
                            @{props.profile.data.username}
                          </div>
                        </Link>
                        <div className="user-profile -active-status mt-1">
                          <span>{props.profile.data.updated_formatted}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profile-about-content">
                    <ul className="list-inline">
                      <Media as="li">
                        <Link to={"/fans"}>
                          <span className="fans-follow">
                            {localStorage.getItem("total_followers")
                              ? localStorage.getItem("total_followers")
                              : 0}
                          </span>{" "}
                          Fans
                        </Link>
                      </Media>
                      <Media as="li">
                        <Link to={"/following"}>
                          <span className="fans-follow">
                            {localStorage.getItem("total_followings")
                              ? localStorage.getItem("total_followings")
                              : 0}
                          </span>{" "}
                          Following
                        </Link>
                      </Media>
                    </ul>
                  </div>
                  <div className="profile-about-content">
                    <p className="my-profile-about">
                      <div className="ml-1">{props.profile.data.about}</div>

                      {props.profile.data.website ||
                      props.profile.data.address ||
                      props.profile.data.amazon_wishlist ? (
                        <p className="">
                          <div className="profile-links">
                            {props.profile.data.address ? (
                              <span>
                                <i className="fas fa-map-marker-alt"></i>{" "}
                                {props.profile.data.address}
                              </span>
                            ) : null}
                          </div>

                          <div className="profile-links">
                            {props.profile.data.website ? (
                              <span>
                                <i className="fa fa-link"></i>{" "}
                                <a
                                  href={props.profile.data.website}
                                  rel="nofollow"
                                  target="_blank"
                                  className="profile-a"
                                >
                                  {props.profile.data.website}
                                </a>
                              </span>
                            ) : null}
                          </div>
                          <div className="profile-links">
                            {props.profile.data.amazon_wishlist ? (
                              <span>
                                <i className="fa fa-gift"></i>{" "}
                                <a
                                  href={props.profile.data.amazon_wishlist}
                                  rel="nofollow"
                                  target="_blank"
                                  className="profile-a"
                                >
                                  {props.profile.data.amazon_wishlist}
                                </a>
                              </span>
                            ) : null}
                          </div>
                        </p>
                      ) : null}
                    </p>
                  </div>

                  <div className="profile-post-area">
                    <div className="search-row">
                      <Link to="#" className="search-button">
                        {props.profile.data.total_posts}{" "}
                        {props.profile.data.total_posts >= 0 ? "Posts" : "Post"}
                      </Link>
                      <div
                        className="search-container"
                        style={{ display: "none" }}
                      >
                        <Form className="search-box">
                          <input
                            className="search-text"
                            type="text"
                            placeholder="Search Anything"
                          />
                          <Link to="#" className="search-btn">
                            <i class="fas fa-search"></i>
                          </Link>
                        </Form>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {/* {!props.posts ? (
                ""
              ) : props.posts.loading ? (
                "Loading..."
              ) : props.posts.data.length > 0 ? (
                props.posts.data.posts.length > 0 ? (
                  props.posts.data.posts.map((post) => (
                    <PostDisplayCard post={post} />
                  ))
                ) : (
                  <NoDataFound />
                )
              ) : null} */}
              {props.posts.loading ? (
                "Loading..."
              ) : props.posts.error === false ? (
                props.posts.data.posts.length > 0 ? (
                  props.posts.data.posts.map((post) => (
                    <PostDisplayCard post={post} key={post.post_id} />
                  ))
                ) : (
                  <NoDataFound />
                )
              ) : (
                props.posts.error
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

const mapStateToPros = (state) => ({
  profile: state.users.profile,
  posts: state.post.posts,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(ProfileIndex);
