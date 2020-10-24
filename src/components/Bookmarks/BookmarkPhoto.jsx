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
import BookmarkNav from "./BookmarkNav";

const BookmarkPhoto = () => {
  return (
    <div className="edit-profile book-photo">
      <Container>
        <Row>
          <BookmarkNav />
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
