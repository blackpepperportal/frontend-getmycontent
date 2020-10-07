import React, { Component } from "react";
import { connect } from "react-redux";
import { userRegisterStart } from "../../store/actions/UserAction";
import { Link, NavLink } from "react-router-dom";
import configuration from "react-global-configuration";
import { Notify } from "react-redux-notify";
var const_time_zone = Intl.DateTimeFormat().resolvedOptions().timeZone;

class RegisterIndex extends Component {
  state = {
    inputData: { timezone: const_time_zone },
  };

  handleChange = ({ currentTarget: input }) => {
    const inputData = { ...this.state.inputData };
    inputData[input.name] = input.value;
    this.setState({ inputData });
  };

  handleRegisterSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(userRegisterStart(this.state.inputData));
  };

  render() {
    const { inputData } = this.state;
    return (
      <>
        <Notify position="TopRight" />
        <div className="app-admin-wrap layout-sidebar-large">
          <div className="signup-box">
            <div className="main-content">
              <div className="row">
                <div className="col-lg-8 col-md-9 col-sm-12 col-xs-12 mx-auto">
                  <div className="auth-content">
                    <div className="card o-hidden">
                      <div className="row">
                        <div
                          className="col-md-6 text-center signup-img"
                          style={{
                            backgroundSize: "contain",
                            backgroundImage: `url(${window.location.origin}/assets/images/signup.svg)`,
                          }}
                        ></div>
                        <Link to={"/"}>
                          <div class="before-logo">
                            <img
                              src={configuration.get("configData.site_icon")}
                              alt="register"
                            />
                          </div>
                        </Link>
                        <div className="col-md-6">
                          <div className="p-4">
                            <div className="card-title mb-3 text-center">
                              Welcome to{" "}
                              {configuration.get("configData.site_name")}
                            </div>
                            <p className="text-muted text-center">
                              {configuration.get("configData.tag_name")}
                            </p>
                            <form
                              onSubmit={this.handleRegisterSubmit}
                              autoComplete="off"
                            >
                              <div className="form-group mb-3">
                                <label htmlFor="firstName1">Name</label>
                                <input
                                  className="form-control"
                                  id="firstName1"
                                  type="text"
                                  placeholder="Enter your name"
                                  name="name"
                                  value={inputData.name}
                                  onChange={this.handleChange}
                                  autoComplete="off"
                                />
                              </div>
                              <div className="form-group mb-3">
                                <label htmlFor="exampleInputEmail1">
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
                                <label htmlFor="phone">Phone(Optional)</label>
                                <input
                                  className="form-control"
                                  id="phone"
                                  placeholder="Enter phone"
                                  name="mobile"
                                  value={inputData.mobile}
                                  onChange={this.handleChange}
                                  autoComplete="off"
                                />
                              </div>
                              <div className="form-group mb-3">
                                <label htmlFor="Password">Password</label>
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
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    id="invalidCheck"
                                    type="checkbox"
                                    required="required"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="invalidCheck"
                                  >
                                    Agree to{" "}
                                    <NavLink to={"/page/terms"} target="_blank">
                                      Terms Conditions
                                    </NavLink>{" "}
                                    and{" "}
                                    <NavLink
                                      to={"/page/privacy"}
                                      target="_blank"
                                    >
                                      Privacy Policy
                                    </NavLink>
                                  </label>
                                  <div className="invalid-feedback">
                                    You must agree before submitting.
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <button
                                  type="submit"
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
                            <div className="row mt-3 text-center">
                              <div className="col-md-12 col-xs-12 col-sm-12">
                                <Link className="text-muted" to={"/login"}>
                                  <u>Already have an Account?</u>
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

export default connect(mapStateToPros, mapDispatchToProps)(RegisterIndex);
