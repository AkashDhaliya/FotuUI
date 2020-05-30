import React from "react";
import "./App.css";
import backGroundImage from './OC1Y8J1.eps'
import SearchComponent from "./SearchComponent/Search";
import ImageComponent from "./ImgSectionComponent/ImageSection";

function App() {
  return (
    <div className="App">
      <header className="Fotu-header">
        <p> FOTU </p>{" "}
      </header>{" "}
      <SearchComponent />
      <ImageComponent />
    </div>
  );
}

export default App;
