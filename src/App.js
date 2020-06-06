import React from "react";
import "./App.css";
import ImageComponent from "./ImgSectionComponent/ImageSection";
import Search from "./SearchComponent/Search";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="Fotu-header">
        <p> FOTU </p>
      </header>
      <Router>
        <span className="header-nav-items">
          <nav>
            <ul>
              <li>
                <NavLink exact activeClassName="active" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/search">
                  Search
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/random">
                  Random
                </NavLink>
              </li>
            </ul>
          </nav>
        </span>

        <Switch>
          <Route exact path="/" component={ImageComponent}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/random" component={Search}></Route>
        </Switch>
      </Router>
      {/* <ImageComponent /> */}
    </div>
  )
}

export default App;
