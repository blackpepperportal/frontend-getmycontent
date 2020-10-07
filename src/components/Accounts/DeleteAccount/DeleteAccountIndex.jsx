import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteAccountStart } from "../../../store/actions/UserAction";

class DeleteAccountIndex extends Component {
  state = {
    password: "",
  };
  handleChange = ({ currentTarget: input }) => {
    this.setState({ password: input.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(deleteAccountStart({ password: this.state.password }));
  };
  render() {
    return (
      <div className="card mb-4">
        <div className="card-header bg-transparent">
          <h4>Delete Account</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 align-center">
              <h5>
                <b>Hope, see you soon</b>
              </h5>
              <p>
                Note: Once you deleted account, you will lose your history and
                wishlist details
              </p>
              <form onSubmit={this.handleSubmit} autoComplete="new-password">
                <div className="row">
                  <div className="col-md-12 form-group mb-4">
                    <label for="password">Password</label>
                    <input
                      className="form-control"
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      autoComplete="off"
                    />
                  </div>
                  <div className="col-md-12">
                    <button
                      className="btn btn-primary mr-2"
                      type="submit"
                      disabled={this.props.users.buttonDisable}
                    >
                      {this.props.users.loadingButtonContent != null
                        ? this.props.users.loadingButtonContent
                        : "Delete Account"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6 text-center">
              <img
                alt="delete-account"
                src={
                  window.location.origin + "/assets/images/delete-account.svg"
                }
                className="img-fluid delete-account-img"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToPros = (state) => ({
  users: state.users,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(DeleteAccountIndex);
