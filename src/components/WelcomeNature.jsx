import React from "react";
import {Container} from "@material-ui/core/";
import Heading from "../components/Heading";
import {WelcomeHeading} from "../components/Data";

const WelcomeNature = () => {
    return (
        <>
            {WelcomeHeading.map((val, index) => {
                return (
                    <Heading
                        key={index}
                        id={index}
                        img={val.img}
                        title={val.title}
                        text={val.text}
                    />
                );
            })}
            
            <Container>
                <div className="row nature-row">
                    <div className="col-lg-3">
                        <img src="images/Group 207.png" alt="nature"/>
                    </div>
                    <div className="col-lg-3">
                        <img src="images/Group 205.png" alt="nature"/>
                    </div>
                    <div className="col-lg-3">
                        <img src="images/Group 207.png" alt="nature"/>
                    </div>
                    <div className="col-lg-3">
                        <img src="images/Group 207.png" alt="nature"/>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default WelcomeNature;
