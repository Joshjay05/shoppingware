import React from "react";
import { ProductCard } from "../Component/Reusable/ProductCard";

// Mock product list
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    src: "https://via.placeholder.com/150",
    price: 120,
  },
  {
    id: 2,
    name: "Smart Watch",
    src: "https://via.placeholder.com/150",
    price: 80,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    src: "https://via.placeholder.com/150",
    price: 60,
  },
  {
    id: 4,
    name: "Gaming Mouse",
    src: "https://via.placeholder.com/150",
    price: 40,
  },
];

const Product = ({ onAddToCart, onAddToWishlist }) => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          src={product.src}
          price={product.price}
          addToCart={() => onAddToCart(product)}
          addToWishlist={() => onAddToWishlist(product)}
        />
      ))}
    </main>
  );
};

export default Product;
