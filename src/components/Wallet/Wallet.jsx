import React, { Component } from "react";
import { connect } from "react-redux";
import {Button, Container, Row, Col, Table, Image, Badge} from "react-bootstrap";
import "./Wallet.css"

class Wallet extends Component {

    render() {
        return (
            <>
                <div className="wallet-sec">
                    <Container>
                    <Row>
                        <Col sm={12} md={12}>
                            <div className="wallet-header-sec">
                                <Row>
                                    <Col sm={12} md={6} xl={5}>
                                        <div className="wallet-header-card">
                                            <h5>Active Balance</h5>
                                            <div className="wallet-header-details">
                                                <Image src="/assets/images/icons/wallet-active.svg" className="credit-img" />
                                                <h3>54,689<span className="amount-decimal">.76500293</span><span className="amount-abb">STRAT</span></h3>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6} xl={4}>
                                        <div className="wallet-header-card">
                                            <h5>Current Balance</h5>
                                            <div className="wallet-header-details">
                                                <Image src="/assets/images/icons/wallet-dollar.svg" className="credit-img" />
                                                <h3>29<span className="amount-decimal">.76500293</span><span className="amount-abb">BTC</span></h3>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={12} xl={3}>
                                        <div className="edit-save">
                                            <Button className="send-btn-white"> Send</Button>
                                            <Button className="receive-btn-blue"> Receive</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    </Container>
                </div>
                <div className="trans-table-sec">
                <Container>
                    <Row>
                        <Col sm={12} md={12}>
                        <h4>TRANSACTIONS</h4>
                        <div className="trans-table">
                            <Table borderedless responsive>
                                <tbody>
                                    <tr>
                                        <td>RECEIVED</td>
                                        <td className="amount"><i class="fas fa-plus mr-1"></i>17.028503 <span className="amout-abb">STRAT</span></td>
                                        <td>from : 17gzGq3GrFicPPkiEZcyvk5xZhMZ14PPNG</td>
                                        <td><Badge className="unconfirmed-badge">unconfirmed</Badge>
                                        <span>now</span></td>
                                    </tr>
                                    <tr>
                                        <td>RECEIVED</td>
                                        <td className="amount"> <i class="fas fa-plus mr-1"></i>17.028503 <span className="amout-abb">STRAT</span></td>
                                        <td>from : 17gzGq3GrFicPPkiEZcyvk5xZhMZ14PPNG</td>
                                        <td><Badge className="confirmed-badge">2 confirmed</Badge>
                                        <span>1 min ago</span></td>
                                    </tr>
                                    <tr>
                                        <td>SENT</td>
                                        <td className="amount"><i class="fas fa-minus mr-1"></i>189.28503 <span className="amout-abb">STRAT</span></td>
                                        <td>to : chris   Trew</td>
                                        <td><Badge className="confirmed-badge">2 confirmed</Badge>
                                        <span>1 min ago</span></td>
                                    </tr>
                                    <tr>
                                        <td>SENT</td>
                                        <td className="amount"><i class="fas fa-minus mr-1"></i>40.928503 <span className="amout-abb">STRAT</span></td>
                                        <td>to : 17gzGq3GrFicPPkiEZcyvk5xZhMZ14PPNG</td>
                                        <td><Badge className="confirmed-badge">2 confirmed</Badge>
                                        <span>5 hours ago</span></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        </Col>
                    </Row>
                </Container>
                </div>
            </>
        );
    }
}

export default Wallet;