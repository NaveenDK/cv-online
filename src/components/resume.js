import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Resume extends Component {
    render(){
        return(
            <div> 
                <Grid>
                    <Cell col={4}>
                     <div style={{textAlign: 'center'}}>
                     <img 
                     src="./images/myAvatar.png" alt="avatar" 
                     style={{height:'200px'}}
                     />
                     
                     </div>
                     <h2 style={{paddingTop:'2em'}}>Naveen Kolambage</h2>
                     <h4 style={{color:'grey'}}>Web Developer</h4>
                     <hr style={{borderTop: '3px solid #833fb2', width:'50%'}} />
                     <p>
                     React Developer Tools is a Chrome DevTools
                      extension for the open-source React JavaScript library.
                       It allows you to inspect the React component hierarchies
                        in the Chrome Developer Tools.
                     </p>
                     <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}></hr>
                     <h5>Address</h5>
                      <p>39 Onehunga Mall Road, Onehunga Auckland NZ</p>
                      <h5>Phone</h5>
                       <p>020 40807364</p>
                       <h5>Email</h5>
                       <p>naveenkolambage@gmail.com</p>
                        </Cell>
                    <Cell  className="resume-right-col"col={8}>
                    <h2>Education</h2>
                    <Education
                    startYear={2015}
                    endYear ={2017}
                    schoolName="Massey University"
                    schoolDescription ="React Developer Tools is a Chrome DevTools
                    extension for the open-source React JavaScript library.
                     It allows you to inspect the React component hierarchies
                      in the Chrome Developer Tools."
                    />
                   <hr style={{borderTop: '3px solid #e22947'}} />

                   <h2>Experience</h2>
                            <Experience 
                            startYear = "May 2017"
                            endYear= "October 2017"
                            jobName="Test Analyst - Finzoft Solutions"
                            jobDescription= "React Developer Tools is a Chrome DevTools
                            extension for the open-source React JavaScript library.
                             It allows you to inspect the React component hierarchies
                              in the Chrome Developer Tools."/>
                               <Experience 
                            startYear = "November 2017"
                            endYear= "January 2018"
                            jobName="Web Developer - Customapps"
                            jobDescription= "React Developer Tools is a Chrome DevTools
                            extension for the open-source React JavaScript library.
                             It allows you to inspect the React component hierarchies
                              in the Chrome Developer Tools."/>
                                <Experience 
                            startYear = "March 2018"
                            endYear= "December 2018"
                            jobName="Web Developer - Devitise"
                            jobDescription= "React Developer Tools is a Chrome DevTools
                            extension for the open-source React JavaScript library.
                             It allows you to inspect the React component hierarchies
                              in the Chrome Developer Tools."/>

                                <Experience 
                            startYear = "January 2019"
                            endYear= "present"
                            jobName="Web Developer - Digital Collab"
                            jobDescription= "React Developer Tools is a Chrome DevTools
                            extension for the open-source React JavaScript library.
                             It allows you to inspect the React component hierarchies
                              in the Chrome Developer Tools."/> 


                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Resume;