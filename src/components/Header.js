import { useState } from "react";
import { Link } from "react-router-dom";

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
          <li className="px-2">Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
