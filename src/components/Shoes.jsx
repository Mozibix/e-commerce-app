import { shoesData } from "../userdata";

const Shoes = () => {
  return (
    <>
      <div className="shoes_sec">
        <h2 className="container">shoes section</h2>

        <div className="products_sec">
          {shoesData.map((shoes) => (
            <div className="" key={shoes.id}>
              <img src={shoes.img_src} alt="shoes" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shoes;
