import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getLoginInputData,
  userLoginStart,
} from "../../store/actions/UserAction";
import { Link } from "react-router-dom";
import configuration from "react-global-configuration";
import { Notify } from "react-redux-notify";
var const_time_zone = Intl.DateTimeFormat().resolvedOptions().timeZone;

class LoginIndex extends Component {
  state = {
    inputData: { timezone: const_time_zone },
  };

  handleChange = ({ currentTarget: input }) => {
    const inputData = { ...this.state.inputData };
    inputData[input.name] = input.value;
    this.setState({ inputData });
  };
  handleLoginSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(userLoginStart(this.state.inputData));
  };

  render() {
    const { inputData } = this.state;
    return (
      <>
        <Notify position="TopRight" />
        <div className="app-admin-wrap layout-sidebar-large">
          <div className="login-box">
            <div className="main-content">
              <div className="row">
                <div className="col-lg-8 col-md-9 col-sm-12 col-xs-12 mx-auto">
                  <div className="auth-content">
                    <div className="card">
                      <div className="row">
                        <div
                          className="col-md-6 col-sm-12 text-center login-img"
                          style={{
                            backgroundSize: "contain",
                            backgroundImage: `url(${window.location.origin}/assets/images/login.svg)`,
                          }}
                        ></div>
                        <Link to={"/"}>
                          <div class="before-logo">
                            <img
                              src={configuration.get("configData.site_icon")}
                              alt="login"
                            />
                          </div>
                        </Link>
                        <div className="col-md-6 col-sm-12">
                          <div className="p-4">
                            <div className="card-title mb-3 text-center">
                              Welcome back to{" "}
                              {configuration.get("configData.site_name")}
                            </div>
                            <p className="text-muted text-center">
                              {configuration.get("configData.tag_name")}
                            </p>
                            <form
                              onSubmit={this.handleLoginSubmit}
                              autoComplete="off"
                            >
                              <div className="form-group mb-3">
                                <label for="exampleInputEmail1">
                                  Email address
                                </label>
                                <input
                                  className="form-control"
                                  id="exampleInputEmail1"
                                  type="email"
                                  placeholder="Enter email"
                                  name="email"
                                  value={inputData.email}
                                  onChange={this.handleChange}
                                  autoComplete="off"
                                />
                                <small
                                  id="emailHelp"
                                  className="form-text text-muted"
                                >
                                  We'll never share your email with anyone else.
                                </small>
                              </div>
                              <div className="form-group mb-3">
                                <label for="Password">Password</label>
                                <input
                                  className="form-control"
                                  type="password"
                                  id="Password"
                                  placeholder="Enter Password"
                                  name="password"
                                  value={inputData.password}
                                  onChange={this.handleChange}
                                  autoComplete="off"
                                />
                              </div>
                              <div className="col-md-12 text-center">
                                <button
                                  className="btn btn-lg btn-primary btn-block"
                                  disabled={this.props.inputData.buttonDisable}
                                >
                                  {this.props.inputData.loadingButtonContent !=
                                  null
                                    ? this.props.inputData.loadingButtonContent
                                    : "Submit"}
                                </button>
                              </div>
                            </form>
                            <div className="row mt-3">
                              <div className="col-md-6 col-xs-12 col-sm-12 align-center">
                                <Link className="text-muted" to={"/signup"}>
                                  <u>Don't have an Account?</u>
                                </Link>
                              </div>
                              <div className="col-md-6 col-xs-12 col-sm-12 align-center">
                                <Link
                                  className="text-muted float-right"
                                  to={"/forgot-password"}
                                >
                                  <u>Forgot Password?</u>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToPros = (state) => ({
  inputData: state.users,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(LoginIndex);
