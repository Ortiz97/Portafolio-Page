import React from 'react';
import placeholder from '../images/placeholder-image.png';
import AI2 from '../images/IA-background2.jpg';

function Projects()
{
    return(
        <div className="container projects-container">
            <div className="row">
                <div className="col-md-4">
                    <div className="thumbnail">
                        <h1>Proyecto 1</h1>
                        <img src={placeholder}/>
                        <figcaption>
                            Proyecto hecho con html, javascript y css
                        </figcaption>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="thumbnail">
                        <h1>Proyecto 2</h1>
                        <img src={placeholder}/>
                        <figcaption>
                            Proyecto hecho con Bootstrap.
                        </figcaption>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="thumbnail">
                        <h1>Proyecto 3</h1>
                        <img src={placeholder}/>
                        <figcaption>
                            Proyecto hecho en ReactJS.
                        </figcaption>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;