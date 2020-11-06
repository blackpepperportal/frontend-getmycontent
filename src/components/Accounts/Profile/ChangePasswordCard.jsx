import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const ChangePasswordCard = (props) => {
  return (
    <>
      <div
        role="tabpanel"
        className={
          props.activeSec === "change-password-card"
            ? "tab-pane fade in active"
            : "tab-pane fade"
        }
        id="Section3"
      >
        <div className="change-password-sec">
          <div className="card-header bg-transparent">
            <h4>Change Password</h4>
          </div>
          <div className="card-body">
            <Form autoComplete="new-password">
              <Form.Group>
                <Form.Label for="old_password">Old Password</Form.Label>
                <Form.Control
                  className="form-control"
                  id="old_password"
                  type="password"
                  placeholder="Enter your old password"
                  name="old_password"
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
                />
              </Form.Group>
              <Form.Group>
                <Form.Label for="password_confirmation">
                  Confirm Password
                </Form.Label>
                <Form.Control
                  className="form-control"
                  id="password_confirmation"
                  type="password"
                  placeholder="Confirm Password"
                  name="password_confirmation"
                />
              </Form.Group>
              <Row className="mt-5">
                <Col sm={12} xs={12} md={6} className="mx-auto">
                  <Button
                    className="btn btn-auth btn-lg btn btn-primary"
                    type="submit"
                  >
                    Change Password
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePasswordCard;
