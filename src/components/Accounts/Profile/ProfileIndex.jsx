import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import PostDisplayCard from "../../helper/PostDisplayCard";

const ProfileIndex = () => {
  return (
    <>
      <div className="my-profile">
        <Container>
          <Row>
            <Col sm={12} xs={12} md={12}>
              <div className="cover-area">
                <div className="profile-cover">
                  <Image
                    src="assets/images/img-2.jpg"
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
                  <h1 className="chat-page-title">John</h1>
                  <span className="post-count">1 Post</span>
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
                  <Image src="assets/images/avatar/s-user-6.jpeg" />
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
                      <div className="g-user--name">John</div>
                    </Link>
                  </div>
                  <div className="user-id-row-base">
                    <Link to="" className="user-my-id-text">
                      <div className="current-user--name">@u63484651</div>
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

              <PostDisplayCard post="asdf" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

const mapStateToPros = (state) => ({
  userData: state.users,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(ProfileIndex);
