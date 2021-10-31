import React from "react";
import {Button} from '@material-ui/core/';
import WelcomeNature from "../components/WelcomeNature";
import Blogs from "../components/Blogs";
import ProudlyPresented from "../components/ProudlyPresented";
import Newsletter from "../components/Newsletter";
import Testimonial from "../components/Testimonial";

const Home = () => {
    return (
        <>  <img src="images/Group 135.png" className="side-img"/>
            <div className="container">
                <div className="row slide">
                    <div className="col-lg-5 slide-left">
                        <h5>Healthy life with</h5>
                        <h1>Natural organic</h1>
                        <p>Veget
                        ables are the edible parts of a plant that is used in cooking or can be eaten now.</p>
                        <Button variant="contained">explore now</Button>
                    </div>
                    <div className="col-lg-7">
                        <div className="slide-right-box">
                            <img src="images/Group 228.png" alt="logo" className="slide-right-img1"/>
                        </div>
                        <img src="images/Group 195.png" alt="flower" className="slide-right-img2"/>
                    </div>
                </div>

                <WelcomeNature/>
            </div>
                <ProudlyPresented/> 
            <div className="container">    
                <Testimonial/>           
                <Newsletter/>
                <Blogs/>
            </div>
            
        </>
    );
}

export default Home;
