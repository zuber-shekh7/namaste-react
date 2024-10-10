import React from "react";
import { CDN_URL } from "../utils/constants";

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
    <section className="card-container">
      <img
        className="card-image"
        src={`${CDN_URL}/${cloudinaryImageId}`}
        alt=""
      />
      <section className="card-body">
        <section className="title-and-rating">
          <h2 className="ellipsis">{name}</h2>
          <h4>{avgRating}</h4>
        </section>
        <h3 className="ellipsis">{cuisines.join(", ")}</h3>
        <h4>
          {areaName} | {locality}
        </h4>
        <h4>{costForTwo}</h4>
      </section>
    </section>
  );
};

export default RestaurantCard;
