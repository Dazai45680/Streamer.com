import React, { Component } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom'
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory({
  forceRefresh: true
})
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' }
  }

  handleSubmit = e => {
    e.preventDefault()
    history.push('/search/'+this.state.searchTerm);
  };
  
  handleChange = e => {
    this.setState({ searchTerm: e.target.value })
  }
  
  render() {
    return (
      <div className='navbar navbar-expand-sm navbar-dark bg-dark shadow-sm '>
        <div className='navbar-brand mr-auto '>
        <NavLink exact to='/' className='navbar-brand mr-auto'>
          Rising flare
          </NavLink>
       </div>
        <form className='form-inline txt' onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.searchTerm}
            onChange={this.handleChange}
            className='form-control bg-dark text-white'
            placeholder='Search'
          />
        </form>
      </div>
    );

  }
}

export default Header;