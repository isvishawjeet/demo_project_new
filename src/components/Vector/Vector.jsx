/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Vector = ({
  property1,
  className,
  propertyDefault = "https://anima-uploads.s3.amazonaws.com/projects/64e9ed1d494693bef8e1156e/releases/64e9ed5ff1b61250aab16d9f/img/property-1-default.svg",
}) => {
  return (
    <img
      className={`vector ${className}`}
      alt="Property default"
      src={
        property1 === "default"
          ? propertyDefault
          : property1 === "variant-2"
          ? "https://anima-uploads.s3.amazonaws.com/projects/64e9ed1d494693bef8e1156e/releases/64e9ed5ff1b61250aab16d9f/img/property-1-variant2.svg"
          : "https://anima-uploads.s3.amazonaws.com/projects/64e9ed1d494693bef8e1156e/releases/64e9ed5ff1b61250aab16d9f/img/property-1-variant3.svg"
      }
    />
  );
};

Vector.propTypes = {
  property1: PropTypes.oneOf(["variant-4", "variant-2", "variant-3", "default"]),
  propertyDefault: PropTypes.string,
};
