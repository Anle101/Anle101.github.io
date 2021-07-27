import React, {useState, useEffect} from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

import bg from './background.jpg';
import { Parallax } from 'react-scroll-parallax';


function MainSection() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
            <div className='main-container' style={{transform: `translateY(${offsetY * 0.5}px)`, position: 'relative', zIndex:-1}}>
                <h1>An Le</h1>
                <h5>Nice to see you here!</h5>
            </div>
       
    );
}

export default MainSection
