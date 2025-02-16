import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from 'locomotive-scroll';

import "./SidePart.css"
import MyPic from "../../assets/myPic.jpg"

export default function SidePart (){
    const sideRef = useRef(null)

    useEffect(()=>{
        const width = window.innerWidth;
        const height = window.innerHeight;
        sideRef.current.style.top = height/2 - 53 + "px"
    })
    
    return(
        <div id="page2" ref={sideRef}>
            <div className="page2_container">
               <div className="page2_top_text">
                  <img className="imgDsg" src={MyPic} alt="dod" />
               </div>
               <div className="page2_bottom_text">
                  <h3>Honor.</h3>
               </div>
            </div>
        </div>
    )
}