import { useEffect, useState, useContext } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/util";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

// react hooks - js function
// useState - returns an array

const Body = () => {
  const [searchText, setSearchText] = useState(""); // To create state variables
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4425186&lng=77.3223915&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>🔴Oops! Looks like you are offline.</h1>;
  }

  if (!allrestaurants) return null;
  // if (filteredrestaurants?.length === 0) return <h1>No Restarants Found!!</h1>;
  return allrestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="search-input"
          placeholder="Search here"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn m-5 bg-purple-500 hover:bg-purple-600 rounded-md p-2"
          onClick={() => {
            const data = filterData(searchText, allrestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) => setUser({ name: e.target.value })}
        ></input>
      </div>
      <div className="flex flex-wrap m-5">
        {filteredrestaurants?.length === 0 ? (
          <h1>No Restarants Found!!!</h1>
        ) : (
          filteredrestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
