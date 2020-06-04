import React from "react";
import "./App.css";
import ImageComponent from "./ImgSectionComponent/ImageSection";
import SearchComponent from "./SearchComponent/Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="Fotu-header">
        <p> FOTU </p>
        <Router>
          <span className="header-nav-items">
            <nav>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/search">Search</Link>
                </li>
                <li>
                  <Link to="/random">Random</Link>
                </li>
              </ul>
            </nav>
          </span>

          <Switch>
            <Route path="/home">
              <ImageComponent />
            </Route>
            <Route path="/search">
              <SearchComponent />
            </Route>
            <Route path="/random">
              <SearchComponent />
            </Route>
          </Switch>
        </Router>
      </header>
      {/* <ImageComponent /> */}
    </div>
  );
}

export default App;
