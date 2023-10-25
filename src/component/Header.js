import { Link } from 'react-router-dom';
import useConnection from '../utilities/useConnection';
// import { useContext } from 'react';
// import UserContext from '../utilities/UserContext';
import { useSelector } from 'react-redux';
// import DarkMode from './DarkMode'
// import { useState } from "react";


let Header = (props) => {
  const network_status = useConnection();
  // const data = useContext(UserContext);
  const cartData = useSelector(store => store.cart.cartItem)



  return (
    <nav  className="navbar navbar-expand-sm bg-white navbar-dark" style={{height: '60px', position: 'sticky', top: '0', zIndex: '1', boxShadow: '2px 2px 2px grey'}}>
      <div className="container-fluid">
      <div className='title'>
        <img src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" alt='Swiggy' width="35px" height="35px" />
        <h1 className="text-dark ">Swiggy</h1>
        </div>
        <button className="navbar-toggler bg-warning text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse justify-content-center header" id="collapsibleNavbar">
          <ul className="navbar-nav OnMouseHover">

            <li className="nav-item dropdown">
              <Link className="nav-link text-dark" to="/" ><h6>{props.title1}</h6></Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link text-dark" to="/About" ><h6>{props.title2}</h6></Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link text-dark" to="/contact" ><h6>{props.title3}</h6></Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link text-dark" to="/instamart" ><h6>{props.title7}</h6></Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link text-dark" to='/cart' ><h6>{props.title5}:-{cartData?.length}</h6></Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link text-dark" to="/login" ><h6>{props.title6}</h6></Link>
            </li>

            <h3 className='text-white'>{network_status === true ? "🟢" : "🔴"}</h3>

          </ul>
          {/* <h3 className='text-white'>{data?.userData?.name}</h3> */}

        </div>
            {/* <DarkMode/> */}
  
      </div>
      {/* <h3 className='text-dark'>{data?.userData?.email}</h3> */}
    </nav>
  )
}

export default Header;
