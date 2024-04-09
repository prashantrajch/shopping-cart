import React from "react";
import { NavLink, Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart);

  const totalItem =
    cart == ""
      ? 0
      : cart.reduce((total, item) => {
          return total + item.quantity;
        }, 0);

  return (
    <nav className="flex max-[300px]:flex-wrap items-center sticky top-0 z-10 w-full justify-between p-3 px-6 bg-slate-200 shadow-lg text-xl">
      <h1 className="text-2xl text-red-500">
        <Link to={"/"}>ShopiFy</Link>
      </h1>
      <ul className="flex items-center gap-4">
        <NavLink
          to={"/"}
          className={(ev) => (ev.isActive ? "text-blue-600" : "text-black")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/favourite"}
          className={(ev) => (ev.isActive ? "text-blue-600" : "text-black")}
        >
          Favourite
        </NavLink>
        <NavLink
          to={"/cart"}
          className={(ev) => (ev.isActive ? "text-blue-600" : "text-black")}
        >
          <p className="flex items-center gap-1">
            <Badge badgeContent={totalItem} color="secondary">
              <AiOutlineShoppingCart size={"1.5rem"} />
            </Badge>
          </p>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
