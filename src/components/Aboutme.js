import React from 'react'
import './Aboutme.css';

function Aboutme() {
    return (
        <div className="aboutme-container">

            <div className="aboutme-wrapper">
            <h1>About Me</h1>

                    <div className="aboutmetable flex-table row">
                        <div className="profile">
                            <img src={process.env.PUBLIC_URL + "/profile.jpg"} alt="profile picture"></img>
                        </div>
                   
                        <div className="aboutmesection">
                            <h3>I am an aspiring web developer. I am knowledgable in many front-end web technologies, such as HTML5, CSS3, and so forth. One of the things that I appreciate greatly
                                is working in a team. Tackling technical issues with more than one mind always accelerates the process, and helps everyone in the team progress! Besides that, I 
                                absolutely love having good documentation for any application. This allows for the work to be packed into a clear and concentrated package that can help both existing 
                                developers as well as new ones. Quality is the most important aspect of any project, and I am all for that.
                            </h3>
                        </div>
                    </div>

            </div>
           

        </div>
    )
}

export default Aboutme
