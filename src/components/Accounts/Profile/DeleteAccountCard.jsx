import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import { deleteAccountStart } from "../../../store/actions/UserAction";

const DeleteAccountCard = (props) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.dispatch(deleteAccountStart({ password: password }));
  };

  return (
    <>
      <div
        role="tabpanel"
        className={
          props.activeSec === "delete-account-card"
            ? "tab-pane fade in active"
            : "tab-pane fade"
        }
        id="Section4"
      >
        <div className="delete-account-sec">
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
                          Note: Once you deleted account, you will lose your
                          history and wishlist details
                        </p>
                      </div>
                      <Form autoComplete="new-password" onSubmit={handleSubmit}>
                        <Form.Group>
                          <Form.Label for="password">Password</Form.Label>
                          <Form.Control
                            className="form-control"
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            value={password}
                            onChange={(event) =>
                              setPassword(event.currentTarget.value)
                            }
                          />
                        </Form.Group>
                        <Row className="mt-5">
                          <Col sm={12} xs={12} md={6} className="mx-auto">
                            <Button
                              className="btn btn-auth btn-lg btn btn-primary"
                              type="submit"
                              disabled={props.deleteAcc.buttonDisable}
                            >
                              {props.deleteAcc.loadingButtonContent !== null
                                ? props.deleteAcc.loadingButtonContent
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
        </div>
      </div>
    </>
  );
};

const mapStateToPros = (state) => ({
  deleteAcc: state.users.deleteAccount,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(DeleteAccountCard);
