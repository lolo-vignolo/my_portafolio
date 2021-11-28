import React, { useEffect, useState, useRef } from 'react'
import { init } from 'ityped'
import "./intro.scss"
import 'animate.css';

const picture0 = "../assets/menuPicture/picture0.jpg"
const picture1 = "../assets/menuPicture/picture1.jpg"
const picture2 = "../assets/menuPicture/picture2.jpg"
const picture3 = "../assets/menuPicture/picture3.jpg"
const picture4 = "../assets/menuPicture/picture4.jpg"
const picture5 = "../assets/menuPicture/picture5.jpg"
const picture6 = "../assets/menuPicture/picture6.jpg"
const picture7 = "../assets/menuPicture/picture7.jpg"
const picture8 = "../assets/menuPicture/picture8.jpg"
const picture9 = "../assets/menuPicture/picture9.jpg"


export const Intro = () => {

    const pictures = [picture0,picture1, picture2,picture3,picture4,picture5, picture6 , picture7, picture8, picture9 ]
   
    const initialState = 0;
    const [nArray, setpicture] = useState(initialState)

    const handlePicture = () =>{
        nArray<7?setpicture(nArray + 1):setpicture(initialState)
    }

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", " Content Creator"] })
    

    }, [])   

    return (
        <div className = "intro" id="intro">

            <div className= "left">
                <div className = "imgContainer" >
                    
                    <img className="slider" onClick= {handlePicture} src= {pictures[nArray]}   alt= "menPicture" />
                </div>
            </div>
            <div className= "right">

                <div className = "wrapper" >

                    <h2>Hi guys, I´m</h2>
                   <h1>Lorenzo Vignolo</h1>
                    <h3>A Web <span ref = {textRef}></span></h3>

                </div>
                <a href = "#portafolio">
                    <img className="animate__animated animate__bounce" src = "assets/down.png" alt = "downArrow"></img>
                 </a>
            
                 </div>
   
            </div>
    )
}
