import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <>
        <div className="row">
        <div className="col-1"></div>
        <div className="col-md-10">
         <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03"
             aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <NavLink className="logo" exact to="/">React Solution</NavLink>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav my-2 my-lg-0 ms-auto" style={{bsScrollHeight: 100}}>  
                <li className="nav-item">
                  <NavLink exact 
                  activeClassName="active_menu hy" 
                  aria-current="page" 
                  to="/"
                  >Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact
                  
                  activeClassName="active_menu"
                  to="/about">About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact
                  activeClassName="active_menu"
                    to="/services"
                    tabindex="-1"
                    aria-disabled="true">Services
                    </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact
                  
                  activeClassName="active_menu"
                    to="/contact"
                    tabindex="-1"
                    aria-disabled="true">Contact
                    </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
        </div>
        <div className="col-1"></div>
      </div>
        </>
    );
}

export default Navbar;