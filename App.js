import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "I am inside the h1"),
    React.createElement("h1", { id: "heading" }, "I am inside the h1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", { id: "heading" }, "I am inside the h2"),
    React.createElement("h2", { id: "heading" }, "I am inside the h2"),
  ]),
]);
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world using React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // render method converting the heading into a tag from object
