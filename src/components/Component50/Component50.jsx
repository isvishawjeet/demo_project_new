/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ComponentWrapper } from "../ComponentWrapper";
import { DivWrapper } from "../DivWrapper";
import "./style.css";

export const Component50 = ({
  className,
  overlapClassName,
  groupClassName,
  imageClassName,
  image = "https://anima-uploads.s3.amazonaws.com/projects/64e9ed1d494693bef8e1156e/releases/64e9ed5ff1b61250aab16d9f/img/image-119-2@2x.png",
  groupClassNameOverride,
  divClassName,
  vectorClassName,
  vector = "https://anima-uploads.s3.amazonaws.com/projects/64e9ed1d494693bef8e1156e/releases/64e9ed5ff1b61250aab16d9f/img/vector-8.svg",
  divClassNameOverride,
  divClassName1,
  vectorClassNameOverride,
  img = "https://anima-uploads.s3.amazonaws.com/projects/64e9ed1d494693bef8e1156e/releases/64e9ed5ff1b61250aab16d9f/img/vector-9.svg",
  divWrapperDivClassName,
  divWrapperOverlapGroupClassName,
  divWrapperPropertyDefaultClassName,
  divWrapperVector = "https://anima-uploads.s3.amazonaws.com/projects/64e9ed1d494693bef8e1156e/releases/64e9ed5ff1b61250aab16d9f/img/vector-10.svg",
  divWrapperVectorClassName,
  componentWrapperDivClassName,
  componentWrapperHealthiconsBlood = "https://anima-uploads.s3.amazonaws.com/projects/64e9ed1d494693bef8e1156e/releases/64e9ed5ff1b61250aab16d9f/img/healthicons-blood-cells-2.svg",
  componentWrapperHealthiconsBloodClassName,
  componentWrapperComponentClassName,
}) => {
  return (
    <div className={`component-50 ${className}`}>
      <div className={`overlap ${overlapClassName}`}>
        <div className={`group ${groupClassName}`}>
          <img className={`image ${imageClassName}`} alt="Image" src={image} />
          <div className={`group-2 ${groupClassNameOverride}`}>
            <div className={`text-wrapper-3 ${divClassName}`}>Search</div>
            <img className={`vector-2 ${vectorClassName}`} alt="Vector" src={vector} />
          </div>
          <div className={`group-3 ${divClassNameOverride}`}>
            <div className={`text-wrapper-4 ${divClassName1}`}>My Space</div>
            <img className={`vector-3 ${vectorClassNameOverride}`} alt="Vector" src={img} />
          </div>
          <DivWrapper
            className={divWrapperPropertyDefaultClassName}
            divClassName={divWrapperDivClassName}
            overlapGroupClassName={divWrapperOverlapGroupClassName}
            property1="default"
            vector={divWrapperVector}
            vectorClassName={divWrapperVectorClassName}
          />
        </div>
        <ComponentWrapper
          className={componentWrapperComponentClassName}
          divClassName={componentWrapperDivClassName}
          healthiconsBlood={componentWrapperHealthiconsBlood}
          healthiconsBloodClassName={componentWrapperHealthiconsBloodClassName}
        />
      </div>
    </div>
  );
};

Component50.propTypes = {
  image: PropTypes.string,
  vector: PropTypes.string,
  img: PropTypes.string,
  divWrapperVector: PropTypes.string,
  componentWrapperHealthiconsBlood: PropTypes.string,
};
