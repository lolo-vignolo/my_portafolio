import React, { useState } from 'react';
import "./menu.scss";
import 'animate.css';

export const Menu = () => {

    return (

                <div className = "menu animate__animated animate__backInRight animate__delay-0.7s">
                <ul>
                <li>
                    <a href="#intro">Home</a>
                </li>
                <li>
                    <a href="#portafolio">Portafolio</a>
                </li>
                <li>
                    <a href="#works">works</a>
                </li>
                <li>
                    <a href="#testimonio">Academy Records</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                
            </ul>
            </div>

       
    )
}