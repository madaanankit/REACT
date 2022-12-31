import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{ id : "title"},"React Course! from Parcel")
const heading2 = React.createElement("h1",{ id : "title"},"React Course 2!")
const container = React.createElement("div",{ id : "container"},[heading,heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);  

// never keep package-lock in git ignore
// parcel does hot module replacement(HMR) which watches every file for any update using File Watcher Algorithm

