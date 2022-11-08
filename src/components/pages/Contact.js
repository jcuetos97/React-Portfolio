import React, {useState} from "react";

const styles = {
    containerCustom: {
      color: '#E26D5C',
      padding: '1rem',
      borderRadius: '1rem'
    }
};


export default function Contact () {

    const [message, setMessage] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (   
        <div className="d-flex flex-column m-5"> 
            <section className="container p-2.5 col-md-6 bg-light" style={styles.containerCustom}>
                <h2 className="text-dark">Contact</h2>
               <form onSubmit={handleSubmit} className="needs-validation" novalidate>
                <div clasName="mb-3">
                        <label for="nameInput" className="form-label text-dark my-3">Name:</label>
                        <input type="text" className="form-control" id="FormControlInput1" placeholder="Write your name here..." required/>
                    </div>
                
                    <div clasName="mb-3">
                        <label for="emailInput" className="form-label text-dark my-3">Email address:</label>
                        <input type="email" className="form-control" id="FormControlInput1" placeholder="name@example.com" required/>
                    </div>
                    <div className="mb-3">
                        <label for="messageInput" className="form-label text-dark my-3">Message:</label>
                        <textarea className="form-control" id="FormControlTextarea1" rows="3" placeholder="Write your message here..." required></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark">Send</button>
                    {message && <p className="text-dark my-2">Thank you for reaching out. I will be in touch soon.</p>}
               </form>
            </section> 
      </div> 
    )
}