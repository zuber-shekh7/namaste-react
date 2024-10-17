import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import RestaurantCard, { withOpenRestaurantCard } from "./RestaurantCard";
import Button from "./Button";
import RestaurantsContainerSkeleton from "./skeletons/RestaurantsContainerSkeleton";
import { API_URL } from "../utils/constants";

const OpenRestaurantCard = withOpenRestaurantCard(RestaurantCard);

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
    <section className="mt-8">
      {isLoading ? (
        <RestaurantsContainerSkeleton />
      ) : (
        <>
          {/* SEARCH SECTION */}
          <section className="flex justify-between items-center mb-6">
            <section className="flex justify-between items-center">
              <input
                className="border border-orange-600 rounded-md px-2 py-1 mr-2 focus:outline-orange-600 text-slate-800 placeholder:text-sm"
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
          <section className="flex overflow-x-scroll">
            {restaurants &&
              restaurants.map((item) => {
                return (
                  <Link key={item.info.id} to={`/restaurants/${item.info.id}`}>
                    {item.info.isOpen ? (
                      <OpenRestaurantCard info={item.info} />
                    ) : (
                      <RestaurantCard info={item.info} />
                    )}
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
