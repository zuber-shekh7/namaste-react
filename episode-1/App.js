const heading1 = React.createElement("h2", {}, "Child - 1");
const heading2 = React.createElement("h2", {}, "Child - 2");

const child1 = React.createElement(
  "div",
  {
    id: "child1",
  },
  heading1
);
const child2 = React.createElement(
  "div",
  {
    id: "child2",
  },
  heading2
);

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [child1, child2]
);

const h1 = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Namaste from React"
);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(parent);
