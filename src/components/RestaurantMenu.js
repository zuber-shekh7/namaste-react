import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// components
import Shimmer from "./Shimmer";

// utils
import { CDN_URL, SWIGGY_MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const params = useParams();

  const restaurant = useRestaurantMenu(params.id);

  if (restaurant === null) {
    return <Shimmer />;
  }

  const info = restaurant?.data?.cards[0]?.card?.card?.info;
  const menuItems =
    restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards ?? [];

  return (
    <div
      style={{
        margin: "12px",
        fontFamily: "Verdana",
        marginTop: "24px",
      }}
    >
      <img
        style={{
          height: "400px",
          width: "400px",
          borderRadius: "20px",
          marginBottom: "10px",
          objectFit: "cover",
        }}
        src={`${CDN_URL}/${info.cloudinaryImageId}`}
      />
      <h1 style={{ margin: "0px" }}>{info.name}</h1>
      <span>
        {info.locality} - {info.areaName}
      </span>
      <p>{info.isOpen ? "Open Now" : "Closed"}</p>
      <p>{info.avgRating} Star Rating</p>
      <p>{info.cuisines.join(", ")}</p>
      <h2>Menu</h2>
      <div>
        {menuItems.map((item) => {
          return (
            <h4 key={item.card.info.id}>
              {item.card.info.name} <br />
              <span style={{ color: "green" }}>
                Rs.{" "}
                {Math.ceil(
                  (item.card.info.price
                    ? item.card.info.price
                    : item.card.info.defaultPrice) / 100
                ).toFixed(2)}
                /-
              </span>
            </h4>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
