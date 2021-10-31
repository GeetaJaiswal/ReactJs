import React from "react";

const Heading = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12 col-12 heading">
                    <img src={props.img} className="center"/>
                        <h3>{props.title}</h3>
                            <p>{props.text}</p>
                </div>
            </div>
        </>
    );
}

export default Heading;