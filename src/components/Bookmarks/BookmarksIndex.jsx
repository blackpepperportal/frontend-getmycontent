import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BookmarkNav from "./BookmarkNav";
import { connect } from "react-redux";
import { fetchBookmarksStart } from "../../store/actions/BookmarkAction";
import PostDisplayCard from "../helper/PostDisplayCard";

const BookmarksIndex = (props) => {
  useEffect(() => {
    props.dispatch(fetchBookmarksStart({ type: "all" }));
  }, []);

  return (
    <>
      <div className="edit-profile bookmark-sec">
        <Container>
          <Row>
            <BookmarkNav />
            <Col sm={12} xs={12} md={8}>
              <div className="profile-post-area">
                <div className="bookmarkes-list bookmarks-right-side">
                  <div className="pull-left">
                    <h3>ALL BOOKMARKS</h3>
                  </div>
                </div>
              </div>
              {props.bookmark.loading
                ? "Loading..."
                : props.bookmark.data.post_bookmarks.length > 0
                ? props.bookmark.data.post_bookmarks.map((post) => (
                    <PostDisplayCard post={post} key={post.post_id} />
                  ))
                : "No data Found"}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

const mapStateToPros = (state) => ({
  bookmark: state.bookmark.bookmark,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(BookmarksIndex);
