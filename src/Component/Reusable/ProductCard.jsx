import React from "react";

export const ProductCard = ({ name, src, price, addToCart, addToWishlist }) => {
  return (
    <article className="border rounded-md p-3 shadow-sm">
      <img
        src={src}
        alt={name}
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="flex justify-between mt-2">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-amber-600 font-bold">${price}</p>
      </div>
      <div className="flex justify-between mt-3">
        <button
          className="bg-amber-400 p-1 px-3 rounded-sm text-white cursor-pointer"
          onClick={addToCart}
        >
          Add to Cart
        </button>
        <button
          className="bg-amber-200 p-1 px-3 rounded-sm cursor-pointer"
          onClick={addToWishlist}
        >
          Add to Wish-list
        </button>
      </div>
    </article>
  );
};
