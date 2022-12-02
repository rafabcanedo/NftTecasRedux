import React from "react";
import { ShoppingBag } from "phosphor-react";

const Navbar = () => {
 return(
  <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadlow-lg">
  <div className="px-2 flex justify-between items-center w-full h-full">
  <div className="flex items-center">
   <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Canedo</h1>
   </div>
   <ul className="flex justify-between items-center">
    <li className="font-bold uppercase text-sky-400">
     <a href="/" className="hover:text-sky-600">Home</a>
    </li>
    <li className="font-bold uppercase text-sky-400">
     <a href="/about" className="hover:text-sky-600">About</a>
    </li>
    <li className="font-bold uppercase text-sky-400">
     <a href="/products" className="hover:text-sky-600">Products</a>
    </li>
   </ul>
  

  <div className="hidden md:flex pr-4">
  <ShoppingBag size={32} color="#030303" />
  </div>
  
  </div>
  </div>
 );
}

export default Navbar;