import React from "react";
import {NavLink} from "react-router-dom";
import {Button} from '@material-ui/core/';


const Navbar = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-1 "></div>
                    <div className="col-lg-10">
                        <div className="row">
                            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                                 <div className="container-fluid">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                                        data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" 
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <NavLink exact className="navbar-brand" to="/">
                                        <img src="images/Group 220.png" alt=""  
                                            className="navbar-logo d-inline-block align-text-center"/>
                                        <span className="navabr-brand-name">organic</span>
                                    </NavLink>
                                        
                                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                                        <ul className="navbar-nav my-2 my-lg-0 ms-auto" style={{bsScrollHeight: 100}}>  
                                            <li className="nav-item">
                                                <NavLink exact 
                                                    activeClassName="active_menu hy" 
                                                    aria-current="page" 
                                                    to="/">Home
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink exact
                                                    activeClassName="active_menu"
                                                    to="/Product ">Product
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink exact
                                                    activeClassName="active_menu"
                                                    to="/Blogs "
                                                    tabindex="-1"
                                                    aria-disabled="true">Blogs
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink exact
                                                    activeClassName="active_menu"
                                                    to="/About us "
                                                    tabindex="-1"
                                                    aria-disabled="true">About us
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                            <Button variant="outlined" className="nav-btn">Contact</Button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                <div className="col-lg-1"></div>
            </div>
        </>
    );
}

export default Navbar;