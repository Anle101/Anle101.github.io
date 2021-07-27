import React from 'react';
import './Skills.css';

function Skills() {
    return (
        <>
        <div className="skill-section">
            <div className="skill-container">
                <h1>Skills</h1>
                <hr />


                <div className = "skill-list">
                    <div className="flex-table column">
                        <div className = "skill-item">
                            CSS(3)
                        </div>  
                        <div className = "skill-item">
                            HTML(5)
                        </div>
                        <div className = "skill-item">
                            JavaScript
                        </div>
                        <div className = "skill-item">
                            React JS
                        </div>
                        <div className = "skill-item">
                            PHP
                        </div>
                        <div className = "skill-item">
                            SASS / SCSS
                        </div>
                    
                    
                        
                    </div>
                    <div className="flex-table column">
                            <div className = "skill-rating">
                                JQuery
                            </div>
                            <div className = "skill-rating">
                                Java
                            </div>
                            <div className = "skill-rating">
                                C
                            </div>
                            <div className = "skill-rating">
                                C++
                            </div>
                            <div className = "skill-rating">
                                Python
                            </div>
                            <div className = "skill-rating">
                                SQL
                            </div>
                    </div>  
                </div>
            </div>

            
            <div className="concept-container">
                <h1>Concepts</h1>
                <hr />
                <div className = "skill-list">
                    <div className="flex-table column">
                        <div className = "skill-item">
                            Object Oriented Programming
                        </div>
                        <div className = "skill-item">
                            MVC Framework
                        </div>
                        <div className = "skill-item">
                            Time Complexity
                        </div>
                        <div className = "skill-item">
                            Scrum
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
       
        </>
    )
}

export default Skills
