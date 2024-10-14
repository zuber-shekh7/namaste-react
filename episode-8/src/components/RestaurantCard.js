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
    <section className="card">
      <section className="card-head">
        <img
          className="card-img"
          src={`${CDN_URL}/${cloudinaryImageId}`}
          alt=""
        />
      </section>
      <section className="card-body">
        <section className="flex justify-between align-center mb-6">
          <h2 className="title ellipsis">{name}</h2>
          <h4 className="rating border-rounded">{avgRating}</h4>
        </section>
        <h3 className="sub-title text-dark ellipsis mb-6">
          {cuisines.join(", ")}
        </h3>
        <h4 className="sub-title mb-6">
          {areaName} | {locality}
        </h4>
        <h4 className="sub-title mb-6">{costForTwo}</h4>
      </section>
    </section>
  );
};

export default RestaurantCard;
