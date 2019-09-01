import React from "react";
import "./App.css";
import Nav from "./Nav";
import Shope from "./Shope";
import ItemDetails from "./ItemDetails";
import About from "./components/About";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import TodosApp from "./components/hooks/todospp";
import CounterWithReducer from "./components/hooks/CounterWithReducer";

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
          <Route path="/useReducer" component={TodosApp} />
          <Route path="/counterWithReducer" component={CounterWithReducer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
