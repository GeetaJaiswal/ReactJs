import React from 'react';

const year = new Date().getFullYear();

const Footer = () => {
    return(
        <>
        <div className="row">
            <div className="col-1"></div>
                <div className="col-md-10">
                    <div className="row"></div>
                        <footer>
                            <p>copyright © {year} React Solution. All Rights Reserved</p>
                        </footer>
                </div>
        </div>
        </>
    );
}

export default Footer;

