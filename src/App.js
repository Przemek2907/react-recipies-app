import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import Home from './pages/Home';
import Recipies from './pages/Recipies';
import SingleRecipie from './pages/SingleRecipie';
import Default from './pages/Default';

function App() {
  return (
    <div>
      <Home />
      <Recipies />
      <SingleRecipie />
      <Default />
    </div>
  );
}

export default App;
