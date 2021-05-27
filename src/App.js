import { render } from 'react-dom';
import React, {useState, useEffect} from 'react'; 
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {

    document.title = "An Le";
    return (
        <>
         <ParallaxProvider>
            <Router>
                <Navbar />
                <Switch >
                    <Route path='/' exact component = {Home} />
                    <Route path='/skills' exact component = {Skills} />
                    <Route path='/experience' exact component = {Experience} />
                </Switch>
                <Footer />
            </Router>
         </ParallaxProvider>
        </>
    );
}

export default App;
