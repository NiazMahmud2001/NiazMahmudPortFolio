import { useEffect, useLayoutEffect , useRef, useState } from "react";
import { forwardRef } from "react";

import gsap from "gsap"
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger , CustomEase , Observer);

import "./FirstPage.css";


const FirstPage = forwardRef((props, ref) =>{

    useEffect(()=>{
        var page3_txt1 = document.querySelector("#page3>.page3_top>.page3_top_top>h1");
        var page3_txt2 = document.querySelector("#page3>.page3_top>.page3_top_bottom>.page3_top_bottom_top>h1"); 
        var page3_svg1 = document.querySelector("#page3>.page3_top>.page3_top_bottom>.page3_top_bottom_top>.portfolio_svg"); 
        var page3_txt3 = document.querySelector("#page3>.page3_top>.page3_top_bottom_bottom>h4");

        gsap.to(page3_txt1 , {
            paddingTop: "0%",
            duration:1 , 
            delay: 0.3 , 
            ease: "power4.inOut",
        })
        gsap.to(page3_txt2 , {
            paddingTop: "0%",
            duration: 1 , 
            delay: 0.4 , 
            ease: "power4.inOut",
        })
        gsap.to(page3_svg1 , {
            paddingTop: "0%",
            duration: 1 , 
            delay: 0.4 , 
            ease: "power4.inOut",
        })
        gsap.to(page3_txt3 , {
            marginTop: "0%",
            duration: 1, 
            delay: 0.8, 
            ease: "power4.inOut",
        })

        var page3_center_txt1 = document.querySelector("#page3>.page3_center>.page3_center_wrapper>.page3_center_top>h3");
        var page3_center_txt2 = document.querySelector("#page3>.page3_center>.page3_center_wrapper>.page3_center_bottom>h3");
        gsap.to(page3_center_txt1 , {
            translateY:"0%", 
            duration: 1, 
            delay: 1.4 , 
            ease: "power4.inOut",
        })
        gsap.to(page3_center_txt2 , {
            translateY:"0%", 
            duration: 1, 
            delay: 1.6 , 
            ease: "power4.inOut",
        })

        var page3_bottom_opacity = document.querySelector("#page3>.page3_bottom");
        gsap.to(page3_bottom_opacity , {
            opacity: 1 , 
            duration: 1.8, 
            delay: 2 , 
        })

        var page3_bottom_arrow1 = document.querySelector(".page3_bottom_right>.page3_bottom_icon1");
        var page3_bottom_arrow1_elem = document.querySelector(".page3_bottom_right>.page3_bottom_icon1>svg");
        var page3_bottom_arrow2 = document.querySelector(".page3_bottom_right>.page3_bottom_icon2");
        var page3_bottom_arrow2_elem = document.querySelector(".page3_bottom_right>.page3_bottom_icon2>svg");

        page3_bottom_arrow1.addEventListener("mouseenter", function () {
            var tl = gsap.timeline();
            tl.to(page3_bottom_arrow1_elem , {
                translateY:"110%",
                duration: 0.1 , 
                delay: 0 ,
                ease:"power0.easeNone"
            });
            tl.to(page3_bottom_arrow1_elem , {
                translateY:"-110%",
                duration: 0 , 
                delay: 0.1 ,
                ease:"power0.easeNon"
            });
            tl.to(page3_bottom_arrow1_elem , {
                translateY:"0%",
                duration: 0.1 , 
                delay: 0.3 ,
                ease:"power0.easeNon"
            });
        })
        page3_bottom_arrow2.addEventListener("mouseenter", function () {
            var tl = gsap.timeline();
            tl.to(page3_bottom_arrow2_elem , {
                translateY:"110%",
                duration: 0.1 , 
                delay: 0 ,
                ease:"power0.easeNone"
            });
            tl.to(page3_bottom_arrow2_elem , {
                translateY:"-110%",
                duration: 0 , 
                delay: 0.1 ,
                ease:"power0.easeNon"
            });
            tl.to(page3_bottom_arrow2_elem , {
                translateY:"0%",
                duration: 0.1 , 
                delay: 0.3 ,
                ease:"power0.easeNon"
            });
        })

    },[])

    return(
        <div ref={ref} id="page3">
            <div className="page3_top">
                <div className="page3_top_top">
                    <h1>WELCOME TO</h1>
                </div>
                <div className="page3_top_bottom">
                    <div className="page3_top_bottom_top">
                        <h1> MY </h1>
                        <div className="portfolio_svg">
                            <svg viewBox="0 0 367 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.965 51.896L3.317 10.68C4.63967 10.2533 6.30367 9.82666 8.309 9.4C10.357 8.93067 12.597 8.54667 15.029 8.248C17.461 7.94933 19.9143 7.8 22.389 7.8C24.7783 7.8 27.1037 8.03467 29.365 8.504C31.669 8.97333 33.717 9.76266 35.509 10.872C36.277 13.176 36.661 15.3733 36.661 17.464C36.661 20.92 35.6583 23.9493 33.653 26.552C31.6903 29.112 29.0663 31.2667 25.781 33.016C22.4957 34.7227 18.869 36.024 14.901 36.92L13.365 51.256L6.965 51.896ZM15.349 32.568C18.2503 30.9893 20.469 28.984 22.005 26.552C23.541 24.0773 24.309 21.6667 24.309 19.32C24.309 17.8267 23.9677 16.44 23.285 15.16C22.645 13.8373 21.6423 12.7707 20.277 11.96C19.8503 11.96 19.381 12.0027 18.869 12.088C18.3997 12.1733 17.9303 12.28 17.461 12.408L15.349 32.568ZM63.589 52.536C60.5597 52.536 57.9783 52.1733 55.845 51.448C53.7543 50.7653 52.0477 49.8907 50.725 48.824C50.3837 47.1173 50.1277 45.4747 49.957 43.896C49.829 42.2747 49.765 40.7173 49.765 39.224C49.765 36.2373 50.1917 33.464 51.045 30.904C51.941 28.344 53.029 26.0827 54.309 24.12C55.6317 22.1147 56.9757 20.472 58.341 19.192C59.7063 17.8693 60.8583 16.9733 61.797 16.504C63.717 17.4853 65.6157 18.68 67.493 20.088C69.3703 21.496 71.077 23.1387 72.613 25.016C74.1917 26.8933 75.4503 29.0053 76.389 31.352C77.3277 33.6987 77.797 36.3227 77.797 39.224C77.797 42.168 77.3917 44.6213 76.581 46.584C75.7703 48.5467 74.341 50.0187 72.293 51C70.245 52.024 67.3437 52.536 63.589 52.536ZM60.133 46.968C61.7543 46.968 63.3757 46.8613 64.997 46.648C66.661 46.392 68.1117 46.0507 69.349 45.624C69.6903 44.2587 69.9463 42.8933 70.117 41.528C70.2877 40.1627 70.373 38.8187 70.373 37.496C70.373 33.4427 69.5197 29.7307 67.813 26.36C65.4237 27.5973 63.3117 29.3253 61.477 31.544C59.6423 33.72 58.1917 36.1307 57.125 38.776C56.101 41.3787 55.589 43.9813 55.589 46.584C56.9543 46.84 58.469 46.968 60.133 46.968ZM99.9465 51.96L96.6825 20.216L110.378 18.104L109.098 28.344H109.546C111.168 24.8027 113.088 22.0293 115.306 20.024C117.568 17.976 120 16.8453 122.603 16.632L120.811 30.264C120.128 30.1787 119.467 30.1147 118.826 30.072C118.229 29.9867 117.632 29.944 117.035 29.944C115.2 29.944 113.621 30.3493 112.299 31.16C111.019 31.9707 109.952 33.4213 109.098 35.512C108.288 37.56 107.648 40.44 107.179 44.152L106.282 51.384L99.9465 51.96ZM143.769 51.96L141.017 26.104L135.129 26.936L134.745 20.344L140.377 20.088L139.417 11.128L155.353 9.016L154.073 19.384L160.409 19.064L160.217 23.352L153.433 24.312L150.105 51.384L143.769 51.96ZM182.148 51.576L179.14 9.4L207.364 8.504L207.172 12.792L193.668 14.392L191.812 29.56L203.716 29.432L204.036 35.192L191.236 34.168L189.188 51.256L182.148 51.576ZM235.294 52.536C232.265 52.536 229.683 52.1733 227.55 51.448C225.459 50.7653 223.753 49.8907 222.43 48.824C222.089 47.1173 221.833 45.4747 221.662 43.896C221.534 42.2747 221.47 40.7173 221.47 39.224C221.47 36.2373 221.897 33.464 222.75 30.904C223.646 28.344 224.734 26.0827 226.014 24.12C227.337 22.1147 228.681 20.472 230.046 19.192C231.411 17.8693 232.563 16.9733 233.502 16.504C235.422 17.4853 237.321 18.68 239.198 20.088C241.075 21.496 242.782 23.1387 244.318 25.016C245.897 26.8933 247.155 29.0053 248.094 31.352C249.033 33.6987 249.502 36.3227 249.502 39.224C249.502 42.168 249.097 44.6213 248.286 46.584C247.475 48.5467 246.046 50.0187 243.998 51C241.95 52.024 239.049 52.536 235.294 52.536ZM231.838 46.968C233.459 46.968 235.081 46.8613 236.702 46.648C238.366 46.392 239.817 46.0507 241.054 45.624C241.395 44.2587 241.651 42.8933 241.822 41.528C241.993 40.1627 242.078 38.8187 242.078 37.496C242.078 33.4427 241.225 29.7307 239.518 26.36C237.129 27.5973 235.017 29.3253 233.182 31.544C231.347 33.72 229.897 36.1307 228.83 38.776C227.806 41.3787 227.294 43.9813 227.294 46.584C228.659 46.84 230.174 46.968 231.838 46.968ZM271.971 51.96L268.707 7.288L282.403 5.176L278.307 51.384L271.971 51.96ZM309.06 14.904C307.439 14.904 306.031 14.328 304.836 13.176C303.684 11.9813 303.108 10.5733 303.108 8.952C303.108 7.33066 303.684 5.944 304.836 4.792C306.031 3.59733 307.439 3 309.06 3C310.682 3 312.068 3.59733 313.22 4.792C314.415 5.944 315.012 7.33066 315.012 8.952C315.012 10.5733 314.415 11.9813 313.22 13.176C312.068 14.328 310.682 14.904 309.06 14.904ZM306.116 51.96L302.852 20.28L316.548 18.168L312.452 51.384L306.116 51.96ZM349.542 52.536C346.512 52.536 343.931 52.1733 341.798 51.448C339.707 50.7653 338 49.8907 336.678 48.824C336.336 47.1173 336.08 45.4747 335.91 43.896C335.782 42.2747 335.718 40.7173 335.718 39.224C335.718 36.2373 336.144 33.464 336.998 30.904C337.894 28.344 338.982 26.0827 340.262 24.12C341.584 22.1147 342.928 20.472 344.294 19.192C345.659 17.8693 346.811 16.9733 347.75 16.504C349.67 17.4853 351.568 18.68 353.446 20.088C355.323 21.496 357.03 23.1387 358.566 25.016C360.144 26.8933 361.403 29.0053 362.342 31.352C363.28 33.6987 363.75 36.3227 363.75 39.224C363.75 42.168 363.344 44.6213 362.534 46.584C361.723 48.5467 360.294 50.0187 358.246 51C356.198 52.024 353.296 52.536 349.542 52.536ZM346.086 46.968C347.707 46.968 349.328 46.8613 350.95 46.648C352.614 46.392 354.064 46.0507 355.302 45.624C355.643 44.2587 355.899 42.8933 356.07 41.528C356.24 40.1627 356.326 38.8187 356.326 37.496C356.326 33.4427 355.472 29.7307 353.766 26.36C351.376 27.5973 349.264 29.3253 347.43 31.544C345.595 33.72 344.144 36.1307 343.078 38.776C342.054 41.3787 341.542 43.9813 341.542 46.584C342.907 46.84 344.422 46.968 346.086 46.968Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="page3_top_bottom_bottom">
                    <h4>HAVE A NICE JOURNEY</h4>
                </div>
            </div>
            <div className="page3_center">
                <div className="page3_center_wrapper">
                    <div className="page3_center_top">
                        <h3>I AM A Student</h3>
                    </div>
                    <div className="page3_center_bottom">
                        <h3>FROM UNIVERSITY OF SHARJAH</h3>
                    </div>
                </div>
            </div>
            <div className="page3_bottom">
                <div className="page3_bottom_right">
                    <div className="page3_bottom_icon page3_bottom_icon1 ">
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12.9999 16.1716L18.3638 10.8076L19.778 12.2218L11.9999 20L4.22168 12.2218L5.63589 10.8076L10.9999 16.1716V4H12.9999V16.1716Z"></path></svg>
                    </div>
                    <div className="page3_bottom_icon page3_bottom_icon2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.9999 16.1716L18.3638 10.8076L19.778 12.2218L11.9999 20L4.22168 12.2218L5.63589 10.8076L10.9999 16.1716V4H12.9999V16.1716Z"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    )

});
export default FirstPage;