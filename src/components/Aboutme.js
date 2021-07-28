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
                                is working in a team. Tackling technical issues with more than one mind always accelerates the process, and the process of bouncing ideas off one another allows 
                                everyone to learn! My desire to learn
                                and enhance my abilities is the number one drive for me right now. I have many aspects of my development career that can still improve, and I don't think I will ever become complacent.
                                The software development path is one of constant learning, and I personally always welcome new challenges.
                            </h3>
                        </div>
                    </div>

            </div>
           

        </div>
    )
}

export default Aboutme
