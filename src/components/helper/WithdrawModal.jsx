import React, { useState, useEffect } from "react";
import { Form, Button, Modal, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getBankAccountStart } from "../../store/actions/BankAccountAction";
import { sendWithDrawRequestStart } from "../../store/actions/WithDrawAction";
import { Link } from "react-router-dom";

const WithdrawModel = (props) => {
  useEffect(() => {
    props.dispatch(getBankAccountStart());
  }, []);

  const [inputData, setInputData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    props.dispatch(sendWithDrawRequestStart(inputData));
    props.closeWithdrawModal();
  };

  return (
    <>
      <Modal
        className="modal-dialog-center withdraw-modal"
        size="md"
        centered
        show={props.withdrawModal}
        onHide={props.closeWithdrawModal}
      >
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Send Request to Admin</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {props.payments.loading ? (
              "Loading"
            ) : (
              <Row>
                <Col md="12">
                  <div className="mb-5">
                    <h4 className="mb-2">
                      Min Amount Required:{" "}
                      <span className="text-muted">
                        {
                          props.payments.data
                            .user_withdrawals_min_amount_formatted
                        }
                      </span>
                    </h4>
                    <h4 className="text-muted">
                      Wallet Balance:{" "}
                      <span className="text-muted">
                        {props.payments.data.user_wallet
                          ? props.payments.data.user_wallet.remaining_formatted
                          : ""}
                      </span>
                    </h4>
                  </div>
                </Col>
              </Row>
            )}
            <div className="floating-form">
              <div className="floating-label">
                <input
                  className="floating-input"
                  type="number"
                  placeholder="Amount"
                  value={inputData.requested_amount}
                  onChange={(event) =>
                    setInputData({
                      ...inputData,
                      requested_amount: event.currentTarget.value,
                    })
                  }
                />
                <span className="highlight"></span>
                <label className="default-label">Enter Amount</label>
              </div>
              <div className="floating-label">
                <label className="label-default-1">Choose Bank account</label>
                  <Form>
                    {["radio"].map((type) => (
                      <div key={`custom-inline-${type}`} className="mb-3">
                        {props.bankAccount.loading ? (
                          "Loading..."
                        ) : props.bankAccount.data.billing_accounts.length > 0 ? (
                          props.bankAccount.data.billing_accounts.map((account) => (
                              <Form.Check
                                custom
                                inline
                                label={account.nickname}
                                type={type}
                                id={account.user_billing_account_id}
                                value={account.user_billing_account_id}
                                name="user_billing_account_id"
                                onChange={(event) =>
                                  setInputData({
                                    ...inputData,
                                    user_billing_account_id:
                                      account.user_billing_account_id,
                                  })
                                }
                              />
                          ))
                        ) : (
                          <p>
                            No Bank accounts added. To add account, please{" "}
                            <Link className="text-sm" to={`/add-bank`}>
                              Click here
                            </Link>
                          </p>
                        )}
                      </div>
                    ))}
                </Form>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
              onClick={props.closeWithdrawModal}
            >
              CANCEL
            </Button>
            <Button
              type="button"
              className="btn btn-success"
              data-dismiss="modal"
              onClick={handleSubmit}
              disabled={props.sendWithDraw.buttonDisable}
            >
              {props.sendWithDraw.loadingButtonContent !== null
                ? props.sendWithDraw.loadingButtonContent
                : "Send Request"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

const mapStateToPros = (state) => ({
  sendWithDraw: state.withDraw.sendWithDraw,
  bankAccount: state.bankAccount.bankAccount,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(WithdrawModel);
