
import React from "react";
import LinkedIn from "../assets/png/linkedin-ico.png";
import GitHub from "../assets/png/github-ico.png";
import Instagram from "../assets/png/insta-ico.png";

const styles = {
    icon: {
      maxWidth: '35px',
      margin: '1rem'
    },
    footer:{
        padding: '1rem',
        position: 'relative',
        bottom: '0vh',
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    }
  };

export default function Footer () {

    return (
        <footer style={styles.footer} >
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jcuetos97/">
                <img
                    style={styles.icon}
                    src={LinkedIn} 
                    alt="icon"
                />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/jcuetos97">
                <img 
                    style={styles.icon}
                    src={GitHub}
                    alt="icon"
                />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/punta_del_guaje/?hl=en">
                <img 
                    style={styles.icon}
                    src={Instagram}
                    alt="icon"
                />
                </a>
        </footer>
    );
}