import { useEffect , useRef, useState } from "react";

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger)


import "./ThirdPage.css"


export default function ThirdPage (){
    const page4Ref = useRef(null)

    useEffect(()=>{

        gsap.to([".page2", ".page3_3" , ".page4", ".page5",".page6"], {
            scrollTrigger:{
               trigger: page4Ref.current , 
               scroller:"#main" , 
               markers: false , 
               start : "0% 70%" , 
               end: "0% 50%",
               scrub:true,
            },
            color:"black",
            backgroundColor: "rgb(251, 251, 251)",
        })

        const lines = gsap.utils.toArray(".txtPage3_3 span");
        lines.forEach((line, index) => {
            gsap.fromTo(
                line,
                {
                    opacity: 0,
                    x: index % 2 === 0 ? -100 : 100, 
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.5,
                    ease: "power2.out",
                    color: "rgb(0,0,0)",
                    scrollTrigger: {
                        trigger: page4Ref.current,
                        scroller: "#main",
                        markers: false,
                        start: "top 65%",
                        end: "top 20%",
                        scrub: true,
                    },
                }
            );
        });

    })

    return (
        <div ref={page4Ref} className="page3_3">
            <div className="txtPage3_3">
                <span>I Passionately Create </span>
                <span>Large Language Models (LLM), AI, ML</span>
                <span>Models, and React-based Projects</span>
                <span>that Inspire and Connect Innovation</span>
                <span>& Technology.</span>
            </div>
        </div>
    )
}
