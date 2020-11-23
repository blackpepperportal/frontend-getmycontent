import React, { useState, useEffect } from "react";
import HomePageSuggesstion from "./HomePageSuggesstion";
import { Link } from "react-router-dom";
import { Container, Col, Form, Media, Image } from "react-bootstrap";
import { fetchHomePostsStart } from "../../store/actions/HomeAction";
import { connect } from "react-redux";
import {
  fetchCommentsStart,
  saveCommentStart,
} from "../../store/actions/CommentsAction";
import { saveBookmarkStart } from "../../store/actions/BookmarkAction";
import PostDisplayCard from "../helper/PostDisplayCard";
import NoDataFound from "../NoDataFound/NoDataFound";
import useInfiniteScroll from "../helper/useInfiniteScroll";
import HomeLoader from "../Loader/HomeLoader";

const HomePageIndex = (props) => {
  useEffect(() => {
    props.dispatch(fetchHomePostsStart());
  }, []);

  const fetchHomeData = () => {
    setTimeout(() => {
      if (props.posts.length !== 0) {
        props.dispatch(fetchHomePostsStart());
        setIsFetching(false);
      } else {
        setNoMoreData(true);
      }
    }, 3000);
  };

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchHomeData);

  const [noMoreData, setNoMoreData] = useState(false);

  const [sendTip, setSendTip] = useState(false);

  const closeSendTipModal = () => {
    setSendTip(false);
  };

  const [commentInputData, setCommentInputData] = useState({});

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    props.dispatch(saveCommentStart(commentInputData));
  };

  const [isVisible, setIsVisible] = React.useState(true);

  const showCommentSection = (event, post_id) => {
    setCommentInputData({ post_id: post_id });
    setIsVisible(true);
    props.dispatch(fetchCommentsStart({ post_id: post_id }));
  };

  const handleLike = (event) => {
    event.preventDefault();
  };

  const handleBookmark = (event, post) => {
    event.preventDefault();
    props.dispatch(saveBookmarkStart({ post_id: post.post_id }));
  };

  const closeCommentSection = (event) => {
    setIsVisible(false);
  };

  const [show, toggleShow] = React.useState(false);

  return (
    <>
      <div className="home-screen home-sec">
        <Container>
          <div className="search-row">
            <Link to="#" className="search-button">
              Home
            </Link>
            <div className="search-container">
              <Form className="search-box">
                <input
                  className="search-text"
                  type="text"
                  placeholder="Search Anything"
                  onClick={() => toggleShow(!show)}
                />
                <Link to="#" className="search-btn">
                  <i class="fas fa-search"></i>
                </Link>
              </Form>
            </div>
            {show && 
            <div
                className="search-dropdown-sec"
              >
                <ul className="list-unstyled search-dropdown-list-sec">
                  <Media as="li">
                    <Link
                      to="#"
                    >
                      <div className="search-body">
                        <div className="user-img-sec">
                        <Image
                          alt="#"
                          src={window.location.origin + "/assets/images/harish-jee.png"}
                          className="user-img"
                        />
                        </div>
                        <div className="search-content">
                          <h5>Beno darry</h5>
                        </div>
                      </div>
                    </Link>
                  </Media>
                  <Media as="li">
                    <Link
                      to="#"
                    >
                      <div className="search-body">
                        <div className="user-img-sec">
                        <Image
                          alt="#"
                          src={window.location.origin + "/assets/images/harish-jee.png"}
                          className="user-img"
                        />
                        </div>
                        <div className="search-content">
                          <h5>Beno darry</h5>
                        </div>
                      </div>
                    </Link>
                  </Media>
                </ul>
              </div>
              }
          </div>
          <div className="padding-top-xl">
            <Col xl={8} md={12} className="custom-padding">
              {/* <Container>
                <Row>
                  <div id="stories" className="storiesWrapper"></div>
                </Row>
              </Container> */}
              {props.posts.loading ? (
                <HomeLoader/>
              ) : props.posts.data.posts.length > 0 ? (
                props.posts.data.posts.map((post) => (
                  <PostDisplayCard post={post} key={post.post_id} />
                ))
              ) : (
                <NoDataFound />
              )}
              {noMoreData !== true ? (
                <>{isFetching && "Fetching more list items..."}</>
              ) : (
                "No More Data"
              )}
            </Col>
            <HomePageSuggesstion />
          </div>
        </Container>
      </div>
    </>
  );
};

const mapStateToPros = (state) => ({
  posts: state.home.homePost,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(HomePageIndex);
