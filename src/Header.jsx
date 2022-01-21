import React from 'react';
import './Header.css';

function Welcomeheader(){
    
    return(
        <div className = "header">
            <div className="wrapper">
             <div className = "left">
            <a href ="#Rent a car">Rent a car</a>
             </div>
             <div className = "right">
            <a href ="#about">About</a>
            <a href ="#terms">Terms</a>
             </div> 
             </div> 
        </div>
    );
    
} 

export default Welcomeheader;
