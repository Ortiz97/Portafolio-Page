import React from 'react';
import AboutMe from './AboutMe'
import Projects from './MyProjects'
import Banner from './Banner';
import ContactMe from './ContactMe';

function App() {
  return (
    <div className="App">
      <Banner />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
