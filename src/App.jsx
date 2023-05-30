import React from "react";
import "./styles/index.scss";
import "./styles/styles.scss";
import "remixicon/fonts/remixicon.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import SectionOF from "./components/sections/SectionOF";
import SectionFOM from "./components/sections/SectionFOM";
import SectionPOP from "./components/sections/SectionPOP";
import SectionFOH from "./components/sections/SectionFOH";
import SectionSS from "./components/sections/SectionSS";
import SectionOIT from "./components/sections/SectionOIT";
import SectionCU from "./components/sections/SectionCU";

const App = () => {
  return (
    <div className="app">
      <Header />

      <div className="app-home">
        <Section />
        <SectionOF />
        <SectionFOM />
        <SectionPOP />
        <SectionFOH />
        <SectionSS />
        <SectionOIT />
        <SectionCU />
      </div>
      <Footer />
      {/*  <div className="sticky-btn">
        <img src="/images/toppage.png" alt="" className="top" />
      </div> */}
    </div>
  );
};

export default App;
