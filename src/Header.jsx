import React from 'react';
import logo from './images/google-keep.svg';

const Header = () => {
    return (
        <>
        <div className="header">
            <img src={logo} alt="logo" className="logo"/>
            <h1 className="logo-text">Keep</h1>
        </div>
        </>
    );
}

export default Header;