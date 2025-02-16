import { useEffect , useRef, useState } from "react";
import Lottie from "lottie-react";

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger)

import letteAnimPg8 from "../../assets/lottieJsonAnim/anim8.json"

import "./EighthPage.css"


export default function EighthPage (){
    useEffect(()=>{

        //top Education svg animation
        gsap.to(".pg8Container>.pg8MyProjectSvg>svg",{
            scrollTrigger:{
                trigger: ".page8" , 
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
        gsap.to(".page8>.page8_border_top", {
            scrollTrigger:{
               trigger: ".page8" , 
               scroller:"#main" , 
               markers: false, 
               start : "0% 60%" , 
               end: "0% 35%",
               scrub:true,
            },
            width:"100vw",
            duration: 1,
        })

        gsap.fromTo([".page5", ".page6", ".page7", ".page8", ".page9"], 
            {
                scrollTrigger:{
                    trigger: ".page8" , 
                    scroller:"#main" , 
                    markers: false , 
                    start : "0% 65%" , 
                    end: "0% 40%",
                    scrub:true,
                },
                backgroundColor: "rgb(7,7,7)",
            },
            {
                scrollTrigger:{
                    trigger: ".page8" , 
                    scroller:"#main" , 
                    markers: false , 
                    start : "0% 65%" , 
                    end: "0% 40%",
                    scrub:true,
                },
                duration: 0.5,
                color:"white",
                backgroundColor: "rgb(249, 249, 249)",
            }
        )


        const rightCardElems = gsap.utils.toArray(".pg8LeftSideCommonCard")
        rightCardElems.forEach((elem, indx)=>{
            gsap.fromTo(
                elem,
                {   
                    opacity: 0,
                    x: "-100%", 
                },
                {
                    opacity: 1,
                    x: 0,
                    duration:1,
                    stagger:0.5,
                    scrollTrigger: {
                        trigger: elem,
                        scroller: "#main",
                        markers: false,
                        start: "top 85%",
                        end: "top 10%",
                        scrub: false,
                        toggleActions: "play reverse play reverse",
                    },
                    
                }
            )
        })

    },[])

    return (
        <div className="page8">
            <div className="page8_border_top"></div>
            <div className="pg8Container">
                <div className="pg8MyProjectSvg">
                    <svg width="467" height="64" viewBox="0 0 467 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M64.9314 15.25C64.7193 13.2652 63.8253 11.7197 62.2496 10.6136C60.689 9.50757 58.6587 8.95454 56.1587 8.95454C54.4011 8.95454 52.8935 9.2197 51.6359 9.75C50.3783 10.2803 49.4162 11 48.7496 11.9091C48.0829 12.8182 47.742 13.8561 47.7268 15.0227C47.7268 15.9924 47.9465 16.8333 48.3859 17.5455C48.8405 18.2576 49.4541 18.8636 50.2268 19.3636C50.9996 19.8485 51.8556 20.2576 52.795 20.5909C53.7344 20.9242 54.6814 21.2045 55.6359 21.4318L59.9996 22.5227C61.7571 22.9318 63.4465 23.4848 65.0677 24.1818C66.7041 24.8788 68.1662 25.7576 69.4541 26.8182C70.7571 27.8788 71.7874 29.1591 72.545 30.6591C73.3026 32.1591 73.6814 33.9167 73.6814 35.9318C73.6814 38.6591 72.9844 41.0606 71.5905 43.1364C70.1965 45.197 68.1814 46.8106 65.545 47.9773C62.9238 49.1288 59.7496 49.7045 56.0223 49.7045C52.4011 49.7045 49.2571 49.1439 46.5905 48.0227C43.939 46.9015 41.8632 45.2652 40.3632 43.1136C38.8783 40.9621 38.0753 38.3409 37.9541 35.25H46.2496C46.3708 36.8712 46.8708 38.2197 47.7496 39.2955C48.6283 40.3712 49.7723 41.1742 51.1814 41.7045C52.6056 42.2348 54.1965 42.5 55.9541 42.5C57.7874 42.5 59.3935 42.2273 60.7723 41.6818C62.1662 41.1212 63.2571 40.3485 64.045 39.3636C64.8329 38.3636 65.2344 37.197 65.2496 35.8636C65.2344 34.6515 64.8783 33.6515 64.1814 32.8636C63.4844 32.0606 62.5071 31.3939 61.2496 30.8636C60.0071 30.3182 58.5526 29.8333 56.8859 29.4091L51.5905 28.0455C47.7571 27.0606 44.7268 25.5682 42.4996 23.5682C40.2874 21.553 39.1814 18.8788 39.1814 15.5455C39.1814 12.803 39.9238 10.4015 41.4086 8.34091C42.9087 6.2803 44.9465 4.68182 47.5223 3.54545C50.098 2.39394 53.0147 1.81818 56.2723 1.81818C59.5753 1.81818 62.4693 2.39394 64.9541 3.54545C67.4541 4.68182 69.4162 6.26515 70.8405 8.29545C72.2647 10.3106 72.9996 12.6288 73.045 15.25H64.9314ZM97.3421 49.6818C93.933 49.6818 90.9784 48.9318 88.4784 47.4318C85.9784 45.9318 84.039 43.8333 82.6602 41.1364C81.2966 38.4394 80.6148 35.2879 80.6148 31.6818C80.6148 28.0758 81.2966 24.9167 82.6602 22.2045C84.039 19.4924 85.9784 17.3864 88.4784 15.8864C90.9784 14.3864 93.933 13.6364 97.3421 13.6364C100.751 13.6364 103.706 14.3864 106.206 15.8864C108.706 17.3864 110.638 19.4924 112.001 22.2045C113.38 24.9167 114.069 28.0758 114.069 31.6818C114.069 35.2879 113.38 38.4394 112.001 41.1364C110.638 43.8333 108.706 45.9318 106.206 47.4318C103.706 48.9318 100.751 49.6818 97.3421 49.6818ZM97.3875 43.0909C99.236 43.0909 100.781 42.5833 102.024 41.5682C103.266 40.5379 104.191 39.1591 104.797 37.4318C105.418 35.7045 105.728 33.7803 105.728 31.6591C105.728 29.5227 105.418 27.5909 104.797 25.8636C104.191 24.1212 103.266 22.7348 102.024 21.7045C100.781 20.6742 99.236 20.1591 97.3875 20.1591C95.4936 20.1591 93.9178 20.6742 92.6602 21.7045C91.4178 22.7348 90.486 24.1212 89.8648 25.8636C89.2587 27.5909 88.9557 29.5227 88.9557 31.6591C88.9557 33.7803 89.2587 35.7045 89.8648 37.4318C90.486 39.1591 91.4178 40.5379 92.6602 41.5682C93.9178 42.5833 95.4936 43.0909 97.3875 43.0909ZM137.56 49.6818C134.075 49.6818 131.082 48.9167 128.582 47.3864C126.097 45.8561 124.181 43.7424 122.832 41.0455C121.499 38.3333 120.832 35.2121 120.832 31.6818C120.832 28.1364 121.514 25.0076 122.878 22.2955C124.241 19.5682 126.166 17.447 128.65 15.9318C131.15 14.4015 134.105 13.6364 137.514 13.6364C140.347 13.6364 142.855 14.1591 145.037 15.2045C147.234 16.2348 148.984 17.697 150.287 19.5909C151.59 21.4697 152.332 23.6667 152.514 26.1818H144.65C144.332 24.5 143.575 23.0985 142.378 21.9773C141.196 20.8409 139.613 20.2727 137.628 20.2727C135.946 20.2727 134.469 20.7273 133.196 21.6364C131.923 22.5303 130.931 23.8182 130.219 25.5C129.522 27.1818 129.173 29.197 129.173 31.5455C129.173 33.9242 129.522 35.9697 130.219 37.6818C130.916 39.3788 131.893 40.6894 133.15 41.6136C134.423 42.5227 135.916 42.9773 137.628 42.9773C138.84 42.9773 139.923 42.75 140.878 42.2955C141.847 41.8258 142.658 41.1515 143.31 40.2727C143.961 39.3939 144.408 38.3258 144.65 37.0682H152.514C152.317 39.5379 151.59 41.7273 150.332 43.6364C149.075 45.5303 147.363 47.0152 145.196 48.0909C143.029 49.1515 140.484 49.6818 137.56 49.6818ZM160.55 49V14.0909H168.777V49H160.55ZM164.686 9.13636C163.383 9.13636 162.262 8.70455 161.323 7.84091C160.383 6.96212 159.913 5.90909 159.913 4.68182C159.913 3.43939 160.383 2.38636 161.323 1.52272C162.262 0.643937 163.383 0.204544 164.686 0.204544C166.004 0.204544 167.126 0.643937 168.05 1.52272C168.989 2.38636 169.459 3.43939 169.459 4.68182C169.459 5.90909 168.989 6.96212 168.05 7.84091C167.126 8.70455 166.004 9.13636 164.686 9.13636ZM188.563 49.7045C186.351 49.7045 184.358 49.3106 182.585 48.5227C180.828 47.7197 179.434 46.5379 178.404 44.9773C177.388 43.4167 176.881 41.4924 176.881 39.2045C176.881 37.2348 177.245 35.6061 177.972 34.3182C178.699 33.0303 179.692 32 180.949 31.2273C182.207 30.4545 183.623 29.8712 185.199 29.4773C186.79 29.0682 188.434 28.7727 190.131 28.5909C192.176 28.3788 193.835 28.1894 195.108 28.0227C196.381 27.8409 197.305 27.5682 197.881 27.2045C198.472 26.8258 198.767 26.2424 198.767 25.4545V25.3182C198.767 23.6061 198.26 22.2803 197.245 21.3409C196.229 20.4015 194.767 19.9318 192.858 19.9318C190.843 19.9318 189.245 20.3712 188.063 21.25C186.896 22.1288 186.108 23.1667 185.699 24.3636L178.017 23.2727C178.623 21.1515 179.623 19.3788 181.017 17.9545C182.411 16.5151 184.116 15.4394 186.131 14.7273C188.146 14 190.373 13.6364 192.813 13.6364C194.495 13.6364 196.169 13.8333 197.835 14.2273C199.502 14.6212 201.025 15.2727 202.404 16.1818C203.782 17.0758 204.888 18.2955 205.722 19.8409C206.57 21.3864 206.995 23.3182 206.995 25.6364V49H199.085V44.2045H198.813C198.313 45.1742 197.608 46.0833 196.699 46.9318C195.805 47.7652 194.676 48.4394 193.313 48.9545C191.964 49.4545 190.381 49.7045 188.563 49.7045ZM190.699 43.6591C192.351 43.6591 193.782 43.3333 194.995 42.6818C196.207 42.0152 197.138 41.1364 197.79 40.0455C198.457 38.9545 198.79 37.7652 198.79 36.4773V32.3636C198.532 32.5758 198.093 32.7727 197.472 32.9545C196.866 33.1364 196.184 33.2955 195.426 33.4318C194.669 33.5682 193.919 33.6894 193.176 33.7955C192.434 33.9015 191.79 33.9924 191.245 34.0682C190.017 34.2348 188.919 34.5076 187.949 34.8864C186.979 35.2652 186.214 35.7955 185.654 36.4773C185.093 37.1439 184.813 38.0076 184.813 39.0682C184.813 40.5833 185.366 41.7273 186.472 42.5C187.578 43.2727 188.987 43.6591 190.699 43.6591ZM224.775 2.45454V49H216.547V2.45454H224.775ZM255.674 26.2273V33H234.719V26.2273H255.674ZM265.971 49V2.45454H274.403V41.9318H294.903V49H265.971ZM303.137 49V14.0909H311.365V49H303.137ZM307.274 9.13636C305.971 9.13636 304.849 8.70455 303.91 7.84091C302.971 6.96212 302.501 5.90909 302.501 4.68182C302.501 3.43939 302.971 2.38636 303.91 1.52272C304.849 0.643937 305.971 0.204544 307.274 0.204544C308.592 0.204544 309.713 0.643937 310.637 1.52272C311.577 2.38636 312.046 3.43939 312.046 4.68182C312.046 5.90909 311.577 6.96212 310.637 7.84091C309.713 8.70455 308.592 9.13636 307.274 9.13636ZM329.332 28.5455V49H321.105V14.0909H328.968V20.0227H329.378C330.181 18.0682 331.461 16.5152 333.218 15.3636C334.991 14.2121 337.181 13.6364 339.787 13.6364C342.196 13.6364 344.294 14.1515 346.082 15.1818C347.885 16.2121 349.279 17.7045 350.264 19.6591C351.264 21.6136 351.756 23.9848 351.741 26.7727V49H343.514V28.0455C343.514 25.7121 342.908 23.8864 341.696 22.5682C340.499 21.25 338.84 20.5909 336.718 20.5909C335.279 20.5909 333.999 20.9091 332.878 21.5455C331.771 22.1667 330.9 23.0682 330.264 24.25C329.643 25.4318 329.332 26.8636 329.332 28.5455ZM368.885 38.0455L368.862 28.1136H370.18L382.726 14.0909H392.339L376.908 31.2727H375.203L368.885 38.0455ZM361.385 49V2.45454H369.612V49H361.385ZM383.294 49L371.93 33.1136L377.476 27.3182L393.135 49H383.294ZM426.693 23.3182L419.193 24.1364C418.981 23.3788 418.61 22.6667 418.08 22C417.564 21.3333 416.867 20.7955 415.989 20.3864C415.11 19.9773 414.034 19.7727 412.761 19.7727C411.049 19.7727 409.61 20.1439 408.443 20.8864C407.292 21.6288 406.723 22.5909 406.739 23.7727C406.723 24.7879 407.095 25.6136 407.852 26.25C408.625 26.8864 409.898 27.4091 411.67 27.8182L417.625 29.0909C420.928 29.803 423.383 30.9318 424.989 32.4773C426.61 34.0227 427.428 36.0455 427.443 38.5455C427.428 40.7424 426.784 42.6818 425.511 44.3636C424.254 46.0303 422.504 47.3333 420.261 48.2727C418.019 49.2121 415.443 49.6818 412.534 49.6818C408.261 49.6818 404.822 48.7879 402.216 47C399.61 45.197 398.057 42.6894 397.557 39.4773L405.58 38.7045C405.943 40.2803 406.716 41.4697 407.898 42.2727C409.08 43.0758 410.617 43.4773 412.511 43.4773C414.466 43.4773 416.034 43.0758 417.216 42.2727C418.413 41.4697 419.011 40.4773 419.011 39.2955C419.011 38.2955 418.625 37.4697 417.852 36.8182C417.095 36.1667 415.913 35.6667 414.307 35.3182L408.352 34.0682C405.004 33.3712 402.527 32.197 400.92 30.5455C399.314 28.8788 398.519 26.7727 398.534 24.2273C398.519 22.0758 399.102 20.2121 400.284 18.6364C401.481 17.0455 403.14 15.8182 405.261 14.9545C407.398 14.0758 409.86 13.6364 412.648 13.6364C416.739 13.6364 419.958 14.5076 422.307 16.25C424.67 17.9924 426.133 20.3485 426.693 23.3182Z" fill="#8C8C73"/>
                        <path d="M30 26C30 34.2843 23.2843 41 15 41C6.71573 41 0 34.2843 0 26C11 26 6.71573 26 15 26C23.2843 26 22.5 26 30 26Z" fill="#1AFF00"/>
                        <path d="M467 26C467 34.2843 460.284 41 452 41C443.716 41 437 34.2843 437 26C448 26 443.716 26 452 26C460.284 26 459.5 26 467 26Z" fill="#1AFF00"/>
                        <path d="M34 60L430 61.018" stroke="#8C8C73" strokeWidth="4"/>
                    </svg>
                </div>
                <div className="pg8ExpCards">
                    <div className="pg8comCard pg8LeftSide">

                        <div className="pg8LeftSideCommonCard">
                            <div className="pg8CommonCardSVG pg8CardGitgub">
                                <svg width="294" height="56" viewBox="0 0 294 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.157 52.2L23.901 49.704C22.749 49.832 21.597 49.896 20.445 49.896C17.0743 49.896 14.0023 49.512 11.229 48.744C8.45566 47.9333 6.34366 46.9307 4.893 45.736C4.16766 42.3227 3.805 38.7813 3.805 35.112C3.805 31.2293 4.253 27.368 5.149 23.528C6.045 19.6453 7.453 16.04 9.373 12.712C11.3357 9.34133 13.917 6.504 17.117 4.2L29.469 12.008C25.5437 14.5253 22.1303 17.5333 19.229 21.032C16.3703 24.488 14.1517 28.1787 12.573 32.104C11.037 36.0293 10.269 39.9547 10.269 43.88C12.6157 44.3493 14.9197 44.584 17.181 44.584C19.485 44.584 21.5543 44.3707 23.389 43.944L22.109 29.928L34.269 29.16L30.429 51.688L24.157 52.2ZM57.64 49.896L53.992 7.4L69.224 6.44L64.68 49.256L57.64 49.896ZM100.306 49.896L97.1065 13.032L88.1465 13.928L87.7625 7.336L120.466 6.44L120.274 10.728L111.314 11.624L107.346 49.256L100.306 49.896ZM165.779 50.024L164.307 33.256L150.803 34.344L149.267 49.256L142.867 49.896L139.219 7.4L153.811 6.44L151.379 29.416L163.987 29.544L162.131 7.528L176.723 6.568L172.179 49.384L165.779 50.024ZM215.543 50.536C213.239 50.536 211.084 50.0667 209.079 49.128C207.116 48.1893 205.474 46.632 204.151 44.456C202.828 42.28 201.954 39.3787 201.527 35.752L198.455 7.4L213.687 6.44C213.175 12.6267 212.748 17.6827 212.407 21.608C212.066 25.5333 211.81 28.6267 211.639 30.888C211.468 33.1067 211.34 34.728 211.255 35.752C211.17 36.7333 211.106 37.3733 211.063 37.672C211.063 37.9707 211.063 38.1627 211.063 38.248C211.063 40.8933 211.682 42.7707 212.919 43.88C214.199 44.9893 215.906 45.544 218.039 45.544C219.234 45.544 220.407 45.3093 221.559 44.84C222.754 44.3707 223.735 43.496 224.503 42.216C225.314 40.936 225.74 39.1227 225.783 36.776L226.359 7.08L232.759 6.76L230.839 36.84C230.668 39.6987 230.092 42.0453 229.111 43.88C228.13 45.672 226.892 47.0587 225.399 48.04C223.906 48.9787 222.306 49.6187 220.599 49.96C218.892 50.344 217.207 50.536 215.543 50.536ZM270.794 50.664C269.3 50.664 267.53 50.6 265.482 50.472C263.434 50.344 261.492 50.152 259.658 49.896L256.01 8.68C257.332 8.25333 258.996 7.82666 261.002 7.4C263.05 6.97333 265.226 6.61066 267.53 6.312C269.834 5.97066 272.031 5.8 274.122 5.8C276.383 5.8 278.623 6.03467 280.842 6.504C283.103 6.97333 285.13 7.76266 286.922 8.872C287.306 10.024 287.583 11.1333 287.754 12.2C287.924 13.224 288.01 14.2053 288.01 15.144C288.01 17.5333 287.476 19.6453 286.41 21.48C285.386 23.272 283.999 24.8293 282.25 26.152C284.767 28.1147 286.687 30.2907 288.01 32.68C289.375 35.0693 290.058 37.2453 290.058 39.208C290.058 41.256 289.418 43.1547 288.138 44.904C286.9 46.6107 284.874 47.9973 282.058 49.064C279.242 50.1307 275.487 50.664 270.794 50.664ZM268.298 28.264C271.284 27.0693 273.588 25.448 275.21 23.4C276.831 21.352 277.642 19.3467 277.642 17.384C277.642 16.104 277.343 14.7387 276.746 13.288C276.191 11.8373 275.359 10.728 274.25 9.96C273.695 9.96 273.055 10.0453 272.33 10.216C271.647 10.344 270.922 10.5147 270.154 10.728L268.298 28.264ZM272.714 46.12C273.055 46.12 273.546 46.12 274.186 46.12C274.826 46.0773 275.466 46.0347 276.106 45.992C276.746 45.9067 277.194 45.8213 277.45 45.736C277.962 44.712 278.452 43.3893 278.922 41.768C279.434 40.104 279.69 38.3333 279.69 36.456C279.69 35.1333 279.519 33.832 279.178 32.552C278.879 31.272 278.346 30.0347 277.578 28.84C276.127 29.5227 274.57 30.12 272.906 30.632C271.284 31.1013 269.62 31.528 267.914 31.912L266.506 45.16C267.572 45.4587 268.618 45.6933 269.642 45.864C270.708 46.0347 271.732 46.12 272.714 46.12Z"/>
                                </svg>
                            </div>
                            <div className="pg8CommonCardText">
                                <a href="https://github.com/NiazMahmud2001">
                                    <div className="pg8CommonCardTopText">
                                        <p>
                                            Checkout my Work and Projects on Github
                                        </p>
                                    </div>
                                    <div className="pg8CommonCardBottomText">
                                        <p>
                                            View GitHub
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="pg8LeftSideCommonCard">
                            <div className="pg8CommonCardSVG pg8Cardlinkin">
                                <svg width="362" height="56" viewBox="0 0 362 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.98374 51.576L3.97574 9.4L19.2077 8.44L14.5997 46.392L30.9837 44.408L30.7277 51L6.98374 51.576ZM52.5442 14.904C50.9229 14.904 49.5149 14.328 48.3202 13.176C47.1682 11.9813 46.5922 10.5733 46.5922 8.952C46.5922 7.33066 47.1682 5.944 48.3202 4.792C49.5149 3.59733 50.9229 3 52.5442 3C54.1656 3 55.5522 3.59733 56.7042 4.792C57.8989 5.944 58.4962 7.33066 58.4962 8.952C58.4962 10.5733 57.8989 11.9813 56.7042 13.176C55.5522 14.328 54.1656 14.904 52.5442 14.904ZM49.6002 51.96L46.3362 20.28L60.0322 18.168L55.9362 51.384L49.6002 51.96ZM83.4252 51.96L80.1612 20.216L93.8572 18.104L92.4492 29.368H93.0252C94.6892 25.7413 96.6092 22.8613 98.7852 20.728C100.961 18.5947 103.244 17.528 105.633 17.528C106.444 17.528 107.233 17.656 108.001 17.912C108.983 19.1067 109.815 20.7493 110.497 22.84C111.18 24.888 111.735 27.1707 112.161 29.688C112.588 32.2053 112.908 34.7867 113.121 37.432C113.335 40.0347 113.484 42.5307 113.569 44.92C113.655 47.2667 113.697 49.2933 113.697 51L102.177 51.96C102.177 47.8213 102.135 44.2373 102.049 41.208C101.964 38.1787 101.836 35.4053 101.665 32.888C101.537 30.328 101.345 27.7467 101.089 25.144C100.279 25.4427 99.3399 25.9973 98.2732 26.808C97.2492 27.6187 96.2039 28.9413 95.1372 30.776C94.0706 32.6107 93.0679 35.192 92.1292 38.52C91.1906 41.8053 90.4012 46.0933 89.7612 51.384L83.4252 51.96ZM137.515 51.96L134.251 7.288L147.947 5.176L145.515 32.824L159.147 16.696L163.435 20.024L153.515 30.392L167.403 51.128L155.243 51.96L147.243 36.984L144.939 39.16L143.851 51.384L137.515 51.96ZM198.997 52.536C195.669 52.536 192.725 52.2373 190.165 51.64C187.605 51.0427 185.472 50.0827 183.765 48.76C183.381 47.0533 183.104 45.5173 182.933 44.152C182.805 42.744 182.741 41.4213 182.741 40.184C182.741 36.3867 183.317 32.9093 184.469 29.752C185.664 26.5947 187.179 23.8853 189.013 21.624C190.848 19.32 192.747 17.6133 194.709 16.504C196.459 17.1867 198.229 18.0187 200.021 19C201.856 19.9387 203.541 21.048 205.077 22.328C206.613 23.608 207.851 25.0587 208.789 26.68C209.728 28.2587 210.197 30.008 210.197 31.928C210.197 33.9333 209.835 35.6187 209.109 36.984C208.427 38.3067 207.168 39.3093 205.333 39.992C203.499 40.6747 200.853 41.016 197.397 41.016C195.947 41.016 194.539 40.952 193.173 40.824C191.851 40.696 190.699 40.5253 189.717 40.312C188.907 42.3173 188.501 44.408 188.501 46.584C189.483 46.712 190.549 46.8187 191.701 46.904C192.853 46.9467 193.963 46.968 195.029 46.968C197.035 46.968 199.083 46.8187 201.173 46.52C203.307 46.1787 205.44 45.624 207.573 44.856L209.493 51.064C207.787 51.6187 206.037 52.0027 204.245 52.216C202.453 52.4293 200.704 52.536 198.997 52.536ZM193.685 37.368C195.307 37.368 196.928 37.2827 198.549 37.112C200.213 36.9413 201.664 36.728 202.901 36.472C203.029 35.6187 203.093 34.808 203.093 34.04C203.093 32.504 202.88 31.1387 202.453 29.944C202.069 28.7067 201.579 27.6187 200.981 26.68C198.592 28.2587 196.608 29.9227 195.029 31.672C193.493 33.4213 192.149 35.2987 190.997 37.304C191.424 37.3467 191.872 37.368 192.341 37.368C192.811 37.368 193.259 37.368 193.685 37.368ZM238.369 52.472C238.113 52.472 237.686 52.408 237.089 52.28C236.491 52.1947 236.065 52.088 235.809 51.96C234.23 50.3387 232.95 47.9493 231.969 44.792C231.03 41.6347 230.561 38.0507 230.561 34.04C230.561 30.7547 230.966 28.024 231.777 25.848C232.587 23.672 233.953 22.0293 235.873 20.92C237.835 19.8107 240.502 19.256 243.873 19.256C245.537 19.256 247.137 19.4267 248.673 19.768C250.209 20.1093 251.617 20.536 252.897 21.048L251.937 7.288L265.633 5.176L261.537 51.384L255.201 51.96L254.369 40.952H253.857C252.107 45.048 249.889 47.992 247.201 49.784C244.513 51.576 241.569 52.472 238.369 52.472ZM242.721 47.288C243.531 47.1173 244.534 46.6907 245.729 46.008C246.923 45.3253 248.118 44.28 249.313 42.872C250.507 41.4213 251.489 39.5227 252.257 37.176C253.067 34.7867 253.473 31.864 253.473 28.408C253.473 27.9387 253.451 27.448 253.409 26.936C253.409 26.424 253.387 25.912 253.345 25.4C252.406 24.632 251.297 24.056 250.017 23.672C248.779 23.288 247.563 23.096 246.369 23.096C244.79 23.096 243.446 23.3947 242.337 23.992C242.123 25.144 241.91 26.6587 241.697 28.536C241.526 30.4133 241.441 32.6533 241.441 35.256C241.441 36.664 241.505 38.2 241.633 39.864C241.761 41.4853 241.91 42.9787 242.081 44.344C242.294 45.6667 242.507 46.648 242.721 47.288ZM291.564 51.896L287.916 9.4L303.148 8.44L298.604 51.256L291.564 51.896ZM328.15 51.96L324.886 20.216L338.582 18.104L337.174 29.368H337.75C339.414 25.7413 341.334 22.8613 343.51 20.728C345.686 18.5947 347.969 17.528 350.358 17.528C351.169 17.528 351.958 17.656 352.726 17.912C353.708 19.1067 354.54 20.7493 355.222 22.84C355.905 24.888 356.46 27.1707 356.886 29.688C357.313 32.2053 357.633 34.7867 357.846 37.432C358.06 40.0347 358.209 42.5307 358.294 44.92C358.38 47.2667 358.422 49.2933 358.422 51L346.902 51.96C346.902 47.8213 346.86 44.2373 346.774 41.208C346.689 38.1787 346.561 35.4053 346.39 32.888C346.262 30.328 346.07 27.7467 345.814 25.144C345.004 25.4427 344.065 25.9973 342.998 26.808C341.974 27.6187 340.929 28.9413 339.862 30.776C338.796 32.6107 337.793 35.192 336.854 38.52C335.916 41.8053 335.126 46.0933 334.486 51.384L328.15 51.96Z"/>
                                </svg>
                            </div>
                            <div className="pg8CommonCardText">
                                <a href="#">
                                    <div className="pg8CommonCardTopText">
                                        <p>
                                            Connect with me on My LinkIn for latest Updates
                                        </p>
                                    </div>
                                    <div className="pg8CommonCardBottomText">
                                        <p>
                                            View LinkedIn
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="pg8LeftSideCommonCard">
                            <div className="pg8CommonCardSVG pg8CardLeetcode">
                                <svg width="362" height="56" viewBox="0 0 362 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.98374 51.576L3.97574 9.4L19.2077 8.44L14.5997 46.392L30.9837 44.408L30.7277 51L6.98374 51.576ZM52.5442 14.904C50.9229 14.904 49.5149 14.328 48.3202 13.176C47.1682 11.9813 46.5922 10.5733 46.5922 8.952C46.5922 7.33066 47.1682 5.944 48.3202 4.792C49.5149 3.59733 50.9229 3 52.5442 3C54.1656 3 55.5522 3.59733 56.7042 4.792C57.8989 5.944 58.4962 7.33066 58.4962 8.952C58.4962 10.5733 57.8989 11.9813 56.7042 13.176C55.5522 14.328 54.1656 14.904 52.5442 14.904ZM49.6002 51.96L46.3362 20.28L60.0322 18.168L55.9362 51.384L49.6002 51.96ZM83.4252 51.96L80.1612 20.216L93.8572 18.104L92.4492 29.368H93.0252C94.6892 25.7413 96.6092 22.8613 98.7852 20.728C100.961 18.5947 103.244 17.528 105.633 17.528C106.444 17.528 107.233 17.656 108.001 17.912C108.983 19.1067 109.815 20.7493 110.497 22.84C111.18 24.888 111.735 27.1707 112.161 29.688C112.588 32.2053 112.908 34.7867 113.121 37.432C113.335 40.0347 113.484 42.5307 113.569 44.92C113.655 47.2667 113.697 49.2933 113.697 51L102.177 51.96C102.177 47.8213 102.135 44.2373 102.049 41.208C101.964 38.1787 101.836 35.4053 101.665 32.888C101.537 30.328 101.345 27.7467 101.089 25.144C100.279 25.4427 99.3399 25.9973 98.2732 26.808C97.2492 27.6187 96.2039 28.9413 95.1372 30.776C94.0706 32.6107 93.0679 35.192 92.1292 38.52C91.1906 41.8053 90.4012 46.0933 89.7612 51.384L83.4252 51.96ZM137.515 51.96L134.251 7.288L147.947 5.176L145.515 32.824L159.147 16.696L163.435 20.024L153.515 30.392L167.403 51.128L155.243 51.96L147.243 36.984L144.939 39.16L143.851 51.384L137.515 51.96ZM198.997 52.536C195.669 52.536 192.725 52.2373 190.165 51.64C187.605 51.0427 185.472 50.0827 183.765 48.76C183.381 47.0533 183.104 45.5173 182.933 44.152C182.805 42.744 182.741 41.4213 182.741 40.184C182.741 36.3867 183.317 32.9093 184.469 29.752C185.664 26.5947 187.179 23.8853 189.013 21.624C190.848 19.32 192.747 17.6133 194.709 16.504C196.459 17.1867 198.229 18.0187 200.021 19C201.856 19.9387 203.541 21.048 205.077 22.328C206.613 23.608 207.851 25.0587 208.789 26.68C209.728 28.2587 210.197 30.008 210.197 31.928C210.197 33.9333 209.835 35.6187 209.109 36.984C208.427 38.3067 207.168 39.3093 205.333 39.992C203.499 40.6747 200.853 41.016 197.397 41.016C195.947 41.016 194.539 40.952 193.173 40.824C191.851 40.696 190.699 40.5253 189.717 40.312C188.907 42.3173 188.501 44.408 188.501 46.584C189.483 46.712 190.549 46.8187 191.701 46.904C192.853 46.9467 193.963 46.968 195.029 46.968C197.035 46.968 199.083 46.8187 201.173 46.52C203.307 46.1787 205.44 45.624 207.573 44.856L209.493 51.064C207.787 51.6187 206.037 52.0027 204.245 52.216C202.453 52.4293 200.704 52.536 198.997 52.536ZM193.685 37.368C195.307 37.368 196.928 37.2827 198.549 37.112C200.213 36.9413 201.664 36.728 202.901 36.472C203.029 35.6187 203.093 34.808 203.093 34.04C203.093 32.504 202.88 31.1387 202.453 29.944C202.069 28.7067 201.579 27.6187 200.981 26.68C198.592 28.2587 196.608 29.9227 195.029 31.672C193.493 33.4213 192.149 35.2987 190.997 37.304C191.424 37.3467 191.872 37.368 192.341 37.368C192.811 37.368 193.259 37.368 193.685 37.368ZM238.369 52.472C238.113 52.472 237.686 52.408 237.089 52.28C236.491 52.1947 236.065 52.088 235.809 51.96C234.23 50.3387 232.95 47.9493 231.969 44.792C231.03 41.6347 230.561 38.0507 230.561 34.04C230.561 30.7547 230.966 28.024 231.777 25.848C232.587 23.672 233.953 22.0293 235.873 20.92C237.835 19.8107 240.502 19.256 243.873 19.256C245.537 19.256 247.137 19.4267 248.673 19.768C250.209 20.1093 251.617 20.536 252.897 21.048L251.937 7.288L265.633 5.176L261.537 51.384L255.201 51.96L254.369 40.952H253.857C252.107 45.048 249.889 47.992 247.201 49.784C244.513 51.576 241.569 52.472 238.369 52.472ZM242.721 47.288C243.531 47.1173 244.534 46.6907 245.729 46.008C246.923 45.3253 248.118 44.28 249.313 42.872C250.507 41.4213 251.489 39.5227 252.257 37.176C253.067 34.7867 253.473 31.864 253.473 28.408C253.473 27.9387 253.451 27.448 253.409 26.936C253.409 26.424 253.387 25.912 253.345 25.4C252.406 24.632 251.297 24.056 250.017 23.672C248.779 23.288 247.563 23.096 246.369 23.096C244.79 23.096 243.446 23.3947 242.337 23.992C242.123 25.144 241.91 26.6587 241.697 28.536C241.526 30.4133 241.441 32.6533 241.441 35.256C241.441 36.664 241.505 38.2 241.633 39.864C241.761 41.4853 241.91 42.9787 242.081 44.344C242.294 45.6667 242.507 46.648 242.721 47.288ZM291.564 51.896L287.916 9.4L303.148 8.44L298.604 51.256L291.564 51.896ZM328.15 51.96L324.886 20.216L338.582 18.104L337.174 29.368H337.75C339.414 25.7413 341.334 22.8613 343.51 20.728C345.686 18.5947 347.969 17.528 350.358 17.528C351.169 17.528 351.958 17.656 352.726 17.912C353.708 19.1067 354.54 20.7493 355.222 22.84C355.905 24.888 356.46 27.1707 356.886 29.688C357.313 32.2053 357.633 34.7867 357.846 37.432C358.06 40.0347 358.209 42.5307 358.294 44.92C358.38 47.2667 358.422 49.2933 358.422 51L346.902 51.96C346.902 47.8213 346.86 44.2373 346.774 41.208C346.689 38.1787 346.561 35.4053 346.39 32.888C346.262 30.328 346.07 27.7467 345.814 25.144C345.004 25.4427 344.065 25.9973 342.998 26.808C341.974 27.6187 340.929 28.9413 339.862 30.776C338.796 32.6107 337.793 35.192 336.854 38.52C335.916 41.8053 335.126 46.0933 334.486 51.384L328.15 51.96Z"/>
                                </svg>
                            </div>
                            <div className="pg8CommonCardText">
                                <a href="https://leetcode.com/u/niazmahmud500/">
                                    <div className="pg8CommonCardTopText">
                                        <p>
                                            Checkout My coding experience on LeetCode
                                        </p>
                                    </div>
                                    <div className="pg8CommonCardBottomText">
                                        <p>
                                            View LeetCode
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="p8CommonCard pg8RightSide">
                        <Lottie className="page8MyImg" animationData={letteAnimPg8} loop={true} autoplay={true} speed={0.5}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
