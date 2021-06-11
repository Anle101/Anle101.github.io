
import React, {useState, useEffect} from 'react'; 
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

import Footer from './components/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';
import { render } from '@testing-library/react';

class App extends React.Component {

   
    render() {
        document.title = "An Le";
        return (
            <>
            <ParallaxProvider>
                <Router>
                    <Navbar />
                    <Home />
                    <Footer />
                </Router>
            </ParallaxProvider>
            </>
        );
    }
    
}

export default App;
