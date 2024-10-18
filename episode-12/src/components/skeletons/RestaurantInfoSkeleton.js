import React from "react";

const RestaurantInfoSkeleton = () => {
  return (
    <section className="container mx-auto my-8">
      <section className="flex justify-center w-full">
        <section className="w-10/12">
          <section className="h-7 w-4/12 rounded-md bg-slate-500 animate-pulse mb-3"></section>
          <section className="h-48 w-full rounded-md bg-slate-500 animate-pulse mb-8"></section>
          <section className="h-7 w-4/12 rounded-md bg-slate-500 animate-pulse mb-3"></section>

          {Array.from(Array(10).keys())
            .fill("")
            .map((_item, index) => {
              return (
                <section
                  key={index}
                  className="h-28 w-full rounded-md bg-slate-500 animate-pulse mb-3"
                ></section>
              );
            })}
        </section>
      </section>
    </section>
  );
};

export default RestaurantInfoSkeleton;
