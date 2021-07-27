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
                        <div className="project-information">
                            <div  className="job-section">
                                <h3>Process Flow Manager</h3>
                               
                                <p className="project-type"> Professional Project - Web Application</p>

                                <p>
                                    The Process Flow Manager was the web application that I worked on during my time at Statistics Canada. Due to the nature of
                                    the project, there were many web development skills that I developed while working on it. The application allowed for the employees
                                    at Statistcs Canada to perform automated scanning of the many surveys that the organization gives out. Due to the importance of this
                                    application, I worked closely with the clients on this project and met them weekly. Thanks to this project, I learned many technical skills
                                    as well as interpersonal skills. The project involved HTML5, CSS3, Jquery, AJAX, and the MVC model.
                                </p>    
                            </div>
                        </div>

                        <div className="project-information">
                            <div className="job-section">
                                <h3>Mimic E-Commerce Website</h3>

                                <p className="project-type"> Personal Project - Website<a href="http://le11x.myweb.cs.uwindsor.ca/COMP-2707-F20/Project/PHP/index.php" className="code-button">Access the website here </a>
                                
                                <a href="https://github.com/Anle101/Mimic-Ecommerce-Site---ECART" className="code-button"> View on GitHub </a>
                                
                                </p>

                                <p>
                                    After working at Statistics Canada, I realized that I should focus on developing my web development abilities on my own. This lead me
                                    to spending time on my own developing a website on my own time. I attempted to create a E-Commerce website using many technologies such
                                    as SQL, PHP, HTML, CSS, SCSS/SASS, Bootstrap, and JQuery. It helped me understand the connections between databases and websites.
                                </p>    
                                
                            </div>
                        </div>
                      
                        <div className="project-information">
                            <div className="job-section">
                                <h3>Portfolio Website</h3>
                                
                                <p className="project-type">Personal Project - Website
                                
                                    <a href="https://github.com/Anle101/Anle101.github.io/tree/master" className="code-button"> View on GitHub </a>
                                </p>

                                <p>
                                    For a long time, I realized that I did not have an online portfolio for myself. As an upcoming web developer, this seemed almost like a crime! So I took the time
                                    create this portfolio website that allows for a convenient and easy way to advertise myself. I also used this website as an opportunity to start to learn ReactJS, which
                                    is currently one of the most popular frameworks for web development right now. Therefore, the creation of this site involved HTML5, CSS3, and ReactJS.
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