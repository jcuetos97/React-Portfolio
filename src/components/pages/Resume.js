import React from "react";
import CV from "../../assets/CV.pdf"

export default function Resume() {
      
    return (
        <div className="d-flex justify-content-center ">  
            <div className="col-md-6 p-5 d-flex flex-column flex-wrap text-light">
                
                <h2>Proficiencies</h2>
                <br/>
                <p>
                <strong>Experienced in:</strong> Javascript (ES6) | Node.js | Express.js | React.js | HTML5/CSS3 | Git + GitHub | OOP | Sequelize +
                MySQL | Webpack | MVC | MongoDB + Mongoose | REST APIs | Insomnia | Responsive Web Design
                </p>
                <br/>
                <p>
                <strong>Knowledgeable in:</strong> Java | Heroku | Testing (Jest.js) | UI/UX
                </p> 
                <br/>
                <br/>
                <p>Here you can download the updated english version of my resume.</p>
                <a className="btn btn-primary" href={CV} download="My_CV.pdf"> Download Resume</a>

            </div>

            
        </div>
    )
}