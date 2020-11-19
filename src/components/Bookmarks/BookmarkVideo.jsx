import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Media } from "react-bootstrap";
import BookmarkNav from "./BookmarkNav";
import { connect } from "react-redux";
import BookmarkVideoLoader from "../Loader/BookmarkVideoLoader";
import BookmarkNoDataFound from "../NoDataFound/BookmarkNoDataFound";
import { fetchBookmarksStart } from "../../store/actions/BookmarkAction";
import useInfiniteScroll from "../helper/useInfiniteScroll";

const BookmarkVideo = (props) => {
  useEffect(() => {
    props.dispatch(
      fetchBookmarksStart({ type: "video", skip: props.bookmark.skip })
    );
  }, []);

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchBookMarkData);

  const [noMoreData, setNoMoreData] = useState(false);

  function fetchBookMarkData() {
    setTimeout(() => {
      if (props.bookmark.length !== 0) {
        props.dispatch(
          fetchBookmarksStart({ type: "video", skip: props.bookmark.skip })
        );
        setIsFetching(false);
      } else {
        setNoMoreData(true);
      }
    }, 3000);
  }
  return (
    <div className="edit-profile book-photo">
      <Container>
        <Row>
          <BookmarkNav />
          <Col xs={12} sm={12} md={8}>
            {props.bookmark.loading ? (
              <BookmarkVideoLoader />
            ) : props.bookmark.data.posts.length > 0 ? (
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
                    {props.bookmark.data.posts.map((post) =>
                      post.postFiles.length > 0
                        ? post.postFiles.map((post) => (
                            <Media as="li" className="box" key={post.post_id}>
                              <div className="inner">
                                <a
                                  href={post.post_file}
                                  target="_blank"
                                  className="glightbox3"
                                >
                                  <Image src={post.post_file} alt="image" />
                                </a>
                              </div>
                            </Media>
                          ))
                        : ""
                    )}
                  </ul>
                </div>
              </div>
            ) : (
              <BookmarkNoDataFound />
            )}
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
