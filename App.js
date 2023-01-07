// HMR Hot Module Replacement
// FIle Watcher Algo
// Bundling
// Minify
// cleaning our code
// dev and production build
// Image optimization
// caching while development
// compression
// compatible with older versions
// HTTPS on dev
// port number
// consistent hashing algo
// zero config
// tree shaking - removing unwanted code

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "title", key: "title1" },
  "React Course! from Parcel"
);
// React.createElement returns an object which converted into HTML(DOM)
const heading2 = React.createElement(
  "h1",
  { id: "title", key: "title2" },
  "React Course 2!"
);
// const container = React.createElement("div", { id: "container" }, [
//     React.createElement("h1", { id: "title", key: "title1" }, "About Us"),
//     React.createElement("ul", {}, [React.createElement("li", {}, "About Us2")])]);

// JSX is HTML like syntax but not HTML inside javascript
// class is used in HTML and className is used in JSX
// JSX uses React.createElement => object =>  HTML(DOM)
// Babel converts your JSX into HTML
const heading3 = (
  <h1 id="nr" key="title" className="header">
    Namaste React
  </h1>
);
const Heading = () => (
  <h1 id="nr" key="title" className="header">
    Namaste React Class 3
  </h1>
);
// React Component
// Functional Component = new way of writing code
// class based component = old way
// any js code can be written in {}
// using 1 component inside another component it is called Component Composition

// example of functional based component

var a = 10 + 2;
const HeaderComponent = () => {
  return (
    <div>
      {heading3}
      {Heading()}
      {a}
      <h2>Functional Component</h2>
      <h3>This is h3</h3>
    </div>
  );
};

console.log(HeaderComponent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);

// never keep package-lock in git ignore
// parcel does hot module replacement(HMR) which watches every file for any update using File Watcher Algorithm
// polyfil is the alternate to a code that browser does not understand and polyfil is the alternate to that code
// which is compatible with older browsers
// Babel is a node package
// Babel converts this code with the help of browserslist
// we do not have to write polyfil, it is done by babel automatically
// create react app command uses webpack
