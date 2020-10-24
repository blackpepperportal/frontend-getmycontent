import React from "react";

const CreatePollModal = () => {
  return (
    <div className="modal fade" id="pollDuration">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div className="left-half">
              <p className="poll-model-title">Poll Duration</p>
            </div>
            <div className="right-half">
              {" "}
              <p className="poll-days">7 days</p>
            </div>
          </div>

          <div className="modal-body">
            <div className="b-make-post__expire-wrapper">
              <div className="b-make-post__expire__item">
                <input
                  id="ModalPollDuration0"
                  type="radio"
                  className="b-make-post__expire__input"
                  value="1"
                />
                <label
                  for="ModalPollDuration0"
                  className="b-make-post__expire__label"
                >
                  <span className="g-first-letter">1</span> day
                </label>
              </div>
              <div className="b-make-post__expire__item">
                <input
                  id="ModalPollDuration1"
                  type="radio"
                  className="b-make-post__expire__input"
                  value="3"
                />
                <label
                  for="ModalPollDuration1"
                  className="b-make-post__expire__label"
                >
                  <span className="g-first-letter">3</span> days
                </label>
              </div>
              <div className="b-make-post__expire__item">
                <input
                  id="ModalPollDuration2"
                  type="radio"
                  className="b-make-post__expire__input"
                  value="7"
                />
                <label
                  for="ModalPollDuration2"
                  className="b-make-post__expire__label"
                >
                  <span className="g-first-letter">7</span> days
                </label>
              </div>
              <div className="b-make-post__expire__item">
                <input
                  id="ModalPollDuration3"
                  type="radio"
                  className="b-make-post__expire__input"
                  value="30"
                />
                <label
                  for="ModalPollDuration3"
                  className="b-make-post__expire__label"
                >
                  <span className="g-first-letter">30</span> days
                </label>
              </div>
              <div className="b-make-post__expire__item">
                <input
                  id="ModalPollDuration4"
                  type="radio"
                  className="b-make-post__expire__input"
                  value="0"
                />
                <label
                  for="ModalPollDuration4"
                  className="b-make-post__expire__label"
                >
                  <span>
                    <span className="g-first-letter">N</span>o limit
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="simple-btn" data-dismiss="modal">
              Cancel
            </button>
            <button type="button" className="simple-btn">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePollModal;
