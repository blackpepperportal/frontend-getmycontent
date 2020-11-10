import React from "react";

const NotFoundIndex = () => {
  return (
    <>
      <div className="no-data-found-sec-1">
        <div className="row">
          <div className="col-md-12">
            <div className="no-data-found-img-sec-1">
              <img
                alt="not-found"
                src={window.location.origin + "/assets/images/no-data-found-1.svg"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundIndex;
