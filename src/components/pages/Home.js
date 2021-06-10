import React from 'react';
import '../../App.css';
import MainSection from '../MainSection';
import Skills from '../Skills';
import Experience from '../Experience';
import Projects from '../Projects';
import Aboutme from '../Aboutme';
function Home() {
    return ( 
        <>
            <MainSection />
            <Aboutme />
            <Skills />
            <Experience />
            <Projects />
        </>
    );
}

export default Home