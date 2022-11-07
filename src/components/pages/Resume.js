import React from "react";
import CV from "../../assets/CV.pdf"

export default function Resume() {
      
    return (
        <div className="container p-5 d-flex justify-content-center">  
            <a className="btn btn-primary" href={CV} download="My_CV.pdf"> Download Resume</a>
        </div>
    )
}