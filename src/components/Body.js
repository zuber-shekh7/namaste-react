import React, { useEffect, useState } from "react";

// components
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

// utils
import { SWIGGY_API } from "../utils/constants";

const Body = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilterData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    setData([]);
    const response = await fetch(SWIGGY_API);
    const data = await response.json();
    const newRestaurants =
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setData(newRestaurants);
    setFilterData(newRestaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    const filteredRestaurants = data.filter(
      (item) => item.info.avgRating >= 4.5
    );
    setFilterData(filteredRestaurants);
  };

  const handleReset = () => {
    setFilterData(data);
    setSearchTerm("");
  };

  const handleSearch = () => {
    const filteredRestaurants = data.filter((item) =>
      item.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterData(filteredRestaurants);
  };

  if (data.length === 0 && !searchTerm) {
    return <Shimmer />;
  }

  return (
    <main className="main-container">
      <div className="search-container">
        <input
          className="search-box"
          type="text"
          name=""
          id=""
          placeholder="Search Restaurant"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          disabled={searchTerm.length === 0}
          className="search-btn"
        >
          Search
        </button>
      </div>
      <div className="top-rated-container">
        <div>
          <button onClick={handleClick} className="top-rated-btn">
            Top Rated Restaurants
          </button>
          <button onClick={handleReset} className="top-rated-btn">
            Reset filter
          </button>
        </div>
        <h4>Showing {filteredData.length} results</h4>
      </div>
      <div className="restaurant-container">
        {filteredData.map((item) => {
          return <RestaurantCard data={item} key={item.info.id} />;
        })}
      </div>
    </main>
  );
};

export default Body;
