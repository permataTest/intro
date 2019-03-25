import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
// impoer

import './App.css';
import Home from './containers/Home'
import Players from './containers/Players'
import Navbar from './components/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/players" component={Players}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
