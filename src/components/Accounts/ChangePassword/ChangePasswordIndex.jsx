import React, { Component } from "react";
import { connect } from "react-redux";

import { changePasswordStart } from "../../../store/actions/UserAction";

class ChangePasswordIndex extends Component {
  state = {
    inputData: {},
  };
  handleChange = ({ currentTarget: input }) => {
    const inputData = { ...this.state.inputData };
    inputData[input.name] = input.value;
    this.setState({ inputData });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(changePasswordStart(this.state.inputData));
  };
  render() {
    const { inputData } = this.props.changePassword;
    return (
      <div className="card mb-4">
        <div className="card-header bg-transparent">
          <h4>Change Password</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.handleSubmit} autoComplete="new-password">
                <div className="row">
                  <div className="col-md-12 form-group mb-3 align-center">
                    <label for="old_password">Old Password</label>
                    <input
                      className="form-control"
                      id="old_password"
                      type="password"
                      placeholder="Enter your old password"
                      name="old_password"
                      value={inputData.old_password}
                      onChange={this.handleChange}
                      autoComplete="off"
                    />
                  </div>
                  <div className="col-md-12 form-group mb-3 align-center">
                    <label for="password">New Password</label>
                    <input
                      className="form-control"
                      id="password"
                      type="password"
                      placeholder="Enter your new password"
                      name="password"
                      value={inputData.password}
                      onChange={this.handleChange}
                      autoComplete="off"
                    />
                  </div>
                  <div className="col-md-12 form-group mb-3 align-center">
                    <label for="password_confirmation">Confirm Password</label>
                    <input
                      className="form-control"
                      id="password_confirmation"
                      type="password"
                      placeholder="Confirm Password"
                      name="password_confirmation"
                      value={inputData.password_confirmation}
                      onChange={this.handleChange}
                      autoComplete="off"
                    />
                  </div>
                  <div className="col-md-12 align-center">
                    <button
                      className="btn btn-primary mr-2 resp-mr-2"
                      type="submit"
                      disabled={this.props.changePassword.buttonDisable}
                    >
                      {this.props.changePassword.loadingButtonContent != null
                        ? this.props.changePassword.loadingButtonContent
                        : "Change Password"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6 text-center">
              <img
                alt="change-password"
                src={
                  window.location.origin + "/assets/images/change-password.svg"
                }
                className="img-fluid change-password-img"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToPros = (state) => ({
  changePassword: state.changePassword,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(ChangePasswordIndex);
