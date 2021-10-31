import React from "react";
import Button from '@material-ui/core/Button';
import Heading from "../components/Heading";
import {NewsletterHeading} from "../components/Data";


const Newsletter = () => {
    return (
        <>
          <div className="newsletter-box">
            {NewsletterHeading.map((val, index) => {
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
                                             
          <div className="newsletter">
            <input type="text" placeholder="Enter your email address"/>
            <Button variant="contained" color="primary">Subscribe</Button>
          </div>
        </div>
        </>
    );
}

export default Newsletter;
