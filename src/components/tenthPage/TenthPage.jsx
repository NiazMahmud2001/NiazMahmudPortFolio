import { useEffect , useRef, useState } from "react";
import Lottie from "lottie-react";

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger)

import emailjs from "@emailjs/browser";
import letteAnimPg10 from "../../assets/lottieJsonAnim/anim46.json"
import "./TenthPage.css"


export default function TenthPage ({ scrolls }){
    const handleScrollToTop = () => {
        if (scrolls) {
            scrolls.scrollTo(0, { duration: 1000 });
        }
    };


    return (
        <div className="page10">

            <div className="footer_bg">
                <div className="footer_bg_two"></div>
                <div className="pg10Behind">
                    <div className="pg10BehindInner">
                        <div className="pg10CopyRight pg10textBoxComm">
                            <p>
                                © 2025 <span>Niaz Mahmud</span>. All Rights Reserved.
                            </p>
                        </div>
                        <div className="pg10Credit pg10textBoxComm">
                            <p>
                                Coded and Developed By <span>Niaz Mahmud</span>
                            </p>
                        </div>
                        <div className="pg10ScrollToTop pg10textBoxComm">
                            <div className="scrollTopText">
                                <p>Scroll Top </p>
                            </div>
                            <div onClick={handleScrollToTop} className="scrollTopAnim">
                                <Lottie  className="page10MyImg" animationData={letteAnimPg10} loop={true} autoplay={true} speed={0.5}/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
