import logo, { ReactComponent } from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import React from 'react';

class App extends React.Component{
  render() {
    return ( 
      <div className="App container">
         
        <div className = "navbar">
            <img src="" className= "logo" />
            <nav>
                <ul>
                    <li><a href="">ABOUT ME</a></li>
                    <li><a href="">PROJECTS</a></li>
                    <li><a href="">ETC.</a></li>
                    <li><a href=""></a></li>
                </ul>
            </nav>
            <img src="" className= "logo" />
        </div>

        <div className = "row">
            <div className="col">
               <h1>An Le </h1> 
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, nunc dapibus tincidunt ornare, lectus quam volutpat magna, a ultricies felis magna id enim. Vivamus luctus urna in metus bibendum, sit amet imperdiet mi varius. Nulla maximus tristique metus, eget fermentum magna varius eget. Mauris at malesuada dui. Donec nec turpis orci.</p>
            

            </div>

            <div className="col">
                <div className="card c1">
                    <h5>Contact Information</h5>
                    <p>Learn how to contact me here!</p>
                </div>
                <div className="card c2">
                    <h5>Projects</h5> 
                    <p>Check out my projects!</p>
                </div>
            </div>
        </div>

        <div className = "footer">
            <img src="" className= "logo" />
            <nav>
                <ul>
                    <li><a href="">Contact Information</a></li>
                    <li><a href="">Social Media</a></li>
                </ul>
            </nav>
            <img src="" className= "logo" />
        </div>


      </div>
    );

  }
    
 
}

export default App;
