import React from "react";
import Product from "./Product";
import UserPage from "./UserPage";

const Home = ({ onAddToCart, onAddToWishlist }) => {
  return (
    <div>
      <h1>Welcome to our e-commerce website!</h1>
      <p>Feel free to explore our wide selection of products.</p>
      <p>
        Please note that this is a demo version and real-world e-commerce
        applications would likely have more features and a backend.
      </p>
      <section>
        <h2>Featured Products</h2>
        <Product onAddToCart={onAddToCart} onAddToWishlist={onAddToWishlist} />

        <UserPage />
      </section>
    </div>
  );
};

export default Home;
