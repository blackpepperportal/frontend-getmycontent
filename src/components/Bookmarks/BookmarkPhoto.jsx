import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  Tabs,
  Tab,
  Dropdown,
  DropdownButton,
  Image,
  Badge,
  Media,
} from "react-bootstrap";

const BookmarkPhoto = () => {
  return (
    <div className="edit-profile">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={4}>
            <div className="vertical-menu">
              <Link className="bookmarkes-list " to="bookmarks.php">
                <Image src="assets/images/icons/back.svg" className="svg-clone" />
                BOOKMARKS
              </Link>

              <Link className="bookmarkes-list active" to="bookmarks-photos.php">
                <Image
                  src="assets/images/icons/gallery.svg"
                  className="svg-clone my-p-icons"
                />
                Photos
              </Link>

              <Link className="bookmarkes-list" to="bookmarks-videos.php">
                <Image
                  src="assets/images/icons/video.svg"
                  className="svg-clone my-p-icons"
                />
                Videos
              </Link>

              <Link className="bookmarkes-list" to="bookmarks-audio.php">
                <Image
                  src="assets/images/icons/audio.svg"
                  className="svg-clone my-p-icons"
                />
                Audio
              </Link>

              <Link className="bookmarkes-list" to="bookmarks-other.php">
                <Image
                  src="assets/images/icons/other.svg"
                  className="svg-clone my-p-icons"
                />
                Other
              </Link>

              <Link className="bookmarkes-list" href="bookmarks-locked.php">
                <Image
                  src="assets/images/icons/lock.svg"
                  className="svg-clone my-p-icons"
                />
                Locked
              </Link>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8}>
            <div className="profile-post-area">
              <div className="bookmarkes-list bookmarks-right-side">
                <div className="pull-left">
                  <h3>PHOTOS</h3>
                </div>
                <div className="pull-right">
                  <Link className="bookmarks-filter" href="#">
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
                      <Link to="assets/images/g-6.jpg" className="glightbox">
                        <Image src="assets/images/g-6.jpg" />
                      </Link>
                    </div>
                  </Media>
                  <Media as="li" className="box">
                    <div className="inner">
                      <Link to="assets/images/g-5.jpg" className="glightbox">
                        <Image src="assets/images/g-5.jpg" />
                      </Link>
                    </div>
                  </Media>
                  <Media as="li" className="box">
                    <div className="inner">
                      <Link to="assets/images/g-4.jpg" className="glightbox">
                        <Image src="assets/images/g-4.jpg" />
                      </Link>
                    </div>
                  </Media>
                  <Media as="li" className="box">
                    <div className="inner">
                      <Link to="assets/images/g-3.jpg" className="glightbox">
                        <Image src="assets/images/g-3.jpg" />
                      </Link>
                    </div>
                  </Media>
                  <Media as="li" className="box">
                    <div className="inner">
                      <Link to="assets/images/g-2.jpg" className="glightbox">
                        <Image src="assets/images/g-2.jpg" />
                      </Link>
                    </div>
                  </Media>
                  <Media as="li" className="box">
                    <div className="inner">
                      <Link to="assets/images/g-1.jpg" className="glightbox">
                        <Image src="assets/images/g-1.jpg" />
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

export default BookmarkPhoto;
