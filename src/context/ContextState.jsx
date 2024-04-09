import React, { useEffect, useState } from "react";
import ProductContext from "./ContextCreate";

function ProductState({ children }) {
  const [allProduct, setAllProduct] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [favList, setFavList] = useState([]);

  async function productApiFetch() {
    setPending(true);
    setError("");
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (response.status == 404) throw "Data Not Found.... Error 404";
      const result = await response.json();
      setAllProduct(result.products);
      setPending(false);
    } catch (err) {
      setPending(false);
      setError(err);
    }
  }

  function handleAddToFavourite(currentItem) {
    const copyFavList = [...favList];
    console.log(currentItem);
    const itemInd = copyFavList.findIndex((item) => item.id == currentItem.id);
    if (itemInd === -1) {
      copyFavList.push(currentItem);
    } else {
      copyFavList.splice(itemInd, 1);
    }
    setFavList(copyFavList);
  }

  useEffect(() => {
    productApiFetch();
  }, []);

  return (
    <ProductContext.Provider
      value={{ allProduct, pending, error, handleAddToFavourite, favList }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductState;
