import React from 'react';
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Editor } from "./pages/Editor"
import NavBar from './components/NavBar';
// import { TextField } from './components/TextField';

function App() {
  return (
    <div>
      <NavBar></NavBar>

      <Editor></Editor>
    </div>
    // <Switch>
    //   <Route path="/">
    //     {/* <Home /> */}
    //   </Route>
    //   <Route path="/browse">
    //     {/* <Home /> */}
    //   </Route>
    //   <Route path="/about">
    //     {/* <Home /> */}
    //   </Route>
    // </Switch>
    
  );
}

export default App;
