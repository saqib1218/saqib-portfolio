import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Sevices';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="App">
    <Sidebar />
    <ProfileCard />
    
      <Header />
      <About />
     
      <Experience />
      <Services />
      <Skills />
      <Projects />
      <Contact />
   
    </div>
  );
}

export default App;