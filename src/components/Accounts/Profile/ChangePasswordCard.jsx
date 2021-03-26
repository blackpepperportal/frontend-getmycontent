import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import { changePasswordStart } from "../../../store/actions/UserAction";
import { translate, t } from "react-multi-lang";

const ChangePasswordCard = (props) => {
  const [inputData, setInputData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    props.dispatch(changePasswordStart(inputData));
  };

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
            <h4>{t("change_password")}</h4>
          </div>
          <div className="card-body">
            <Form autoComplete="new-password" onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label for="old_password">{t("old_password")}</Form.Label>
                <Form.Control
                  className="form-control"
                  id="old_password"
                  type="password"
                  placeholder={t("old_password_placeholder")}
                  name="old_password"
                  value={inputData.old_password}
                  onChange={(event) =>
                    setInputData({
                      ...inputData,
                      old_password: event.currentTarget.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label for="password">{t("new_password")}</Form.Label>
                <Form.Control
                  className="form-control"
                  id="password"
                  type="password"
                  placeholder={t("new_password_placeholder")}
                  name="password"
                  value={inputData.password}
                  onChange={(event) =>
                    setInputData({
                      ...inputData,
                      password: event.currentTarget.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label for="password_confirmation">
                  {t("confirm_password")}
                </Form.Label>
                <Form.Control
                  className="form-control"
                  id="password_confirmation"
                  type="password"
                  placeholder={t("confirm_password")}
                  name="password_confirmation"
                  value={inputData.password_confirmation}
                  onChange={(event) =>
                    setInputData({
                      ...inputData,
                      password_confirmation: event.currentTarget.value,
                    })
                  }
                />
              </Form.Group>
              <Row className="mt-5">
                <Col sm={12} xs={12} md={6} className="mx-auto">
                  <Button
                    className="btn btn-auth btn-lg btn btn-primary"
                    type="submit"
                    disabled={props.changePassword.buttonDisable}
                    onClick={handleSubmit}
                  >
                    {props.changePassword.loadingButtonContent != null
                      ? props.changePassword.loadingButtonContent
                      : t("change_password")}
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

const mapStateToPros = (state) => ({
  changePassword: state.changePassword,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(translate(ChangePasswordCard));
