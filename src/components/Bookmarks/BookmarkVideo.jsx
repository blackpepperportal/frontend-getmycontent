import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Media } from "react-bootstrap";
import BookmarkNav from "./BookmarkNav";
import { connect } from "react-redux";

const BookmarkVideo = () => {
  return (
    <div className="edit-profile book-photo">
      <Container>
        <Row>
          <BookmarkNav />
          <Col xs={12} sm={12} md={8}>
            <div className="profile-post-area">
              <div className="bookmarkes-list bookmarks-right-side">
                <div className="pull-left">
                  <h3>Videos</h3>
                </div>
                <div className="pull-right">
                  <Link className="bookmarks-filter" to="#">
                    <Image
                      src="assets/images/icons/sort.svg"
                      className="svg-clone"
                    />
                  </Link>
                </div>
              </div>

              <div className="bookmarks-photos">
                <ul className="box-container three-cols">
                  <Media as="li" className="box">
                    <div className="inner">
                      <Link
                        to="assets/images/videos/demo-1.mp4"
                        className="glightbox3"
                      >
                        <Image src="assets/images/g-4.jpg" alt="image" />
                      </Link>
                    </div>
                  </Media>
                  <Media as="li" className="box">
                    <div className="inner">
                      <Link
                        to="assets/images/videos/demo-2.mp4"
                        className="glightbox3"
                      >
                        <Image src="assets/images/g-2.jpg" alt="image" />
                      </Link>
                    </div>
                  </Media>
                  <Media as="li" className="box">
                    <div className="inner">
                      <Link
                        to="assets/images/videos/demo-1.mp4"
                        className="glightbox3"
                      >
                        <Image src="assets/images/g-3.jpg" alt="image" />
                      </Link>
                    </div>
                  </Media>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToPros = (state) => ({
  bookmark: state.bookmark.bookmark,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(BookmarkVideo);
