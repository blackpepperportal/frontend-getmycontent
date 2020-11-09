import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Dropdown,
  Image,
  Media,
  Form,
} from "react-bootstrap";
import { connect } from "react-redux";
import { fetchListsDetailsStart } from "../../../store/actions/HomeAction";

const ListIndex = (props) => {
  useEffect(() => {
    props.dispatch(fetchListsDetailsStart());
  }, []);
  return (
    <div className="lists">
      <Container>
        <Row>
          <Col sm={12} md={12}>
            {props.lists.loading ? (
              "Loading..."
            ) : (
              <div className="vertical-menu">
                <div className="bookmarkes-list bookmarks-right-side ">
                  <div className="pull-left">
                    <Link
                      className="bookmarkes-list"
                      to={"/"}
                      onClick={() => props.history.goBack()}
                    >
                      <Image
                        src="assets/images/icons/back.svg"
                        className="svg-clone"
                      />
                      Lists
                    </Link>
                  </div>
                  {/* <div className="pull-right">
                  <Link className="bookmarks-filter" to="#">
                    <Image
                      src="assets/images/icons/plus.svg"
                      className="svg-clone"
                      width=""
                    />
                  </Link>
                </div> */}
                </div>

                <div className="user-lists-heading">
                  <div className="pull-left">
                    <h3 className="mb-3 mt-3">CUSTOM ORDER</h3>
                  </div>
                </div>

                <div className="user-lists">
                  <Link to={"/fans"}>
                    <div className="pull-left">
                      <h3>Fans</h3>
                      <span className="user-list-count">
                        {props.lists.data.total_followers} people
                      </span>
                    </div>
                    <div className="pull-right"></div>
                  </Link>
                </div>

                <div className="user-lists">
                  <Link to={"/following"}>
                    <div className="pull-left">
                      <h3>Following</h3>
                      <span className="user-list-count">
                        {props.lists.data.total_followings} peoples
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="user-lists">
                  <Link to={"/favorites"}>
                    <div className="pull-left">
                      <h3>Favorites</h3>
                      <span className="user-list-count">
                        {props.lists.data.total_fav_users} people
                      </span>
                    </div>
                    <div className="pull-right"></div>
                  </Link>
                </div>
                <div className="user-lists">
                  <Link to={"/bookmarks"}>
                    <div className="pull-left">
                      <h3>Bookmarks</h3>
                      <span className="user-list-count">
                        {props.lists.data.total_bookmarks} people
                      </span>
                    </div>
                    <div className="pull-right"></div>
                  </Link>
                </div>
                {/* <div className="user-lists">
                <Link to="#">
                  <div className="pull-left">
                    <h3>Close Friends</h3>
                    <span className="user-list-count">0 people</span>
                  </div>
                  <div className="pull-right"></div>
                </Link>
              </div> */}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToPros = (state) => ({
  lists: state.home.lists,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(ListIndex);
