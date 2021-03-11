import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import UserCard from "../FansFollowing/UserCard";
import { connect } from "react-redux";
import { fetchFavStart } from "../../../store/actions/FavAction";
import NoDataFound from "../../NoDataFound/NoDataFound";
import useInfiniteScroll from "../../helper/useInfiniteScroll";
import { Link } from "react-router-dom";

const FavoritesIndex = (props) => {
  useEffect(() => {
    props.dispatch(fetchFavStart());
  }, []);

  const fetchFavUsersData = () => {
    setTimeout(() => {
      if (props.fav.length !== 0) {
        props.dispatch(fetchFavStart());
        setIsFetching(false);
      } else {
        setNoMoreData(true);
      }
    }, 3000);
  };

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchFavUsersData);
  const [noMoreData, setNoMoreData] = useState(false);

  const [sendTip, setSendTip] = useState(false);

  const closeSendTipModal = () => {
    setSendTip(false);
  };

  return (
    <div className="lists">
      <Container>
        <Row>
          <Col sm={12} md={12} xs={12}>
            <div className="profile-post-area">
              <div className="bookmarkes-list bookmarks-right-side">
                <div className="pull-left">
                  <h3>
                    <Link to={"/list"}>
                      <Image
                        src="assets/images/icons/back.svg"
                        className="svg-clone"
                        width=""
                      />{" "}
                    </Link>
                    Favorites
                  </h3>
                </div>
              </div>
            </div>
            {props.fav.loading ? (
              "Loading..."
            ) : props.fav.data.fav_users.length > 0 ? (
              props.fav.data.fav_users.map((fav_user) => (
                <UserCard user={fav_user.fav_user} key={fav_user.user_id} />
              ))
            ) : (
              <NoDataFound></NoDataFound>
            )}
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
