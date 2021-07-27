import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button';
import {animateScroll as scroll} from 'react-scroll';
import {scrollToComponent} from 'react-scroll-to-component';

 function Navbar() {
     const [click, setClick] = useState(false);
     const [button, setButton] = useState(true);

     const handleClick = () => setClick(!click);
     const closeMobileMenu = () => setClick(false);

     const showButton = () => {
         if (window.innerWidth <= 960) { 
             setButton(false);
         } else { 
             setButton(true);
         }
     }

     const toggleHome = () => {
         scroll.scrollToTop();
         closeMobileMenu();
     }

     const toggleAboutme = () => {
         if (window.innerWidth <= 768) {
            scroll.scrollTo(890);
         }
         else if (window.innerWidth <= 960) {
            scroll.scrollTo(890);
         }
         else if (window.innerWidth <= 1468) { //
            scroll.scrollTo(890);
         }
         else {
            scroll.scrollTo(1010);
         }
        
        closeMobileMenu();
     }

     const toggleSkill = () => {
        if (window.innerWidth <= 768) {
            scroll.scrollTo(1650);
         }
         else if (window.innerWidth <= 960) {
            scroll.scrollTo(1400);
         }
         else if (window.innerWidth <= 1468) { //
            scroll.scrollTo(1300);
         }
         else {
            scroll.scrollTo(1310);
         }
     
        closeMobileMenu();
     }

     
     const toggleExperience = () => {
        if (window.innerWidth <= 768) {
            scroll.scrollTo(2020);
         }
         else if (window.innerWidth <= 960) {
            scroll.scrollTo(1860);
         }
         else if (window.innerWidth <= 1468) { //
            scroll.scrollTo(1660);
         }
         else {
            scroll.scrollTo(1640);
         }
        
        closeMobileMenu();
    }

     const toggleContact = () => {
         scroll.scrollToBottom();
         closeMobileMenu();
     }

     useEffect(() => {showButton();} , []);
     window.addEventListener('resize', showButton);

     return (
         <> 
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={toggleHome}>
                        An Le   <i class="fab fa-accusoft"></i>
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={toggleAboutme}>
                                About Me
                            </Link>
                         </li>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={toggleSkill}>
                                Skills
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={toggleExperience}>
                                Experience
                            </Link>
                        </li>


                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={toggleContact}>
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                   {/* {button && <Button buttonStyle='btn--outline'> Test Button </Button>}*/}
            
                </div>
            </nav> 
         </>
     )
 }
 
 export default Navbar
 