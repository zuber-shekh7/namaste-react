import React, { useState } from "react";
import { useParams } from "react-router-dom";

import RestaurantInfoSkeleton from "../components/skeletons/RestaurantInfoSkeleton";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import CategoryItem from "../components/CategoryItem";

const Restaurant = () => {
  const [openPanel, setOpenPanel] = useState(0);

  const { restaurantId } = useParams();
  const restaurantInfo = useRestaurantInfo(restaurantId);

  const handlePanelClick = (key) => {
    setOpenPanel(key === openPanel ? null : key);
  };

  return (
    <section>
      {restaurantInfo.isLoading ? (
        <RestaurantInfoSkeleton />
      ) : (
        <>
          {restaurantInfo.data && restaurantInfo.data.info && (
            <section className="container mx-auto my-8">
              <section className="flex justify-center w-full">
                <section className="w-10/12">
                  <h1 className="text-2xl font-bold text-orange-600 text-left mb-4">
                    {restaurantInfo?.data?.info?.name}
                  </h1>
                  <section className="bg-slate-200 px-4 py-4 rounded-xl border-4 border-slate-400 shadow-xl">
                    <h4 className="font-semibold mb-1">
                      {restaurantInfo?.data?.info?.avgRating} (
                      {restaurantInfo?.data?.info?.totalRatings}+ ratings) |{" "}
                      {restaurantInfo?.data?.info?.costForTwoMessage}
                    </h4>
                    <h4 className="text-sm font-semibold text-orange-600 underline mb-1">
                      {restaurantInfo?.data?.info?.cuisines.join(", ")}
                    </h4>
                    <h4 className="text-sm font-semibold mb-1">
                      {restaurantInfo?.data?.info?.areaName} |{" "}
                      {restaurantInfo?.data?.info?.city}
                    </h4>
                    <h4 className="font-semibold">
                      {restaurantInfo?.data?.info?.isOpen
                        ? "Open Now"
                        : "Closed"}
                    </h4>
                  </section>
                </section>
              </section>
            </section>
          )}

          {restaurantInfo.data &&
            restaurantInfo.data.categories.map((category, index) => {
              return (
                <CategoryItem
                  key={category?.card?.card?.title}
                  category={category}
                  openPanel={index === openPanel}
                  handlePanelClick={() => handlePanelClick(index)}
                />
              );
            })}
        </>
      )}
    </section>
  );
};

export default Restaurant;
