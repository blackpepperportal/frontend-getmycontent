import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  Tabs,
  Tab,
  Dropdown,
  DropdownButton,
  Image,
  Badge,
  Media,
} from "react-bootstrap";
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
      <div className="change-password-sec">
        <Container>
          <Row>
            <Col sm={12} md={12}>
              <div className="card">
                <div className="card-header bg-transparent">
                  <h4>Change Password</h4>
                </div>
                <div className="card-body">
                  <Row>
                    <Col sm={12} md={12}>
                      <Form onSubmit={this.handleSubmit} autoComplete="new-password">
                          <Form.Group>
                            <Form.Label for="old_password">Old Password</Form.Label>
                            <Form.Control
                              className="form-control"
                              id="old_password"
                              type="password"
                              placeholder="Enter your old password"
                              name="old_password"
                              value={inputData.old_password}
                              onChange={this.handleChange}
                              autoComplete="off"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label for="password">New Password</Form.Label>
                            <Form.Control
                              className="form-control"
                              id="password"
                              type="password"
                              placeholder="Enter your new password"
                              name="password"
                              value={inputData.password}
                              onChange={this.handleChange}
                              autoComplete="off"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label for="password_confirmation">Confirm Password</Form.Label>
                            <Form.Control
                              className="form-control"
                              id="password_confirmation"
                              type="password"
                              placeholder="Confirm Password"
                              name="password_confirmation"
                              value={inputData.password_confirmation}
                              onChange={this.handleChange}
                              autoComplete="off"
                            />
                          </Form.Group>
                          <Row className="mt-5">
                            <Col sm={12} xs={12} md={6} className="mx-auto">
                                <Button
                                  className="btn btn-auth btn-lg btn btn-primary"
                                  type="submit"
                                  disabled={this.props.changePassword.buttonDisable}
                                >
                                  {this.props.changePassword.loadingButtonContent != null
                                    ? this.props.changePassword.loadingButtonContent
                                    : "Change Password"}
                                </Button>
                            </Col>
                          </Row>
                      </Form>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
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
