import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h4>Footer</h4>
      <span>username: {user.name}</span>
    </div>
  );
};

export default Footer;
