import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { CDN_URL } from "../utils/constants";
import { clearCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto my-12 ">
      <div className="flex justify-center">
        <div>
          <h1 className="text-4xl font-bold text-center">Cart</h1>
          {cartItems.length > 0 && (
            <div className="flex justify-end">
              <button
                onClick={handleClearCart}
                className="px-5 py-2 bg-gray-300 rounded hover:bg-gray-400 hover:cursor-pointer"
              >
                Clear
              </button>
            </div>
          )}

          <div className="border-b my-5"></div>

          {cartItems.length === 0 ? (
            <h1 className="text-2xl mt-5 text-gray-700">
              No items in the cart. Continue your shopping.
            </h1>
          ) : (
            <div className="mt-5">
              {cartItems.map((item) => {
                return (
                  <div
                    key={item.card.info.id}
                    className="border-b-2 border-b-black-500 mt-5"
                  >
                    <div className="flex justify-between my-5 ">
                      <div className="w-9/12">
                        <h5 className="font-semibold">{item.card.info.name}</h5>
                        <p className="mt-1">
                          ₹{" "}
                          {Math.ceil(
                            (item.card.info.price
                              ? item.card.info.price
                              : item.card.info.defaultPrice) / 100
                          ).toFixed(2)}
                        </p>
                        <p className="mt-5">{item.card.info.description}</p>
                      </div>
                      <div className="">
                        <img
                          className="h-24 rounded-xl"
                          src={`${CDN_URL}/${item.card.info.imageId}`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
