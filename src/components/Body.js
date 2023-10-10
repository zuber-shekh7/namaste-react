import React, { useEffect, useState } from "react";

// components
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

// utils
import { SWIGGY_API } from "../utils/constants";
import restaurants from "../utils/mockData";

const Body = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(restaurants);
  const [filteredData, setFilterData] = useState(restaurants);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    setIsLoading(true);
    setData([]);
    const response = await fetch(SWIGGY_API);
    const json = await response.json();
    const newRestaurants =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      [];

    setData(newRestaurants);
    setFilterData(newRestaurants);
    setIsLoading(false);
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

  if (isLoading) {
    return <Shimmer />;
  }

  return (
    <main className="container px-5 py-8">
      <div className="flex gap-x-2">
        <input
          className="border-2 border-black rounded px-2 py-1"
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
          className="border-2 border-black px-4 rounded bg-black text-white"
        >
          Search
        </button>
        <button
          onClick={handleClick}
          className="border-2 border-black px-4 rounded bg-gray-300"
        >
          Top Rated Restaurants
        </button>
        <button
          onClick={handleReset}
          className="border-2 border-black px-4 rounded bg-gray-300"
        >
          Reset filter
        </button>
      </div>
      <div className="mt-5">
        <h4 className="text-sm font-medium">
          Showing {filteredData.length} results
        </h4>
      </div>
      <div className="mt-5 flex justify-around flex-wrap gap-5">
        {filteredData && filteredData.length === 0 ? (
          <h1 className="font-bold text-2xl">No Restaurant Available</h1>
        ) : (
          filteredData.map((item) => {
            return <RestaurantCard data={item} key={item.info.id} />;
          })
        )}
        {}
      </div>
    </main>
  );
};

export default Body;
