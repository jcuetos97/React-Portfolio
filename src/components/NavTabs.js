import React from "react";

function NavTabs ({currentPage, handlePageChange}) {
    return(
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a 
                    href="#About" 
                    onClick={ () => handlePageChange('About')}
                    className= {currentPage === 'About' ? 'nav-link active' : 'nav-link'} 
                >
                ABOUT ME
                </a>
                <a 
                    href="#Portfolio" 
                    onClick={ () => handlePageChange('Portfolio')}
                    className= {currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} 
                >
                PORTFOLIO
                </a>
                <a 
                    href="#Contact" 
                    onClick={ () => handlePageChange('Contact')}
                    className= {currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
                >
                CONTACT
                </a>
                <a 
                    href="#Resume"
                    onClick={ () => handlePageChange('Resume') }
                    className= {currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} 
                >
                    RESUME
                </a>
            </li>
        </ul>
    );
}


export default NavTabs