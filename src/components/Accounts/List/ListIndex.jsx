import React from "react";

const ListIndex = () => {
  return (
    <section className="lists">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <div className="vertical-menu">
              <div className="bookmarkes-list bookmarks-right-side">
                <div className="pull-left">
                  <a className="bookmarkes-list" href="bookmarks.html">
                    <img
                      src="assets/images/icons/back.svg"
                      className="svg-clone"
                    />
                    Lists
                  </a>
                </div>
                <div className="pull-right">
                  <a className="bookmarks-filter" href="#">
                    <img
                      src="assets/images/icons/plus.svg"
                      className="svg-clone"
                      width=""
                    />
                  </a>
                </div>
              </div>

              <div className="user-lists-heading">
                <div className="pull-left">
                  <h3>CUSTOM ORDER</h3>
                </div>
                <div className="pull-right">
                  <a className="" href="#">
                    <img
                      src="assets/images/icons/sort.svg"
                      className="svg-clone"
                      width=""
                    />
                  </a>
                </div>
              </div>

              <div className="user-lists">
                <a href="following.php">
                  <div className="pull-left">
                    <h3>Fans</h3>
                    <span className="user-list-count">0 people</span>
                  </div>
                  <div className="pull-right"></div>
                </a>
              </div>

              <div className="user-lists">
                <a href="following.php">
                  <div className="pull-left">
                    <h3>Following</h3>
                    <span className="user-list-count">5 peoples</span>
                  </div>
                  <div className="pull-right">
                    <div className="user-list-avatar-lists">
                      <span className="list-avatar">
                        <img
                          src="assets/images/avatar/s-user.jpg"
                          alt="user-images"
                        />
                      </span>
                      <span className="list-avatar">
                        <img
                          src="assets/images/avatar/s-user-3.jpg"
                          alt="user-images"
                        />
                      </span>
                      <span className="list-avatar">
                        <img
                          src="assets/images/avatar/user-2.jpg"
                          alt="user-images"
                        />
                      </span>
                      <span className="list-avatar">
                        <img
                          src="assets/images/avatar/user-3.jpg"
                          alt="user-images"
                        />
                      </span>
                      <span className="list-avatar">
                        <img
                          src="assets/images/avatar/user-5.jpg"
                          alt="user-images"
                        />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="user-lists">
                <a href="following.php">
                  <div className="pull-left">
                    <h3>Favorites</h3>
                    <span className="user-list-count">0 people</span>
                  </div>
                  <div className="pull-right"></div>
                </a>
              </div>
              <div className="user-lists">
                <a href="following.php">
                  <div className="pull-left">
                    <h3>Bookmarks</h3>
                    <span className="user-list-count">0 people</span>
                  </div>
                  <div className="pull-right"></div>
                </a>
              </div>
              <div className="user-lists">
                <a href="#">
                  <div className="pull-left">
                    <h3>Close Friends</h3>
                    <span className="user-list-count">0 people</span>
                  </div>
                  <div className="pull-right"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListIndex;
