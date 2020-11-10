import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="no-data-found-sec">
        <div className="row">
          <div className="col-md-12">
            <div className="no-data-found-img-sec">
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

export default NotFound;
