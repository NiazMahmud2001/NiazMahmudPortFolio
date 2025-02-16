import { useEffect , useRef, useState } from "react";
import Lottie from "lottie-react";

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger)

import letteAnimPg6 from "../../assets/lottieJsonAnim/anim5.json"
import eduImg from "../../assets/eduImg.png"
import "./SixthPage.css"


export default function SixthPage (){
    useEffect(()=>{
        //top Education svg animation
        gsap.to(".pg6Container>.pg6MyEducationSvg>svg",{
            scrollTrigger:{
                trigger: ".page6" , 
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

        //top border animation
        gsap.to(".page6>.page6_border_top", {
            scrollTrigger:{
               trigger: ".page6" , 
               scroller:"#main" , 
               markers: false, 
               start : "0% 40%" , 
               end: "0% 35%",
               scrub:false,
            },
            width:"100vw",
            duration: 1,
        })
        gsap.fromTo([".page5", ".page6", ".page7"], 
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
            },
            {
                scrollTrigger:{
                    trigger: ".page6" , 
                    scroller:"#main" , 
                    markers: false , 
                    start : "0% 65%" , 
                    end: "0% 40%",
                    scrub:true,
                },
                duration: 0.5,
                color:"black",
                backgroundColor: "rgb(249, 249, 249)",
            }
        )

        if(window.innerWidth<900){
            const rightCardElems = gsap.utils.toArray(".pg6RightSideCommonCard")
            rightCardElems.forEach((rightCardElem,index)=>{
                gsap.fromTo(rightCardElem,
                    {   
                        opacity: 0,
                        x: index % 2 === 0 ? "-20%" : "20%", 
                    },
                    {
                        opacity: 1,
                        x: 0,
                        scrollTrigger: {
                            trigger: rightCardElem,
                            scroller: "#main",
                            markers: false,
                            start: "top 75%",
                            end: "top 50%",
                            scrub: true
                        },
                    }
                )
            })
        }else{
            const rightCardElems = gsap.utils.toArray(".pg6RightSideCommonCard")
            gsap.fromTo(".pg6RightSideCommonCard",
                {   
                    opacity: 0,
                    x: "100%", 
                },
                {
                    opacity: 1,
                    x: 0,
                    duration:1,
                    stagger:0.5,
                    scrollTrigger: {
                        trigger: rightCardElems[0],
                        scroller: "#main",
                        markers: false,
                        start: "top 65%",
                        end: "top 55%",
                        scrub: false
                    },
                }
            )
        }
    })

    return (
        <div className="page6">
            <div className="page6_border_top"></div>
            <div className="pg6Container">
                <div className="pg6MyEducationSvg">
                    <svg width="401" height="60" viewBox="0 0 401 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.6009 51V4.45454H77.8736V11.5227H56.0327V24.1591H76.3055V31.2273H56.0327V43.9318H78.0555V51H47.6009ZM100.347 51.6136C97.6044 51.6136 95.1499 50.9091 92.9832 49.5C90.8165 48.0909 89.1044 46.0455 87.8468 43.3636C86.5893 40.6818 85.9605 37.4242 85.9605 33.5909C85.9605 29.7121 86.5968 26.4394 87.8696 23.7727C89.1574 21.0909 90.8923 19.0682 93.0741 17.7045C95.2559 16.3258 97.6877 15.6364 100.37 15.6364C102.415 15.6364 104.097 15.9848 105.415 16.6818C106.733 17.3636 107.779 18.1894 108.551 19.1591C109.324 20.1136 109.923 21.0152 110.347 21.8636H110.688V4.45454H118.938V51H110.847V45.5H110.347C109.923 46.3485 109.309 47.25 108.506 48.2045C107.703 49.1439 106.642 49.947 105.324 50.6136C104.006 51.2803 102.347 51.6136 100.347 51.6136ZM102.642 44.8636C104.385 44.8636 105.87 44.3939 107.097 43.4545C108.324 42.5 109.256 41.1742 109.892 39.4773C110.529 37.7803 110.847 35.803 110.847 33.5455C110.847 31.2879 110.529 29.3258 109.892 27.6591C109.271 25.9924 108.347 24.697 107.12 23.7727C105.907 22.8485 104.415 22.3864 102.642 22.3864C100.809 22.3864 99.2786 22.8636 98.0514 23.8182C96.8241 24.7727 95.8999 26.0909 95.2786 27.7727C94.6574 29.4545 94.3468 31.3788 94.3468 33.5455C94.3468 35.7273 94.6574 37.6742 95.2786 39.3864C95.915 41.0833 96.8468 42.4242 98.0741 43.4091C99.3165 44.3788 100.839 44.8636 102.642 44.8636ZM151.235 36.3182V16.0909H159.462V51H151.485V44.7955H151.121C150.333 46.75 149.038 48.3485 147.235 49.5909C145.447 50.8333 143.242 51.4545 140.621 51.4545C138.333 51.4545 136.311 50.947 134.553 49.9318C132.811 48.9015 131.447 47.4091 130.462 45.4545C129.477 43.4848 128.985 41.1061 128.985 38.3182V16.0909H137.212V37.0455C137.212 39.2576 137.818 41.0152 139.03 42.3182C140.242 43.6212 141.833 44.2727 143.803 44.2727C145.015 44.2727 146.189 43.9773 147.326 43.3864C148.462 42.7955 149.394 41.9167 150.121 40.75C150.864 39.5682 151.235 38.0909 151.235 36.3182ZM184.43 51.6818C180.945 51.6818 177.952 50.9167 175.452 49.3864C172.967 47.8561 171.051 45.7424 169.702 43.0455C168.369 40.3333 167.702 37.2121 167.702 33.6818C167.702 30.1364 168.384 27.0076 169.748 24.2955C171.111 21.5682 173.036 19.447 175.52 17.9318C178.02 16.4015 180.975 15.6364 184.384 15.6364C187.217 15.6364 189.725 16.1591 191.907 17.2045C194.104 18.2348 195.854 19.697 197.157 21.5909C198.46 23.4697 199.202 25.6667 199.384 28.1818H191.52C191.202 26.5 190.445 25.0985 189.248 23.9773C188.066 22.8409 186.483 22.2727 184.498 22.2727C182.816 22.2727 181.339 22.7273 180.066 23.6364C178.793 24.5303 177.801 25.8182 177.089 27.5C176.392 29.1818 176.043 31.197 176.043 33.5455C176.043 35.9242 176.392 37.9697 177.089 39.6818C177.786 41.3788 178.763 42.6894 180.02 43.6136C181.293 44.5227 182.786 44.9773 184.498 44.9773C185.71 44.9773 186.793 44.75 187.748 44.2955C188.717 43.8258 189.528 43.1515 190.18 42.2727C190.831 41.3939 191.278 40.3258 191.52 39.0682H199.384C199.187 41.5379 198.46 43.7273 197.202 45.6364C195.945 47.5303 194.233 49.0152 192.066 50.0909C189.899 51.1515 187.354 51.6818 184.43 51.6818ZM217.465 51.7045C215.253 51.7045 213.261 51.3106 211.488 50.5227C209.73 49.7197 208.336 48.5379 207.306 46.9773C206.291 45.4167 205.783 43.4924 205.783 41.2045C205.783 39.2348 206.147 37.6061 206.874 36.3182C207.602 35.0303 208.594 34 209.852 33.2273C211.109 32.4545 212.526 31.8712 214.102 31.4773C215.693 31.0682 217.336 30.7727 219.033 30.5909C221.079 30.3788 222.738 30.1894 224.011 30.0227C225.283 29.8409 226.208 29.5682 226.783 29.2045C227.374 28.8258 227.67 28.2424 227.67 27.4545V27.3182C227.67 25.6061 227.162 24.2803 226.147 23.3409C225.132 22.4015 223.67 21.9318 221.761 21.9318C219.746 21.9318 218.147 22.3712 216.965 23.25C215.799 24.1288 215.011 25.1667 214.602 26.3636L206.92 25.2727C207.526 23.1515 208.526 21.3788 209.92 19.9545C211.314 18.5151 213.018 17.4394 215.033 16.7273C217.049 16 219.276 15.6364 221.715 15.6364C223.397 15.6364 225.071 15.8333 226.738 16.2273C228.405 16.6212 229.927 17.2727 231.306 18.1818C232.685 19.0758 233.791 20.2955 234.624 21.8409C235.473 23.3864 235.897 25.3182 235.897 27.6364V51H227.988V46.2045H227.715C227.215 47.1742 226.511 48.0833 225.602 48.9318C224.708 49.7652 223.579 50.4394 222.215 50.9545C220.867 51.4545 219.283 51.7045 217.465 51.7045ZM219.602 45.6591C221.253 45.6591 222.685 45.3333 223.897 44.6818C225.109 44.0152 226.041 43.1364 226.693 42.0455C227.359 40.9545 227.693 39.7652 227.693 38.4773V34.3636C227.435 34.5758 226.996 34.7727 226.374 34.9545C225.768 35.1364 225.086 35.2955 224.329 35.4318C223.571 35.5682 222.821 35.6894 222.079 35.7955C221.336 35.9015 220.693 35.9924 220.147 36.0682C218.92 36.2348 217.821 36.5076 216.852 36.8864C215.882 37.2652 215.117 37.7955 214.556 38.4773C213.996 39.1439 213.715 40.0076 213.715 41.0682C213.715 42.5833 214.268 43.7273 215.374 44.5C216.48 45.2727 217.889 45.6591 219.602 45.6591ZM262.882 16.0909V22.4545H242.813V16.0909H262.882ZM247.768 7.72727H255.995V40.5C255.995 41.6061 256.162 42.4545 256.495 43.0455C256.844 43.6212 257.298 44.0152 257.859 44.2273C258.419 44.4394 259.041 44.5455 259.723 44.5455C260.238 44.5455 260.707 44.5076 261.132 44.4318C261.571 44.3561 261.904 44.2879 262.132 44.2273L263.518 50.6591C263.079 50.8106 262.45 50.9773 261.632 51.1591C260.829 51.3409 259.844 51.447 258.677 51.4773C256.616 51.5379 254.76 51.2273 253.109 50.5455C251.457 49.8485 250.147 48.7727 249.177 47.3182C248.223 45.8636 247.753 44.0455 247.768 41.8636V7.72727ZM271.042 51V16.0909H279.27V51H271.042ZM275.179 11.1364C273.876 11.1364 272.754 10.7045 271.815 9.84091C270.876 8.96212 270.406 7.90909 270.406 6.68182C270.406 5.43939 270.876 4.38636 271.815 3.52272C272.754 2.64394 273.876 2.20454 275.179 2.20454C276.497 2.20454 277.618 2.64394 278.542 3.52272C279.482 4.38636 279.951 5.43939 279.951 6.68182C279.951 7.90909 279.482 8.96212 278.542 9.84091C277.618 10.7045 276.497 11.1364 275.179 11.1364ZM304.237 51.6818C300.828 51.6818 297.873 50.9318 295.373 49.4318C292.873 47.9318 290.934 45.8333 289.555 43.1364C288.192 40.4394 287.51 37.2879 287.51 33.6818C287.51 30.0758 288.192 26.9167 289.555 24.2045C290.934 21.4924 292.873 19.3864 295.373 17.8864C297.873 16.3864 300.828 15.6364 304.237 15.6364C307.646 15.6364 310.601 16.3864 313.101 17.8864C315.601 19.3864 317.533 21.4924 318.896 24.2045C320.275 26.9167 320.964 30.0758 320.964 33.6818C320.964 37.2879 320.275 40.4394 318.896 43.1364C317.533 45.8333 315.601 47.9318 313.101 49.4318C310.601 50.9318 307.646 51.6818 304.237 51.6818ZM304.283 45.0909C306.131 45.0909 307.676 44.5833 308.919 43.5682C310.161 42.5379 311.086 41.1591 311.692 39.4318C312.313 37.7045 312.623 35.7803 312.623 33.6591C312.623 31.5227 312.313 29.5909 311.692 27.8636C311.086 26.1212 310.161 24.7348 308.919 23.7045C307.676 22.6742 306.131 22.1591 304.283 22.1591C302.389 22.1591 300.813 22.6742 299.555 23.7045C298.313 24.7348 297.381 26.1212 296.76 27.8636C296.154 29.5909 295.851 31.5227 295.851 33.6591C295.851 35.7803 296.154 37.7045 296.76 39.4318C297.381 41.1591 298.313 42.5379 299.555 43.5682C300.813 44.5833 302.389 45.0909 304.283 45.0909ZM337.455 30.5455V51H329.227V16.0909H337.091V22.0227H337.5C338.303 20.0682 339.583 18.5152 341.341 17.3636C343.114 16.2121 345.303 15.6364 347.909 15.6364C350.318 15.6364 352.417 16.1515 354.205 17.1818C356.008 18.2121 357.402 19.7045 358.386 21.6591C359.386 23.6136 359.879 25.9848 359.864 28.7727V51H351.636V30.0455C351.636 27.7121 351.03 25.8864 349.818 24.5682C348.621 23.25 346.962 22.5909 344.841 22.5909C343.402 22.5909 342.121 22.9091 341 23.5455C339.894 24.1667 339.023 25.0682 338.386 26.25C337.765 27.4318 337.455 28.8636 337.455 30.5455Z" fill="#8C8C73"/>
                        <path d="M30.5 30.5C30.5 38.7843 23.7843 45.5 15.5 45.5C7.21573 45.5 0.5 38.7843 0.5 30.5C11.5 30.5 7.21573 30.5 15.5 30.5C23.7843 30.5 23 30.5 30.5 30.5Z" fill="#1AFF00"/>
                        <path d="M401 31C401 39.2843 394.284 46 386 46C377.716 46 371 39.2843 371 31C382 31 377.716 31 386 31C394.284 31 393.5 31 401 31Z" fill="#1AFF00"/>
                        <path d="M44 58H364" stroke="#8C8C73" strokeWidth="4"/>
                    </svg>
                </div>
                <div className="pg6ExpCards">
                    <div data-scroll data-scroll-speed="-1" className="pg6CommonCard pg6LeftSide">
                        <Lottie className="page6MyImg" animationData={letteAnimPg6} loop={true} autoplay={true} speed={0.5}/>
                    </div>
                    <div className="pg6CommonCard pg6RightSide">
                        
                        <div className="pg6RightSideCommonCard pg6RightCard1">
                            <div className="pg6CourseDateComm">2021-Present</div>
                            <div className="pg6CourseDetailsComm">
                                <div className="pg6CourseLeftIconComm">
                                    <img className="pg6EduIconComm" src={eduImg} alt="" />
                                </div>
                                <div className="pg6CourseRighDetailsComm">
                                    <p className="pg6RightDetailsTopComm">BACHELOR DEGREE</p>
                                    <p className="pg6RightDetailsMidComm">University Of Sharjah,UAE</p>
                                    <p className="pg6RightDetailsBottomComm"><span>CGPA: </span> Not Yet Finalized</p>
                                </div>
                            </div>
                        </div>

                        <div className="pg6RightSideCommonCard pg6RightCard2">
                            <div className="pg6CourseDateComm">2018-2019</div>
                            <div className="pg6CourseDetailsComm">
                                <div className="pg6CourseLeftIconComm">
                                    <img className="pg6EduIconComm" src={eduImg} alt="" />
                                </div>
                                <div className="pg6CourseRighDetailsComm">
                                    <p className="pg6RightDetailsTopComm">Higher School</p>
                                    <p className="pg6RightDetailsMidComm">Govt. Mohammadpur Model College</p>
                                    <p className="pg6RightDetailsBottomComm"><span>GPA: </span>4.46 / 5.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="pg6RightSideCommonCard pg6RightCard3">
                            <div className="pg6CourseDateComm">2015-2017</div>
                            <div className="pg6CourseDetailsComm">
                                <div className="pg6CourseLeftIconComm">
                                    <img className="pg6EduIconComm" src={eduImg} alt="" />
                                </div>
                                <div className="pg6CourseRighDetailsComm">
                                    <p className="pg6RightDetailsTopComm">Secondary School</p>
                                    <p className="pg6RightDetailsMidComm">Govt. Mohammadpur Boys School</p>
                                    <p className="pg6RightDetailsBottomComm"><span>GPA :</span> 5.00 / 5.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="pg6RightSideCommonCard pg6RightCard4">
                            <div className="pg6CourseDateComm">2014</div>
                            <div className="pg6CourseDetailsComm">
                                <div className="pg6CourseLeftIconComm">
                                    <img className="pg6EduIconComm" src={eduImg} alt="" />
                                </div>
                                <div className="pg6CourseRighDetailsComm">
                                    <p className="pg6RightDetailsTopComm">Jonior School</p>
                                    <p className="pg6RightDetailsMidComm">Govt. Mohammadpur Boys School</p>
                                    <p className="pg6RightDetailsBottomComm"><span>GPA: </span>4.5 / 5.00</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div> 
        </div>
    )
}
