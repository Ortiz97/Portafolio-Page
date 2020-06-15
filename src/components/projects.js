import React from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import MyHelmet from './helmet';

class Projects extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories()
    {
        if(this.state.activeTab === 0)
        {
            return(
                <div className="projects-grid">
                    {/*Project #1 */}
                    
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '175px', background: 
                            'url(https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover'}}>React Project #1</CardTitle>

                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    
                    
                    
                    {/*Project #2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '175px', background: 
                            'url(https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover'}}>React Project #2</CardTitle>

                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    
                    {/*Project #3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '175px', background: 
                            'url(https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover'}}>React Project #3</CardTitle>

                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            );
        }
        else if(this.state.activeTab === 1)
        {
            return(
                <div className="projects-grid">
                    {/*Project #1 */}
                    
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '175px', background: 
                            'url(https://lh3.googleusercontent.com/proxy/ez_mzJDjN15au1XwTqwFKJhn2dcdicvEHNkbyDCD_kvRK-nrQfydw_I4tdskN7AzqxGGjv4nQSPn9Yq0J8d15uv6w9VB4Khst4rS-2J-SuzhURMnfr3bl9Cu0QLF) center / cover'}}>Python Project #1</CardTitle>

                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    
                    {/*Project #2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '175px', background: 
                            'url(https://lh3.googleusercontent.com/proxy/ez_mzJDjN15au1XwTqwFKJhn2dcdicvEHNkbyDCD_kvRK-nrQfydw_I4tdskN7AzqxGGjv4nQSPn9Yq0J8d15uv6w9VB4Khst4rS-2J-SuzhURMnfr3bl9Cu0QLF) center / cover'}}>Python Project #2</CardTitle>

                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project #3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '175px', background: 
                            'url(https://lh3.googleusercontent.com/proxy/ez_mzJDjN15au1XwTqwFKJhn2dcdicvEHNkbyDCD_kvRK-nrQfydw_I4tdskN7AzqxGGjv4nQSPn9Yq0J8d15uv6w9VB4Khst4rS-2J-SuzhURMnfr3bl9Cu0QLF) center / cover'}}>Python Project #3</CardTitle>

                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            );
        }
        else if(this.state.activeTab === 2)
        {
            return(
                <div className="projects-grid">

                    {/*Project #1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '175px', background: 
                            'url(https://www.henkla.se/wp-content/uploads/2019/09/ctraining_resize_md.jpg) center / cover'}}>Python Project #1</CardTitle>

                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    
                    {/*Project #2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '175px', background: 
                            'url(https://www.henkla.se/wp-content/uploads/2019/09/ctraining_resize_md.jpg) center / cover'}}>Python Project #2</CardTitle>

                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project #3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '175px', background: 
                            'url(https://www.henkla.se/wp-content/uploads/2019/09/ctraining_resize_md.jpg) center / cover'}}>Python Project #3</CardTitle>

                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            );
        }
    }

    render()
    {
        return(
            <div className="category-tabs">
                <MyHelmet title={"Projects"}/>
                <Tabs activeTab={this.state.activeTab} onChange={ (tabId) => this.setState({activeTab: tabId}) } ripple>
                    <Tab>React</Tab>
                    <Tab>Python</Tab>
                    <Tab>C#</Tab>
                </Tabs>

                
                <Grid>
                    <Cell col={12} >
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Projects;