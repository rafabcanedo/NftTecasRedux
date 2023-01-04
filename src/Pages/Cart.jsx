import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowLeft } from "phosphor-react";
import { removeFromCart } from "../redux/cartSlice";

const Cart = () => {
 const cart = useSelector((state) => state.cart);
 const dispatch = useDispatch();

 const handleRemoveFromCart = (cartItem) => {
  dispatch(removeFromCart(cartItem));
 }
 return(
  <div className="px-8 grid grid-cols-3">
  <h1 className="text-white font-normal text-3xl text-center">Shopping Cart</h1>
  { cart.cartItems.length === 0 ? (
    <div className="cart-empty">
    <p>Your cart is currently empty</p>
    <div className="start-shopping">
     <Link to="/products">
     <ArrowLeft size={32} />
     <span>Start Shopping</span>
     </Link>
    </div>
    </div>
  ) : (
    <div>
     <div className="m-8 grid text-center grid-cols-3">
      <h3 className="text-white text-sm font-normal uppercase pl-1">Product</h3>
      <h3 className="text-white text-sm font-normal uppercase">Price</h3>
      <h3 className="text-white text-sm font-normal uppercase">Quantity</h3>
      <h3 className="text-white text-sm font-normal uppercase pr-1 justify-self-end">Total</h3>
     </div>

     <div className="cart-items">
      {cart.cartItems?.map(cartItem => (
       <div className="grid text-center grid-cols-3 border-t-2 border-sky-500 p-4" key={cartItem.id}>
        <div className="flex">
         <img src={cartItem.image} at={cartItem.name} className="w-full max-w-[100%] mr-4"  />
         <div >
          <h3 className="font-normal">{cartItem.name}</h3>
          <p>{cartItem.desc}</p>
          <button 
          onClick={() => handleRemoveFromCart(cartItem)}
          className="cursor-pointer border-none outline-none mt-3 bg-none text-teal-500">
           Remove
          </button>
         </div>
        </div>

        <div className="cart-product-price">${cartItem.price}</div>
        <div className="cart-product-quantity">
        <buton className="cursor-pointer">-</buton>
        <div className="count">{cartItem.cartQuantity}</div>
        <button className="cursor-pointer">+</button>
        </div>
        <div className="cart-product-total-price">
          ${cartItem.price * cartItem.cartQuantity}
        </div>
       </div>
      ))}
     </div>
     {/* ------------------------------------------------------------------ */}
     <div className="cart-sumary">
      <button className="clear-cart">Clear Cart</button>
      <div className="cart-checkout">
        <div className="subtotal">
        <span>SubTotal</span>
        <span className="amount">${cart.cartTotalAmount}</span>
        </div>
        <p>Checkout Taxes</p>
        <buton>Check Out</buton>
        <div className="continue-shopping">
         <Link to="/products">
         <ArrowLeft size={32} />
         <span>Continue Shopping</span>
         </Link>
        </div>
      </div>
     </div>
    </div>
    )}
  </div>
 );
}

export default Cart;