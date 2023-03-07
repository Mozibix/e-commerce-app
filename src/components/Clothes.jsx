import React from "react";
import { clothesData } from "../userdata";

export const Clothes = () => {
  return (
    <>
      <div className="clothes_sec">
        <h2 className="container">clothes section</h2>

        <div className="products_sec">
          {clothesData.map((cloth) => (
            <div className="pointer_cur" key={cloth.id}>
              <img src={cloth.img_src} alt="clothes" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
