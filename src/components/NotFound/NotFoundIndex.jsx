import React from "react";

const NotFoundIndex = () => {
  return (
    <>
      <div className="not-found-sec">
        <div className="row">
          <div className="col-md-12">
            <div className="not-found-img-sec">
              <img
                alt="not-found"
                src={window.location.origin + "/assets/images/not-found.png"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundIndex;
