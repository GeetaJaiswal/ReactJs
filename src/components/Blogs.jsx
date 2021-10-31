import React from 'react';
import Heading from "../components/Heading";
import BlogTemplate from '../components/BlogTemplate';
import {BlogHeading, BlogData} from "../components/Data";


const Blogs = () => {
    return (
      <>
        {BlogHeading.map((val, index) => {
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
                                       
        <div className="row blogs">
          {BlogData.map((val, index) => {
            return (
              <BlogTemplate
                key={index}
                id={index}
                img={val.img}
                title={val.title}
                text={val.text}
              />
            );
          })}
          </div> 
        </>
    );
}

export default Blogs;
