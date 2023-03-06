import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div className="container">
        <div className="filter_section">
          <Link to="/">
            <button>All</button>
          </Link>
          <Link to="/clothes">
            <button>Clothes</button>
          </Link>
          <Link to="/shoes">
            <button>Shoes</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Products;
