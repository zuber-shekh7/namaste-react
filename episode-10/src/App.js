import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Offline from "./components/Offline";

import useOnlineOffline from "./utils/useOnlineOffline";

const App = () => {
  const isOnline = useOnlineOffline();

  return (
    <>
      <Header />
      <main className="container mx-auto min-h-screen">
        {isOnline ? <Outlet /> : <Offline />}
      </main>
      <Footer />
    </>
  );
};

export default App;
