import React, { useState } from "react";
import { Form, Button, Image, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import {
  subscriptionPaymentStripeStart,
  subscriptionPaymentPaypalStart,
} from "../../store/actions/SubscriptionAction";
import PaypalExpressBtn from "react-paypal-express-checkout";
import { createNotification } from "react-redux-notify";
import {
  getSuccessNotificationMessage,
  getErrorNotificationMessage,
} from "../../components/helper/NotificationMessage";
import configuration from "react-global-configuration";

const PaymentModal = (props) => {
  const [paymentType, setPaymentType] = useState("card");

  const [showPayPal, payPal] = useState(false);

  let env = configuration.get("configData.PAYPAL_MODE"); // you can set here to 'production' for production
  let currency = "USD"; // or you can set this value from your props or state

  const client = {
    sandbox: configuration.get("configData.PAYPAL_ID"),
    production: configuration.get("configData.PAYPAL_ID"),
  };

  const choosePaymentOption = (event) => {
    setPaymentType(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (paymentType === "card")
      props.dispatch(
        subscriptionPaymentStripeStart({
          user_unique_id: props.user_unique_id,
          plan_type: props.subscriptionData.plan_type,
          is_free: props.subscriptionData.is_free,
        })
      );
    if (paymentType === "paypal") showPayPal(true);

    // props.closePaymentModal();
  };

  const paypalOnSuccess = (payment) => {
    console.log(payment);
    setTimeout(() => {
      props.dispatch(
        subscriptionPaymentPaypalStart({
          payment_id: payment.paymentID,
          user_unique_id: props.user_unique_id,
          plan_type: props.subscriptionData.plan_type,
          is_free: props.subscriptionData.is_free,
        })
      );
    }, 1000);
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

  return (
    <>
      <Modal
        className="modal-dialog-center sent-tip-modal"
        size="md"
        centered
        show={props.subscrptionPayment}
        onHide={props.closePaymentModal}
      >
        {props.subscrptionPayment === true ? (
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Subscribe</Modal.Title>
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
                    <div className="">
                      {props.name}
                      {props.is_verified_badge == 1 ? (
                        <img
                          className="verified-badge"
                          alt="verified-badge"
                          src={configuration.get('configData.verified_badge_file') ? configuration.get('configData.verified_badge_file') : ""
                          }
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="popup-username-row">
                  <span className="pop-username popuser-realname">
                    <div className="pop-user-username">@{props.username}</div>
                  </span>
                </div>
              </div>

              <div className="floating-form">
                <div>
                  <div className="pop-user-username">
                    Amount - {props.subscriptionData.amount_formatted}
                  </div>
                </div>
                <Form className="mt-4">
                  {["radio"].map((type) => (
                    <div key={`custom-inline-${type}`} className="mb-3">
                      <Form.Check
                        custom
                        inline
                        label="Card"
                        type={type}
                        // id={`custom-inline-${type}-2`}
                        id="card"
                        value="card"
                        name="payment_type"
                        defaultChecked={true}
                        onChange={(event) => {
                          choosePaymentOption(event.currentTarget.value);
                        }}
                      />
                      {configuration.get("configData.is_paypal_enabled") ==
                      1 ? (
                        <Form.Check
                          custom
                          inline
                          label="Paypal"
                          type={type}
                          id="paypal"
                          value="paypal"
                          name="payment_type"
                          onChange={(event) => {
                            choosePaymentOption(event.currentTarget.value);
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </Form>
              </div>
            </Modal.Body>
            <Modal.Footer>
              {paymentType === "paypal" &&
              props.subscriptionData.amount != 0 ? (
                <PaypalExpressBtn
                  env={env}
                  client={client}
                  currency={currency}
                  total={props.subscriptionData.amount}
                  onError={paypalOnError}
                  onSuccess={paypalOnSuccess}
                  onCancel={paypalOnCancel}
                />
              ) : null}

              <Button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={props.closePaymentModal}
              >
                CANCEL
              </Button>
              {paymentType !== "paypal" ? (
                <Button
                  type="button"
                  className="btn btn-success"
                  data-dismiss="modal"
                  onClick={handleSubmit}
                  disabled={props.subPayStripe.buttonDisable}
                >
                  {props.subPayStripe.loadingButtonContent !== null
                    ? props.subPayStripe.loadingButtonContent
                    : "Pay Now"}
                </Button>
              ) : (
                ""
              )}
            </Modal.Footer>
          </Form>
        ) : null}
      </Modal>
    </>
  );
};

const mapStateToPros = (state) => ({
  subPayStripe: state.subscriptions.subPayStripe,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(PaymentModal);
