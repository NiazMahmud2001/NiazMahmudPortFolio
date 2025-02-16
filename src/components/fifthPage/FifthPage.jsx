import { forwardRef, useEffect , useRef, useState } from "react";


import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger)

import "./FifthPage.css"


const FifthPage = forwardRef((props, ref)=>{
 
    useEffect(()=>{
        gsap.fromTo([".page4", ".page5", ".page6"], 
            {
                scrollTrigger:{
                    trigger: ".page5" , 
                    scroller:"#main" , 
                    markers: false , 
                    start : "0% 65%" , 
                    end: "0% 40%",
                    scrub:true,
                },
                color:"white",
                backgroundColor: "rgb(251, 251, 251)",
            },
            {
                scrollTrigger:{
                    trigger: ".page5" , 
                    scroller:"#main" , 
                    markers: false , 
                    start : "0% 65%" , 
                    end: "0% 40%",
                    scrub:true,
                },
                color:"white",
                backgroundColor: "rgb(7, 7, 7)",
            }
        )

        gsap.to(".page5>.page5_border_top", {
            scrollTrigger:{
               trigger: ".page5" , 
               scroller:"#main" , 
               markers: false, 
               start : "0% 60%" , 
               end: "0% 35%",
               scrub:false,
            },
            width:"100vw",
            duration: 0.8,
        })

        gsap.to(".page5>.pg5Container>.pg5MySkillSvg>svg",{
            scrollTrigger:{
                trigger: ".page5" , 
                scroller:"#main" , 
                markers: false, 
                start : "0% 65%" , 
                end: "0% 55%",
                scrub:false,
            },
            y : "0%",
            duration: 1,
            opacity: 1,
        })

        const cards = gsap.utils.toArray(".page5>.pg5Container>.pg5ExpCards>.pg5CommonCard")

        cards.forEach((card, idx)=>{
            gsap.to(card,{
                scrollTrigger: {
                    trigger: card , 
                    scroller:"#main" , 
                    markers: false, 
                    start : "0% 75%" , 
                    end: "0% 45%",
                    scrub:true,
                },
                y: 0,
                scale: 1,
            })
        })
    })
    return (
        <div ref={ref} className="page5">
            <div className="page5_border_top"></div>
            <div className="pg5Container">
                <div className="pg5MySkillSvg">
                    <svg width="365" height="67" viewBox="0 0 365 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M46.4134 6.45454H56.7316L70.5498 40.1818H71.0952L84.9134 6.45454H95.2316V53H87.1407V21.0227H86.7089L73.8452 52.8636H67.7998L54.9361 20.9545H54.5043V53H46.4134V6.45454ZM110.443 66.0909C109.322 66.0909 108.284 66 107.33 65.8182C106.39 65.6515 105.64 65.4545 105.08 65.2273L106.989 58.8182C108.186 59.1667 109.254 59.3333 110.193 59.3182C111.133 59.303 111.959 59.0076 112.671 58.4318C113.398 57.8712 114.012 56.9318 114.512 55.6136L115.216 53.7273L102.557 18.0909H111.284L119.33 44.4545H119.693L127.762 18.0909H136.512L122.534 57.2273C121.883 59.0758 121.019 60.6591 119.943 61.9773C118.868 63.3106 117.549 64.3258 115.989 65.0227C114.443 65.7348 112.595 66.0909 110.443 66.0909ZM186.299 19.25C186.087 17.2652 185.193 15.7197 183.617 14.6136C182.056 13.5076 180.026 12.9545 177.526 12.9545C175.769 12.9545 174.261 13.2197 173.003 13.75C171.746 14.2803 170.784 15 170.117 15.9091C169.45 16.8182 169.109 17.8561 169.094 19.0227C169.094 19.9924 169.314 20.8333 169.753 21.5455C170.208 22.2576 170.822 22.8636 171.594 23.3636C172.367 23.8485 173.223 24.2576 174.163 24.5909C175.102 24.9242 176.049 25.2045 177.003 25.4318L181.367 26.5227C183.125 26.9318 184.814 27.4848 186.435 28.1818C188.072 28.8788 189.534 29.7576 190.822 30.8182C192.125 31.8788 193.155 33.1591 193.913 34.6591C194.67 36.1591 195.049 37.9167 195.049 39.9318C195.049 42.6591 194.352 45.0606 192.958 47.1364C191.564 49.197 189.549 50.8106 186.913 51.9773C184.291 53.1288 181.117 53.7045 177.39 53.7045C173.769 53.7045 170.625 53.1439 167.958 52.0227C165.306 50.9015 163.231 49.2652 161.731 47.1136C160.246 44.9621 159.443 42.3409 159.322 39.25H167.617C167.738 40.8712 168.238 42.2197 169.117 43.2955C169.996 44.3712 171.14 45.1742 172.549 45.7045C173.973 46.2348 175.564 46.5 177.322 46.5C179.155 46.5 180.761 46.2273 182.14 45.6818C183.534 45.1212 184.625 44.3485 185.413 43.3636C186.2 42.3636 186.602 41.197 186.617 39.8636C186.602 38.6515 186.246 37.6515 185.549 36.8636C184.852 36.0606 183.875 35.3939 182.617 34.8636C181.375 34.3182 179.92 33.8333 178.253 33.4091L172.958 32.0455C169.125 31.0606 166.094 29.5682 163.867 27.5682C161.655 25.553 160.549 22.8788 160.549 19.5455C160.549 16.803 161.291 14.4015 162.776 12.3409C164.276 10.2803 166.314 8.68182 168.89 7.54545C171.466 6.39394 174.382 5.81818 177.64 5.81818C180.943 5.81818 183.837 6.39394 186.322 7.54545C188.822 8.68182 190.784 10.2652 192.208 12.2955C193.632 14.3106 194.367 16.6288 194.413 19.25H186.299ZM210.982 42.0455L210.96 32.1136H212.278L224.823 18.0909H234.437L219.005 35.2727H217.3L210.982 42.0455ZM203.482 53V6.45454H211.71V53H203.482ZM225.391 53L214.028 37.1136L219.573 31.3182L235.232 53H225.391ZM241.2 53V18.0909H249.427V53H241.2ZM245.336 13.1364C244.033 13.1364 242.912 12.7045 241.973 11.8409C241.033 10.9621 240.563 9.90909 240.563 8.68182C240.563 7.43939 241.033 6.38636 241.973 5.52272C242.912 4.64394 244.033 4.20454 245.336 4.20454C246.654 4.20454 247.776 4.64394 248.7 5.52272C249.639 6.38636 250.109 7.43939 250.109 8.68182C250.109 9.90909 249.639 10.9621 248.7 11.8409C247.776 12.7045 246.654 13.1364 245.336 13.1364ZM267.395 6.45454V53H259.167V6.45454H267.395ZM285.362 6.45454V53H277.135V6.45454H285.362ZM322.693 27.3182L315.193 28.1364C314.981 27.3788 314.61 26.6667 314.08 26C313.564 25.3333 312.867 24.7955 311.989 24.3864C311.11 23.9773 310.034 23.7727 308.761 23.7727C307.049 23.7727 305.61 24.1439 304.443 24.8864C303.292 25.6288 302.723 26.5909 302.739 27.7727C302.723 28.7879 303.095 29.6136 303.852 30.25C304.625 30.8864 305.898 31.4091 307.67 31.8182L313.625 33.0909C316.928 33.803 319.383 34.9318 320.989 36.4773C322.61 38.0227 323.428 40.0455 323.443 42.5455C323.428 44.7424 322.784 46.6818 321.511 48.3636C320.254 50.0303 318.504 51.3333 316.261 52.2727C314.019 53.2121 311.443 53.6818 308.534 53.6818C304.261 53.6818 300.822 52.7879 298.216 51C295.61 49.197 294.057 46.6894 293.557 43.4773L301.58 42.7045C301.943 44.2803 302.716 45.4697 303.898 46.2727C305.08 47.0758 306.617 47.4773 308.511 47.4773C310.466 47.4773 312.034 47.0758 313.216 46.2727C314.413 45.4697 315.011 44.4773 315.011 43.2955C315.011 42.2955 314.625 41.4697 313.852 40.8182C313.095 40.1667 311.913 39.6667 310.307 39.3182L304.352 38.0682C301.004 37.3712 298.527 36.197 296.92 34.5455C295.314 32.8788 294.519 30.7727 294.534 28.2273C294.519 26.0758 295.102 24.2121 296.284 22.6364C297.481 21.0455 299.14 19.8182 301.261 18.9545C303.398 18.0758 305.86 17.6364 308.648 17.6364C312.739 17.6364 315.958 18.5076 318.307 20.25C320.67 21.9924 322.133 24.3485 322.693 27.3182Z" fill="#8C8C73"/>
                        <line x1="47" y1="57.5" x2="103" y2="57.5" stroke="#8C8C73" strokeWidth="3"/>
                        <line x1="133" y1="57.5" x2="325" y2="57.5" stroke="#8C8C73" strokeWidth="3"/>
                        <path d="M30.6909 31C30.6909 39.2843 23.9752 46 15.6909 46C7.40662 46 0.690887 39.2843 0.690887 31C11.6909 31 7.40662 31 15.6909 31C23.9752 31 23.1909 31 30.6909 31Z" fill="#1AFF00"/>
                        <path d="M365 34C365 42.2843 358.284 49 350 49C341.716 49 335 42.2843 335 34C346 34 341.716 34 350 34C358.284 34 357.5 34 365 34Z" fill="#1AFF00"/>
                    </svg>
                </div>
                <div className="pg5ExpCards">
                    <div className="pg5CommonCard pg5TopCard">
                        <div className="pg5CommonCardLeft pg5TopCardLeft">
                            <p className="pg5CommonCardLeftTop">Web and App Dev.</p>
                            <p>I build interactive and scalable web and mobile applications using ReactJS and React Native. My development approach focuses on performance, state management, and seamless user experiences.</p>
                        </div>
                        <div className="pg5CommonCardRight pg5TopCardRight">
                            <p className="pg5CommonBottomCardRight Pg5MainSkill">ReactJS & React Native</p> <br/>
                            <p className="pg5CommonBottomCardRightBottom"> 
                                🔹Frontend Development with ReactJS <br/>
                                🔹Mobile App Development with React Native <br/>
                                🔹API Integration & Performance Optimization <br/>
                            </p>
                        </div>
                    </div>
                    <div className="pg5CommonCard pg5CenterCard">
                        <div className="pg5CommonCardLeft pg5CenterCardLeft">
                            <p className="pg5CommonCardLeftTop">Backend & DBMS</p>
                            <p>I develop dynamic and database-driven web applications using PHP and MySQL. My expertise includes backend development, API creation, and optimizing database performance to handle large-scale applications efficiently.</p>
                        </div>
                        <div className="pg5CommonCardRight pg5CenterCardRight">
                            <p className="pg5CommonBottomCardRight Pg5MainSkill">PHP & MySQL</p><br/>
                            <p className="pg5CommonBottomCardRightBottom"> 
                                🔹Backend Development with PHP<br/> 
                                🔹MySQL Database Design & Optimization <br/> 
                                🔹REST API Development<br/>
                            </p>
                        </div>
                    </div>
                    <div className="pg5CommonCard pg5Center2Card">
                        <div className="pg5CommonCardLeft pg5Center2CardLeft">
                            <p className="pg5CommonCardLeftTop">My Creative Side.</p>
                            <p>I work with artificial intelligence, machine learning, and large language models (LLMs) to develop innovative AI-driven solutions. Using PyTorch, I build deep learning models for various applications, including computer vision, NLP, and AI-powered automation.</p>
                        </div>
                        <div className="pg5CommonCardRight pg5Center2CardRight">
                            <p className="pg5CommonBottomCardRight Pg5MainSkill">AI & ML & LLM with PyTorch</p><br/>
                            <p className="pg5CommonBottomCardRightBottom">
                                🔹 Deep Learning & Neural Networks<br/>
                                🔹 Large Language Models (LLMs)<br/>
                                🔹 PyTorch Model Development<br/>
                                🔹 Computer Vision & NLP<br/>
                                🔹 Model Optimization/fineTuning & Deployment<br/>
                            </p>
                        </div>
                    </div>
                    <div className="pg5CommonCard pg5BottomCard">
                        <div className="pg5CommonCardLeft pg5BottomCardLeft">
                            <p className="pg5CommonCardLeftTop">My Base Language.</p>
                            <p>I specialize in Python and C++ development, building efficient, scalable, and high-performance applications. My expertise spans from software development to system-level programming, ensuring optimal performance for a variety of applications.</p>
                        </div>
                        <div className="pg5CommonCardRight pg5BottomCardRight">
                            <p className="pg5CommonBottomCardRight Pg5MainSkill">Python & C++ Core</p><br/>
                            <p className="pg5CommonBottomCardRightBottom">
                                🔹 Python Core Development<br/>
                                🔹 C++ Programming & Optimization<br/>
                                🔹 Object-Oriented Programming (OOP)<br/>
                                🔹 Data Structures & Algorithms<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default FifthPage;
