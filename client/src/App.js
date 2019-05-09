import React from "react";
import Nav from "./components/Nav";
import Books from "./pages/Books";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="bg">
        <Nav />
        {/* <div className="bg"></div> */}
        <Switch>
          <Route exact path="/" component={Books} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
