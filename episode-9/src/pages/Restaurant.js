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
            <section className="flex justify-center mt-18">
              <section>
                <h1 className="title text-center mb-6">
                  {restaurantInfo?.data?.info?.name}
                </h1>
                <section className="card px-12 py-12">
                  <h4 className="sub-title mb-6">
                    {restaurantInfo?.data?.info?.avgRating} (
                    {restaurantInfo?.data?.info?.totalRatings}+ ratings)
                  </h4>
                  <h4 className="sub-title text-dark mb-6">
                    {restaurantInfo?.data?.info?.cuisines.join(", ")}
                  </h4>
                  <h4 className="sub-title mb-6">
                    {restaurantInfo?.data?.info?.areaName} |{" "}
                    {restaurantInfo?.data?.info?.city}
                  </h4>
                  <h4 className="sub-title mb-6">
                    {restaurantInfo?.data?.info?.costForTwoMessage}
                  </h4>
                  <h4 className="sub-title text-dark mb-6">
                    {restaurantInfo?.data?.info?.isOpen ? "Open Now" : "Closed"}
                  </h4>
                </section>
              </section>
            </section>
          )}

          {restaurantInfo.data && restaurantInfo.data.recommendations && (
            <section className="flex justify-center">
              <section>
                <h2 className="title text-dark mb-6">Recommendations</h2>
                {restaurantInfo.data.recommendations.map((item) => {
                  return (
                    <section
                      key={item?.card?.info?.id}
                      className="card px-12 py-12"
                    >
                      <section className="flex justify-between align-center">
                        <section>
                          <h3 className="sub-title text-dark mb-6">
                            {item?.card?.info?.name}
                          </h3>
                          <h4 className="sub-title text-dark mb-6">
                            Rs. {item?.card?.info?.price / 100}/-
                          </h4>
                        </section>
                        <section>
                          <Button onClick={() => {}} className="button-md">
                            Add
                          </Button>
                        </section>
                      </section>
                      <p className="sub-title mb-6">
                        {item?.card?.info?.description}
                      </p>
                    </section>
                  );
                })}
              </section>
            </section>
          )}
        </>
      )}
    </section>
  );
};

export default Restaurant;
