import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchUserDetailsStart,
  editUserDetails,
  updateUserDetailsStart,
} from "../../../store/actions/UserAction";

class EditProfile extends Component {
  state = {
    loading: true,
    inputData: {
      picture: "",
      cover: "",
    },
  };
  componentDidMount() {
    if (this.props.userData.profile.loading) {
      this.props.dispatch(fetchUserDetailsStart());
    }
  }

  handleChange = ({ currentTarget: input }) => {
    this.props.dispatch(editUserDetails(input.name, input.value));
  };

  handleChangeImage = ({ currentTarget: input }) => {
    const inputData = { ...this.state.inputData };
    if (input.type === "file") {
      inputData[input.name] = input.files[0];
      this.setState({ inputData });
    }
    let file = input.files[0];
    // if (file) {
    //   // reader.readAsDataURL(file);
    //   setTimeout(() => {
    //     this.props.dispatch(updateUserDetailsStart(input.files[0]));
    //   }, 1000);
    // }
  };

  updateProfile = (event) => {
    event.preventDefault();
    this.props.dispatch(updateUserDetailsStart(this.state.inputData));
  };

  render() {
    const { profile } = this.props.userData;
    if (profile.loading === true) {
      return "Loading...";
    } else {
      return (
        <div className="card mb-4">
          <div className="card-header bg-transparent">
            <h4>Edit Profile</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <form onSubmit={this.updateProfile} autoComplete="off" mult>
                  <div className="row">
                    <div className="col-md-12 form-group mb-3">
                      <label for="Name">Name</label>

                      <input
                        className="form-control"
                        id="firstName1"
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={profile.data.name}
                        onChange={this.handleChange}
                        autoComplete="off"
                      />
                    </div>
                    <div className="col-md-12 form-group mb-3">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        className="form-control"
                        id="exampleInputEmail1"
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={profile.data.email}
                        onChange={this.handleChange}
                        autoComplete="off"
                      />
                    </div>
                    <div className="col-md-12 form-group mb-3">
                      <label for="phone">Phone</label>
                      <input
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone"
                        name="mobile"
                        value={profile.data.mobile}
                        onChange={this.handleChange}
                        autoComplete="off"
                      />
                    </div>
                    <div className="col-md-12 form-group mb-3">
                      <label for="about">About Me</label>
                      <textarea
                        className="form-control"
                        id="about"
                        placeholder="Share about you"
                        name="about"
                        value={
                          profile.data.about != "null" ? profile.data.about : ""
                        }
                        onChange={this.handleChange}
                        autoComplete="off"
                      ></textarea>
                    </div>
                    <div className="col-md-12 form-group mb-3">
                      <label for="about">Upload Profile Picture</label>

                      <input
                        type="file"
                        accept="image/*"
                        name="picture"
                        onChange={this.handleChangeImage}
                        className="form-control"
                      />
                      <small className="pt-2">
                        Please enter .png .jpeg .jpg images only. Ex: 80 * 80
                      </small>
                    </div>
                    <div className="col-md-12 form-group mb-3">
                      <label for="about">Upload Cover Image</label>

                      <input
                        type="file"
                        accept="image/*"
                        name="cover"
                        onChange={this.handleChangeImage}
                        className="form-control"
                      />
                      <small className="pt-2">
                        Please enter .png .jpeg .jpg images only. Ex: 1160 * 300
                      </small>
                    </div>

                    <div className="col-md-12 align-center">
                      <button
                        className="btn btn-primary"
                        type="submit"
                        disabled={this.props.userData.buttonDisable}
                      >
                        {" "}
                        {this.props.userData.loadingButtonContent != null
                          ? this.props.userData.loadingButtonContent
                          : "Submit"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <img
                  alt="edit-profile"
                  src={
                    window.location.origin + "/assets/images/edit-profile.svg"
                  }
                  className="img-fluid create-meeting-img"
                />
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

export default connect(mapStateToPros, mapDispatchToProps)(EditProfile);
