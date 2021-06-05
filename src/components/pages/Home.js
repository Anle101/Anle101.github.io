import React from 'react';
import '../../App.css';
import MainSection from '../MainSection';
import Skills from '../Skills';
import Experience from '../Experience';
import Projects from '../Projects';
function Home() {
    return ( 
        <>
            <MainSection />
            <Skills />
            <Experience />
            <Projects />
        </>
    );
}

export default Home