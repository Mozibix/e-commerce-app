import { Link } from "react-router-dom";
import { shoesData } from "../userdata";

const Shoes = () => {
  return (
    <>
      <div className="shoes_sec">
        <h2 className="container">shoes section</h2>

        <div className="products_sec">
          {shoesData.map((shoes) => (
            <Link key={shoes.id} to={shoes.path}>
              <div className="pointer_cur">
                <img src={shoes.img_src} alt="shoes" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shoes;
