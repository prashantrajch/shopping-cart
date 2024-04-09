import React, { useContext } from "react";
import Card from "./Card";
import ProductContext from "../context/ContextCreate";

function Cards() {
  const { allProduct } = useContext(ProductContext);
  return (
    <div className="w-full flex gap-x-3 gap-y-5 flex-wrap justify-center min-[1010px]:justify-start">
      {
        allProduct && allProduct.map((item) => <Card key={item.id} productItem={item} />)
      }
    </div>
  );
}

export default Cards;
