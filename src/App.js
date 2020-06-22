import React from "react";
import "./App.css";
import Home from './Components/HomeComponent/Home'
import Search from "./Components/SearchComponent/Search";
import RandomImg from "./Components/RandomImgComponent/RandomImg";
import Chat from "./Components/ChatComponent/Chat";
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
              <li>
                <NavLink exact activeClassName="active" to="/chat">
                  Message us
                </NavLink>
              </li>
            </ul>
          </nav>
        </span>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/random" component={RandomImg}></Route>
          <Route exact path="/chat" component={Chat}></Route>
        </Switch>
      </Router>
      <footer className="Fotu-footer">
        <div>
          <p>
            {" "}
            Created by Akash. Contact me at{" "}
            <strong>Akash.dhaliya@gmail.com</strong>
          </p>
          <p>
            {" "}
            Images source <a href="https://unsplash.com/">Unsplash&nbsp;</a>Code
            source <a href="https://github.com/AkashDhaliya/Fotu.git">Github</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
