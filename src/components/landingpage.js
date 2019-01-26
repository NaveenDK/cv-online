import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style ={{width: '100%', margin:'auto'}}>
              <Grid className="landing-grid">
              <Cell col={12}>
              <img
              src="./images/myAvatar.png"
              alt="avatar"
              className="avatar-img"
              />

              <div className="banner-text">
                <h1>
                    Full Stack Web Developer
                </h1>
                <hr></hr>
                <p> HTML/CSS | Bootstrap | Wordpress | React | React Native | NodeJS | Express | MongoDB</p>
              <div className="social-links">
              {/*LinkedIN*/}
                    <a href="https://www.linkedin.com/in/naveendk/" rel="noopener noreferrer" target="_blank">
                    <i className ="fa fa-linkedin-square" aria-hidden="true"/>
                    </a>  
                {/*github*/}
                     <a href="https://www.linkedin.com/in/naveendk/" rel="noopener noreferrer" target="_blank">
                    <i className ="fa fa-github-square" aria-hidden="true"/>
                    </a>    
                      
                    
                    
                    <a href="https://github.com/naveendk" ></a>           
              </div>
              </div>
              </Cell>
              </Grid>
            </div>
        )
    }
}

export default Landing;