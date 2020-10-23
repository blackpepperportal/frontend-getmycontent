import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteAccountStart } from "../../../store/actions/UserAction";
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
      <div className="delete-account-sec">
        <Container>
          <Row>
            <Col sm={12} md={12}>
              <div className="card">
                <div className="card-header bg-transparent">
                  <h4>Delete Account</h4>
                </div>
                <div className="card-body">
                  <Row>
                    <Col sm={12} md={12}>
                      <div className="card-details">
                        <h5>
                          <b>Hope, see you soon</b>
                        </h5>
                        <p>
                          Note: Once you deleted account, you will lose your history and
                          wishlist details
                        </p>
                      </div>
                      <Form onSubmit={this.handleSubmit} autoComplete="new-password">
                        <Form.Group>
                            <Form.Label for="password">Password</Form.Label>
                            <Form.Control
                              className="form-control"
                              id="password"
                              type="password"
                              placeholder="Enter your password"
                              name="password"
                              value={this.state.password}
                              onChange={this.handleChange}
                              autoComplete="off"
                            />
                        </Form.Group>
                        <Row className="mt-5">
                            <Col sm={12} xs={12} md={6} className="mx-auto">
                              <Button
                                className="btn btn-auth btn-lg btn btn-primary"
                                type="submit"
                                disabled={this.props.users.buttonDisable}
                              >
                                {this.props.users.loadingButtonContent != null
                                  ? this.props.users.loadingButtonContent
                                  : "Delete Account"}
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
  users: state.users,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(DeleteAccountIndex);
