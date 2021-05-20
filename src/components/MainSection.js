import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';
import logo from './profile.jpg';
import bg from './background.jpg';
import { Parallax } from 'react-scroll-parallax';


function MainSection() {

    return (
        <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
     
        <div className='main-container'>
            <h1>Website Developer</h1>

            
            <img src={logo} className="picture" />
            <div className="main-btns">

                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Hi!
                </Button>

            </div>
        </div>
        </Parallax>
    );
}

export default MainSection
