import React from "react";
import Nav from "./components/Nav";
import Books from "./pages/Books";
import SavedBooks from "./pages/SavedBooks";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="bg">
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/SavedBooks" component={SavedBooks} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
