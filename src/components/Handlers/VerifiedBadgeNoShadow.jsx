import React from "react";
import { Image } from "react-bootstrap";
const VerifiedBadgeNoShadow = (props) => {
  return (
    <span className="verified-badge-sec no-shadow">
      <Image
        src="assets/images/verified.svg"
        className="verified-dating"
        alt="verified-badge"
      /> 
      <span className="verified-info">Open For Dating</span>
    </span>
  );
};

export default VerifiedBadgeNoShadow;
