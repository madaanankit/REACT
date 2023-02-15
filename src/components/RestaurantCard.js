import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  area,
}) => {
  return (
    <div className="card w-[270px] p-2 m-3 shadow-lg bg-pink-50">
      <img className="restaurantImg" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
      <h5>{area}</h5>
    </div>
  );
};

export default RestaurantCard;
