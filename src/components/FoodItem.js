import { IMG_CDN_URL } from "../constants";

const FoodItem = ({
  name,
  cloudinaryImageId,
  category,
  description,
  price,
}) => {
  return (
    <div className="card w-[270px] p-2 m-3 shadow-lg bg-pink-50">
      <img className="restaurantImg" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4>{category}</h4>
      <h5>{price / 100} Rs</h5>
    </div>
  );
};

export default FoodItem;
