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
      const recommendations =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards;

      setRestaurantInfo({
        data: {
          info,
          recommendations,
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
