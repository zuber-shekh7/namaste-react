import React from "react";
import ReactDOM from "react-dom/client";

// React element using React.createElement.
const heading = React.createElement(
  "h1",
  { id: "heading", class: "heading" },
  "Namaste React"
);

// React Element using JSX
const jsxHeading = (
  <h1 id="heading" className="heading">
    Namaste React from JSX
  </h1>
);

const Title = () => <h1>Namaste React 🚀</h1>;

// Functional Component
const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <Title></Title>
      {Title()}
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<HeadingComponent />);
