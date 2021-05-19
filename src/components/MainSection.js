import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';
import logo from './Profile.jpg';

function MainSection() {
    return (
        <div className='main-container'>
            <h1>Website Developer</h1>

            <img src={logo} className="picture"/>
            <div className="main-btns">

                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Hi!
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    dsadsa!
                </Button>
            </div>
        </div>
    );
}

export default MainSection
