import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import api from "../../../Environment";
import { connect } from "react-redux";
import { createNotification } from "react-redux-notify";
import {
  getSuccessNotificationMessage,
  getErrorNotificationMessage,
} from "../../helper/NotificationMessage";
import { fetchCardDetailsStart } from "../../../store/actions/CardsAction";

const $ = window.$;

const AddCardModel = ({ dispatch }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [addCardButtonDisable, setAddCardButtonDisable] = useState(false);
  const [addCardLoadingContent, setAddCardLoadingContent] = useState(null);

  const addCard = async (ev) => {
    ev.preventDefault();
    setAddCardButtonDisable(true);
    setAddCardLoadingContent("Loading... Please wait");
    if (stripe) {
      await stripe
        .createPaymentMethod({
          type: "card",
          card: elements.getElement(CardElement),
        })
        .then((payload) => {
          const inputData = {
            card_token: payload.paymentMethod.id,
          };
          api
            .postMethod("cards_add", inputData)
            .then((response) => {
              if (response.data.success) {
                const notificationMessage = getSuccessNotificationMessage(
                  response.data.message
                );
                dispatch(createNotification(notificationMessage));
                dispatch(fetchCardDetailsStart());

                setAddCardButtonDisable(false);
                setAddCardLoadingContent(null);
                $("#addCardModal").modal("hide");
              } else {
                const notificationMessage = getErrorNotificationMessage(
                  response.data.error
                );
                dispatch(createNotification(notificationMessage));
              }
            })
            .catch((error) => {
              setAddCardButtonDisable(false);
              setAddCardLoadingContent(null);
              const notificationMessage = getErrorNotificationMessage(
                "Error Please try again"
              );
              dispatch(createNotification(notificationMessage));
            });
        })
        .catch((error) => {
          setAddCardButtonDisable(false);
          setAddCardLoadingContent(null);
          const notificationMessage = getErrorNotificationMessage(
            "Please check your card details and try again.."
          );
          dispatch(createNotification(notificationMessage));
        });
    } else {
      setAddCardButtonDisable(false);
      setAddCardLoadingContent(null);
      const notificationMessage = getErrorNotificationMessage(
        "Stripe is not configured"
      );
      dispatch(createNotification(notificationMessage));
    }
  };

  return (
    <div
      className="modal fade"
      id="addCardModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addCardModalTitle-2"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered copy-meeting-modal"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title" id="addCardModalTitle-2">
              Add Card
            </h3>
            <button
              className="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div className="modal-body">
            {/* <h4 className="title">Add Card</h4> */}
            <CardElement />
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-primary btn-block"
              type="button"
              disabled={addCardButtonDisable}
              onClick={addCard}
            >
              {addCardLoadingContent != null ? addCardLoadingContent : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(null, mapDispatchToProps)(AddCardModel);
