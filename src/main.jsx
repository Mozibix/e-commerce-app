import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { All } from "./components/All";
import { Clothes } from "./components/Clothes";
import Products from "./components/Products";
import Shoes from "./components/Shoes";
import "./index.css";
import "./styles/custom.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/" element={<All />} />
      <Route path="/clothes" element={<Clothes />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </BrowserRouter>
);
