import React from "react";

const styles = {
    containerCustom: {
      color: '#E26D5C',
      padding: '1rem',
      borderRadius: '1rem'
    }
  };


export default function Contact () {
    return (   
        <div className="d-flex flex-column align-items-center m-5"> 
            <section className="container p-2.5 col-md-6 bg-light" style={styles.containerCustom}>
                <div clasName="mb-3">
                    <label for="nameInput" className="form-label text-dark my-3">Name:</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Write your name here..."/>
                </div>
            
                <div clasName="mb-3">
                    <label for="emailInput" className="form-label text-dark my-3">Email address:</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label for="messageInput" className="form-label text-dark my-3">Message:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your message here..."></textarea>
                </div>
            </section> 
      </div> 
    )
};