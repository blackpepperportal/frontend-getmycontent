import React, { useEffect, useState } from "react";
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
import "./Wallet.css";
import { fetchWalletDetailsStart } from "../../store/actions/WalletAction";
import { fetchAllTransactionStart } from "../../store/actions/TransactionAction";
import WithdrawModal from "../helper/WithdrawModal";

const Wallet = (props) => {
  useEffect(() => {
    props.dispatch(fetchWalletDetailsStart());
    props.dispatch(fetchAllTransactionStart());
  }, []);

  const [withdrawModal, setWithdrawModal] = useState(false);

  const closeWithdrawModal = () => {
    setWithdrawModal(false);
  };

  return (
    <>
      <div className="wallet-sec">
        <Container>
          <Row>
            <Col sm={12} md={12}>
              <div className="wallet-header-sec">
                {props.wallet.loading ? (
                  "Loading..."
                ) : (
                  <Row>
                    <Col sm={12} md={6} xl={5}>
                      <div className="wallet-header-card">
                        <h5>Active Balance</h5>
                        <div className="wallet-header-details">
                          <Image
                            src={
                              window.location.origin +
                              "/assets/images/icons/wallet-active.svg"
                            }
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
                            src={
                              window.location.origin +
                              "/assets/images/icons/wallet-dollar.svg"
                            }
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
                        <Button
                          className="send-btn-white"
                          onClick={() => setWithdrawModal(true)}
                        >
                          WidthDraw
                        </Button>
                      </div>
                    </Col>
                  </Row>
                )}
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
                    {props.transaction.loading
                      ? "Loading..."
                      : props.transaction.data.history.length > 0
                      ? props.transaction.data.history.map((data) => (
                          <tr>
                            <td>RECEIVED</td>
                            <td className="amount">
                              <i class="fas fa-plus mr-1"></i>17.028503{" "}
                              <span className="amout-abb">STRAT</span>
                            </td>
                            <td>from : 17gzGq3GrFicPPkiEZcyvk5xZhMZ14PPNG</td>
                            <td>
                              <Badge className="unconfirmed-badge">
                                unconfirmed
                              </Badge>
                              <span>now</span>
                            </td>
                          </tr>
                        ))
                      : "No data Found"}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <WithdrawModal
        withdrawModal={withdrawModal}
        closeWithdrawModal={closeWithdrawModal}
      />
    </>
  );
};

const mapStateToPros = (state) => ({
  wallet: state.wallet.walletData,
  transaction: state.transaction.allTransaction,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(Wallet);
