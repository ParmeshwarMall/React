import React, { useState } from "react";

const InputColor = ({colorChange}) => {
  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          onChange={(e) => {
            colorChange(e.target.value);
          }}
          placeholder="Enter color"
        />
      </div>
    </div>
  );
};

export default InputColor;
