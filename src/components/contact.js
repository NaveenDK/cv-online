import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
             <Grid className="contact-grid">
               <Cell col={6}>
                <h2> Naveen Kolambage</h2>
                <img 
                 src="./images/myAvatar.png"
                 alt="avatar"
                 style={{height:'250px'}}
                />
                <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s,                    
                </p>
               </Cell>
               <Cell col={6}>
               <h2>
                   Contact Me
               </h2>
               <hr></hr>
               <div className="contact-list">
               <List>
                <ListItem>
                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                       020 40807364</ListItemContent>
                </ListItem>

                <ListItem>
                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                      <i className="fa fa-envelope-square" aria-hidden="true"/>
                       naveenkolambage@gmail.com</ListItemContent>
                </ListItem>

                <ListItem>
                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                      <i className="fa fa-skype" aria-hidden="true"/>
                      naveen.dinushka</ListItemContent>
                </ListItem>

                </List>

               </div>
               </Cell>
             </Grid>
            
            </div>
            
            
            )
    }
}

export default Contact;