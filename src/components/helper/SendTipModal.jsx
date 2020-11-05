import React, { useState } from "react";
import { Form, Button, Image, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import {
  sendTipStripeStart,
  sendTipWalletStart,
} from "../../store/actions/SendTipAction";

const SendTipModal = (props) => {
  const [amount, setAmount] = useState(0);
  const [paymentType, setPaymentType] = useState("wallet");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (paymentType === "card")
      props.dispatch(
        sendTipStripeStart({ post_id: props.post_id, amount: amount })
      );
    if (paymentType === "wallet")
      props.dispatch(
        sendTipWalletStart({ post_id: props.post_id, amount: amount })
      );
  };

  return (
    <>
      <Modal
        className="modal-dialog-center sent-tip-modal"
        size="md"
        centered
        show={props.sendTip}
        onHide={props.closeSendTipModal}
      >
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Send tip</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="header-userinfo">
              <div className="g-avatar online_status_class">
                <Image
                  src="assets/images/avatar/user-4.jpg"
                  alt="💕🦋Sarai Rollins🦋💕"
                  className="tips__user__img"
                />
              </div>
              <div className="popup-username-row">
                <div className="pop-username">
                  <div className=""> 💕🦋Sarai Rollins🦋💕</div>
                </div>
              </div>
              <div className="popup-username-row">
                <span className="pop-username popuser-realname">
                  <div className="pop-user-username"> @sarairollins</div>
                </span>
              </div>
            </div>

            <div className="floating-form">
              <div className="floating-label">
                <input
                  className="floating-input"
                  type="text"
                  value={amount}
                  onChange={(event) => setAmount(event.currentTarget.value)}
                />
                <span className="highlight"></span>
                <label className="default-label">Tip amount</label>
              </div>
              {/* <div className="floating-label">
                <input
                  className="floating-input"
                  type="radio"
                  label="wallet"
                  id="wallet"
                  value="wallet"
                  name="payment_type"
                  defaultChecked={true}
                  onChange={() => setPaymentType("wallet")}
                />
                <input
                  className="floating-input"
                  type="radio"
                  label="card"
                  id="card"
                  value="card"
                  name="payment_type"
                  onChange={() => setPaymentType("card")}
                />
                <label>Payment Type</label>
              </div> */}

              <Form className="mt-4">
                {['radio'].map((type) => (
                  <div key={`custom-inline-${type}`} className="mb-3">
                    <Form.Check
                      custom
                      inline
                      label="Wallet"
                      type={type}
                      // id={`custom-inline-${type}-1`}
                      id="wallet"
                      value="wallet"
                      name="payment_type"
                      defaultChecked={true}
                      onChange={() => setPaymentType("wallet")}
                    />
                    <Form.Check
                      custom
                      inline
                      label="Card"
                      type={type}
                      // id={`custom-inline-${type}-2`}
                      id="card"
                      value="card"
                      name="payment_type"
                      onChange={() => setPaymentType("card")}
                    />
                  </div>
                ))}
              </Form>

              <div className="floating-label">
                <input className="floating-input" type="text" placeholder="Message (optional) " />
                <span className="highlight"></span>
                <label className="default-label">Message (optional)</label>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
              onClick={props.closeSendTipModal}
            >
              CANCEL
            </Button>
            <Button
              type="button"
              className="btn btn-success"
              data-dismiss="modal"
              onClick={handleSubmit}
              disabled={props.tipStripe.buttonDisable}
            >
              {props.tipStripe.loadingButtonContent !== null
                ? props.tipStripe.loadingButtonContent
                : "SEND TIP"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

const mapStateToPros = (state) => ({
  tipStripe: state.tip.tipStripe,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(SendTipModal);
