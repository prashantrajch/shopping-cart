import React, { useContext } from "react";
import Card from "../../components/Card";
import ProductContext from "../../context/ContextCreate";

function Favourite() {
  const { favList } = useContext(ProductContext);

  return (
    <div className="min-h-[calc(100vh-80px)]">
      {favList == "" ? (
        <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
          <h3 className="text-4xl">Favourite List is empty....</h3>
        </div>
      ) : (
        <div className="w-full flex gap-x-3 gap-y-5 flex-wrap justify-center min-[1010px]:justify-start">
          {favList.map((item) => (
            <Card key={item.id} productItem={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourite;
