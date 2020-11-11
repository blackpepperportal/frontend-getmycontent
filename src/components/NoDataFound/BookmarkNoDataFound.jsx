import React from "react";
import { Row, Col} from "react-bootstrap";

const BookmarkNoDataFound = () => {
  return (
    <>
      <div className="bookmark-no-data-found-sec">
        <Row>
          <Col sm="12" md="12">
            <span> <i className="material-icons icon-bookmark">bookmark_border</i></span>
            <p className="desc">No bookmarks yet</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default BookmarkNoDataFound;
