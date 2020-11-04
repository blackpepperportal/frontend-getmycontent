import React, { useEffect } from "react";
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
            {props.fav.loading
              ? "Loading..."
              : props.fav.data.fav_users.length > 0
              ? props.fav.data.fav_users.map((user) => (
                  <UserCard user={user} key={user.user_id} />
                ))
              : "No data Found"}
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
