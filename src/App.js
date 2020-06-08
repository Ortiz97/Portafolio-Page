import React from 'react';
import { Navigation, Drawer, Content, Header, Layout } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="Jorge Ortiz" scroll>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact Me</Link>
                    <Link to="/aboutme">About Me</Link>
                </Navigation>
            </Header>
            <Drawer title="Jorge Ortiz">
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact Me</Link>
                    <Link to="/aboutme">About Me</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
    </div>
  );
}

export default App;
