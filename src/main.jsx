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
import FirstImage from "./components/image-view/FirstImage";
import Products from "./components/Products";
import Shoes from "./components/Shoes";
import "./index.css";
import "./styles/custom.scss";
import { clothesData } from "./userdata";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<All />} />
      <Route path="/clothes" element={<Clothes />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/products" element={<Products />} />

      {/* Image View */}
      <Route path="/image1" element={<FirstImage />} />

      {/* Clothes View */}
      <Route path="/cloth1" element={<Cloth1 />} />
      <Route path="/cloth2" element={<Cloth2 />} />
      <Route path="/cloth3" element={<Cloth3 />} />
      <Route path="/cloth4" element={<Cloth4 />} />
    </Routes>
  </BrowserRouter>
);
