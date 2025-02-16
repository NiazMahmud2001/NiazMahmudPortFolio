import { useEffect , useRef, useState } from "react";
import { forwardRef } from "react";

import Lottie from "lottie-react";

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger)

import letteAnim1 from "../../assets/lottieJsonAnim/anim4.json"

import "./ForthPage.css"

const ForthPage = forwardRef((prop, ref) => {
    const descRef = useRef(null)
    useEffect(()=>{

        const adjustFontSize = () => {
            if (!descRef.current) return;

            let fontSize = 30;
            descRef.current.style.fontSize = `${fontSize}px`; 

            while (descRef.current.scrollHeight > descRef.current.clientHeight && fontSize > 12) {
                fontSize -= 1; 
                descRef.current.style.fontSize = `${fontSize}px`;
            }
        };
        if (window.innerWidth<1300){
            adjustFontSize()
        }
        window.addEventListener("resize", ()=>{
            if (window.innerWidth<1300){
                adjustFontSize()
            }
        })

        gsap.fromTo(".topPartPage4",
            {
                opacity: 0, 
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                scrollTrigger:{
                    trigger: ".page4",
                    scroller: "#main",
                    markers: false,
                    start: "top 65%",
                    end: "top 20%",
                    scrub: false,
                }
            }
        )
        if (window.innerWidth>800){
            gsap.fromTo(".textPartpage4",
                {
                    opacity: 0, 
                    y: 100
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger:{
                        trigger: ".topPartPage4",
                        scroller: "#main",
                        markers: false,
                        start: "top 55%",
                        end: "top 20%",
                        scrub: true,
                    }
                }
            )
        }else{
            gsap.fromTo(".textPartpage4",
                {
                    opacity: 0, 
                    y: 100
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger:{
                        trigger: ".textPartToppage4",
                        scroller: "#main",
                        markers: false,
                        start: "top 655%",
                        end: "top 20%",
                        scrub: true,
                    }
                }
            )
        }
    })


    return (
        <div ref={ref} className="page4">
            <div className="innerDiv4">
                <div className="topPartPage4">
                    <span className="topCirclePg4"></span>
                    <h3>ABOUT ME</h3>
                    <span className="bottomCirclePg4"></span>
                </div>
                <div className="bottomPartPage4">
                    <div className="imgPartpage4">
                        {/* <video className="page4MyImg" src={mp_2} autoPlay loop muted></video> */}
                        <Lottie className="page4MyImg" animationData={letteAnim1} loop={true} autoplay={true} speed={0.5}/>
                    </div>
                    <div ref={descRef} className="textPartpage4">
                        <span className="textPartToppage4">A Brif Inro About Me </span><br/><br/>
                        <span className="textPartRightpage4">HI,</span>
                        <span className="textPartLeftpage4">
                            I am a dedicated Python developer 🐍 with a passion for building intelligent and scalable solutions. <br/><br/>
                            Also I am interested in Machine Learning (ML), Artificial Intelligence (AI), and Large Language Models (LLMs) 🤖, 
                            constantly exploring new ways to push the boundaries of innovation. I believe that a deep understanding of ML & AI 📊 is essential for creating cutting-edge applications that drive real-world impact. <br/><br/>

                            Additionally, I am skilled in React.js ⚛️, crafting dynamic and responsive web applications that enhance user experiences. 🚀
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default ForthPage