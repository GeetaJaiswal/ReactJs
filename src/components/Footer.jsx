import React from 'react'
import {List, ListItem, ListItemText, Typography} from "@material-ui/core/";

const style = {
  width: 54,
  height: 3,
  backgroundColor: "#00dbd0",
}

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <>
      <div className="row footer" style={{ background : "url('images/Group 229.png')" , backgroundSize :"cover" }}>
        <div className="col-lg-4">
          <div className="footer-about">
            <Typography><img src="images/Group 225.png" alt=''/>
            </Typography>
            <List className="footer-single-list">
              <ListItem className="list-body" style={{ display: "block" }}>
                <ListItemText
                  className="footer-list-text"
                  primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                />
                <hr style={style}/>
                <p className="copyright">copyright © {year} Nature</p>
              </ListItem>
            </List>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="footer-info">
            <Typography className="footer-title">Information</Typography>
            <hr style={style}/>
            <div className="col-lg-6" style={{ display: "inline-block" }}>
            <List>
              <ListItem className="list-body" style={{ display: "block" }}>
                <ListItemText
                  className="footer-list-text"
                  primary="About us"
              />
                <ListItemText
                  className="footer-list-text"
                  primary="Products"
                />
                <ListItemText
                  className="footer-list-text"
                  primary="Contact Us"
                />
                <ListItemText
                  className="footer-list-text"
                  primary="Terms of Service"
                />
              </ListItem>
            </List>
            </div>
            
            <div className="col-lg-6" style={{ display: "inline-block" }}>
            <List>
              <ListItem className="list-body" style={{ display: "block" }}>
                <ListItemText
                  className="footer-list-text"
                  primary="About us"
                  />
                <ListItemText
                  className="footer-list-text"
                  primary="Products"
                />
                <ListItemText
                  className="footer-list-text"
                  primary="Contact Us"
                />
                <ListItemText
                  className="footer-list-text"
                  primary="Terms of Service"
                />
              </ListItem>
            </List>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="footer-social">
            <Typography className="footer-title">Follow us</Typography>
            <hr style={style}/>
            <List>
              <ListItem className="list-body" style={{ display: "block" }}>
                <ListItemText
                  className="footer-list-social"
                  primary=<img src="images/Group 99.png"/>
                />
                <ListItemText
                  className="footer-list-social"
                  primary=<img src="images/Group 100.png"/>
                />
                <ListItemText
                  className="footer-list-social"
                  primary=<img src="images/Group 105.png"/>
                />
                <ListItemText
                  className="footer-list-social"
                  primary=<img src="images/Group 99.png"/>
                />
              </ListItem>
            </List>
          </div>
        </div>
      </div>       
    </>
  );
}

export default Footer;
