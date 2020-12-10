import React from "react";
import { Link } from "react-router-dom";
import { Image, Media } from "react-bootstrap";

import NoDataFound from "../NoDataFound/NoDataFound";
import PostDisplayCard from "../helper/PostDisplayCard";

const ModelProfileVideoSec = (props) => {
  return (
    <div
      role="tabpanel"
      className={
        props.activeSec === "video"
          ? "tab-pane fade in active"
          : "tab-pane fade"
      }
      id="Section3"
    >
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
  );
};

export default ModelProfileVideoSec;
