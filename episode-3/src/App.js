import React from "react";

// React Element using React.createElement
const Heading1 = React.createElement("h2", {}, "Namaste React from Heading 1");

// React Element using JSX
const Heading2 = <h2>Namaste React from Heading 2</h2>;

// React Class Based Component
class Heading3 extends React.Component {
  render() {
    return <h2>Namaste React from Heading 3</h2>;
  }
}

//React Functional Component
const Heading4 = () => {
  return <h2>Namaste React from Heading 4</h2>;
};

const mathematicalExpression = 100 + 200;

// Component Composition
const Headings = () => {
  return (
    <div>
      {Heading1}
      {Heading2}
      <Heading3 />
      {Heading4()}
      {"Mathematical Expression 100 + 200 = " + mathematicalExpression}
    </div>
  );
};

const App = () => <Headings />;

export default App;
