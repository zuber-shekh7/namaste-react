import React from "react";
import { Link } from "react-router-dom";

// utils
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { data } = props;
  const { info } = data;
  const {
    id,
    name,
    locality,
    areaName,
    cloudinaryImageId,
    avgRating,
    isOpen,
    cuisines,
  } = info;
  return (
    <Link to={`/restaurants/${id}`}>
      <div className="w-64 md:w-72 lg:w-96 shadow border border-transparent rounded-md hover:border-gray-200 hover:shadow-lg transition">
        <img
          className="rounded-t-md h-48 w-full object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant Banner"
        />
        <div className="my-2 px-2 ">
          <h2 className="text-2xl font-bold truncate block">{name}</h2>
          <span className="font-medium text-sm block truncate">
            {locality} - {areaName}
          </span>
          <h3 className="font-bold block truncate">{cuisines.join(", ")}</h3>
          <h5 className="font-bold text-yellow-600">{avgRating} Star</h5>
          <h6 className="my-4">
            {isOpen ? (
              <span className="bg-green-500 px-2 py-2 rounded text-white">
                Open Now
              </span>
            ) : (
              <span className="bg-red-500 px-2 py-2 rounded text-white">
                Closed
              </span>
            )}
          </h6>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
