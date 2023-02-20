import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy",
    email: "dummy@hotmail.com",
  },
});

export default UserContext;
