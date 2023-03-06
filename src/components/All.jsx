import React from "react";
import { Clothes } from "./Clothes";
import Shoes from "./Shoes";

export const All = () => {
  return (
    <>
      <div className="flex ">
        <div className="test">
          <Clothes />
        </div>
        <div>
          <Shoes />
        </div>
      </div>
    </>
  );
};
