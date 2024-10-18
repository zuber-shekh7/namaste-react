import React from "react";
import MenuItem from "./MenuItem";

const CategoryItem = ({ category, openPanel, handlePanelClick }) => {
  const handleMenuItemClick = () => {
    handlePanelClick();
  };

  return (
    <section className="container mx-auto">
      <section className="flex justify-center w-full">
        <section className="w-10/12 bg-slate-200 px-4 py-4 rounded-md mb-4 shadow-sm border-2">
          <section
            className="flex justify-between hover:cursor-pointer"
            onClick={handleMenuItemClick}
          >
            <h2 className="text-xl font-bold mb-2">
              {category?.card?.card?.title} (
              {category.card.card.itemCards?.length})
            </h2>
            <h2>{openPanel ? "🔽" : "🔼"}</h2>
          </section>
          {category.card.card.itemCards.map((item) => {
            return openPanel ? (
              <MenuItem key={item?.card?.info?.id} item={item} />
            ) : null;
          })}
        </section>
      </section>
    </section>
  );
};

export default CategoryItem;
