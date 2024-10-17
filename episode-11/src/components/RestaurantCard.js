import React from "react";
import { CDN_URL } from "../utils/constants";

export const withOpenRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <h2 className="bg-green-500 text-white font-bold text-sm p-2 rounded-t-md w-3/12 mb-[-4px]">
          Open Now
        </h2>
        <RestaurantCard {...props} />
      </>
    );
  };
};

const RestaurantCard = (props) => {
  const { info } = props;
  const {
    name,
    areaName,
    avgRating,
    costForTwo,
    cuisines,
    locality,
    cloudinaryImageId,
  } = info;
  return (
    <section className="bg-white w-96 mr-3 mb-3 rounded-md shadow-sm hover:shadow-md">
      <section>
        <img
          className="h-48 w-full object-cover rounded-t-md"
          src={`${CDN_URL}/${cloudinaryImageId}`}
          alt=""
        />
      </section>
      <section className="p-6">
        <section className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-orange-600 truncate mb-2">
            {name}
          </h2>
          <h4 className="bg-green-500 text-white rounded-full p-1 font-medium">
            {avgRating}
          </h4>
        </section>
        <h3 className="text-md font-medium truncate mb-2 ">
          {cuisines.join(", ")}
        </h3>
        <h4 className="text-md mb-2">
          {areaName} | {locality}
        </h4>
        <h4 className="text-md font-medium">{costForTwo}</h4>
      </section>
    </section>
  );
};

export default RestaurantCard;
