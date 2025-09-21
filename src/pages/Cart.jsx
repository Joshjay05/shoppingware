import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      {cart?.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className=" border p-4 m-4 flex items-center gap-4"
            >
              <img
                src="{item.src}"
                alt={item.name}
                className="w-16 h-16 object-cover"
              />
              {item.name} - {item.price}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
