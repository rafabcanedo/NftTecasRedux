import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from './Pages/About';
import Cart from "./Pages/Cart";

function MainRouter(){
 return(
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/products" element={<Products />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
 );
}

export default MainRouter;