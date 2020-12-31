import React, {useContext} from "react";
import {GlobalState} from '../../GlobalState';
import { Link } from "react-router-dom";
import axios from 'axios';
import './header.css'

function Header() {

  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged
  const [isAdmin] = state.userAPI.isAdmin

  const logoutUser = async () => {
    await axios.get('/user/logout')
    localStorage.clear()
    window.location.href = '/'
  }

  const adminRouter = () => {
    return (
      <>
        <li><Link to="/">Create Product</Link></li>
        <li><Link to="/products">Products</Link></li>
      </>
    )
  }

  const loggedRouter = () => {
    return (
      <>
        <li><Link to="/logout" onClick={logoutUser}>Logout</Link></li>
      </>
    )
  }

  return (
    <>
      <nav>
          <ul>
            <li>
                <Link to="/">
                    <div className="logo">{ isAdmin ? 'Admin' : 'Barras'}</div>
                </Link>
            </li>
          </ul>
        
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/our-history">Our History</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          {isAdmin && adminRouter()}

          {
            isLogged ? loggedRouter() : <li><Link to="/login"><i className="fas fa-sign-in-alt"></i>&nbsp;Sign In</Link></li>
          }

        </ul>
      </nav>
    </>
  );
}

export default Header;
