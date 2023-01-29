import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
import { Component } from "react";

// const AboutUs = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <div>This is my first React Course✔</div>
//       {/* <Outlet /> */}
//       <Profile name={"Ankit"} />
//       <ProfileClass name={"Ankit"} />
//     </div>
//   );
// };

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About Us</h1>
        <div>This is my first React Course✔</div>
        {/* <Outlet /> */}
        {/* <Profile name={"Ankit"} /> */}
        <ProfileClass name={"Ankit"} />
      </div>
    );
  }
}

export default About;
