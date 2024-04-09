import React from "react";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";

function CartBox() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="left min-w-[400px] flex-1 p-2 px-4 rounded-xl bg-white self-start">
      <h1 className="text-2xl font-semibold pb-3 border-b-2">Cart</h1>
      {/* cart card section start */}
      {cart.length == 0 || cart == "" ? (
        <div className="text-2xl text-center">
          <h3 className="font-bold">Cart is Empty...!</h3>
          <p>Go to Home page and add to cart</p>
        </div>
      ) : cart.map((item) => <CartCard key={item.id} cartItem={item} />) }
      {/* <CartCard />
    <CartCard />
    <CartCard /> */}
    </div>
  );
}

export default CartBox;
