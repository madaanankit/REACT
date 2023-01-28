import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "../components/Shimmer";

const RestaurantMenu = () => {
  // how to dynamically read the parameters from the route
  const params = useParams();
  const { id } = params;

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=28.4425186&lng=77.3223915&menuId=" +
        id
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
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
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
