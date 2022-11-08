import React from "react";

function NavTabs ({currentPage, handlePageChange}) {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                <a 
                    class="navbar-brand px-5" 
                    href="#About"
                    onClick={ () => handlePageChange('About')}
                >
                Juan José Espinosa
                </a>
                
                <ul className="navbar-nav px-5">
                    <li className="nav-item">
                        <a 
                            href="#About" 
                            onClick={ () => handlePageChange('About')}
                            className= {currentPage === 'About' ? 'nav-link active' : 'nav-link'} 
                        >
                        About me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            href="#Portfolio" 
                            onClick={ () => handlePageChange('Portfolio')}
                            className= {currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} 
                        >
                        Portfolio
                        </a>
                    </li>
                    <li className="nav-item"> 
                        <a 
                            href="#Contact" 
                            onClick={ () => handlePageChange('Contact')}
                            className= {currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
                        >
                        Contact
                        </a>
                    </li> 
                    <li className="nav-item"> 
                        <a 
                            href="#Resume"
                            onClick={ () => handlePageChange('Resume') }
                            className= {currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} 
                        >
                        Resume
                        </a>
                    </li> 
                </ul>
            </div>   
        </nav>
        
    );
}


export default NavTabs