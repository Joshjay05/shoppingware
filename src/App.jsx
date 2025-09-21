import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Collection from "./pages/Collection";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Layout from "./pages/Layout";

const App = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  return (
    <div className="h-screen bg-amber-50">
      <Routes>
        <Route path="/" element={<Layout cart={cart} />}>
          <Route
            index
            element={
              <Home onAddToCart={addToCart} onAddToWishlist={addToWishlist} />
            }
          />
          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/collection" element={<Collection />} />
          <Route
            path="/product/:productId"
            element={
              <Product
                onAddToCart={addToCart}
                onAddToWishlist={addToWishlist}
              />
            }
          />
          <Route
            path="/product"
            element={
              <Product
                onAddToCart={addToCart}
                onAddToWishlist={addToWishlist}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
