import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", class: "heading" },
  "Namaste React"
);

const h2ChildOne = React.createElement(
  "h2",
  {
    id: "child1",
    key: "child1",
  },
  "I am first h2"
);

const h2ChildTow = React.createElement(
  "h2",
  {
    id: "child2",
    key: "child2",
  },
  "I am second h2"
);

const child = React.createElement("div", { id: "child" }, heading);

const parent = React.createElement("div", { id: "parent" }, child);

const parentWithMultipleChildren = React.createElement(
  "div",
  { id: "parent" },
  [h2ChildOne, h2ChildTow]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(parentWithMultipleChildren);
