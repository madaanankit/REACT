/*  Header
        -Logo
        -List Items(Right Side)
        -Cart
    Body
        -SearchBar
        -Restaurant Lists 
            -Restaurant Card
                -Image
                -Name
                -Rating
                -Cusines
    Footer
        -Links
        -Copyright
*/

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // default import
import { Title } from "./components/Header"; // named import
import Body from "./components/Body";
import Footer from "./components/Footer";
// React Component
// Functional Component = new way of writing code
// class based component = old way
// any js code can be written in {}
// using 1 component inside another component it is called Component Composition

// example of functional based component

// Inline Styling in React
const styleObj = {
  backgroundColor: "aqua",
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// never keep package-lock in git ignore
// parcel does hot module replacement(HMR) which watches every file for any update using File Watcher Algorithm
// polyfil is the alternate to a code that browser does not understand and polyfil is the alternate to that code
// which is compatible with older browsers
// Babel is a node package
// Babel converts this code with the help of browserslist
// we do not have to write polyfil, it is done by babel automatically
// create react app command uses webpack
// JSX can have only 1 parent element
// React.Fragment is like an empty tag
// <> </> is a shorthand for React.Fragment
