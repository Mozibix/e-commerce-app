import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { All } from "./components/All";
import { Clothes } from "./components/Clothes";
import Cloth1 from "./components/image-view/clothes-view/Cloth1";
import Cloth2 from "./components/image-view/clothes-view/Cloth2";
import Cloth3 from "./components/image-view/clothes-view/Cloth3";
import Cloth4 from "./components/image-view/clothes-view/Cloth4";
import Shoe1 from "./components/image-view/shoes-view/Shoe1";
import Shoe2 from "./components/image-view/shoes-view/Shoe2";
import Shoe3 from "./components/image-view/shoes-view/Shoe3";
import Shoe4 from "./components/image-view/shoes-view/Shoe4";
import Products from "./components/Products";
import Shoes from "./components/Shoes";
import "./index.css";
import "./styles/custom.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<All />} />
      <Route path="/clothes" element={<Clothes />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/products" element={<Products />} />

      {/* Image View */}

      {/* Clothes View */}
      <Route path="/cloth1" element={<Cloth1 />} />
      <Route path="/cloth2" element={<Cloth2 />} />
      <Route path="/cloth3" element={<Cloth3 />} />
      <Route path="/cloth4" element={<Cloth4 />} />

      {/* Shoes View */}
      <Route path="/shoe1" element={<Shoe1 />} />
      <Route path="/shoe2" element={<Shoe2 />} />
      <Route path="/shoe3" element={<Shoe3 />} />
      <Route path="/shoe4" element={<Shoe4 />} />
    </Routes>
  </BrowserRouter>
);
