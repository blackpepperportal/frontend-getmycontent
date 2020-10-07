import React, { Component } from "react";
import AddCardModel from "./AddCardModel";
import { connect } from "react-redux";
import {
  fetchCardDetailsStart,
  selectDefaultCardStart,
  deleteCardStart,
} from "../../../store/actions/CardsAction";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import AddCardLoader from "../../Loader/AddCardLoader";

const stripePromise = loadStripe("pk_test_uDYrTXzzAuGRwDYtu7dkhaF3");

class CardsList extends Component {
  constructor() {
    super();
    this.state = { stripe: null };
  }
  componentDidMount() {
    if (this.props.cards.cardDetails.loading)
      this.props.dispatch(fetchCardDetailsStart());
  }

  changeDefaultCard = (event, card) => {
    event.preventDefault();
    this.props.dispatch(
      selectDefaultCardStart({ user_card_id: card.user_card_id })
    );
  };

  deleteCard = (event, card) => {
    event.preventDefault();
    this.props.dispatch(deleteCardStart({ user_card_id: card.user_card_id }));
  };

  render() {
    const { cardDetails } = this.props.cards;
    return (
      <div className="card">
        <div className="card-header bg-transparent">
          <h4>Payments</h4>
        </div>
        <div className="card-body">
          <div className="row">
            {cardDetails.loading ? (
              <AddCardLoader />
            ) : cardDetails.data.cards.length > 0 ? (
              cardDetails.data.cards.map((card) => (
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 card-margin-btm">
                  <div className="card card-list-sec">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-10 col-md-9">
                          <p className="text-small text-muted">
                            XXXX XXXX XXXX {card.last_four}
                          </p>
                          <p className="text-muted">{card.card_holder_name}</p>
                          {card.is_default == 1 ? (
                            <a
                              className="card-link text-danger"
                              href="#"
                              onClick={(event) =>
                                this.changeDefaultCard(event, card)
                              }
                            >
                              Remove Default
                            </a>
                          ) : (
                            <a
                              className="card-link"
                              href="#"
                              onClick={(event) =>
                                this.changeDefaultCard(event, card)
                              }
                            >
                              Set as Default
                            </a>
                          )}
                        </div>
                        {card.is_default !== 1 ? (
                          <div className="col-lg-2 col-md-3 align-right-lg">
                            <div className="card-icon-right">
                              <i className="i-Credit-Card-2"></i>
                              <a
                                href="#"
                                onClick={(event) =>
                                  this.deleteCard(event, card)
                                }
                              >
                                <img
                                  src={
                                    window.location.origin +
                                    "/assets/images/remove-icon.png"
                                  }
                                  alt="remove-icon"
                                  className="remove-icon-card"
                                />
                              </a>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              "No data Found"
            )}
          </div>
          <div className="tab-content" id="myPillTabContent">
            <div
              className="tab-pane fade show active"
              id="homePIll"
              role="tabpanel"
              aria-labelledby="home-icon-pill"
            >
              <button
                className="btn btn-primary m-1"
                type="button"
                data-toggle="modal"
                data-target="#addCardModal"
              >
                Add Card
              </button>
            </div>
          </div>
        </div>
        <Elements stripe={stripePromise}>
          <AddCardModel />
        </Elements>
      </div>
    );
  }
}

const mapStateToPros = (state) => ({
  cards: state.cards,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(CardsList);
