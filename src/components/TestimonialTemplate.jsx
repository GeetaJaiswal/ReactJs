import React from "react";
import Item from "../assets/js/Item";

const TestimonialTemplate = (props) => {
    return (
        <>
            <Item>
                <img src={props.topImg} className="testimonial-top-img" />
                <img src={props.img} className="testimonial-img"/>
                <h4>{props.title}</h4>
                <p>{props.text}</p>
            </Item>
      </>
    );
}

export default TestimonialTemplate;
