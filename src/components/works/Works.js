import React from 'react';
import "./works.scss";
import {sliceData} from "../../helpers/sliceData"
import {useState} from "react";


export const Works = () => {

   
    const [data, setdata] = useState(0)

    const handleClick = (way)=>{
        way === "left" 
        ? setdata(data < sliceData.length -1 ? data + 1 : 0 )
        : setdata(data > 0? data -1 : 3 ) 
        ;
    }

    return (
        <div className = "works" id="works">
            <div className = "slider" style = {{transform: `translateX(-${data*100}vw)`}}>
            

            { 
                sliceData.map(data => (
                    <div className = "container">
                    <div className = "item">
                        <div className = "left">
                            <div className = "leftContainer">
                                <div className = "imgContainer">

                                    <img src={data.icon} alt=""></img>
                                </div>
                                <h2>{data.title}</h2>
                                <p>{data.desc} </p>
                                  <span>Project</span>
                            </div>
                        </div>
                        <div className = "right">
                        <img src = {data.img}alt="" />


                        
                        </div>
                    </div>
                </div>

                ))
            }
                
            </div>
            <img src = "assets/arrow.png" className = "arrow left" alt = "" onClick = {()=>handleClick("left")} />
            <img src = "assets/arrow.png" className = "arrow right" alt = "" onClick = {()=>handleClick("right")} />
        </div>
    )
}
