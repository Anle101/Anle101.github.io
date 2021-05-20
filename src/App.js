import { render } from 'react-dom';
import React, {useState, useEffect} from 'react'; 
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {

    return (
        <>
         <ParallaxProvider>
            <Router>
                <Navbar />
                <Switch >
                    <Route path='/' exact component = {Home} />
                </Switch>
                <Footer />
            </Router>
         </ParallaxProvider>
        </>
    );
}

export default App;
