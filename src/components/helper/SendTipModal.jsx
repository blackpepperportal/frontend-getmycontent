import React from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Image,
  Modal,
} from "react-bootstrap";

const SendTipModal = (props) => {
  return (
    <>
      {/* <Modal
        className=""
        size="md"
        show={props.sendTip}
        onHide={props.closeSendTipModal}
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Send tip</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="header-userinfo">
              <div className="g-avatar online_status_class">
                <img
                  src="assets/images/avatar/user-4.jpg"
                  alt="💕🦋Sarai Rollins🦋💕"
                  className="tips__user__img"
                />
              </div>
              <div className="popup-username-row">
                <div className="pop-username">
                  <div className=""> 💕🦋Sarai Rollins🦋💕</div>
                </div>
              </div>
              <div className="popup-username-row">
                <span className="pop-username popuser-realname">
                  <div className="pop-user-username"> @sarairollins</div>
                </span>
              </div>
            </div>

            <div className="floating-form">
              <div className="floating-label">
                <input className="floating-input" type="text" placeholder=" " />
                <span className="highlight"></span>
                <label>Tip amount</label>
              </div>

              <div className="floating-label">
                <input className="floating-input" type="text" placeholder=" " />
                <span className="highlight"></span>
                <label>Message (optional)</label>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" className="btn btn-default" data-dismiss="modal">
              CANCEL
            </Button>
            <Button type="button" className="btn btn-default" data-dismiss="modal">
              SEND TIP
            </Button>
          </Modal.Footer>
        </Form>
      </Modal> */}

      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title"> Send tip </h4>
            </div>
            <div className="modal-body">
              <div className="header-userinfo">
                <div className="g-avatar online_status_class">
                  <img
                    src="assets/images/avatar/user-4.jpg"
                    alt="💕🦋Sarai Rollins🦋💕"
                    className="tips__user__img"
                  />
                </div>
                <div className="popup-username-row">
                  <div className="pop-username">
                    <div className=""> 💕🦋Sarai Rollins🦋💕</div>
                  </div>
                </div>
                <div className="popup-username-row">
                  <span className="pop-username popuser-realname">
                    <div className="pop-user-username"> @sarairollins</div>
                  </span>
                </div>
              </div>

              <div className="floating-form">
                <div className="floating-label">
                  <input
                    className="floating-input"
                    type="text"
                    placeholder=" "
                  />
                  <span className="highlight"></span>
                  <label>Tip amount</label>
                </div>

                <div className="floating-label">
                  <input
                    className="floating-input"
                    type="text"
                    placeholder=" "
                  />
                  <span className="highlight"></span>
                  <label>Message (optional)</label>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                CANCEL
              </button>
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                SEND TIP
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendTipModal;
