import React from "react";

const RestaurantInfoSkeleton = () => {
  return (
    <section className="flex justify-center mt-18">
      <section>
        <section className="skeleton-block w-300 h-48 mb-6"></section>
        <section className="skeleton-block w-300 h-124 mb-6"></section>
        <section className="skeleton-block w-300 h-48 mb-6 mt-18"></section>
        <section className="skeleton-block w-300 mb-6"></section>
        {Array.from(Array(10).keys())
          .fill("")
          .map((_item, index) => {
            return (
              <section
                key={index}
                className="skeleton-block w-300 h-96 mb-6"
              ></section>
            );
          })}
      </section>
    </section>
  );
};

export default RestaurantInfoSkeleton;
