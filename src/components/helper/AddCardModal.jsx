import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Image, Modal, Media } from "react-bootstrap";
import Background from "../helper/g-3.jpg";
import PaymentAddCardModal from "../helper/PaymentAddCardModal";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_uDYrTXzzAuGRwDYtu7dkhaF3");

const AddCardModel = (props) => {
  const [paymentAddCard, setPaymentAddCard] = useState(false);

  const closePaymentAddCardModal = () => {
    setPaymentAddCard(false);
  };

  return (
    <>
      <Modal
        className="modal-dialog-center add-card-modal"
        size="md"
        centered
        show={props.addCard}
        onHide={props.closeAddCardModal}
      >
        <Form>
          <Modal.Header
            closeButton
            style={{
              background: `url(${Background})`,
              backgroundPosition: "top",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "12em",
            }}
          ></Modal.Header>
          <Modal.Body>
            <div className="user-profile-img">
              <Image src="assets/images/avatar/b-4.jpg" className="" />
            </div>
            <div className="add-card-content-header">
              <Link to="#">
                <div className="add-card-user-name">
                  {localStorage.getItem("name")}
                  <Image
                    src="assets/images/icons/verified.svg"
                    className="add-card-verified-icon ml-3"
                  />
                </div>
              </Link>
              <h6 className="sub-title">@{localStorage.getItem("username")}</h6>
              <h4 className="title">SUBSCRIPTION BENEFITS:</h4>
              <div className="flex-center">
                <ul className="list-unstyled">
                  <Media as="li">
                    <i class="fas fa-check mr-2"></i>
                    <span>Full access to this user's content</span>
                  </Media>
                  <Media as="li">
                    <i class="fas fa-check mr-2"></i>
                    <span>Direct message with this user</span>
                  </Media>
                  <Media as="li">
                    <i class="fas fa-check mr-2"></i>
                    <span>Cancel your subscription at any time</span>
                  </Media>
                </ul>
              </div>
              <div className="lists-button-group">
                <Link
                  type="button"
                  className="g-btn m-rounded m-border m-profile m-with-icon"
                  onClick={() => {
                    setPaymentAddCard(true);
                    props.closeAddCardModal();
                  }}
                >
                  <Image
                    src="assets/images/icons/subscribe-blue.svg"
                    className="svg-clone"
                  />
                  <span className="b-btn-text">PLEASE ADD A PAYMENT CARD</span>
                </Link>
              </div>
            </div>
          </Modal.Body>
        </Form>
      </Modal>
      <Elements stripe={stripePromise}>
        <PaymentAddCardModal
          paymentAddCard={paymentAddCard}
          closePaymentAddCardModal={closePaymentAddCardModal}
        />
      </Elements>
    </>
  );
};

export default AddCardModel;
