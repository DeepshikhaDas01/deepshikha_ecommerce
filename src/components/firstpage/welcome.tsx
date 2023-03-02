import React, { Component, useEffect, useState } from "react";
import logo from '../firstpage/images/logo ecomm.png';
import { Link } from "react-router-dom";


const Welcome = () => {
  return (
    <main>
        <header>
        <nav id="navbar">
            <div className="logo">
                <img src={logo} height='80' width='80' alt='ecomm logo' className="logo"/>
                </div>
                <ul>
            
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                </ul>
            
           
            
        </nav>
        </header>

        
            <div className="page">

            <div className="welcome-main-container">
             <p className="welcome-para">Welcome To </p>
             <h1 className="welcome-heading">Your Own <span>Shopping</span> Website</h1>
              <h2 className="second-line">Lifestyle/Fashion/Innovation</h2>
              
              <Link to= '/products'>
              <button className="btn btn-hero">Click Here</button></Link>
           </div>
           </div>
    </main>
  );
};

export default Welcome;




  
  
 