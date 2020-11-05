import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Image } from "react-bootstrap";
import AddCardModal from "../../helper/AddCardModal";
import "./CardsIndex.css";
import { fetchCardDetailsStart } from "../../../store/actions/CardsAction";
import { Link } from "react-router-dom";

const CardsIndex = (props) => {
  useEffect(() => {
    props.dispatch(fetchCardDetailsStart());
  }, []);

  const [addCard, setAddCard] = useState(false);

  const closeAddCardModal = () => {
    setAddCard(false);
  };

  const { cards } = props;

  return (
    <>
      <div className="card-list-sec">
        <Container>
          <h4 className="head-title">Your Cards</h4>
          <Row>
            {cards.loading
              ? "Loading..."
              : cards.data.cards.length > 0
              ? cards.data.cards.map((card) => (
                  <Col sm={12} md={6} xl={4}>
                    <div className="card-list-box">
                      <h5 className="mb-4">XXXX XXXX XXXX {card.last_four}</h5>
                      <h5 className="text-muted">{card.card_type}</h5>
                      <div className="payment-bottom">
                        <div className="action-btn">
                          {card.is_default == 1 ? (
                            <p className="card-link-text text-success">
                              default card
                            </p>
                          ) : (
                            <Link className="card-link-text text-info">
                              Mark as Default
                            </Link>
                          )}
                        </div>
                        <Image
                          src="/assets/images/icons/credit-card.svg"
                          className="credit-img"
                        />
                      </div>
                    </div>
                  </Col>
                ))
              : "No data found"}
          </Row>
          <Row>
            <Col sm={12} md={6} xl={4}>
              <div className="card-list-box" onClick={() => setAddCard(true)}>
                <div className="add-account-sec">
                  <Image
                    src="/assets/images/icons/add-card.svg"
                    className="add-card-img"
                  />
                  <h5 className="text-muted">Add Card</h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <AddCardModal addCard={addCard} closeAddCardModal={closeAddCardModal} />
    </>
  );
};

const mapStateToPros = (state) => ({
  cards: state.cards.cardDetails,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(CardsIndex);
