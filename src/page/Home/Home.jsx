import React, { useContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import ProductContext from "../../context/ContextCreate";
import Cards from '../../components/Cards'
function Home() {
  const {pending, error } = useContext(ProductContext);
  return (
    <div className="min-h-[calc(100vh-100px)]">
      {pending ? (
        <p className="text-center mt-4">
          <CircularProgress size={"5rem"} />{" "}
        </p>
      ) : error ? (
        <p className="text-center mt-4 text-2xl text-[red]"> {error} </p>
      ) : (
        <Cards />
      )}
    </div>
  );
}

export default Home;
