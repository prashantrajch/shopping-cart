import React from "react";

function TableList({cartItem}) {

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td
        scope="col"
        className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
      {cartItem.title}
      </td>
      <td scope="col" className="px-2 py-3">
        {cartItem.quantity}
      </td>
      <td scope="col" className="px-2 py-3">
        ${cartItem.quantity * cartItem.price}
      </td>
    </tr>
  );
}

export default TableList;
