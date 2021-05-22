import React from 'react';
import '../../App.css';
import MainSection from '../MainSection';
import Skills from '../Skills';
import Experience from '../Experience';
function Home() {
    return ( 
        <>
            <MainSection />
            <Skills />
            <Experience />
        </>
    );
}

export default Home