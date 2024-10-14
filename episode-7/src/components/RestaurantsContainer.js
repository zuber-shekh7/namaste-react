import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Button from "./Button";
import RestaurantsContainerSkeleton from "./skeletons/RestaurantsContainerSkeleton";
import { API_URL } from "../utils/constants";

const RestaurantsContainer = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [isTopRatedFilterActive, setIsTopRatedFilterActive] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTopRestaurantsData();
  }, []);

  const fetchTopRestaurantsData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(API_URL);
      const json = await response.json();

      const data =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setRestaurants(data);
      setAllRestaurants(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTopRatedBtnClick = () => {
    setSearchText("");
    if (isTopRatedFilterActive) {
      setRestaurants([...allRestaurants]);
    } else {
      setRestaurants(
        allRestaurants.filter((item) => item.info.avgRating > 4.5)
      );
    }
    setIsTopRatedFilterActive(!isTopRatedFilterActive);
  };

  const handleSearchBtnClick = () => {
    if (!searchText || searchText === "") {
      setRestaurants([...allRestaurants]);
      return;
    }

    setRestaurants(
      allRestaurants.filter((item) =>
        item.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleSearchBtnClick();
    }
  };

  return (
    <section className="mt-18">
      {isLoading ? (
        <RestaurantsContainerSkeleton />
      ) : (
        <>
          <section className="w-full flex justify-between align-center">
            <section>
              <input
                className="mr-12"
                type="text"
                value={searchText}
                placeholder="Search restaurants"
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleEnterKey}
              />
              <Button onClick={handleSearchBtnClick}>Search</Button>
            </section>
            <Button onClick={handleTopRatedBtnClick}>
              {isTopRatedFilterActive
                ? "Show All Restaurants"
                : "Show Top Rated Restaurants"}
            </Button>
          </section>
          <section className="mt-18 flex overflow-scroll">
            {restaurants &&
              restaurants.map((item) => {
                return (
                  <Link key={item.info.id} to={`/restaurants/${item.info.id}`}>
                    <RestaurantCard info={item.info} />
                  </Link>
                );
              })}
          </section>
        </>
      )}
    </section>
  );
};

export default RestaurantsContainer;
