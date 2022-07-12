import React from "react";

function Header() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-dark navbar-dark py-3" id="header">
      <div className="container">
        <a href="#header" className="navbar-brand"><span className="text-info">Bro</span><span className="text-warning">grammer</span></a>
        <button 
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
                
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#header" className="nav-link">Home</a>            
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>          
            <li className="nav-item">
              <a href="#ourteam" className="nav-link">Our Team</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Our Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact Us</a>
            </li>
          </ul>        
        </div>
      </div>      
    </nav>



    // <nav className="navbar sticky-top navbar-dark bg-dark">
    //   <div className="container-fluid">
    //     <div className="container">
    //       <header className="d-flex flex-wrap justify-content-center py-3">
    //         <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none">
    //           <span className="fs-4">Brogrammer</span>
    //         </a>
    //         <ul className="nav nav-pills ">
    //           <li className="nav-item"><a href="#" className="nav-link text-light" aria-current="page">Home</a></li>
    //           <li className="nav-item"><a href="#" className="nav-link text-light">About</a></li>
    //           <li className="nav-item"><a href="#" className="nav-link text-light">Our Team</a></li>
    //           <li className="nav-item"><a href="#" className="nav-link text-light">Our Projects</a></li>
    //           <li className="nav-item"><a href="#" className="nav-link text-light">Our Services</a></li>
    //           <li className="nav-item"><a href="#" className="nav-link text-light">Contact Us</a></li>
    //         </ul>
    //       </header>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Header
