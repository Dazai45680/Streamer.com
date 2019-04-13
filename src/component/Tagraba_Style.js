import React, { Component } from 'react';
import '../App.css';
import img_d from '../images/douluo-dalu-2nd-season.png'
import { Link, NavLink } from 'react-router-dom'
import vs from '../1.mp4'
class Header extends Component {
  render() {
    return (
      <div className='video_image'>

      <div className="mr-8 yellow">
      <p className="anime-P">
        TOARU MAJUTSU NO INDEX III EPISODE 26 ENGLISH SUBBED</p></div>
         <div className="container navbar-dark bg-dark  shadow-sm">
      <div className='player row'>
        <div className="col-lg-12 video">
          <video
            ref={node => (this.video = node)}
            onClick={this.handleTogglePlay}
            onTimeUpdate={this.handleProgress}
            onDoubleClick={this.handleFullscreen}
            controls
          >
          <source src={vs} type="video/mp4"/>
          </video>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Header;