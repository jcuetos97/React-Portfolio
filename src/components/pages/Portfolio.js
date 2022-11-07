import React from "react";
import COOKED from "../../assets/jpeg/COOKED.jpg"
import FormulaOne from "../../assets/jpeg/FormulaOneDemo.jpg"



export default function Portfolio(){
    return(
        <div>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="card col-md-3 m-5">
                <img class="card-img-top" src={COOKED} alt="COOKED Demo"/>
                    <div class="card-body">
                        <h5 class="card-title">COOKED</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card col-md-3">
                    <img class="card-img-top" src={FormulaOne} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Formula One</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}