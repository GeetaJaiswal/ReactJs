import React from 'react';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'; 


const Contact = (props) => {
    return(
        <>
        <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10 p-4 pt-3 justify-content-center flex-column">
        <div className="row">
        <div className="col-md-6 slider my-auto d-inline-block order-lg-1 order-2">
            <h1>{props.name} <strong>React Solution</strong></h1>
            <p>We are the team of talented developer making websites</p>
            <NavLink exact to={props.visit}>
            <Button variant="outlined" className="slider_button">
            {props.btname}
            </Button>
            </NavLink>
         </div>
        
         <div className="col-md-6 order-lg-2 order-1 d-inline-block">
            <img src={props.imgsrc} className="home-slider-img img-fluid" style={{width:600, height:400}}/>
         </div>
         </div>
         </div>
         <div className="col-md-1"></div>
         </div>
         
        </>
    );
}

export default Contact;