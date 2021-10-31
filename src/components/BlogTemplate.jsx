import React from "react";
import {CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core/';
import { NavLink } from "react-router-dom";

const BlogTemplate = (props) => {
    return (
        <>
        <div className="col-lg-4 blog">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={props.img}
              title="Contemplative Reptile"
              className="blog-img"
            />
            <CardContent>
              <Typography gutterBottom className="blog-heading">
                {props.title}
              </Typography>
              <Typography variant="body2" component="p" className="blog-body">
              {props.text}
              </Typography>
          </CardContent>
        </CardActionArea>
        <NavLink exact to="" className="blog-read-more">Read more</NavLink>
      <hr/>
      </div>
      </>
    );
}

export default BlogTemplate;
