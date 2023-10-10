import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// utils
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const params = useParams();

  const restaurant = useRestaurantMenu(params.id);

  if (restaurant === null) {
    return (
      <div className="container mx-auto px-5 py-12">
        <div className="h-96 rounded-xl bg-gray-300 animate-pulse"></div>
        <div className="flex flex-col justify-center items-center gap-y-5 mt-5">
          <div className="h-8 rounded-lg bg-gray-300 animate-pulse w-5/12 text"></div>
          <div className="h-8 rounded-lg bg-gray-300 animate-pulse w-4/12 text"></div>
          <div className="h-8 rounded-lg bg-gray-300 animate-pulse w-5/12 text"></div>
        </div>
        <div className="mt-10 flex flex-col items-center gap-y-5">
          <div className="border-b w-full"></div>
          <div className="h-8 rounded-lg bg-gray-300 animate-pulse w-4/12 text"></div>
          <div className="border-b w-full"></div>
        </div>
        <div className="mt-5 flex flex-col gap-y-4">
          <div className="flex justify-between">
            <div className="h-4 rounded-lg bg-gray-300 animate-pulse w-5/12 text"></div>
            <div className="h-4 rounded-lg bg-gray-300 animate-pulse w-2/12 text"></div>
          </div>
          <div className="flex justify-between">
            <div className="h-4 rounded-lg bg-gray-300 animate-pulse w-7/12 text"></div>
            <div className="h-4 rounded-lg bg-gray-300 animate-pulse w-2/12 text"></div>
          </div>
          <div className="flex justify-between">
            <div className="h-4 rounded-lg bg-gray-300 animate-pulse w-6/12 text"></div>
            <div className="h-4 rounded-lg bg-gray-300 animate-pulse w-2/12 text"></div>
          </div>
          <div className="flex justify-between">
            <div className="h-4 rounded-lg bg-gray-300 animate-pulse w-5/12 text"></div>
            <div className="h-4 rounded-lg bg-gray-300 animate-pulse w-2/12 text"></div>
          </div>
          <div className="flex justify-between">
            <div className="h-4 rounded-lg bg-gray-300 animate-pulse w-8/12 text"></div>
            <div className="h-4 rounded-lg bg-gray-300 animate-pulse w-3/12 text"></div>
          </div>
        </div>
      </div>
    );
  }

  const info = restaurant?.data?.cards[0]?.card?.card?.info;
  const menuItems =
    restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards ?? [];

  return (
    <div className="px-5 py-12">
      <div>
        <div className="absolute mx-5 my-5 text-center">
          {info.isOpen ? (
            <p className=" bg-green-500 text-white px-5 py-2 rounded shadow font-semibold">
              Open Now
            </p>
          ) : (
            <p className=" bg-red-500 text-white px-5 py-2 rounded shadow font-semibold">
              Closed
            </p>
          )}
          <div className="mt-5">
            <p className="bg-yellow-500 text-white font-bold text-3xl rounded-full">
              {info.avgRating}
            </p>
          </div>
        </div>
        <img
          className="rounded-xl w-full h-84 md:h-[500] object-cover shadow-lg"
          src={`${CDN_URL}/${info.cloudinaryImageId}`}
        />
      </div>
      <h1 className="mt-5 font-bold text-center text-4xl">{info.name}</h1>
      <h4 className="mt-2 font-semibold text-center">
        {info.locality} - {info.areaName}
      </h4>

      <p className="font-semibold text-center mt-2">
        {info.cuisines.join(", ")}
      </p>
      <div className="border-b my-5"></div>
      <h2 className="text-2xl font-bold uppercase text-center mt-5">Menu</h2>
      <div className="border-b my-5"></div>
      <div className="">
        {menuItems.map((item) => {
          return (
            <div className="flex justify-between mb-3" key={item.card.info.id}>
              <h4 className="font-semibold">{item.card.info.name}</h4>
              <h4 className="font-semibold text-green-700">
                Rs.{" "}
                {Math.ceil(
                  (item.card.info.price
                    ? item.card.info.price
                    : item.card.info.defaultPrice) / 100
                ).toFixed(2)}
                /-
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
