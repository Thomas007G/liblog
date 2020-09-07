import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { TextField } from './components/TextField';

function App() {
  return (

    <Switch>
      <Route path="/">
        {/* <Home /> */}
      </Route>
      <Route path="/browse">
        {/* <Home /> */}
      </Route>
      <Route path="/about">
        {/* <Home /> */}
      </Route>
    </Switch>
    
  );
}

export default App;
