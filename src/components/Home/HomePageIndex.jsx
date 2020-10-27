import React, { useState, useEffect } from "react";
import HomePageSuggesstion from "./HomePageSuggesstion";
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
import SendTipModal from "../helper/SendTipModal";
import { fetchHomePostsStart } from "../../store/actions/HomeAction";
import { connect } from "react-redux";
import {
  fetchCommentsStart,
  saveCommentStart,
} from "../../store/actions/CommentsAction";
import ImageLoader from "../helper/ImageLoader";
import { saveBookmarkStart } from "../../store/actions/BookmarkAction";
import PostDisplayCard from "../helper/PostDisplayCard";

const HomePageIndex = (props) => {
  useEffect(() => {
    props.dispatch(fetchHomePostsStart());
  }, []);

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
                />
                <Link to="#" className="search-btn">
                  <i class="fas fa-search"></i>
                </Link>
              </Form>
            </div>
          </div>
          <div className="">
            <Col xl={8} md={12} className="custom-padding">
              <Container>
                <Row>
                  <div id="stories" className="storiesWrapper"></div>
                </Row>
              </Container>
              {props.posts.loading
                ? "Loading..."
                : props.posts.data.posts.length > 0
                ? props.posts.data.posts.map((post) => (
                    <PostDisplayCard post={post} key={post.post_id} />
                  ))
                : "No data Found"}
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
