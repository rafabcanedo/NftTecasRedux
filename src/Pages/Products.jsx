import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { useGetAllProductsQuery } from "../redux/productsApi";

const Products = () => {
 const { data, error, isLoading } = useGetAllProductsQuery();
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const handleAddToCart = (product) => {
   dispatch(addToCart(product));
   navigate("/cart");
 };

 return (
  <div className="p-16">
   { isLoading ? (
     <p>Loading...</p>
    ) : error ? (
    <p>An error occured...</p> 
    ) : (
    <>
    <h1 className="text-white text-4xl font-normal text-center">Shopping Cart</h1>
    <div className="flex justify-between flex-wrap mt-8">
      {data?.map((product) => ( <div key={product.id} className="w-64 max-w-[100%] h-[398px] flex-col justify-between m-4 p-4 rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)">
        <h2 className="text-white text-2xl font-bold">{product.name}</h2>
        <img src={product.image} alt={product.name} className="w-4/5 mt-4 mx-auto" />
        <div className="flex justify-between items-center">
         <h3 className="text-white">{product.desc}</h3>
         <span className="text-xl font-normal">${product.price}</span>
        </div>
        <button 
         className="w-full h-10 rounded-md mt-8 font-normal border-none outline-none cursor-pointer bg-cyan-400 text-white tracking-normal"
         onClick={() => handleAddToCart(product)}>
          Add To Cart
        </button>
      </div>
      ))}
    </div>
    </>
    )}

    <div>
     <div>
     </div>
    </div>
  </div>
 );
}

export default Products;