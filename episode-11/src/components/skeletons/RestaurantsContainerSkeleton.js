import React from "react";
import RestaurantCardSkeleton from "./RestaurantCardSkeleton";

const RestaurantsContainerSkeleton = () => {
  return (
    <section>
      <section className="flex justify-between items-center w-full mb-6">
        <section className="flex items-center w-4/12">
          <section className="h-9 w-7/12 bg-slate-400 rounded animate-pulse mr-2"></section>
          <section className="h-9 w-4/12 bg-slate-400 rounded animate-pulse"></section>
        </section>
        <section className="h-9 w-3/12 bg-slate-400 rounded animate-pulse"></section>
      </section>
      <section className="flex overflow-x-scroll">
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
