import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './CSS/400px.css';
import './CSS/450px.css';
import './CSS/450-600px.css';
import './CSS/600-800px.css';
import {BrowserRouter, Route ,Switch} from 'react-router-dom' 
import Header from './component/Header'
import Home from './component/Home'
//import TS from './component/Tagraba_Style'
import Video_page from './component/video.js'
import Search_page from './component/Search.js'
import Anime_info from './component/Anime_info.js'
class App extends Component  {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/> 
          <Route path='/video/:anime_name' component={Video_page}/>
          <Route path='/search/:anime_search' component={Search_page}/>
          <Route path='/anime_info/:anime_info' component={Anime_info}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
