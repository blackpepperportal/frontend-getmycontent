import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchPostSuggesstionStart } from "../../store/actions/HomeAction";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HomePageSuggesstion = (props) => {
  useEffect(() => {
    props.dispatch(fetchPostSuggesstionStart());
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Col xl={4} md={12} className="suggest-col">
      <Row>
        <Col sm={12} xl={5} xs={12} md={6} className="mrg-btm-xs">
          <h4 className="suggestions">suggestions</h4>
        </Col>
        <Col sm={12} xl={7} xs={12} md={6} className="mrg-btm-xs">
          <div className="controls pull-right ">
            {/* <Link to="#">
              <Image
                src="assets/images/icons/price-tag.svg"
                className="svg-clone"
              />
            </Link>
            <Link to="#">
              <Image
                src="assets/images/icons/refresh.svg"
                className="svg-clone"
              />
            </Link> */}

            <Link
              className="left"
              data-toggle="tooltip"
              data-placement="top"
              title="Prev"
              to="#carousel-example"
              data-slide="prev"
            >
              <Image src="assets/images/icons/left.svg" className="svg-clone" />
            </Link>
            <Link
              className="right"
              data-toggle="tooltip"
              data-placement="top"
              title="Next"
              to="#carousel-example"
              data-slide="next"
            >
              <Image
                src="assets/images/icons/right.svg"
                className="svg-clone mr-0"
              />
            </Link>
          </div>
        </Col>
        <Col sm={12} xl={12} xs={12} md={12}>
          <div
            id="carousel-example"
            className="carousel slide "
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="item active">
                <Row className="diplay-block">
                  <Col sm={12} md={12}>
                    {props.postSug.loading ? (
                      "Loading..."
                    ) : (
                      <Carousel>
                        {props.postSug.data.users.length > 0
                          ? props.postSug.data.users.map((user) => (
                              <div className="col-item">
                                <div className="photo">
                                  <div className="swiper-slide">
                                    <div className="b-friend">
                                      <Link
                                        to={`/model-profile/${user.user_unique_id}`}
                                        className=""
                                      >
                                        <div className="b-friend__cover-wrapper">
                                          <Image
                                            src={user.cover}
                                            alt={user.username}
                                            className="b-friend__cover"
                                          />
                                        </div>
                                        <div className="b-free-label">free</div>
                                        <div className="b-friend__content">
                                          <div className="b-friend__avatar">
                                            <span className="g-avatar online_status_class m-w150 m-border-line">
                                              <Image
                                                src={user.picture}
                                                alt={user.username}
                                                className="suggest-img"
                                              />
                                            </span>
                                          </div>
                                          <div className="b-username-row">
                                            <div className="b-username m-like-link">
                                              <div className="g-user-name m-lg-size m-verified">
                                                {user.name}
                                              </div>
                                            </div>
                                          </div>
                                          <div className="b-username-row">
                                            <div className="b-username">
                                              <div className="g-user-username">
                                                @{user.username}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                          : "No data Found"}
                      </Carousel>
                    )}
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

const mapStateToPros = (state) => ({
  postSug: state.home.postSug,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(HomePageSuggesstion);
