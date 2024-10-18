import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantInfo = (restaurantId) => {
  const [restaurantInfo, setRestaurantInfo] = useState({
    data: null,
    isLoading: false,
  });

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    try {
      setRestaurantInfo({ ...restaurantInfo, isLoading: true });
      const response = await fetch(`${MENU_API_URL}${restaurantId}`);
      const json = await response.json();

      const info = json?.data?.cards[2]?.card?.card?.info;
      const categories =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (item) =>
            item.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

      setRestaurantInfo({
        data: {
          info,
          categories,
        },
        isLoading: false,
      });
    } catch (error) {
      console.error(error);
      setRestaurantInfo({
        ...restaurantInfo,
        isLoading: false,
      });
    }
  };

  return restaurantInfo;
};

export default useRestaurantInfo;
