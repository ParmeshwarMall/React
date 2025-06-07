import React, { useState} from "react";
import InputColor from "./InputColor";


const ColorContainer = () => {
  const [color, setColor] = useState("");
  return (
    <div className="main-container">
      <div className="color-container" style={{ backgroundColor: color }}>
        <h1>My name is Parmeshwar</h1>
      </div>
      <InputColor colorChange={setColor} />
    </div>
  );
};

export default ColorContainer;
