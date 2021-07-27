import React from 'react';
import {Button} from './Button';
import './Footer.css';
import {Link} from 'react-router-dom';
import Pdf from '../Documents/Resume2021.pdf';
import { Parallax } from 'react-scroll-parallax';


function Footer() {
    return (
        <Parallax className="custom-class" y={[0, 10]} tagOuter="figure">
     
        <div className= 'footer-container'>
            <h1> Find me on other platforms !</h1>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="social-icons">
                         <a href={Pdf} target="_blank" rel='noopener noreferrer' className="social-icon-link"><i className="fas fa-file"></i></a>
                         <a href="https://www.linkedin.com/in/anle102/" className="social-icon-link"><i className="fab fa-linkedin"></i></a>        
                         <a href="https://github.com/Anle101" className="social-icon-link"><i className="fab fa-github"></i></a>        
                    </div>
                </div>
            </section>
        </div>
        </Parallax>
    );
}

export default Footer
