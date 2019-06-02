import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import Home from './pages/Home';
import Recipies from './pages/Recipies';
import SingleRecipie from './pages/SingleRecipie';
import Default from './pages/Default';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recipies" exact component={Recipies} />
        <Route path="/recipies/:id" component={SingleRecipie} />
        <Route component={Default} />
      </Switch>
    </main>
    </Router>
  );
}

export default App;
