import React from "react";

const RestaurantCardSkeleton = () => {
  return (
    <section className="mr-3 mb-3">
      <section className="h-10 w-3/12 rounded-t-md bg-slate-500 animate-pulse"></section>
      <section className="h-72 w-96 rounded-b-md bg-slate-500 animate-pulse"></section>
    </section>
  );
};

export default RestaurantCardSkeleton;
