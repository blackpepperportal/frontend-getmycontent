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

const BookmarkAudio = () => {
  return (
    <div className="edit-profile">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={4}>
            <div className="vertical-menu">
              <Link className="bookmarkes-list " href="bookmarks.php">
                <Image src="assets/images/icons/back.svg" className="svg-clone" />
                BOOKMARKS
              </Link>

              <Link className="bookmarkes-list " href="bookmarks-photos.php">
                <Image
                  src="assets/images/icons/gallery.svg"
                  className="svg-clone my-p-icons"
                />
                Photos
              </Link>

              <Link className="bookmarkes-list " href="bookmarks-videos.php">
                <Image
                  src="assets/images/icons/video.svg"
                  className="svg-clone my-p-icons"
                />
                Videos
              </Link>

              <Link className="bookmarkes-list active" href="bookmarks-audio.php">
                <Image
                  src="assets/images/icons/audio.svg"
                  className="svg-clone my-p-icons"
                />
                Audio
              </Link>

              <Link className="bookmarkes-list" href="bookmarks-other.php">
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
                  <h3>Audio</h3>
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

              <div className="bookmarks-videos">
                <div className="empty-message">
                  <span className="no-bookmarks">
                    <Image
                      src="assets/images/icons/bookmark.svg"
                      className="svg-clone"
                      width="64"
                    />
                    <p> No bookmarks yet</p>
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookmarkAudio;
