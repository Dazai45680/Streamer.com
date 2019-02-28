import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 className="Header_text">Streamer.com</h1>
      <div className="Search_div">
        <input className="Search_button" type="button" value="Search"/>
        <input className="Search_text" type="text" name="" id=""/>
      </div>
      </div>
    );
  }
}

export default Header;