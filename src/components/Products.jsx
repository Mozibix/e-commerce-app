import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div className="container">
        <div className="filter_section">
          <Link className="pointer_cur" to="/">
            <button>All</button>
          </Link>
          <Link className="pointer_cur" to="/clothes">
            <button>Clothes</button>
          </Link>
          <Link className="pointer_cur" to="/shoes">
            <button>Shoes</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Products;
