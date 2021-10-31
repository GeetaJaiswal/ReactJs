import React from 'react';
import {NavLink} from 'react-router-dom';

const Card = (props) => {
    return (
        <>
        <div className="col-md-4">
        <div class="card" style={{width: 300}}>
            <img src={props.imgsrc} class="card-img-top" alt="..." className="card_img" />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink to="#" class="btn btn-primary">Know more</NavLink>
            </div>
        </div>
        </div>
        </>
    );
}

export default Card;