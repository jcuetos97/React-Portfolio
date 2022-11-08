import React from "react";
import { PortfolioData }  from "../PortfolioData";

const styles = {
    portfolio: {
        minHeight: '75vh',
    },
    card: {
        height: '435px',
        width:'355px',
    },
    image: {
        maxHeight: '235px',
        objectFit: 'cover'
    },
    button: {
        position: 'absolute',
        bottom: '15px',
    }
  };

export default function Portfolio(){  
    return(
        <div style={styles.portfolio}>
            <ul className="m-5 p-0 d-flex flex-wrap justify-content-center align-items-center" >
                { PortfolioData.map(project => (
                    <li className="card bg-dark text-white col-md-4 m-2">
                        <div className="card-header bg-transparent border-success d-flex justify-content-between align-items-center">
                            {project.title}
                        </div>
                        <img className="card-img"
                                style={styles.image}
                                src={project.img} 
                                alt={project.title}
                                />
                        <div className="card-img-overlay">
                            <a href={project.url} className="btn btn-light" style={styles.button}>Go to app</a>
                        </div>
                    </li>
                )) }
            </ul> 
        </div>       
    );
}