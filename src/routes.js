import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from './Pages/About';

function MainRouter(){
 return(
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/products" element={<Products />} />
  </Routes>
 );
}

export default MainRouter;