import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button, Container, Row, Col, Table, Badge } from "react-bootstrap";
import "../../Wallet/Wallet.css";
import {
  deleteBankAccountStart,
  getBankAccountStart,
  makeDefaultBankAccountStart,
} from "../../../store/actions/BankAccountAction";
import { Link } from "react-router-dom";
import NoDataFound from "../../NoDataFound/NoDataFound";
import BillingAccountLoader from "../../Loader/BillingAccountLoader";

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
                  <Col sm={12} md={12} xl={9}>
                    <h3>Billing Accounts</h3>
                    <p className="text-muted f-2">
                      You earnings will be created based on the withdraw billing
                      accounts. Please add proper information
                    </p>
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
              <div className="trans-table">
                <Table borderedless responsive>
                  <tbody>
                    {props.bankAccount.loading ? (
                      <BillingAccountLoader />
                    ) : props.bankAccount.data.billing_accounts.length > 0 ? (
                      props.bankAccount.data.billing_accounts.map(
                        (accounts) => (
                          <tr key={accounts.user_billing_account_id}>
                            <td>{accounts.nickname}</td>
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
                            <td>
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
                              ) : null}{" "}
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
                    ) : (
                      <NoDataFound />
                    )}
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
