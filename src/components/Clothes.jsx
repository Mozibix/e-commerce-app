import React from "react";
import { Link } from "react-router-dom";
import { clothesData } from "../userdata";

export const Clothes = () => {
  return (
    <>
      <div className="clothes_sec">
        <h2 className="container">clothes section</h2>

        <div className="products_sec">
          {clothesData.map((cloth) => (
            <Link key={cloth.id} to={cloth.path}>
              <div className="pointer_cur">
                <img src={cloth.img_src} alt="clothes" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
