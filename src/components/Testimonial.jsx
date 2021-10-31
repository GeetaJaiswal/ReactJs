import React, { Component } from "react";
import Carousel from 'react-elastic-carousel';
import {Testimonials} from "../components/Data";
import TestimonialTemplate from "../components/TestimonialTemplate";

const Testimonial = () => {

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2},
        {width: 768, itemsToShow: 1},
        {width: 1200, itemsToShow: 5},
    ]

    return (
        <>
        <div className="row testimonial-box">

        <Carousel breakPoints = {breakPoints} className=" ">
            {Testimonials.map((val, index) => {
                return (
                    <TestimonialTemplate
                        key={index}
                        id={index}
                        topImg={val.topImg}
                        img={val.img}
                        title={val.title}
                        text={val.text}
                    />
                );
            })}
        </Carousel>

        </div>
        </>
    );
}

export default Testimonial;