import React , { useEffect , useRef, useState } from "react";
import Lottie from "lottie-react";

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import CodePic from "../../assets/2nd_page_img.png"
import animVid from "../../assets/animated_pc.mp4"
import letteAnim2 from "../../assets/lottieJsonAnim/anim5.json"

gsap.registerPlugin(useGSAP, ScrollTrigger)

import "./SecondPage.css"


export default function SecondPage (){

    const page2Ref = useRef(null)

    useEffect (()=>{
        //page1 to page2 transition animation on page1 ==>>>==
        const page1OffsetHeight = document.querySelector("#page3").offsetHeight

        const page3Height = ()=>{
            const page3heightTemp = document.querySelector("#page3").getBoundingClientRect().height
            const vhValue = (page3heightTemp / window.innerHeight) * 100;
            page2Ref.current.style.height = 110-vhValue + "vh"

            //document.querySelector(".page2>img").style.height = 100-vhValue + "vh"
        };
        if (document.querySelector("#page3").offsetWidth <1024){
            page3Height();
        }
        window.addEventListener("resize", ()=>{
            if (document.querySelector("#page3").offsetWidth <1024){
                page3Height();
            }
        })

        var page1_tl =gsap.timeline({
            scrollTrigger: {
                trigger: page2Ref.current,
                markers: false,
                start:`top ${page1OffsetHeight-(page1OffsetHeight*0.2)} px` ,
                end: `top ${page1OffsetHeight*0.4} px`,
                scroller: "#main",
                scrub: true,
            },
        });
        //console.log(FirstPageRef.current.offsetHeight)

        page1_tl.to("#page3>.page3_top>.page3_top_top>h1", {
            x: -200 ,
            duration: 2, 
        },"page1_same_anim");

        page1_tl.to("#page3>.page3_top>.page3_top_bottom>.page3_top_bottom_top",{
            x: 200 , 
            duration: 2,
        },"page1_same_anim")

        page1_tl.to("#page3" ,{
            filter:"blur(3px)",
        },"page1_same_anim");


        var page2_img = document.querySelector(".page2>.page2MyVid");

        gsap.to(page2_img,{
            width:"90%",
            height:"100%",
            scrollTrigger:{
                trigger:page2Ref.current.querySelector(".page2MyVid"),
                markers:false,
                start:`top ${page1OffsetHeight-(page1OffsetHeight*0.2)} px`,
                end: `top ${page1OffsetHeight*0.3} px`,
                scroller: "#main",
                scrub:0.2 ,
            },
        })

    })
    return (
        <div ref={page2Ref} className="page2" >
            <video className="page2MyVid" src={animVid} autoPlay loop muted></video>
            {/* <Lottie className="page2MyVid" animationData={letteAnim2}  loop={true} autoplay={true} speed={0.5}/> */}
            <div>
                An AI/LLM <br/> ENTHUSIAST
            </div>
        </div> 
    )
}
