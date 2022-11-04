import React from "react";

const styles = {
    card: {
      margin: 20,
      background: '#e8eaf6',
    },
    heading: {
      background: '#9a74db',
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: '1.2rem',
      color: 'white',
      padding: '0 20px',
    },
  };


export default function About () {
    return (
        <div className="text-light col-md-6 p-5">
            <h1>Hi there &#128075;,</h1>
            <br/>
            <p>
            Full-stack web developer, specialized in MERN stack, with strong background in graphic design. 
            Trained at Tecnológico de Monterrey with a Certificate in Full-Stack Web Development, 
            innovative problem-solver passionate about developing apps and web solutions. 
            Strengths in creativity, teamwork, and building projects from ideation to execution.
            </p>
            <br />
            <p>
            Experienced in: Javascript (ES6) | Node.js | Express.js | React.js | HTML5/CSS3 | Git + GitHub | OOP | Sequelize +
            MySQL | Webpack | MVC | MongoDB + Mongoose | REST APIs | Insomnia | Responsive Web Design
            </p>
            <br/>
            <p>
            Knowledgeable in: Java | Heroku | Testing (Jest.js) | UI/UX
            </p>
            
            
        </div>
    )
}