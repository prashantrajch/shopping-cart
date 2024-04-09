import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import Favourite from "./page/Favourite/Favourite";
import Cart from "./page/Cart/Cart";
function App() {
  return (
    <div className=" bg-zinc-300">
      <Navbar />
      <div className="p-2">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
