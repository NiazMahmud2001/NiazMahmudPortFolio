import {useEffect, useRef, useState} from "react"
import "./Cursor.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP)

const Cusrsor = () =>{
    //stat mouse circle move: ========================================
    let cursorRef = useRef(null)

    var prevX = 0;
    var prevY = 0;
    var clampX =1 ; 
    var clampY =1 ; 

    useEffect(()=>{
        let cursor_cir = cursorRef.current;

        window.addEventListener("mousemove", (e) => {
            let cursor_cir_width = window.getComputedStyle(cursor_cir).getPropertyValue("width");
            let cursor_cir_height = window.getComputedStyle(cursor_cir).getPropertyValue("height");
    
            let val_width = parseInt(cursor_cir_width[1]) + (parseInt(cursor_cir_width[0])*10);
            let val_height = parseInt(cursor_cir_height[1]) + (parseInt(cursor_cir_height[0])*10);
    
            var distX = (e.clientX  - prevX);
            var distY = (e.clientY  - prevY);
            if(distX< 0 ){
                distX = Math.abs(distX) ;
            };
            if(distY< 0){
                distY = Math.abs(distY);
            };
            prevX = e.clientX;
            prevY = e.clientY;
            clampX = gsap.utils.clamp(0.8 , 1.2 , distX);
            clampY = gsap.utils.clamp(0.8 , 1.2 , distY);
            //console.log(distX+ " " +distY);
            gsap.to(cursor_cir , {
               translateY:  e.clientY -(val_height/2) + "px" , 
               translateX: e.clientX - (val_width/2) + "px",
               scaleX: clampX,
               scaleY: clampY,
               duration: 0.4,
            })
        })
    }, [])


    return(
        <div ref={cursorRef} id="cursor_circle" className="resp_none resp_sir">
            <p className="resp_sir_show">view</p>
        </div>
    )
};
export default Cusrsor;