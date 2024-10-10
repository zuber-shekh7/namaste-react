import React from "react";
import Header from "./components/Header";
import TopRestaurantsContainer from "./components/TopRestaurantsContainer";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <TopRestaurantsContainer />
      </main>
      <Footer />
    </>
  );
};

export default App;
