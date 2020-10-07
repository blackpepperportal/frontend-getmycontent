import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileLoader from "../../Loader/ProfileLoader";
import {
  fetchUserDetailsStart,
  editUserDetails,
  updateUserDetailsStart,
} from "../../../store/actions/UserAction";
import { Link } from "react-router-dom";

class ProfileIndex extends Component {
  state = {
    displayAccountAccountModel: false,
  };
  componentDidMount() {
    if (this.props.userData.profile.loading)
      this.props.dispatch(fetchUserDetailsStart());
  }

  render() {
    const userData = this.props.userData.profile;
    if (userData.loading == true) {
      return (
        <div className="main-wrapper profile xs-padding">
          <div className="container">
            <div className="row">
              <ProfileLoader />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card user-profile o-hidden mb-4">
          <div
            className="header-cover"
            style={{
              backgroundImage: `url(
                ${localStorage.getItem("user_cover")})`,
            }}
          ></div>
          <div className="user-content">
            <div className="user-info">
              <img
                className="profile-picture avatar-lg mb-2"
                src={userData.data.picture}
                alt={userData.data.name}
              />
              <p className="m-0 text-24">{userData.data.name}</p>
              {/* <p className="text-muted m-0">User</p> */}
            </div>
            <div className="edit-btn">
              <Link to={"/edit-profile"}>
                <button
                  className="btn btn-outline-primary width-200 btn-md m-1"
                  type="button"
                >
                  Edit Profile
                </button>
              </Link>

              <Link to={"/change-password"}>
                <button
                  className="btn btn-outline-primary width-200 btn-md m-1"
                  type="button"
                >
                  Change Password
                </button>
              </Link>

              <Link to={"/delete-account"}>
                <button
                  className="btn btn-outline-primary width-200 btn-md m-1"
                  type="button"
                >
                  Delete Account
                </button>
              </Link>
            </div>
          </div>
          <div className="card-body align-center">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className="i-Mail text-16 mr-1"></i> Email
                      </p>
                      <span>{userData.data.email}</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className="i-Old-Telephone text-16 mr-1"></i> Phone
                        Number
                      </p>
                      <span>{userData.data.mobile}</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className="i-Clock text-16 mr-1"></i> Joined
                      </p>
                      <span>{userData.data.created_at}</span>
                    </div>

                    <div className="mb-4">
                      <p className="text-primary mb-1">
                        <i className="i-Cloud-Weather text-16 mr-1"></i> About
                        Me
                      </p>
                      <span>
                        {userData.data.about != "null"
                          ? userData.data.about
                          : ""}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToPros = (state) => ({
  userData: state.users,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(ProfileIndex);
