import React from "react";
import { Link } from "react-router-dom";
import { clothesData } from "../../../userdata";

const Cloth1 = () => {
  const dataImg = clothesData.filter((img) => img.id === 1);
  const imgPath = dataImg.map((img) => img.img_src);
  return (
    <>
      <div className="cloth_view container">
        <div className="cloth_view_inner">
          <div className="btn_sec">
            <Link to="/clothes" className="">
              <button className="button back">back</button>
            </Link>
          </div>

          <div className="image_view_sec">
            <div className="image_view_sec_inner">
              <img key={imgPath} src={imgPath} alt="clothes" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cloth1;
