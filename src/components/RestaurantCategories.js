import React, { useContext } from "react";

import ItemAccordian from "./ItemAccordian";
import RestaurantContext from "../utils/RestaurantContext";

const RestaurantCategories = ({ items }) => {
  const { openIndex, setOpenIndex } = useContext(RestaurantContext);

  return (
    <div className="bg-gray-50 shadow-lg hover:cursor-pointer">
      {items.map((item, index) => {
        return (
          <ItemAccordian
            showMenu={openIndex === index}
            handleClick={() => {
              if (openIndex === index) {
                setOpenIndex(-1);
              } else {
                setOpenIndex(index);
              }
            }}
            key={item.card.card.title}
            item={item}
          />
        );
      })}
    </div>
  );
};

export default RestaurantCategories;
