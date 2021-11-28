import React, { useState } from 'react';
import { Menu } from '../menu/Menu';
import "./topbar.scss";



export const Topbar = () => {

 
    
    const [isActive, setactive] = useState();

    const handleSpan=()=> {
        setactive (!isActive) 
    }

    return (
        <>
        <div className = {`topbar ${isActive && "active"}`}>
            <div className= "wrapper">
                <div className= "left">
                        <a href = "#intro" className="logo">Welcome. </a>
                        <div className= "itemContainer">
                            

                            <i className="far fa-user-circle">  +663827437</i>
                            <i className="far fa-envelope">  vignolo_3@hotmail.com</i>

                        </div>
                </div>


                <div className= "right">
                    <div className= "information" onClick = {handleSpan}>
                    <span className = "info1"></span>
                    <span className = "info2"></span>
                    <span className = "info3"></span>
                    </div>
                  
              </div>

              
           
            </div>      
        </div>
        {
                  (isActive && <Menu />) 
               } 
        </>
    )
}
