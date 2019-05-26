import React, { Component } from 'react';
import '../App.css';
import img_d from '../images/douluo-dalu-2nd-season.png'
import { Link, NavLink } from 'react-router-dom'
import vs from '../1.mp4'
import Loading_Gif from '../images/3.gif'
class Header extends Component {
  render() {
    return (
      // loading --------------->
      // <div className="Loading">
      // <img className = "welcome-img" src={Loading_Gif} alt="" />
      // <h1 className = "welcome-text"> Rising flare</h1>
      // </div>

      // Home and Search design---------------------------->
  //     <div className="container">
  //         <Link to={'/video/'}>
  //             <div className="card item shadow-lg p-3 mb-3 ml-3 mt-3 roundedm">
  //                 <img className="card-img-top img-size" src={img_d} alt={'r'} />
  //                 <p>any name</p>
  //             </div>
  //         </Link>
  //         <Link to={'/video/'}>
  //         <div className="card item shadow-lg p-3 mb-3 ml-3 mt-3 roundedm">
  //             <img className="card-img-top img-size" src={img_d} alt={'r'} />
  //             <p>any name</p>
  //         </div>
  //     </Link>
  //     <Link to={'/video/'}>
  //     <div className="card item shadow-lg p-3 mb-3 ml-3 mt-3 roundedm">
  //         <img className="card-img-top img-size" src={img_d} alt={'r'} />
  //         <p>any name</p>
  //     </div>
  // </Link>
      
  // </div>

  // anime info design  ------------------->
//   <div className="video_image">
//   <div className=" yellow container">
//       <p className="anime-P">{"anime info"}</p>

//   </div>
//   <div className="container navbar-dark bg-dark  shadow-sm">
//       <div className="flex">
//           <img className="info_image" src={img_d} alt="" />
//           <p className="info_name">{'black clover'}</p>
//       </div>
//       <div className="anime_Links">
        

//               <Link exact to={'../video/'}>
//                   <p>{'anime episodes'}</p>
//               </Link>
//       </div>
//   </div>
// </div>


<div className='video_image'>

<div className=" yellow container">
    <Link exact to={'../anime_info/'}>
        <p className="anime-P">
            {'ay 7aga'}</p>
    </Link>
</div>
<div className="container navbar-dark bg-dark  shadow-sm">
    <div className='player row'>
        <div className="col-lg-12 video">
            <video controls src={vs} > </video>
        </div>
    </div>
</div>
</div>
     
    );
  }
}

export default Header;