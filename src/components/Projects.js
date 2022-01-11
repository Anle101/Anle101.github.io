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
                                    as well as interpersonal skills. The project involved <b>HTML5, CSS3, Jquery, AJAX, and the MVC model.</b>
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
                                    as <b>SQL, PHP, HTML, CSS, SCSS/SASS, Bootstrap, and JQuery.</b> It helped me understand the connections between databases and websites.
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
                                    is currently one of the most popular frameworks for web development right now. Therefore, the creation of this site involved <b> HTML5, CSS3, and ReactJS.</b>
                                </p>    
                            </div>
                        </div>

                        <div className="project-information">
                            <div className="job-section">
                                <h3>Unmatched Matchup Picker</h3>
                                
                                <p className="project-type">Personal Project - Web Application <a href="https://anle101.github.io/Unmatched-Matchup-Picker/" className="code-button">Access the website here </a>
                                
                                    <a href="https://github.com/Anle101/Unmatched-Matchup-Picker" className="code-button"> View on GitHub </a>
                                </p>

                                <p>
                                    This project was meant as a fun little side project for me personally as I developed a heavy interest in board games. One of the things I started to enjoy
                                    was the experience of playing 'Unmatched' the board game with my friends. Due to this, I decided to make a small web application that allowed the user to 
                                    choose what packs they own and allow for a random matchup to be selected for a match. I treated this project as a way to further enhance my development skills
                                    and also tried to make the application more mobile friendly (as using the site on mobile was the most convenient choice). This project was made using <b>HTML, CSS,</b> and <b>React JS.</b>
                                </p>    
                            </div>
                        </div>
                        
                        <div className="project-information">
                            <div className="job-section">
                                <h3>Twitter Topic Tracking</h3>
                                
                                <p className="project-type">Collaborative Project - Web Application
                                
                                    <a href="https://github.com/jalalshabo/Twitter-Topic-Tracking/tree/web-app" className="code-button"><a href="https://jalalshabo.github.io/Twitter-Topic-Tracking/" className="code-button">Access the website here </a> View on GitHub </a>

                                    Role: Front-End Developer
                                </p>

                                <p>
                                    The project is a Topic Tracking application that uses data retrieved from the twitter API and database that will then run algorithms (such as LDA and Gensim) in order
                                    to find out what topics have been trending on twitter depending on the date, location, or whatever else the user specifies in the application. It was made to be a web application
                                    using <b>Flask</b> as the backend framework and <b>React JS</b> as the frontend framework. We also decided to use a Relational database (<b>mySQL</b>) instead of a document-oriented database. I was the developer
                                    in charge of developing all of the front-end of the project.
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