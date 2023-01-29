import { useState } from "react";

const Profile = (props) => {
  const [count] = useState("0");
  const { name } = props;
  return (
    <div>
      <h1>Profile Page</h1>
      <h2>Name : {name}</h2>
      <h2>Count : {count}</h2>
    </div>
  );
};

export default Profile;

// React finishes render cycles first and then commit cycles

/**
 * Parent Constructor
 * Parent render
 * Child1 Constructor
 * Child1 render
 * Child2 Contructor
 * Child2 render
 * Child2 componentDidMount
 * Child1 componentDidMount
 * Parent componentDidMount
 */
