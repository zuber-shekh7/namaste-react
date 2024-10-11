import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Button from "./Button";

import { API_URL } from "../utils/constants";
import RestaurantCardSkeleton from "./RestaurantCardSkeleton";

const TopRestaurantsContainer = () => {
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
    <section className="top-rated-restaurants">
      {isLoading ? (
        <>
          <section className="restaurant-search-skeleton-container">
            <section className="search-box-skeleton"></section>
            <section className="top-rated-button-skeleton"></section>
          </section>
          <section className="top-rated-restaurants-skeleton">
            {Array.from(Array(10).keys())
              .fill("")
              .map((_item, index) => {
                return <RestaurantCardSkeleton key={index} />;
              })}
          </section>
        </>
      ) : (
        <>
          <section className="restaurant-search-container">
            <section className="search-box">
              <input
                className="search-input"
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
          <section className="restaurants-container">
            {restaurants &&
              restaurants.map((item) => {
                return <RestaurantCard key={item.info.id} info={item.info} />;
              })}
          </section>
        </>
      )}
    </section>
  );
};

export default TopRestaurantsContainer;
