import React, { useState } from "react";
import { Form, Button, Image, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import {
  sendTipStripeStart,
  sendTipWalletStart,
} from "../../store/actions/SendTipAction";

const PPVPaymentModal = (props) => {
  const [amount, setAmount] = useState(0);
  const [paymentType, setPaymentType] = useState("wallet");

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
    props.closePPVPaymentModal();
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
              <Modal.Title>Message</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="floating-form">
                <p>Are You Sure?</p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={props.closePPVPaymentModal}
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
                  : "Confirm"}
              </Button>
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

export default connect(mapStateToPros, mapDispatchToProps)(PPVPaymentModal);
