import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import { FaHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProductContext from "../context/ContextCreate";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slice/cartSlice";

function Card({ productItem }) {
  const dispatch = useDispatch();

  const { handleAddToFavourite, favList } = useContext(ProductContext);
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    brand,
    category,
    thumbnail,
  } = productItem;
  let beforeDiscount = (discountPercentage / 100) * price;
  let originalValue = Math.round(beforeDiscount + price).toFixed(2);

  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  console.log(favList && 'hello');

  const handleToAddCart = () => {
    dispatch(addToCart(productItem));
  };

  return (
    <div className="card w-[100%] sm:max-w-[320px] bg-white rounded-md overflow-hidden hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38),-4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      {/* produnct image */}
      <img
        src={thumbnail}
        alt={brand}
        className="w-full h-[220px] object-cover"
      />

      <div className="card-body p-3">
        {/* product title */}
        <h2 className="title text-lg font-bold line-clamp-1">{title}</h2>
        {/* product price */}
        <div>
          <p className="price text-xl font-semibold">$ {price}</p>
          {/* product discount */}
          <div className="discount flex items-center gap-2">
            <span className="font-bold text-sm line-through opacity-50">
              $ {originalValue}
            </span>
            <span className="text-sm font-bold py-1.5 px-2 bg-green-600 rounded-full text-white">
              Save {discountPercentage}%
            </span>
          </div>
          {/* product rating */}
          <div className="mt-2 flex items-center gap-2">
            <Rating
              name="half-rating"
              value={parseInt(rating.toFixed(2))}
              precision={0.5}
              readOnly
              size="small"
            />
            <span className="font-semibold text-sm">
              {Object.keys(labels).findIndex(
                (item) => item == rating.toFixed(1)
              ) != -1
                ? labels[
                    Object.keys(labels).filter(
                      (item) => item == rating.toFixed(1)
                    )
                  ]
                : labels[`${Math.round(rating)}`]}
            </span>
          </div>
          {/*product description */}
          <p className="my-2 text-sm text-gray-600 h-[40px] line-clamp-2">
            {description}
          </p>
        </div>
        <div className="btns flex items-center gap-2">
          <Link to={"/cart"}>
            <button
              className="w-[180px] max-[300px]:w-[100px] self-start py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              onClick={handleToAddCart}
            >
              Buy Now
            </button>
          </Link>
          <button
            className="py-1.5 flex justify-center flex-1 px-3 rounded-md bg-slate-300 hover:bg-yellow-400 hover:text-white"
            onClick={handleToAddCart}
          >
            <AiOutlineShoppingCart size={"1.5rem"} />
          </button>
          <button
            className="text-slate-500 flex-1 flex justify-center hover:text-red-500"
            onClick={() => handleAddToFavourite(productItem)}
          >
            {favList && favList.findIndex((list) => list.id === id) !== -1 ? (
              <FaHeart size={"1.5rem"} color="red" />
            ) : (
              <FaHeart size={"1.5rem"} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
