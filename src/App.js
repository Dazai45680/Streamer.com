import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Route ,Switch} from 'react-router-dom' 
import Header from './component/Header'
import Home from './component/Home'
//import TS from './component/Tagraba_Style'
import Video_page from './component/video.js'
import Search_page from './component/Search.js'
class App extends Component  {
  render() {
    return (
      <div className="App">
        <Header/>
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/> 
          <Route path='/video/:anime_name' component={Video_page}/>
          <Route path='/search/:anime_search' component={Search_page}/>
        </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
