import React from 'react'
import './Experience.css'
import {uwindsor} from './Uwindsorlogo.png';
function Experience() {
    return (
        <div className="experience-container">
            <div className="experience-wrapper">
                <h1>Experience</h1>
                
                <div className="job-list">
                  
                   <div className="information list flex-table column">
                        <div className="job-information">
                            <div  className="job-section">
                                <h3>Undergraduate Teaching Assistant</h3>
                                
                                <p className="job-length">September 2018 – May 2021 | <b>University of Windsor</b></p>

                                <p>
                                    As an Undergraduate Teaching Assistant, I would be teaching many students concepts that would pertain to the 
                                    computer science program. Whether this would be related to the theory behind Object-Oriented Programming, Time Complexity, 
                                    or just core programming concepts like arrays and dynamic programming. This helped solidify the knowledge for me as well.
                                </p>    
                            </div>
                        </div>

                        <div className="job-information">
                            <div className="job-section">
                                <h3>Front-End Web Application Developer</h3>

                                <p className="job-length">January 2020 – August 2020 | <b>Statistics Canada</b></p>

                                <p>
                                    As part of my second co-op term, I found myself working for Statistics Canada as a Front-End Web Application Developer. The project that I was working on during my time there 
                                    was a re-design of an old legacy web application called the Process Flow Manager. The project was being developed using AJAX, HTML, CSS, JS/JQuery, and the 
                                    MVC pattern. Upon working with my team as well as discussing many aspects with the clients of the project helped develop both my core skills as well as my
                                    technical skills.
                                </p>    
                            </div>
                        </div>
                        <div className="job-information">
                            <div  className="job-section">
                                <h3>IT/Facilities Support</h3>

                                <p className="job-length">May 2019 – August 2019 | <b>Windsor-Detroit Bridge Authority</b></p>

                                <p>
                                    For my first co-op term, I worked as an IT/Facilities Support, which meant that I performed a large variety of different tasks. I helped many of the employees 
                                    with many technical issues, attended meetings, and developed documentation for many aspects of the office. Lastly, I also worked with the Blackberry UEM in order
                                    to regulate the professional work phones that were passed to each employee there. This experience helped develop my ability to work in a fast-paced environment as 
                                    well as my ability to learn many techniques quickly when required.
                                </p>    
                            </div>
                        </div>
                        
                    </div>
                   
                </div>

                
            </div>
         
        </div>
    )
}

export default Experience
