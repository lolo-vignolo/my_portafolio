import React from 'react';
import "./portafolioList.scss";

export const PortafolioList = ({id,title, active, setselected}) => {
    return (
   
               <li 
               className = {active? "portafolioList active": "porlafolioList"}
               onClick = {()=>{
                setselected(id)
               }}
               >
               {title}
               </li>      
       
    )
}
