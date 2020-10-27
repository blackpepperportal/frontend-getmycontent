import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import UserCard from "../FansFollowing/UserCard";
import { connect } from "react-redux";
import { fetchFavStart } from "../../../store/actions/FavAction";

const FavoritesIndex = (props) => {
  useEffect(() => {
    props.dispatch(fetchFavStart());
  }, []);

  return (
    <div className="lists">
      <Container>
        <Row>
          <Col sm={12} md={12} xs={12}>
            <div className="profile-post-area">
              <div className="bookmarkes-list bookmarks-right-side">
                <div className="pull-left">
                  <h3>
                    <Image
                      src="assets/images/icons/back.svg"
                      className="svg-clone"
                      width=""
                    />{" "}
                    Favorites
                  </h3>
                </div>
              </div>
            </div>
            <UserCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToPros = (state) => ({
  fav: state.fav.fav,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(FavoritesIndex);
