import React from 'react';
import {Helmet} from 'react-helmet';

function MyHelmet(props)
{
    return(
        <Helmet>
            <title>My Portafolio | {props.title}</title>
        </Helmet>
    );
}

export default MyHelmet;