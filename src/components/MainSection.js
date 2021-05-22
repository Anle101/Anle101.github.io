import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';
import logo from './profile.jpg';
import bg from './background.jpg';
import { Parallax } from 'react-scroll-parallax';


function MainSection() {

    return (
        {/*<Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">*/},
     
        <div className='main-container'>
            <h1>An Le</h1>
            <h5>Nice to see you here !</h5>
            
         
            <div className="main-btns">

               

            </div>
        </div>
      
    );
}

export default MainSection
