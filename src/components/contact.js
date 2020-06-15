import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import MyHelmet from './helmet';

class Contact extends React.Component
{
    render()
    {//fonts.google.com
        return(
            <div className="contact-body">
                <MyHelmet title={"Contact Me"}/>
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Jorge Ortiz</h2>
                        <img 
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="Avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '70%', margin: 'auto', paddingTop: '1em'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}} className="contact-item">
                                        <i className="fa fa-phone-square contact-icon" aria-hidden="true"/>
                                        6621-99-92-40
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}} className="contact-item">
                                        <i className="fa fa-envelope contact-icon" aria-hidden="true"/>
                                        jorge.ortiz.c97@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}} className="contact-item">
                                        <i className="fa fa-skype contact-icon" aria-hidden="true"/>
                                        MySkype
                                    </ListItemContent>
                                </ListItem>
                                
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;