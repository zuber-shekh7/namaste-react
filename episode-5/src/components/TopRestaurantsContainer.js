import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Button from "./Button";

import restaurantsMockData from "../utils/mockData";

const TopRestaurantsContainer = () => {
  const [restaurants, setRestaurants] = useState([...restaurantsMockData]);
  const [isTopRatedFilterActive, setIsTopRatedFilterActive] = useState(false);

  const handleTopRatedBtnClick = () => {
    if (isTopRatedFilterActive) {
      setRestaurants([...restaurantsMockData]);
    } else {
      setRestaurants(
        restaurantsMockData.filter((item) => item.info.avgRating > 4.5)
      );
    }
    setIsTopRatedFilterActive(!isTopRatedFilterActive);
  };
  return (
    <section className="top-rated-restaurants">
      <Button onClick={handleTopRatedBtnClick}>
        {isTopRatedFilterActive
          ? "Show All Restaurants"
          : "Show Top Rated Restaurants"}
      </Button>
      <section className="restaurants-container">
        {restaurants.map((item) => {
          return <RestaurantCard key={item.info.id} info={item.info} />;
        })}
      </section>
    </section>
  );
};

export default TopRestaurantsContainer;
