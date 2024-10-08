import React from "react";

const RestaurantCard = (props) => {
  const { info } = props;
  const {
    name,
    areaName,
    avgRating,
    costForTwo,
    cuisines,
    locality,
    totalRatingsString,
    cloudinaryImageId,
  } = info;
  return (
    <section className="card-container">
      <img
        className="card-image"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt=""
      />
      <section className="card-body">
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>
          {areaName} | {locality}
        </h4>
        <h4>{costForTwo}</h4>
        <h4>Rating: {avgRating}</h4>
      </section>
    </section>
  );
};

export default RestaurantCard;
