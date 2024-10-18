import React from "react";
import { useDispatch } from "react-redux";

import Button from "./Button";
import VegMenuItem from "./VegMenuItem";
import NonVegMenuItem from "./NonVegMenuItem";
import { addItem, removeItem } from "../slices/cartSlice";

const MenuItem = ({ item, from = "restaurant-page" }) => {
  const dispatch = useDispatch();

  const handleAddButtonClick = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveButtonClick = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <section className="border border-slate-400 rounded-md px-4 py-4 mb-3 bg-white">
      <section className="flex justify-between items-center">
        <section>
          <section className="flex">
            {item?.card?.info?.isVeg ? <VegMenuItem /> : <NonVegMenuItem />}
            <h3 className="text-md font-bold text-orange-600">
              {item?.card?.info?.name}
            </h3>
          </section>
          <h4 className="text-md font-bold">
            Rs.{" "}
            {item?.card?.info?.price
              ? item?.card?.info?.price / 100
              : item?.card?.info?.defaultPrice / 100}
            /-
          </h4>
          <p className="text-sm font-thin">{item?.card?.info?.description}</p>
        </section>
        {from === "restaurant-page" && (
          <Button onClick={() => handleAddButtonClick(item)}>Add</Button>
        )}
        {from === "cart-page" && (
          <Button
            className="bg-red-600 hover:bg-red-700"
            onClick={() => handleRemoveButtonClick(item)}
          >
            Remove
          </Button>
        )}
      </section>
    </section>
  );
};

export default MenuItem;
