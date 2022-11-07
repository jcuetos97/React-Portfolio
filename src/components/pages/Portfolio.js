import React from "react";
import { PortfolioData }  from "../PortfolioData";


export default function Portfolio(){  
    return(
        <div className="">
            <ul className="m-0 p-0 d-flex flex-wrap justify-content-center align-items-center">
                { PortfolioData.map(project => (
                    <li className="card col-md-4 m-2">
                        <img className="card-img-top"
                                src={project.img} 
                                alt={project.title}
                                />
                        <div class="card-body">
                            <h5 class="card-title">{project.title}</h5>
                            <p class="card-text">{project.description}</p>
                            <a href={project.url} class="btn btn-primary">Go to app</a>
                        </div>
                    </li>
                )) }
            </ul> 
        </div>       
    );
}