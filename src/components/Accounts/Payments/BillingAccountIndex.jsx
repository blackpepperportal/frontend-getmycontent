import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Button,
  Container,
  Row,
  Col,
  Table,
  Image,
  Badge,
} from "react-bootstrap";
import "../../Wallet/Wallet.css";
import {
  deleteBankAccountStart,
  getBankAccountStart,
  makeDefaultBankAccountStart,
} from "../../../store/actions/BankAccountAction";
import { Link } from "react-router-dom";

const BillingAccountIndex = (props) => {
  useEffect(() => {
    props.dispatch(getBankAccountStart());
  }, []);
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
                        <Image
                          src="/assets/images/icons/wallet-active.svg"
                          className="credit-img"
                        />
                        <h3>
                          54,689
                          <span className="amount-decimal">.76500293</span>
                          <span className="amount-abb">STRAT</span>
                        </h3>
                      </div>
                    </div>
                  </Col>
                  <Col sm={12} md={6} xl={4}>
                    <div className="wallet-header-card">
                      <h5>Current Balance</h5>
                      <div className="wallet-header-details">
                        <Image
                          src="/assets/images/icons/wallet-dollar.svg"
                          className="credit-img"
                        />
                        <h3>
                          29<span className="amount-decimal">.76500293</span>
                          <span className="amount-abb">BTC</span>
                        </h3>
                      </div>
                    </div>
                  </Col>
                  <Col sm={12} md={12} xl={3}>
                    <div className="edit-save">
                      <Link className="receive-btn-blue" to={"/add-bank"}>
                        Add New Account
                      </Link>
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
              <h4>Billing Account List</h4>
              <div className="trans-table">
                <Table borderedless responsive>
                  <tbody>
                    {props.bankAccount.loading
                      ? "Loading..."
                      : props.bankAccount.data.billing_accounts.length > 0
                      ? props.bankAccount.data.billing_accounts.map(
                          (accounts) => (
                            <tr key={accounts.user_billing_account_id}>
                              <td>{accounts.account_holder_name}</td>
                              <td className="amount">
                                {accounts.account_number}
                              </td>
                              <td>{accounts.bank_name}</td>
                              <td>{accounts.ifsc_code}</td>
                              <td>{accounts.swift_code}</td>
                              {accounts.is_default === 1 ? (
                                <td>
                                  <Badge className="unconfirmed-badge">
                                    Default
                                  </Badge>
                                </td>
                              ) : (
                                <td> - </td>
                              )}
                              {accounts.is_default === 0 ? (
                                <Button
                                  onClick={() =>
                                    props.dispatch(
                                      makeDefaultBankAccountStart({
                                        user_billing_account_id:
                                          accounts.user_billing_account_id,
                                      })
                                    )
                                  }
                                >
                                  Make Default
                                </Button>
                              ) : null}
                              <td>
                                {" "}
                                <Button
                                  onClick={() =>
                                    props.dispatch(
                                      deleteBankAccountStart({
                                        user_billing_account_id:
                                          accounts.user_billing_account_id,
                                      })
                                    )
                                  }
                                >
                                  Delete
                                </Button>{" "}
                              </td>
                            </tr>
                          )
                        )
                      : "No data found"}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

const mapStateToPros = (state) => ({
  bankAccount: state.bankAccount.bankAccount,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(BillingAccountIndex);
