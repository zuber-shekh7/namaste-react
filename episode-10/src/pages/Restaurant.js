import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import Button from "../components/Button";
import RestaurantInfoSkeleton from "../components/skeletons/RestaurantInfoSkeleton";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const Restaurant = () => {
  const { restaurantId } = useParams();
  const restaurantInfo = useRestaurantInfo(restaurantId);

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

          {restaurantInfo.data && restaurantInfo.data.recommendations && (
            <section className="container mx-auto">
              <section className="flex justify-center w-full">
                <section className="w-10/12">
                  <h2 className="text-xl font-bold mb-2">{`Recommended (${restaurantInfo?.data?.recommendations?.length})`}</h2>
                  {restaurantInfo.data.recommendations.map((item) => {
                    return (
                      <section
                        key={item?.card?.info?.id}
                        className="border border-slate-400 rounded-md px-4 py-4 mb-3 bg-slate-200"
                      >
                        <section className="flex justify-between items-center">
                          <section>
                            <h3 className="text-md font-bold text-orange-600">
                              {item?.card?.info?.name}
                            </h3>
                            <h4 className="text-md font-bold">
                              Rs. {item?.card?.info?.price / 100}/-
                            </h4>
                            <p className="font-thin">
                              {item?.card?.info?.description}
                            </p>
                          </section>
                          <Button onClick={() => {}}>Add</Button>
                        </section>
                      </section>
                    );
                  })}
                </section>
              </section>
            </section>
          )}
        </>
      )}
    </section>
  );
};

export default Restaurant;
