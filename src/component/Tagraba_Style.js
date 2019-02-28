import React, { Component } from 'react';
import '../App.css';
import img_d from '../images/douluo-dalu-2nd-season.png'

class Header extends Component {
  render() {
    return (
      <div className="container mr-5 bg-grey">
      <div className="card item shadow-lg p-3 mb-3 ml-3 mt-3 rounded" >
      <img src={img_d} className="card-img-top" alt="" />
      <p>douluo-dalu-2nd-season</p>
      </div>
      <div className="card item shadow-lg p-3 mb-3 ml-3 mt-3 rounded" >
      <img src={img_d} className="card-img-top" alt="" />
      <p>douluo-dalu-2nd-season</p>
      </div>
      <div className="card item shadow-lg p-3 mb-3 ml-3 mt-3 rounded" >
      <img src={img_d} className="card-img-top" alt="" />
      <p>douluo-dalu-2nd-season</p>
      </div>
      <div className="card item shadow-lg p-3 mb-3 ml-3 mt-3 rounded" >
      <img src={img_d} className="card-img-top" alt="" />
      <p>douluo-dalu-2nd-season</p>
      </div>
      <div className="card item shadow-lg p-3 mb-3 ml-3 mt-3 rounded" >
      <img src={img_d} className="card-img-top" alt="" />
      <p>douluo-dalu-2nd-season</p>
      </div>
      <div className="card item shadow-lg p-3 mb-3 ml-3 mt-3 rounded" >
      <img src={img_d} className="card-img-top" alt="" />
      <p>douluo-dalu-2nd-season</p>
      </div>
      </div>
    );
  }
}

export default Header;