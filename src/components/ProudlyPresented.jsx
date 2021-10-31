import React, { Component } from "react";
import Carousel from 'react-elastic-carousel';
import Heading from "../components/Heading";
import Item from "../assets/js/Item";
import {ProudlyPresentHeading} from "../components/Data";

const ProudlyPresented = () => {

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2},
        {width: 768, itemsToShow: 5},
        {width: 1200, itemsToShow: 5},
    ]

    return (
        <>
          <div className="row logo-box">
            {ProudlyPresentHeading.map((val, index) => {
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

        <Carousel breakPoints = {breakPoints}>
          <Item><img src="images/Group 39.png"/></Item>
          <Item><img src="images/Group 64.png"/></Item>
          <Item><img src="images/Group 55.png"/></Item>
          <Item><img src="images/Group 39.png"/></Item>
          <Item><img src="images/Group 64.png"/></Item>
          <Item><img src="images/Group 55.png"/></Item>
          <Item><img src="images/Group 39.png"/></Item>
          <Item><img src="images/Group 64.png"/></Item>
          <Item><img src="images/Group 55.png"/></Item>
          <Item><img src="images/Group 39.png"/></Item>
          <Item><img src="images/Group 64.png"/></Item>
          <Item><img src="images/Group 55.png"/></Item>
          <Item><img src="images/Group 39.png"/></Item>
          <Item><img src="images/Group 64.png"/></Item>
          <Item><img src="images/Group 55.png"/></Item>
          <Item><img src="images/Group 39.png"/></Item>
          <Item><img src="images/Group 64.png"/></Item>
          <Item><img src="images/Group 55.png"/></Item>
          <Item><img src="images/Group 39.png"/></Item>
          <Item><img src="images/Group 64.png"/></Item>
      </Carousel>

        </div>
        </>
    );
}

export default ProudlyPresented;