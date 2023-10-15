import React from "react";
import { CDN_URL } from "../utils/constants";

import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

const ItemAccordian = ({ item, showMenu, handleClick }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div key={item.card.card.title} onClick={handleClick}>
      <div className="flex justify-between items-center bg-gray-200  py-4 mb-1 px-5">
        <h4 className="font-bold text-lg">
          {item.card.card.title} ({item.card.card.itemCards.length})
        </h4>
        <span>{showMenu ? "⬆️" : "⬇️"}</span>
      </div>
      {showMenu && (
        <div className="px-5 pb-5 pt-2">
          {item.card.card.itemCards.map((item) => {
            return (
              <div
                key={item.card.info.id}
                className="border-b-2 border-b-black-500 "
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
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="py-1 px-2 text-sm bg-gray-300 hover:bg-gray-400 hover:cursor-pointer rounded shadow-lg mt-2 w-full"
                    >
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ItemAccordian;
