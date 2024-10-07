import React from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste from React JS"
);

const root = createRoot(document.getElementById("root"));

root.render(heading);
