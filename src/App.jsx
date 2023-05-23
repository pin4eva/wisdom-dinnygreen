import React from "react";
import "./styles/index.scss";
import "./styles/styles.scss";
import "remixicon/fonts/remixicon.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-home">
        <h1>Home Page</h1>
      </div>
      <Footer />
    </div>
  );
};

export default App;
