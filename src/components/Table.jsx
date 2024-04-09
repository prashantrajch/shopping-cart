import React from "react";

function Table() {
  return (
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
        <TableList />
      </tbody>
      <tfoot>
        <tr className="font-semibold text-gray-900 dark:text-white">
          <th scope="row" className="px-2 py-3 text-base">
            Total
          </th>
          <td className="px-2 py-3">3</td>
          <td className="px-2 py-3">$25.98</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Table;
