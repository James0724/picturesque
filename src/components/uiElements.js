import Link from "next/link";
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

export const Button = ({ LinkName, LinkAddress, ClassName }) => {
  return (
    <Link href={LinkAddress} className="button intro_btn">
      <div className="bt d-flex align-items-center">
        <div className="button-diamond">
          <div className="button-diamond-inner">
            <div className="button-diamond-arrow-container">
              <div className="arrow-line">
                <div className="arrow-head arrow-head-right"></div>
              </div>
            </div>
          </div>
        </div>
        <div className={`button-text ${ClassName}`}>{LinkName}</div>
      </div>
    </Link>
  );
};
