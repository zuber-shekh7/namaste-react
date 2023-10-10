import React, { useEffect, useState } from "react";

// components
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";

// utils
import { SWIGGY_API } from "../utils/constants";
import restaurants from "../utils/mockData";

const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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
    return (
      <div className="container-full px-5 py-8 mx-auto">
        <div className="flex justify-between">
          <div className="h-8 bg-gray-300 w-4/12 rounded-md"></div>
          <div className="h-8 bg-gray-300 w-3/12 rounded-md"></div>
        </div>
        <div className="mt-5">
          <div className="h-5 bg-gray-300 w-3/12 rounded-lg"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-5 mt-5">
          <div className="h-96  bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="h-96  bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="h-96  bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="h-96  bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="h-96  bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="h-96  bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="h-96  bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="h-96  bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="h-96  bg-gray-300 rounded-lg animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <main className="container-full px-5 py-8 mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2">
          <input
            className="border-2 border-black rounded px-2 py-1"
            type="text"
            name="search"
            id="search"
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
        </div>
        <div className="flex gap-x-2">
          <button
            onClick={handleClick}
            className="border-2 border-black px-4 py-1 rounded bg-black text-white"
          >
            Top Rated
          </button>
          <button
            onClick={handleReset}
            className="border-2 border-black px-4 py-1 rounded bg-black text-white"
          >
            Reset filter
          </button>
        </div>
      </div>
      <div className="mt-5">
        <h4 className="text-sm font-medium">
          Showing {filteredData.length} results
        </h4>
      </div>
      <div className="mt-5 flex flex-wrap gap-5">
        {filteredData && filteredData.length === 0 ? (
          <h1 className="font-bold text-2xl">No Restaurant Available</h1>
        ) : (
          filteredData.map((item) => {
            return item.info.id % 2 === 0 ? (
              <RestaurantCardPromoted data={item} key={item.info.id} />
            ) : (
              <RestaurantCard data={item} key={item.info.id} />
            );
          })
        )}
        {}
      </div>
    </main>
  );
};

export default Body;
