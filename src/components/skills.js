import React, {Component } from 'react';
import {Grid,Cell} from 'react-mdl';

class Skills extends Component {
    render(){
        return(
         <Grid>
        
           <Cell col={12}> 
              <h4 style={{marginTop:'0px'}}>
               {this.props.skillName}
              </h4>
              <p> {this.props.skillDescription}</p>
             </Cell>

           

         </Grid>

          
        )
    }
}

export default Skills;