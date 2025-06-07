import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [name, setName] = useState("");
  const [subject,setSubject]=useState("")
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      {/* <input
        type="text"
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Enter name"
      /> */}
      <Child username={name} />
    </div>
  );
};

export default Parent;
