import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

let L = '/video/sdoo'
class Header extends Component {
  handleSubmit(e) {
    e.preventDefault()
    return <Link toexact={L} > </Link>
  };
  render() {
    
    return (
      <div className='navbar navbar-expand-sm navbar-dark bg-dark shadow-sm '>
        <div className='navbar-brand mr-auto '>
          Streamer
       </div>
        <form className='form-inline' onSubmit={this.handleSubmit}>
          <input
            className='form-control bg-dark'
            type='text'
            placeholder='Search'
          />
        </form>
      </div>
    );

  }
}

export default Header;