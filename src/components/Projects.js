import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <>
         <div className="project-container">
            <div className="project-wrapper">
                <h1>Projects</h1>
                
                <div className="job-list">
                    
                   <div className="information list flex-table column">
                        <div className="job-information">
                            <div  className="job-section">
                                <h3>Process Flow Manager</h3>
                               
                                <p className="project-type">Web Application</p>

                                <p>
                                    The Process Flow Manager was the web application that I worked on during my time at Statistics Canada. Due to the nature of
                                    the project, there were many web development skills that I developed while working on it. The application allowed for the employees
                                    at Statistcs Canada to perform automated scanning of the many surveys that the organization gives out. Due to the importance of this
                                    application, I worked closely with the clients on this project and met them weekly. Thanks to this project, I learned many technical skills
                                    as well as interpersonal skills.
                                </p>    
                            </div>
                        </div>

                        <div className="job-information">
                            <div className="job-section">
                                <h3>Mimic E-Commerce Website</h3>

                                <p className="project-type"><a href="http://le11x.myweb.cs.uwindsor.ca/COMP-2707-F20/Project/PHP/index.php">Access the website here </a></p>

                                <p>
                                    After working at Statistics Canada, I realized that I should focus on developing my web development abilities on my own. This lead me
                                    to spending time on my own developing a website on my own time. I attempted to create a E-Commerce website using many technologies such
                                    as SQL, PHP, HTML, CSS, SCSS/SASS, and Jquery. It helped me understand the connections between databases and websites.
                                </p>    
                            </div>
                        </div>
                      
                        
                    </div>
                   
                </div>

                
            </div>
         
        </div>
        </>
    )
}

export default Projects