import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "../components/Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  // how to dynamically read the parameters from the route
  const params = useParams();
  const { id } = params;

  const restaurant = useRestaurant(id);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>Restaurant ID - {id}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>Area - {restaurant?.area}</h3>
        <h3>City - {restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>Cost for two - {restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <h2>Menu</h2>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <div className="flex">
              <li key={item.id} className="m-2">
                {item.name} -{item.price / 100} Rs
              </li>{" "}
              <span className="m-2">-</span>
              <button
                className="p-1 bg-green-200"
                onClick={() => {
                  handleAddItem(item);
                }}
              >
                Add Item
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
