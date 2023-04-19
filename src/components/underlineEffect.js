import React from "react";

export const UnderlineEffect = () => {
  return (
    <div className="underline">
      <div className="left line" style={{ width: "100px" }}></div>
      <div className="square animate-the-square" id="square">
        <span id="inside-square" className="animate-the-inside-square"></span>
      </div>
      <div className="right line" style={{ width: "100px" }}></div>
    </div>
  );
};
