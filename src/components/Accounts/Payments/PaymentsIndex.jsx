import React, { Component } from "react";
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

import "./PaymentsIndex.css"

class PaymentsIndex extends Component {

    render() {
        return (
            <div className="payment-sec">
                <Container>
                    <Row>
                        <Col sm={12} md={12} xl={4} lg={4}>
                            <div className="payment-card">
                                <div className="payment-header">
                                    <div className="payment-cover-sec">
                                        <Image src="assets/images/b-4.jpg" className="payment-cover" />
                                    </div>
                                    <div className="paymnet-user-info">
                                        <Image src="assets/images/avatar/harish-jee.png" className="profile-img" />
                                        <div className="payment-user-details">
                                            <h2 className="title">Beno Darry</h2>
                                            <p className="desc">@benodarry</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="payment-body">
                                    <Row>
                                        <Col sm={6} xs={6} md={6} className="padding-sm space-sm">
                                            <div className="flex-box">
                                                <div className="payment-body-icon">
                                                    <i class="fas fa-bars"></i>
                                                </div>
                                                <div className="payment-body-info">
                                                    <h3>POSTS</h3>
                                                    <h4>101</h4>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={6} xs={6} md={6} className="padding-sm space-sm">
                                            <div className="flex-box">
                                                <div className="payment-body-icon">
                                                    <i class="fas fa-image"></i>
                                                </div>
                                                <div className="payment-body-info">
                                                    <h3>PHOTOS</h3>
                                                    <h4>45</h4>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={6} xs={6} md={6} className="padding-sm">
                                            <div className="flex-box">
                                                <div className="payment-body-icon">
                                                    <i class="fas fa-video"></i>
                                                </div>
                                                <div className="payment-body-info">
                                                    <h3>VIDEOS</h3>
                                                    <h4>23</h4>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={6} xs={6} md={6} className="padding-sm space-sm">
                                            <div className="flex-box">
                                                <div className="payment-body-icon">
                                                    <i class="fas fa-heart"></i>
                                                </div>
                                                <div className="payment-body-info">
                                                    <h3>LIKES</h3>
                                                    <h4>0</h4>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={6} xs={6} md={6} className="padding-sm">
                                            <div className="flex-box">
                                                <div className="payment-body-icon">
                                                    <i class="fas fa-unlock-alt"></i>
                                                </div>
                                                <div className="payment-body-info">
                                                    <h3>SUBCRIBED</h3>
                                                    <h4>0</h4>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={6} xs={6} md={6} className="padding-sm">
                                            <div className="flex-box">
                                                <div className="payment-body-icon">
                                                    <i class="fas fa-user-friends"></i>
                                                </div>
                                                <div className="payment-body-info">
                                                    <h3>SUBSCRIBERS</h3>
                                                    <h4>59</h4>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className="payment-refer-add-box">
                                <div className="payment-body">
                                    <h2>Refer your friends to</h2>
                                    <Link to="#" aria-current="page" className="sign-in-logo">
                                        <Image src="./assets/images/logo.png" width="237" />
                                    </Link>
                                    <h2>earn 5% commission,</h2>
                                    <h2>LIFETIME!</h2>
                                </div>
                                <div className="payment-footer">
                                    <h2><i class="fab fa-twitter mr-3"></i> Tweet your referral URL</h2>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={12} xl={8} lg={8}>
                            <div className="payment-tabs-card">
                                <h2>Statements</h2>
                                <Tabs defaultActiveKey="earnings" id="uncontrolled-tab-example">
                                    <Tab eventKey="earnings" title="Earnings">
                                        <div className="payment-tabs-content">
                                            <Table borderedless  responsive>
                                                <thead>
                                                    <tr className="bg-white">
                                                        <th>Date</th>
                                                        <th>Time</th>
                                                        <th>Item</th>
                                                        <th>Amount</th>
                                                        <th>Fee</th>
                                                        <th>Net</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>08-15-20</td>
                                                        <td>4:30 AM</td>
                                                        <td>Subscription</td>
                                                        <td>$ 9.99</td>
                                                        <td>$ 2.00</td>
                                                        <td>$ 7.99</td>
                                                        <td><p><i class="far fa-clock mr-2"></i>PENDING</p></td>
                                                    </tr>
                                                    <tr>
                                                        <td>08-15-20</td>
                                                        <td>4:30 AM</td>
                                                        <td>Re-Subscription</td>
                                                        <td>$ 9.99</td>
                                                        <td>$ 2.00</td>
                                                        <td>$ 7.99</td>
                                                        <td><p><i class="far fa-clock mr-2"></i>PENDING</p></td>    
                                                    </tr>
                                                    <tr>
                                                        <td>08-15-20</td>
                                                        <td>4:30 AM</td>
                                                        <td>Tip</td>
                                                        <td>$ 9.99</td>
                                                        <td>$ 2.00</td>
                                                        <td>$ 7.99</td>
                                                        <td><p className="tick"><i class="far fa-check-circle mr-2"></i>COMPLETE</p></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="payments" title="Payments">
                                    </Tab>
                                </Tabs>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default PaymentsIndex;