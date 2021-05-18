import React from 'react';
import {Button} from './Button';
import './Footer.css';
import {Link} from 'react-router-dom';
function Footer() {
    return (
        <div className= 'footer-container'>
           
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="social-icons">
                        <Link to='/' className="social-icon-link"><i className="fas fa-file"></i></Link>
                        <Link to='/' className="social-icon-link"><i className="fab fa-linkedin"></i></Link>
                        <Link to='/' className="social-icon-link"><i className="fab fa-instagram"></i></Link>
                        <Link to='/' className="social-icon-link"><i className="fab fa-facebook-f"></i></Link>
                    </div>
                </div>
            </section>
           
        </div>

    );
}

export default Footer
