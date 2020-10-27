import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Container,
    Row,
    Col,
    InputGroup,
    Tabs,
    Table,
    Tab,
    Dropdown,
    DropdownButton,
    Image,
    Badge,
    Media,
} from "react-bootstrap";

import AddCardModal from "../../helper/AddCardModal";

import "./CardListIndex.css"


// class CardListIndex extends Component {
const CardListIndex = (props) => {

    // const [addCard, setAddCard] = useState(false);

    // const closeAddCardModal = () => {
    //   setAddCard(false);
    // };

    const [addCard, setAddCard] = useState(false);

    const closeAddCardModal = () => {
      setAddCard(false);
    };

    // render() {
        return (
            <>
            <div className="card-list-sec">
                <Container>
                    <h4 className="head-title">Card List</h4>
                    <Row>
                        <Col sm={12} md={6} xl={4}>
                            <div className="card-list-box">
                                <h5 className="mb-4">XXXX XXXX XXXX 4242</h5>
                                <h5 className="text-muted">Visa</h5>
                                <div className="payment-bottom">
                                    <div className="action-btn">
                                        <p className="card-link-text text-success">default card</p>
                                    </div>
                                    <Image src="/assets/images/icons/credit-card.svg" className="credit-img"/>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} xl={4}>
                            <div className="card-list-box">
                                <h5 className="mb-4">XXXX XXXX XXXX 4242</h5>
                                <h5 className="text-muted">Visa</h5>
                                <div className="payment-bottom">
                                    <div className="action-btn">
                                        <p className="card-link-text text-success">Default card</p>
                                        <p className="card-link-text text-danger">Remove card</p>
                                    </div>
                                    <Image src="/assets/images/icons/credit-card.svg" className="credit-img"/>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} xl={4}>
                            <div className="card-list-box">
                                <h5 className="mb-4">XXXX XXXX XXXX 4242</h5>
                                <h5 className="text-muted">Visa</h5>
                                <div className="payment-bottom">
                                    <div className="action-btn">
                                        <p className="card-link-text text-success">Default card</p>
                                        <p className="card-link-text text-danger">Remove card</p>
                                    </div>
                                    <Image src="/assets/images/icons/credit-card.svg" className="credit-img"/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={6} xl={4}>
                            <div className="card-list-box"  onClick={() => setAddCard(true)}>
                                <div className="add-account-sec">
                                    <Image src="/assets/images/icons/add-card.svg" className="add-card-img"/>
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
    }
// }

export default CardListIndex;