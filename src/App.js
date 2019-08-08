import React from "react";
import "./App.css";
import Nav from "./Nav";
import Shope from "./Shope";
import ItemDetails from "./ItemDetails";
import About from "./About";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shope} />
          <Route path="/shop/:id" component={ItemDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

export default App;
