import React from "react";

// utils
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { data } = props;
  const { info } = data;
  const {
    name,
    locality,
    areaName,
    cloudinaryImageId,
    avgRating,
    isOpen,
    cuisines,
  } = info;
  return (
    <div className="card-container">
      <img src={CDN_URL + cloudinaryImageId} alt="Restaurant Banner" />
      <div className="info-container">
        <h2 className="name">{name}</h2>
        <span>
          {locality} - {areaName}
        </span>
        <h3>{cuisines.join(", ")}</h3>
        <h5>{avgRating} Star</h5>
        <h6>
          {isOpen ? (
            <span className="green">Open Now</span>
          ) : (
            <span className="red">Closed</span>
          )}
        </h6>
      </div>
    </div>
  );
};

export default RestaurantCard;
