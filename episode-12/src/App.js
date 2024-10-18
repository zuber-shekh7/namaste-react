import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Offline from "./components/Offline";

import useOnlineOffline from "./utils/useOnlineOffline";
import UserContext from "./utils/UserContext";

import store from "./store";

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
    <Provider store={store}>
      <UserContext.Provider value={{ user, userLogin, userLogout }}>
        <Header />
        <main className="container mx-auto min-h-screen">
          {isOnline ? <Outlet /> : <Offline />}
        </main>
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

export default App;
