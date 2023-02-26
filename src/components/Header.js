import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const loggedInUser = () => {
  return true;
};
const Title = () => (
  <a href="/">
    {/* <img alt="logo" src="" /> */}
    <h1 id="nr" key="title">
      Food Villa
    </h1>
  </a>
);

const Header = () => {
  const [title, setTitle] = useState("Food Villa");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-50">
      <Title />
      {/* <h1>{title}</h1> */}
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <div className="flex">
          <div className="font-bold text-blue-400 justify-center">
            {user.name}
          </div>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div className="flex">
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Header;
