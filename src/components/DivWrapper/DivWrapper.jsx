/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DivWrapper = ({
  property1,
  className,
  overlapGroupClassName,
  divClassName,
  vectorClassName,
  vector = "https://anima-uploads.s3.amazonaws.com/projects/64e9ed1d494693bef8e1156e/releases/64e9ed5ff1b61250aab16d9f/img/vector-11.svg",
}) => {
  return (
    <div className={`div-wrapper ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <div className={`div ${divClassName}`}>Join a meeting</div>
        <img className={`img ${vectorClassName}`} alt="Vector" src={vector} />
      </div>
    </div>
  );
};

DivWrapper.propTypes = {
  property1: PropTypes.oneOf(["default"]),
  vector: PropTypes.string,
};
