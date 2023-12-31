import React from "react";
import { Outlet } from "react-router-dom";

// components
import Header from "./components/Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
