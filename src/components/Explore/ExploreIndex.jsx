import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Col, Row, Container, Image } from "react-bootstrap";
import "./Explore.css";
import { connect } from "react-redux";
import useInfiniteScroll from "../helper/useInfiniteScroll";
import { fetchExplorePostsStart } from "../../store/actions/ExploreAction";
import BookmarkLoader from "../Loader/BookmarkLoader";
import BookmarkNoDataFound from "../NoDataFound/BookmarkNoDataFound";

const ExploreIndex = (props) => {
    useEffect(() => {
        props.dispatch(
            fetchExplorePostsStart({ skip: props.posts.skip })
        );
    }, []);

    const [isFetching, setIsFetching] = useInfiniteScroll(fetchExplorePostData);

    const [noMoreData, setNoMoreData] = useState(false);

    function fetchExplorePostData() {
        setTimeout(() => {
        if (props.posts.length !== 0) {
            props.dispatch(
                fetchExplorePostsStart({skip: props.posts.skip })
            );
            setIsFetching(false);
        } else {
            setNoMoreData(true);
        }
        }, 3000);
    }

    return (
        <>
            {props.posts.loading ? (
                <BookmarkLoader />
            ) : props.posts.data.posts.length > 0 ? 
            <div className="explore-sec">
                <Container>
                    <h4 className="head-title">Explore</h4>
                    <Row>
                        <Col md={12}>
                            <div className="explore-card">

                            {
                                props.posts.data.posts.map((post,index) => (
                                    <div className={index%3 === 0 ? "vertical" : (index%3 === 1 ? "big": "small")}>
                                        <Link
                                        to="#">
                                            <Image
                                            src={post.post_image}
                                            alt="No Image"
                                            />
                                        </Link>
                                        {post.file_type == 'video' ? 
                                        <Link to={`/post/${post.post_unique_id}`}>
                                            <div className="explore-play-icon-sec">
                                                <i className="far fa-play-circle"></i>
                                            </div>
                                        </Link>
                                        : ""}
                                    </div>
                                ))
                                }
                                {/* <div>
                                    <Image
                                    src={
                                        window.location.origin +
                                        "/assets/images/g-2.jpg"
                                    }
                                    alt="No Image"
                                    />
                                </div> */}
                                {/* <div className="vertical">
                                    <Image
                                    src={
                                        window.location.origin +
                                        "/assets/images/g-2.jpg"
                                    }
                                    alt="No Image"
                                    />
                                </div>
                                <div className="horizontal">
                                    <Image
                                    src={
                                        window.location.origin +
                                        "/assets/images/g-2.jpg"
                                    }
                                    alt="No Image"
                                    />
                                </div>
                                <div>
                                    <Image
                                    src={
                                        window.location.origin +
                                        "/assets/images/g-2.jpg"
                                    }
                                    alt="No Image"
                                    />
                                </div>
                                <div>
                                    <Image
                                    src={
                                        window.location.origin +
                                        "/assets/images/g-2.jpg"
                                    }
                                    alt="No Image"
                                    />
                                </div>
                                <div className="big">
                                    <Image
                                    src={
                                        window.location.origin +
                                        "/assets/images/g-2.jpg"
                                    }
                                    alt="No Image"
                                    />
                                </div>
                                <div>
                                    <Image
                                    src={
                                        window.location.origin +
                                        "/assets/images/g-2.jpg"
                                    }
                                    alt="No Image"
                                    />
                                </div>
                                <div className="vertical">
                                    <Image
                                    src={
                                        window.location.origin +
                                        "/assets/images/g-2.jpg"
                                    }
                                    alt="No Image"
                                    />
                                </div>
                                <div>
                                    <Image
                                    src={
                                        window.location.origin +
                                        "/assets/images/g-2.jpg"
                                    }
                                    alt="No Image"
                                    />
                                </div>
                                <div className="horizontal">
                                    <Image
                                    src={
                                        window.location.origin +
                                        "/assets/images/g-2.jpg"
                                    }
                                    alt="No Image"
                                    />
                                </div>
                                <div>
                                    <Image
                                    src={
                                        window.location.origin +
                                        "/assets/images/g-2.jpg"
                                    }
                                    alt="No Image"
                                    />
                                </div>
                                <div className="big">
                                    <Image
                                    src={
                                        window.location.origin +
                                        "/assets/images/g-2.jpg"
                                    }
                                    alt="No Image"
                                    />
                                </div>
                                <div>
                                    <Image
                                    src={
                                        window.location.origin +
                                        "/assets/images/g-2.jpg"
                                    }
                                    alt="No Image"
                                    />
                                </div>
                                <div className="horizontal">
                                    <Image
                                    src={
                                        window.location.origin +
                                        "/assets/images/g-2.jpg"
                                    }
                                    alt="No Image"
                                    />
                                </div>
                                <div>
                                    <Image
                                    src={
                                        window.location.origin +
                                        "/assets/images/g-2.jpg"
                                    }
                                    alt="No Image"
                                    />
                                </div>
                                <div className="big">
                                    <Image
                                    src={
                                        window.location.origin +
                                        "/assets/images/g-2.jpg"
                                    }
                                    alt="No Image"
                                    />
                                </div>
                                <div>
                                    <Image
                                    src={
                                        window.location.origin +
                                        "/assets/images/g-2.jpg"
                                    }
                                    alt="No Image"
                                    />
                                </div>
                                <div className="vertical">
                                    <Image
                                    src={
                                        window.location.origin +
                                        "/assets/images/g-2.jpg"
                                    }
                                    alt="No Image"
                                    />
                                </div> */}
                            </div>
                        </Col>
                    </Row>
                    {noMoreData !== true ? (
                        <>{isFetching && "Fetching more list items..."}</>
                    ) : (
                        "No More Data"
                    )}
                </Container>
            </div>
            : (
                <BookmarkNoDataFound />
            )}

        </>
    );
};

const mapStateToPros = (state) => ({
    posts: state.explorePosts.explorePosts,
});
  
function mapDispatchToProps(dispatch) {
    return { dispatch };
}
  
export default connect(mapStateToPros, mapDispatchToProps)(ExploreIndex);
  