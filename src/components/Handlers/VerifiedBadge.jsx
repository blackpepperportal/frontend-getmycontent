import React from "react";
import { Image } from "react-bootstrap";
const VerifiedBadge = (props) => {
  return (
    <span>
      <Image
        src="assets/images/verified.svg"
        className="svg-clone m-verified"
        alt="verified-badge"
      />
    </span>
  );
};

export default VerifiedBadge;
