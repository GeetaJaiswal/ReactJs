import React from 'react';
import Common from './Common';
import img from './images/home1-slider.png';


const Home = () => {
    return(
        <>
        <Common
            name="Grow your Business"
            imgsrc={img}
            visit="/services"
            btname="Get Started"
        />
        </>
    );
}

export default Home;