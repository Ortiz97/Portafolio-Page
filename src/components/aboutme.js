import React from 'react';
import MyHelmet from './helmet';

class About extends React.Component
{
    render()
    {
        return(
            <div>
                <MyHelmet title={"About Me"}/>
                <h1>About Page</h1>
            </div>
        );
    }
}

export default About;