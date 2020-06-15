import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import MyHelmet from './helmet';

class Resume extends React.Component
{
    render()
    {
        return(
            <div>
               <MyHelmet title={"Resume"}/>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src="https://img2.pngio.com/avatar-businessman-circle-human-male-person-user-icon-avatar-person-png-512_512.png"
                                alt="Avatar"
                                style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Jorge Ortiz</h2>
                        <h4 style={{color: 'grey'}}>Mecatronics Engineer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
                        <h5>Address</h5>
                        <p>Villa Bonita, Udine St. #27</p>
                        <h5>Phone</h5>
                        <p>6621-99-92-40</p>
                        <h5>Email</h5>
                        <p>jorge.ortiz.c97@gmail.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2012}
                            endYear={2015}
                            schoolName="CBTIS #206"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."

                            />

                        <Education 
                            startYear={2015}
                            endYear={2020}
                            schoolName="Hermosillo Technology Institute"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."

                            />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>

                        <Experience
                            startYear={2009}
                            endYear={2012}
                            jobName="First Job"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        />

                        <Experience
                            startYear={2012}
                            endYear={2016}
                            jobName="Second Job"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills 
                            skill="JavaScript"
                            progress={50}
                        />
                        <Skills 
                            skill="React"
                            progress={20}
                        />
                        <Skills 
                            skill="HTML/CSS"
                            progress={70}
                        />
                        <Skills 
                            skill="Python"
                            progress={80}
                        />
                        <Skills 
                            skill="C#"
                            progress={85}
                        />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;