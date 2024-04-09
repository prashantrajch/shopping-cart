import React from "react";
import Table from "./Table";
import TableList from "./TableList";
import { useSelector } from "react-redux";

function CartSummaryBox() {
  const cart = useSelector((state) => state.cart);

  const totalItem =
    cart &&
    cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  const totalPrice =
    cart &&
    cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

  return (
    <div className="right lg:max-w-[320px] w-full p-2 px-4 border self-start rounded-xl bg-white">
      <h3 className="text-2xl font-semibold pb-3 border-b-2">
        Your Cart Summary
      </h3>
      {cart == "" ? (
        <h4 className="font-bold text-center"> You Cart is Empty...!</h4>
      ) : (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-3">
                Item
              </th>
              <th scope="col" className="px-2 py-3">
                Qty
              </th>
              <th scope="col" className="px-2 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <TableList key={item.id} cartItem={item} />
            ))}
          </tbody>
          <tfoot>
            <tr className="font-semibold text-gray-900 dark:text-white">
              <th scope="row" className="px-2 py-3 text-base">
                Total
              </th>
              <td className="px-2 py-3">{totalItem}</td>
              <td className="px-2 py-3">${totalPrice}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
}

export default CartSummaryBox;
