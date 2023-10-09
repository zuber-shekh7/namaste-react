import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "./constants";

const useRestaurantMenu = (restaurantId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  const fetchMenu = async () => {
    const response = await fetch(
      `${SWIGGY_MENU_API}&restaurantId=${restaurantId}`
    );
    const json = await response.json();

    setRestaurantInfo(json);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return restaurantInfo;
};

export default useRestaurantMenu;
