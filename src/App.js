import React from "react";
import "./App.scss";
import Home from "./Components/HomeComponent/Home";
import Search from "./Components/SearchComponent/Search";
import RandomImg from "./Components/RandomImgComponent/RandomImg";
//import Chat from "./Components/ChatComponent/Chat";
import Header from "./Components/HeaderComponent/Header";
import Footer from "./Components/FooterComponent/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/random" component={RandomImg}></Route>
          {/* <Route exact path="/chat" component={Chat}></Route> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
