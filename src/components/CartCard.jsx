import React, { useContext } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { deleteToCart, updateQuantity } from "../store/slice/cartSlice";
import ProductContext from "../context/ContextCreate";

function CartCard({ cartItem }) {
  console.log(cartItem);

  const dispatch = useDispatch();
  const { handleAddToFavourite, favList } = useContext(ProductContext);
  function handleToDelete() {
    dispatch(deleteToCart(cartItem.id));
  }

  function handleIncreaseQuantity(id) {
    dispatch(updateQuantity({ id, num: +1 }));
  }

  function handleDecreaseQuantity(id) {
    if (cartItem.quantity - 1 < 1) {
      const sure = confirm("Are you sure you want to delete this cart item");
      if (sure) {
        handleToDelete(id);
      }
      return;
    }
    dispatch(updateQuantity({ id, num: -1 }));
  }

  return (
    <div className="cart-card flex items-center py-4 border-b-2 last:border-b-0 ">
      {/* card image section */}
      <img
        src={cartItem.thumbnail}
        alt={cartItem.title}
        className=" rounded-lg w-32 h-40 object-cover"
      />
      {/* card details section */}
      <div className="details ml-4 md:ml-6 w-full">
        {/* card heading section */}
        <div className="title flex justify-between items-center ">
          <h2 className="font-medium text-lg">{cartItem.title} </h2>
          <h3 className="font-bold text-xl">${cartItem.price} </h3>
        </div>
        <span className="text-gray-500 text-sm">${cartItem.price}</span>
        {/* card footer section */}
        <div className="footer flex justify-between flex-wrap gap-4 items-center mt-6">
          <div className="btns flex text-lg rounded-md overflow-hidden">
            <button
              className="px-2 border-2 border-r-0 hover:border-red-300 hover:bg-red-300"
              onClick={() => handleDecreaseQuantity(cartItem.id)}
            >
              <LuMinus />
            </button>
            <span className="px-2 border-y-2">
              {cartItem.quantity < 10
                ? "0" + cartItem.quantity
                : cartItem.quantity}
            </span>
            <button
              className="px-2 hover:bg-green-300 border-2 border-l-0 hover:border-green-300"
              onClick={() => handleIncreaseQuantity(cartItem.id)}
            >
              <LuPlus />
            </button>
          </div>
          <div className="actions flex text-xl gap-2">
            {favList &&
            favList.findIndex((list) => list.id === cartItem.id) != -1 ? (
              <button
                className="flex gap-1 items-center"
                onClick={() => handleAddToFavourite(cartItem)}
              >
                <FaHeart size={"1.5rem"} color="red" />
                Save
              </button>
            ) : (
              <button
                className="flex gap-1 items-center opacity-50 hover:opacity-100"
                onClick={() => handleAddToFavourite(cartItem)}
              >
                <FaHeart size={"1.5rem"} />
                Save
              </button>
            )}
            <span>|</span>
            <button
              className="flex gap-1 items-center opacity-50 hover:opacity-100"
              onClick={handleToDelete}
            >
              <MdDelete />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
