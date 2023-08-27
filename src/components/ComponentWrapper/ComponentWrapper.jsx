/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ComponentWrapper = ({
  className,
  healthiconsBloodClassName,
  healthiconsBlood = "https://anima-uploads.s3.amazonaws.com/projects/64e9ed1d494693bef8e1156e/releases/64e9ed5ff1b61250aab16d9f/img/healthicons-blood-cells-3.svg",
  divClassName,
}) => {
  return (
    <div className={`component-wrapper ${className}`}>
      <img
        className={`healthicons-blood ${healthiconsBloodClassName}`}
        alt="Healthicons blood"
        src={healthiconsBlood}
      />
      <div className={`text-wrapper-2 ${divClassName}`}>Know About Cancer</div>
    </div>
  );
};

ComponentWrapper.propTypes = {
  healthiconsBlood: PropTypes.string,
};
