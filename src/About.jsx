import React from 'react';
import Common from './Common';
import img from './images/about-slider.png';


const About = () => {
    return(
        <>
        <Common
            name="Welcome to About page"
            imgsrc={img}
            visit="/contact"
            btname="Contact us"
        />
        </>
    );
}

export default About;