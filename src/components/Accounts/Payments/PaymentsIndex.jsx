import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Tabs,
  Table,
  Tab,
  Image,
  Button,
} from "react-bootstrap";
import "./PaymentsIndex.css";
import { fetchAllTransactionStart } from "../../../store/actions/TransactionAction";
import { fetchWithDrawalsStart } from "../../../store/actions/WithDrawAction";
import WithdrawModal from "../../helper/WithdrawModal";

const PaymentsIndex = (props) => {
  useEffect(() => {
    props.dispatch(fetchAllTransactionStart());
    props.dispatch(fetchWithDrawalsStart());
  }, []);
  const [withdrawModal, setWithdrawModal] = useState(false);

  const closeWithdrawModal = () => {
    setWithdrawModal(false);
  };
  return (
    <div className="payment-sec">
      <Container>
        <Row>
          <Col sm={12} md={12} xl={4} lg={4}>
            <div className="payment-card">
              <div className="payment-header">
                <div className="payment-cover-sec">
                  <Image
                    src="assets/images/b-4.jpg"
                    className="payment-cover"
                  />
                </div>
                <div className="paymnet-user-info">
                  <Image
                    src="assets/images/avatar/harish-jee.png"
                    className="profile-img"
                  />
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
                <h2>
                  <i class="fab fa-twitter mr-3"></i> Tweet your referral URL
                </h2>
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} xl={8} lg={8}>
            <div className="payment-tabs-card">
              <h2>Statements</h2>
              <Button
                className="pull-right"
                onClick={() => setWithdrawModal(true)}
              >
                Send Withdraw
              </Button>
              <Tabs defaultActiveKey="earnings" id="uncontrolled-tab-example">
                <Tab eventKey="earnings" title="Earnings">
                  <div className="payment-tabs-content">
                    <Table borderedless responsive>
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
                        {props.transaction.loading
                          ? "Loading..."
                          : props.transaction.data.history.length > 0
                          ? props.transaction.data.history.map((history) => (
                              <tr>
                                <td>08-15-20</td>
                                <td>4:30 AM</td>
                                <td>Subscription</td>
                                <td>$ 9.99</td>
                                <td>$ 2.00</td>
                                <td>$ 7.99</td>
                                <td>
                                  <p>
                                    <i class="far fa-clock mr-2"></i>PENDING
                                  </p>
                                </td>
                              </tr>
                            ))
                          : "No data found"}
                      </tbody>
                    </Table>
                  </div>
                </Tab>

                <Tab eventKey="payments" title="Withdraws">
                  <div className="payment-tabs-content">
                    <Table borderedless responsive>
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
                        {props.withDrawals.loading
                          ? "Loading..."
                          : props.withDrawals.data.length > 0
                          ? props.withDrawals.data.map((data) => (
                              <tr>
                                <td>08-15-20</td>
                                <td>4:30 AM</td>
                                <td>Subscription</td>
                                <td>$ 9.99</td>
                                <td>$ 2.00</td>
                                <td>$ 7.99</td>
                                <td>
                                  <p>
                                    <i class="far fa-clock mr-2"></i>PENDING
                                  </p>
                                </td>
                              </tr>
                            ))
                          : "No data found"}
                      </tbody>
                    </Table>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
      <WithdrawModal
        withdrawModal={withdrawModal}
        closeWithdrawModal={closeWithdrawModal}
      />
    </div>
  );
};

const mapStateToPros = (state) => ({
  withDrawals: state.withDraw.withDrawals,
  transaction: state.transaction.allTransaction,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(PaymentsIndex);
