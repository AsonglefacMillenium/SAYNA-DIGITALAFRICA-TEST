import React from "react";

import "./Button.css";

const Button = ({
  type,
  fontWeight,
  borderRadius,
  text,
  padding,
  borderThickness,
  fontSize,
  
}) => {
  return (
    <button
      style={{
        padding: padding,
        border: `${borderThickness}px solid var(--white-color)`,
        fontSize: fontSize,
        borderRadius: borderRadius,
        fontWeight: fontWeight,
        
      }}
      className={`btn btn-${type}`}
    >
      {text}
    </button>
  );
};

export default Button;
