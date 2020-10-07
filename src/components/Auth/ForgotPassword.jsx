import React, { Component } from "react";
import { connect } from "react-redux";
import { forgotPasswordStart } from "../../store/actions/UserAction";
import { Link } from "react-router-dom";
import configuration from "react-global-configuration";
import { Notify } from "react-redux-notify";

class ForgotPassword extends Component {
  state = {
    inputData: {},
  };

  handleChange = ({ currentTarget: input }) => {
    const inputData = { ...this.state.inputData };
    inputData[input.name] = input.value;
    this.setState({ inputData });
  };

  handleForgotPasswordSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(forgotPasswordStart(this.state.inputData));
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
                    <div className="card o-hidden">
                      <div className="row">
                        <div
                          className="col-md-6 text-center forgot-password-img"
                          style={{
                            backgroundSize: "contain",
                            backgroundImage: `url(${window.location.origin}/assets/images/forgot-password.svg)`,
                          }}
                        ></div>
                        <Link to={"/"}>
                          <div class="before-logo">
                            <img
                              src={configuration.get("configData.site_icon")}
                              alt="forgot-password"
                            />
                          </div>
                        </Link>
                        <div className="col-md-6">
                          <div className="p-4">
                            <div className="card-title mb-3 text-center">
                              Forgot Password
                            </div>
                            <p className="text-muted text-center">
                              {configuration.get("configData.tag_name")}
                            </p>
                            <form
                              onSubmit={this.handleForgotPasswordSubmit}
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
                              <div className="col-md-12 text-center">
                                <button
                                  className="btn btn-lg btn-block btn-primary"
                                  type="submit"
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
                              <div className="col-md-12 col-xs-12 col-sm-12 text-center">
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

export default connect(mapStateToPros, mapDispatchToProps)(ForgotPassword);
