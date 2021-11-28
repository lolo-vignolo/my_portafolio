import React, { useEffect, useState } from 'react'
import "./portafolio.scss"
import { PortafolioList } from './PortafolioList';
import {heroPortafolio ,
     journalPortafolio,
     angelalPortafolio,
     ankiPortafolio} from "../../helpers/PictureHelper";

export const Portafolio = () => {

    const [selected, setselected] = useState("hero");

    const [data, setdata] = useState([])

    const list = [
        {
            id:"hero",
            title: "Hero App"
        },
        {
            id:"journal",
            title: "Journal App",
        },
        {
            id:"angela",
            title: "Angela App",
        },
        {
            id:"anki",
            title: "Anki App",
        },
    ];

    useEffect(() => {
      switch(selected){
          case "hero":
              setdata(heroPortafolio);
              break;
          case "journal":
              setdata(journalPortafolio);
              break;
          case "angela":
              setdata(angelalPortafolio);
              break;
          case "anki":
              setdata(ankiPortafolio);
              break;
              default: setdata(heroPortafolio)
      }
    
    }, [selected])

    return (
        <div className = "portafolio" id="portafolio">
           <h1>Portafolio</h1>
           <ul>
             {list.map(item=>(
                 <PortafolioList
                 title = {item.title}
                 id = {item.id}
                 setselected = {setselected}
                 active = {selected === item.id} /> 
             ))}
               
           </ul>
            <div className="container">
                {data.map(d =>(
                    <div className = "item">
                    <img src = {d.img}
                     alt = {d.title} />
                    <h3>Super Hero</h3>
                </div>

                ))}
                
               
               

            </div>
           
        </div>
    )
}
   