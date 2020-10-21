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
            <div class="header-userinfo">
              <div class="g-avatar online_status_class">
                <img
                  src="assets/images/avatar/user-4.jpg"
                  alt="💕🦋Sarai Rollins🦋💕"
                  class="tips__user__img"
                />
              </div>
              <div class="popup-username-row">
                <div class="pop-username">
                  <div class=""> 💕🦋Sarai Rollins🦋💕</div>
                </div>
              </div>
              <div class="popup-username-row">
                <span class="pop-username popuser-realname">
                  <div class="pop-user-username"> @sarairollins</div>
                </span>
              </div>
            </div>

            <div class="floating-form">
              <div class="floating-label">
                <input class="floating-input" type="text" placeholder=" " />
                <span class="highlight"></span>
                <label>Tip amount</label>
              </div>

              <div class="floating-label">
                <input class="floating-input" type="text" placeholder=" " />
                <span class="highlight"></span>
                <label>Message (optional)</label>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" class="btn btn-default" data-dismiss="modal">
              CANCEL
            </Button>
            <Button type="button" class="btn btn-default" data-dismiss="modal">
              SEND TIP
            </Button>
          </Modal.Footer>
        </Form>
      </Modal> */}

      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <h4 class="modal-title"> Send tip </h4>
            </div>
            <div class="modal-body">
              <div class="header-userinfo">
                <div class="g-avatar online_status_class">
                  <img
                    src="assets/images/avatar/user-4.jpg"
                    alt="💕🦋Sarai Rollins🦋💕"
                    class="tips__user__img"
                  />
                </div>
                <div class="popup-username-row">
                  <div class="pop-username">
                    <div class=""> 💕🦋Sarai Rollins🦋💕</div>
                  </div>
                </div>
                <div class="popup-username-row">
                  <span class="pop-username popuser-realname">
                    <div class="pop-user-username"> @sarairollins</div>
                  </span>
                </div>
              </div>

              <div class="floating-form">
                <div class="floating-label">
                  <input class="floating-input" type="text" placeholder=" " />
                  <span class="highlight"></span>
                  <label>Tip amount</label>
                </div>

                <div class="floating-label">
                  <input class="floating-input" type="text" placeholder=" " />
                  <span class="highlight"></span>
                  <label>Message (optional)</label>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                CANCEL
              </button>
              <button
                type="button"
                class="btn btn-default"
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
