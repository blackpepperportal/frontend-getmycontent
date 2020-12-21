import React, { useState } from "react";
import { Form, Button, Image, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import {
  sendTipStripeStart,
  sendTipWalletStart,
  sendTipPaypalStart,
} from "../../store/actions/SendTipAction";
import configuration from "react-global-configuration";


import PaypalExpressBtn from "react-paypal-express-checkout";
import { createNotification } from "react-redux-notify";
import {
  getSuccessNotificationMessage,
  getErrorNotificationMessage,
} from "../../components/helper/NotificationMessage";

const SendTipModal = (props) => {
  const [amount, setAmount] = useState(0);
  const [paymentType, setPaymentType] = useState("card");
  const [showPayPal, payPal] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (paymentType === "card")
      props.dispatch(
        sendTipStripeStart({
          post_id:
            props.post_id != undefined || props.post_id != null
              ? props.post_id
              : "",
          amount: amount,
          user_id: props.user_id,
        })
      );
    if (paymentType === "wallet")
      props.dispatch(
        sendTipWalletStart({
          post_id:
            props.post_id != undefined || props.post_id != null
              ? props.post_id
              : "",
          amount: amount,
          user_id: props.user_id,
        })
      );
    props.closeSendTipModal();
  };

  const paypalOnSuccess = (payment) => {
    setTimeout(() => {
        props.dispatch( 
          sendTipPaypalStart({
            payment_id : payment.paymentID,
            post_id:
            props.post_id != undefined || props.post_id != null
              ? props.post_id
              : "",
            amount: amount,
            user_id: props.user_id,
          })
        );
    }, 1000);
    props.closeSendTipModal();
  };

  const paypalOnError = (err) => {
      const notificationMessage = getErrorNotificationMessage(err);
      this.props.dispatch(createNotification(notificationMessage));
  };

  const paypalOnCancel = (data) => {
      const notificationMessage = getErrorNotificationMessage(
          "Payment cancelled please try again.."
      );
      this.props.dispatch(createNotification(notificationMessage));
  };

  const choosePaymentOption = (event) => {
    console.log(amount);
    setPaymentType(event);
  };

  let env = configuration.get("configData.PAYPAL_MODE"); // you can set here to 'production' for production
  let currency = "USD"; // or you can set this value from your props or state
  
  const client = {
    sandbox:configuration.get("configData.PAYPAL_ID"),
    production:configuration.get("configData.PAYPAL_ID"),
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
        {props.sendTip === true ? (
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Send tip</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="header-userinfo">
                <div className="g-avatar online_status_class">
                  <Image
                    src={props.userPicture}
                    alt={props.name}
                    className="tips__user__img"
                  />
                </div>
                <div className="popup-username-row">
                  <div className="pop-username">
                    <div className="">{props.name}</div>
                  </div>
                </div>
                <div className="popup-username-row">
                  <span className="pop-username popuser-realname">
                    <div className="pop-user-username">@{props.username}</div>
                  </span>
                </div>
              </div>

              <div className="floating-form">
                <div className="floating-label mb-5">
                  <input
                    className="floating-input"
                    type="number"
                    min="0"
                    step="any"
                    value={amount}
                    onChange={(event) => setAmount(event.currentTarget.value)}
                  />
                  <span className="highlight"></span>
                  <label className="default-label">Tip amount</label>
                </div>

                <Form className="mt-4">
                  {["radio"].map((type) => (
                    <div key={`custom-inline-${type}`} className="mb-3">
                      <Form.Check
                        custom
                        inline
                        label="Card"
                        type={type}
                        id="card"
                        value="card"
                        name="payment_type"
                        defaultChecked={true}
                        onChange={() => setPaymentType("card")}
                      />
                      {configuration.get("configData.is_paypal_enabled") == 1 ? (
                      <Form.Check
                        custom
                        inline
                        label="Paypal"
                        type={type}
                        // id={`custom-inline-${type}-2`}
                        id="paypal"
                        value="paypal"
                        name="payment_type"
                        onChange={() => setPaymentType("paypal")}
                      />
                      ) : "" }

                    </div>
                  ))}
                </Form>

                <div className="floating-label">
                  <input
                    className="floating-input"
                    type="text"
                    placeholder="Message (optional) "
                  />
                  <span className="highlight"></span>
                  <label className="default-label">Message (optional)</label>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              {paymentType === "paypal" && amount != 0 ? (
                <PaypalExpressBtn
                    env={env}
                    client={client}
                    currency={currency}
                    total={amount}
                    onError={paypalOnError}
                    onSuccess={paypalOnSuccess}
                    onCancel={paypalOnCancel}
                />
              ) : null}

              <Button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={props.closeSendTipModal}
              >
                CANCEL
              </Button>
              {paymentType !== "paypal" ? (
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
              ) : ''}
            </Modal.Footer>
          </Form>
        ) : null}
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
