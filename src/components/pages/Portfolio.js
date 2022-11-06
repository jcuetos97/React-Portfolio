import React from "react";
import FormulaOne from "../../assets/jpeg/FormulaOneDemo.jpg"


export default function Portfolio(){
    return(
        <div>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="card col-md-3 m-5 p-2">
                <img class="card-img-top" src={FormulaOne} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Project 1</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card col-md-3">
                    Project 2
                </div>
            </div>
        </div>
    );
}