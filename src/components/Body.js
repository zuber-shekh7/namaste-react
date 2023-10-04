import React, { useEffect, useState } from "react";

// components
import RestaurantCard from "./RestaurantCard";

// utils
import restaurants from "../utils/mockData";

const Body = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilterData] = useState(false);

  useEffect(() => {
    setData(restaurants);
  }, []);

  const handleClick = () => {
    if (filteredData) {
      setData(restaurants);
    } else {
      const topRatedRestaurants = data.filter(
        (item) => item.info.avgRating >= 4
      );
      setData(topRatedRestaurants);
    }

    setFilterData(!filteredData);
  };

  return (
    <main className="main-container">
      <div className="search-container">
        <h4>TODO: Search bar</h4>
      </div>
      <div className="top-rated-container">
        <button onClick={handleClick} className="top-rated-btn">
          {filteredData ? "View All Restaurants" : "View Top Rated Restaurants"}
        </button>
        <h4>Showing {data.length} results</h4>
      </div>
      <div className="restaurant-container">
        {data.map((item) => {
          return <RestaurantCard data={item} key={item.info.id} />;
        })}
      </div>
    </main>
  );
};

export default Body;
