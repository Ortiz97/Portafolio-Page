import React from 'react';
import {Grid, Cell} from 'react-mdl';
import MyHelmet from './helmet';

class LandingPage extends React.Component
{
    render()
    {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <MyHelmet title={"Home"}/>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://i.pinimg.com/originals/a7/0e/16/a70e1675c7bc001f1578aa76bb0a7819.png"
                            alt="Avatar Image"
                            className="avatar-img"
                            />
                        
                        <div className="banner-text">
                            <h1>Junior Web Developer</h1>
                            <hr />
                            <p>HTML/CSS | Bootstrap | JavaScript | React | Express</p>

                            <div className="social-links">

                                <a href="https://www.facebook.com/jorge.ortizcanizales/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>

                                <a href="https://github.com/Ortiz97" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                <a href="https://www.youtube.com/channel/UCNXTZJQBLXctAX6w9i5y7qw?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;