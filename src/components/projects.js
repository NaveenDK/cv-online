import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Project extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab:0};
    
    }
  toggleCategories(){
   
    if (this.state.activeTab === 0){
        return(
            <div className= "projects-grid"  >
            {/* Project 1 */}

            <Card  shadow={5} style={{minWidth:'450',margin:'auto'}}>
                <CardTitle style={{color:'#fff', height:'175px',
                background:'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>
                  React Project 1
                </CardTitle>
                <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>

            </Card>

                <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                <CardTitle style={{color:'#fff', height:'175px',
                background:'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>
                React Project 2
                </CardTitle>
                <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>

                </Card>


                <Card  shadow={5} style={{minWidth:'450',margin:'auto'}}>
                <CardTitle style={{color:'#fff', height:'175px',
                background:'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover' }}>
                React Project 3
                </CardTitle>
                <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>

                </Card>
                </div>
        )
    }else if(this.state.activeTab === 1){
        return(
            <div><h1>This is ReactNative</h1></div>
        )
    } else if(this.state.activeTab === 2){
        return(
            <div>
                <h1>This is Wordpress</h1>
            </div>
        )
    } else if( this.state.activeTab ===3){
        return(
            <div>
                <h1>
                    This is Redux
                </h1>
            </div>
        )
    }

  }



    render(){
        return(

            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})}ripple>
                <Tab>React</Tab>
                <Tab>React Native</Tab>
                <Tab>Wordpress</Tab>
                <Tab>Redux</Tab>
                </Tabs> 

                
                   <Grid >
                     <Cell col={12}>
                      <div className="content" >
                      {this.toggleCategories()}
                      </div>
                     
                     </Cell>
                   </Grid>


            </div>
        )
    }
}

export default Project;