import React from "react";
import { Link } from "react-router-dom";
import { Form} from "react-bootstrap";
import PostDisplayCard from "../helper/PostDisplayCard";
import NoDataFound from "../NoDataFound/NoDataFound";

const ModelProfilePostSec = (props) => {
  return (
    <>
      <div
        role="tabpanel"
        className={
          props.activeSec === "post"
            ? "tab-pane fade in active"
            : "tab-pane fade"
        }
        id="Section1"
      >
        <div className="profile-post-area">
          <div className="alignleft float-unset">
            <span className="post-number">
              {props.userPosts.loading ? (
                "Loading..."
              ) : (
                <span>{props.userPosts.data.total} Posts</span>
              )}
            </span>
          </div>
          <div className="alignright">
            <div className="profile-search-post">
              <Form className="search-box">
                <input
                  className="search-text"
                  type="text"
                  placeholder="Search Anything"
                />
                <Link to="#" className="search-btn">
                  <i class="fas fa-search"></i>
                </Link>
              </Form>
            </div>
          </div>
        </div>

        {props.userPosts.loading ? (
          "Loading..."
        ) : props.userPosts.data.posts.length > 0 ? (
          props.userPosts.data.posts.map((post) => (
            <PostDisplayCard post={post} key={post.post_id} />
          ))
        ) : (
          <NoDataFound />
        )}
      </div>
    </>
  );
};

export default ModelProfilePostSec;
