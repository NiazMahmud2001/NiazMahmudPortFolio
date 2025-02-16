import { useEffect , useRef, useState } from "react";
import "./MenuBar.css"

import gsap from "gsap"
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger , CustomEase , Observer);

const MenuBar = ({scrolls})=>{
    //menue to other page animation 
    const handleScrollPage = (pageNameoi) => {
        if (scrolls) {
            scrolls.scrollTo(document.querySelector(pageNameoi).offsetTop, { duration: 1000 });
        }
    };


    useEffect(()=>{
        var nav_menu = document.querySelector(".nav_right_elem2>div>a");
        var nav_body_size = document.querySelector("body").offsetWidth;

        var page1_left_top_name = document.querySelector("#page1>nav>.nav_left>a");
        var page1_right_elem2_name1 = document.querySelector("#page1>nav>.nav_right>.nav_right_elem2");
        if(nav_body_size>700){
            gsap.to(page1_left_top_name , {
                marginTop:"-7px",
                duration:1,
                delay:0.4,
                ease:"power4.inOut",
            });
            gsap.to(page1_right_elem2_name1 , {
                translateY:"-7px",
                duration:1 ,
                delay: 0.4 , 
                ease:"power4.inOut",
            })
            
        }else if(nav_body_size<=700){
            gsap.to(page1_left_top_name , {
                marginTop:"-7px",
                duration:1,
                delay:0.4,
                ease:"power4.inOut",
            });
            gsap.to(page1_right_elem2_name1 , {
                translateY:"-3px",
                duration:1 ,
                delay: 0.4 , 
                ease:"power4.inOut",
            })
        }
        var io=0 ; 
        nav_menu.addEventListener("click", () => {
            var nav_body_width = document.querySelector("body").offsetWidth;
            console.log(document.querySelector("body").offsetWidth);

            if(nav_body_width <=830 && nav_body_width>700){
                gsap.to("#page1>nav>.nav_right>.nav_right_elem2" , {
                    translateY:"20px",
                    duration:0.5 , 
                    delay:0 , 
                    ease:"power4.easeOut",
                })
                gsap.to(".nav_right_top" , {
                    translateY:"40%",
                    duration:0.4 , 
                    stagger:0.07,
                })
                Observer.create({
                    target:"#main" ,
                    type:"wheel , touch , pointer , scroll" ,
                    overWrite:true , 
                    onDown :(elem)=>{
                        gsap.to("#page1>nav>.nav_right>.nav_right_elem2" , {
                            translateY:"-7px",
                            duration:0.1 , 
                            delay:0.5, 
                            ease:"power4.easeOut",
                        })
                        gsap.to(".nav_right_top" , {
                            translateY:"-100%",
                            duration:0.4 , 
                            delay:0,
                            stagger:0.07,
                        })
                        console.log("detects downward movement")
                    }
                })
            }else if(nav_body_width >830){
                gsap.to("#page1>nav>.nav_right>.nav_right_elem2" , {
                    translateY:"20px",
                    duration:0.5 , 
                    delay:0 , 
                    ease:"power4.easeOut",
                })
                gsap.to(".nav_right_top" , {
                    translateY:"7px",
                    duration:0.4 , 
                    stagger:0.07,
                })
                Observer.create({
                    target:"#main" ,
                    type:"wheel , touch , pointer , scroll" ,
                    overWrite:true , 
                    onDown :(elem)=>{
                        gsap.to("#page1>nav>.nav_right>.nav_right_elem2" , {
                            translateY:"-7px",
                            duration:0.1 , 
                            delay:0.5, 
                            ease:"power4.easeOut",
                        })
                        gsap.to(".nav_right_top" , {
                            translateY:"-100%",
                            duration:0.4 , 
                            delay:0,
                            stagger:0.07,
                        })
                        console.log("detects downward movement")
                    }
                })
            }
        })

        var set_year = document.querySelector(".nav_right>.nav_right_elem1>.nav_bottom_small>.nav_year");
        var set_time = document.querySelector(".nav_right>.nav_right_elem1>.nav_bottom_small>.nav_time");
        var date = new Date();
        var nav_year =  date.getFullYear();
        var nav_month =  date.getMonth()+1;
        var nav_date =  date.getDate();

        var nav_tot_date = `${nav_date}-${nav_month}-${nav_year}`;
        set_year.innerHTML = nav_tot_date;

        var nav_h_time = date.getHours() ;
        var nav_m_time = date.getMinutes() ;
        if(nav_h_time>12){
            nav_h_time = nav_h_time-12 ;
            set_time.innerHTML =   nav_h_time+  ":" + nav_m_time +" PM EST ";
        }else{
            nav_h_time = nav_h_time ;
            set_time.innerHTML =   nav_h_time+  ":" + nav_m_time +" AM EST ";
        }

        var resp_navbar = ()=>{
            var right_elem1 = document.querySelector(".nav_right_elem1");
            if(nav_body_size<=700){
                right_elem1.classList.add("resp_nav");
                var resp_nav_var = document.querySelector(".resp_nav");
                var nav_menu_btn = document.querySelector("#page1>nav>.nav_right>.nav_right_elem2");

                var nav_menu_btn_anc1 = document.querySelector("#page1>nav>.nav_right>.nav_right_elem2>.nav_right_proto");
                var nav_menu_btn_anc2 = document.querySelector("#page1>nav>.nav_right>.nav_right_elem2>.nav_right_bottom_wrapper>a");
                var nav_left_name = document.querySelector("#page1>nav>.nav_left>a");

                nav_menu_btn_anc1.addEventListener("click", function(){
                    gsap.to(resp_nav_var , {
                        scaleY:1 ,
                        duration:0.5 ,
                        delay:0,
                        ease:"power4.inOut",
                    });
                    gsap.to([nav_left_name , nav_menu_btn_anc1] , {
                        translateY:"50px",
                        duration:0.3 ,
                    })
                    gsap.to(nav_left_name  , {
                        translateY:"-30px",
                        duration:0 ,
                        delay:0.3,
                        color:"black"
                    })
                    gsap.to(nav_left_name  , {
                        translateY:"0px",
                        duration:0.2 ,
                        delay: 0.3,
                    })
                    gsap.to(nav_menu_btn_anc1,{
                        display:"none",
                        delay:0.3 , 
                        duration:0,
                    })
                    gsap.to(nav_menu_btn_anc2,{
                        display:"flex",
                        color:"black",
                        delay:0.3 , 
                        duration:0,
                    })
                    gsap.to(nav_menu_btn_anc2,{
                        translateY:"0px",
                        delay:0.3 , 
                        duration:0.2,
                    })
                    gsap.to([".nav_right_elem1>.nav_right_top"  , ".nav_right_elem1>.nav_bottom_small"],{
                        translateY:"20px",
                        delay:0 , 
                        duration:0.2,
                        stagger:0.1,
                    })
                })
                nav_menu_btn_anc2.addEventListener("click",function(e){
                    gsap.to(resp_nav_var , {
                        scaleY:0 ,
                        duration:0.5 ,
                        delay:0,
                        ease:"power4.inOut",
                    });
                    gsap.to([nav_left_name , nav_menu_btn_anc2] , {
                        translateY:"-50px",
                        duration:0.3 ,
                    })
                    gsap.to(nav_left_name  , {
                        translateY:"30px",
                        duration:0 ,
                        delay:0.3,
                        color:"white"
                    })
                    gsap.to(nav_left_name  , {
                        translateY:"0px",
                        duration:0.2 ,
                        delay: 0.3,
                    })
                    gsap.to(nav_menu_btn_anc2,{
                        display:"none",
                        delay:0.3 , 
                        duration:0,
                    })
                    gsap.to(nav_menu_btn_anc1,{
                        display:"flex",
                        color:"white",
                        delay:0.3 , 
                        duration:0,
                    })
                    gsap.to(nav_menu_btn_anc1,{
                        translateY:"0px",
                        delay:0.3 , 
                        duration:0.2,
                    })
                    gsap.to([".nav_right_elem1>.nav_right_top"  , ".nav_right_elem1>.nav_bottom_small"],{
                        translateY:"-20px",
                        delay:0 , 
                        duration:0.2,
                        stagger:0.1,
                    })
                })
            }
        }
        resp_navbar();

    },[])

    return(
        <div id="page1">
            <nav>
                <div className="nav_left">
                    <a href="#">Niaz Mahmud</a>
                </div>
                <div className="nav_right">
                    <div className="nav_right_elem1">
                        <a className="nav_right_top" onClick={() => handleScrollPage(".page4")}>About ME</a>
                        <a className="nav_right_top" onClick={() => handleScrollPage(".page7")}>EXPERIENCE</a>
                        <a className="nav_right_top" onClick={() => handleScrollPage(".page5")}>PLAYGROUND</a>
                        <a className="nav_right_top" onClick={() => handleScrollPage(".page8")}>Links</a>
                        <a className="nav_right_top" onClick={() => handleScrollPage(".page9")}>CONTACT</a>
                        <div className="nav_bottom_small">
                            <div className="nav_year">202</div>
                            <div className="nav_time"><h3>aasdf</h3></div>
                        </div>
                    </div> 
                
                    <div className="nav_right_elem2">
                        <div className="nav_right_proto">
                            <a className="nav_right_bottom" href="#">MENU+</a>
                        </div>
                        <div className="nav_right_bottom_wrapper">
                            <a className="nav_right_bottom1" href="#">CLOSE+</a>
                        </div>
                    </div> 
               </div>
            </nav>
        </div>
    )
}

export default MenuBar