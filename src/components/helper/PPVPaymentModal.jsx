import React, { useState } from "react";
import { Form, Button, Image, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import {
  PPVPaymentStripeStart,
  PPVPaymentWalletStart,
} from "../../store/actions/PostAction";

const PPVPaymentModal = (props) => {
  const [amount, setAmount] = useState(0);
  const [paymentType, setPaymentType] = useState("card");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (paymentType === "card")
      props.dispatch(
        PPVPaymentStripeStart({
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
        PPVPaymentWalletStart({
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
        show={props.PPVPayment}
        onHide={props.closePPVPaymentModal}
      >
        {props.PPVPayment === true ? (
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
                disabled={props.ppvPayStripe.buttonDisable}
              >
                {props.ppvPayStripe.loadingButtonContent !== null
                  ? props.ppvPayStripe.loadingButtonContent
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
  ppvPayStripe: state.post.ppvPayStripe,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(PPVPaymentModal);
