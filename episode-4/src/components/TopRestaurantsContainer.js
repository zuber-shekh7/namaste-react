import React from "react";
import RestaurantCard from "./RestaurantCard";

const TopRestaurantsContainer = (props) => {
  const { data } = props;

  return (
    <section className="top-restaurants-container">
      {data.map((item) => {
        return <RestaurantCard key={item.info.id} info={item.info} />;
      })}
    </section>
  );
};

export default TopRestaurantsContainer;
