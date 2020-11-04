import React, { useState, useEffect } from "react";
import { Form, Button, Image, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { getBankAccountStart } from "../../store/actions/BankAccountAction";
import { sendWithDrawRequestStart } from "../../store/actions/WithDrawAction";

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
        className="modal-dialog-center"
        size="md"
        centered
        show={props.withdrawModal}
        onHide={props.closeWithdrawModal}
      >
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Withdraw Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="floating-form">
              <div className="floating-label">
                <input
                  className="floating-input"
                  type="text"
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
                <label>Tip amount</label>
              </div>
              <div className="floating-label">
                {props.bankAccount.loading
                  ? "Loading..."
                  : props.bankAccount.data.billing_accounts.length > 0
                  ? props.bankAccount.data.billing_accounts.map((account) => (
                      <input
                        className="floating-input"
                        type="radio"
                        label="walet"
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
                  : "No data found"}

                <label>Choose Bank account</label>
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
