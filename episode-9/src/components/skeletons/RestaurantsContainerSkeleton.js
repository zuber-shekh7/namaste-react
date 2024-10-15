import React from "react";
import RestaurantCardSkeleton from "./RestaurantCardSkeleton";

const RestaurantsContainerSkeleton = () => {
  return (
    <section>
      <section className="flex justify-between align-center">
        <section className="flex align-center">
          <section className="skeleton-block w-200 mr-12"></section>
          <section className="skeleton-block w-100"></section>
        </section>
        <section className="skeleton-block w-300"></section>
      </section>
      <section className="mt-18 flex overflow-scroll">
        {Array.from(Array(10).keys())
          .fill("")
          .map((_item, index) => {
            return <RestaurantCardSkeleton key={index} />;
          })}
      </section>
    </section>
  );
};

export default RestaurantsContainerSkeleton;
