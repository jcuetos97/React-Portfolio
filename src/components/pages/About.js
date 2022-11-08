import React from "react";
import AboutImg from "../../assets/svg/AboutImg.svg"

export default function About () {
  const styles = {
    about: {
        minHeight: '83vh',
    },
  };
    return (
      <div className="d-flex justify-content-around" style={styles.about}>
          <div className="text-light col-md-6 p-5">
              <h1>Hi there &#128075;,</h1>
              <br/>
              <p>
              My name is JuanJo and I'm a full-stack web developer, specialized in MERN stack, with strong background in graphic design. 
              Trained at Tecnológico de Monterrey with a Certificate in Full-Stack Web Development, 
              I'm an innovative problem-solver passionate about developing apps and web solutions. 
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
          <div className="col-md-4 p-5">
            <img src={AboutImg} alt="Developer Img" />
          </div>
        </div>
    )
}