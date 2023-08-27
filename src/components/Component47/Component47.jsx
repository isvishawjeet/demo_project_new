/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Component47 = ({ property1, className, divClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`component-47 property-1-${state.property1} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className={`why-CAN ${divClassName}`}>
        {state.property1 === "default" && <>Why CAN?</>}

        {["variant-2", "variant-3"].includes(state.property1) && <>Our Story</>}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "variant-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "variant-3",
        };
    }
  }

  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };
  }

  return state;
}

Component47.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "variant-3", "default"]),
};
