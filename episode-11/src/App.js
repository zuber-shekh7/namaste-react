import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Offline from "./components/Offline";

import useOnlineOffline from "./utils/useOnlineOffline";
import UserContext from "./utils/UserContext";

const App = () => {
  const isOnline = useOnlineOffline();
  const [user, setUser] = useState(null);

  const userLogin = (name) => {
    setUser({
      name,
    });
  };

  const userLogout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, userLogin, userLogout }}>
      <Header />
      <main className="container mx-auto min-h-screen">
        {isOnline ? <Outlet /> : <Offline />}
      </main>
      <Footer />
    </UserContext.Provider>
  );
};

export default App;
