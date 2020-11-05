import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Dropdown, Image, Media } from "react-bootstrap";
import PostDisplayCard from "../helper/PostDisplayCard";

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
            <span className="post-number">1 Post</span>
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

        {props.userPosts.loading
          ? "Loading..."
          : props.userPosts.data.posts.length > 0
          ? props.userPosts.data.posts.map((post) => (
              <PostDisplayCard post={post} key={post.post_id} />
            ))
          : "No data found"}
      </div>
    </>
  );
};

export default ModelProfilePostSec;
