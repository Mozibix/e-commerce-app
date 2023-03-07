import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div className="container">
        <div className="filter_section">
          <Link className="pointer_cur" to="/">
            <button className="button">All</button>
          </Link>
          <Link className="pointer_cur" to="/clothes">
            <button className="button">Clothes</button>
          </Link>
          <Link className="pointer_cur" to="/shoes">
            <button className="button">Shoes</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Products;
