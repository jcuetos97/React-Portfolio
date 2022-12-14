import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Footer from "./Footer";

const styles = {
  main: {
    background: '#0C1618',
    minHeight:'100vh',
  }
};

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
          }
          if (currentPage === 'Portfolio') {
            return <Portfolio />;
          }
          if (currentPage === 'Contact') {
            return <Contact />;
          }
          return <Resume />;
    }  

    const handlePageChange = (page) => setCurrentPage(page);
    
    return (

       <div style={styles.main}>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
        {renderPage()}
        <Footer/>
       </div>
    );
}