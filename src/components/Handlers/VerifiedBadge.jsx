import React from "react";
import { Image } from "react-bootstrap";
const VerifiedBadge = (props) => {
  return (
    <span className="verified-badge-sec">
      <Image
        src={window.location.origin + "/assets/images/verified.svg"}
        className="verified-dating"
        alt="verified-badge"
      />
      <span className="verified-info">Open For Dating</span>
    </span>
  );
};

export default VerifiedBadge;
