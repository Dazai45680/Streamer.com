import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Route ,Switch} from 'react-router-dom' 
import Header from './component/Header'
import Home from './component/Home'
import TS from './component/Tagraba_Style'
class App extends Component  {
  render() {
    return (
      <div className="App">
        <Header/>
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/> 
        </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
