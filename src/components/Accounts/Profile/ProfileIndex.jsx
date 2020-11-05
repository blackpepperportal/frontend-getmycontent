import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import PostDisplayCard from "../../helper/PostDisplayCard";
import { fetchPostsStart } from "../../../store/actions/PostAction";
import { fetchUserDetailsStart } from "../../../store/actions/UserAction";

const ProfileIndex = (props) => {
  useEffect(() => {
    if (props.posts.loading) props.dispatch(fetchPostsStart());
    if (props.profile.loading) props.dispatch(fetchUserDetailsStart());
  }, []);

  return (
    <>
      <div className="my-profile">
        <Container>
          <Row>
            <Col sm={12} xs={12} md={12}>
              {props.profile.loading ? (
                "Loading..."
              ) : (
                <>
                  <div className="cover-area">
                    <div className="profile-cover">
                      <Image
                        src={props.profile.data.cover}
                        alt="Snow"
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
                      <Link
                        to="#"
                        className="g-page__header__btn m-with-round-hover has-tooltip"
                        data-original-title="null"
                      >
                        <Image
                          src="assets/images/icons/vertical-dots.svg"
                          className="svg-clone"
                        />
                      </Link>
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
                      <Button
                        type="button"
                        className="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip"
                      >
                        <Image
                          src="assets/images/icons/share.svg"
                          className="svg-clone "
                        />
                      </Button>
                    </div>
                    <div className="my-profile-names">
                      <div className="user-name-base-row">
                        <Link to="" className="my-name-lg">
                          <div className="g-user--name">
                            {props.profile.data.name}
                          </div>
                        </Link>
                      </div>
                      <div className="user-id-row-base">
                        <Link to="" className="user-my-id-text">
                          <div className="current-user--name">
                            @{props.profile.data.username}
                          </div>
                        </Link>
                        <div className="user-profile -active-status">
                          <span>Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profile-about-content">
                    <p className="my-profile-about">Nutrition | Motivation</p>
                  </div>

                  <div className="profile-post-area">
                    <div className="search-row">
                      <Link to="#" className="search-button">
                        1 post
                      </Link>
                      <div className="search-container">
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
              {props.posts.loading
                ? "Loading..."
                : props.posts.data.posts.length > 0
                ? props.posts.data.posts.map((post) => (
                    <PostDisplayCard post={post} />
                  ))
                : "No data found"}
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
