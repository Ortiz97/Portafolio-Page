import React from 'react';
import AI from '../images/IA-background.jpg';
import me from '../images/me.jpg';

function Banner()
{
    return(
        <div className="whole-header">
            <div className="row">
                <div className="col-md-5 parallax banner">
                </div>
                <div className="col-md-7 banner sneak-peek">
                    <div className="row">
                        <div className="col-md-4">
                            <img className="rounded-circle avatar" src={me}/>
                        </div>
                        <div className="col-md-8">
                            <h1>Jorge Ortiz Canizales</h1>
                            <p>
                                Soy bien pro y todo esto es un parrafo bien shidorisaeougvjneiuhsfgvnhesiuvnseivnhseiunvhbssssiv
                                feiuvnheiufabvsubvhfunhbbhbhltbhbhtbwnb
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;