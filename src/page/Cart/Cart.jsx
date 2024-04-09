import React from "react";
import CartBox from "../../components/CartBox";
import CartSummaryBox from "../../components/CartSummaryBox";

function Cart() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] gap-6 flex-wrap mx-[auto] mt-2 w-full sm:w-5/6 justify-center">
      {/* left cart card section */}
      <CartBox />
      {/* right cart card section */}
      <CartSummaryBox />
    </div>
  );
}

export default Cart;
