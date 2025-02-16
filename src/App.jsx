import { useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins (fixed duplicate registration)
gsap.registerPlugin(useGSAP, ScrollTrigger);

import MenuBar from './components/menuBar/MenuBar.jsx';
import FirstPage from './components/firstPage/FirstPage.jsx';
import SidePart from './components/sidePart/SidePart.jsx';
import SecondPage from './components/secondPage/SecondPage.jsx';
import ThirdPage from './components/thirdPage/ThirdPage.jsx';
import ForthPage from './components/forthPage/ForthPage.jsx';
import FifthPage from './components/fifthPage/FifthPage.jsx';
import SixthPage from './components/sixthPage/SixthPage.jsx';
import SeventhPage from "./components/seventhPage/SeventhPage.jsx";
import EighthPage from './components/eighthPage/EighthPage.jsx';
import NinthPage from './components/ninthPage/NinthPage.jsx';
import TenthPage from './components/tenthPage/TenthPage.jsx';
import './App.css';

const App = () => {
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);
  const [scrollToPlug, setScrollToPlug] = useState(null);

  const [firstPageLoaded, setFirstPageLoaded] = useState(false);
  const [forthpageLoaded, setForthpageLoaded] = useState(false); 
  const [fifthpageLoaded, setFifthpageLoaded] = useState(false); 

  const firstPageAvailable = (node) => {
    if (node) {
      setFirstPageLoaded(true);
    }
  };
  const forthPageAvailable = (nodes) => {
    if (nodes) {
      setForthpageLoaded(true);
    }
  };
  const fifthPageAvailable = (nodes) => {
    if (nodes) {
      setFifthpageLoaded(true);
    }
  };


  useEffect(() => {
    locoScroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    // Link Locomotive Scroll with GSAP ScrollTrigger
    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.current.scrollTo(value, 0, 0)
          : locoScroll.current.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollRef.current.style.transform ? 'transform' : 'fixed',
    });

    locoScroll.current.on('scroll', ScrollTrigger.update);
    ScrollTrigger.addEventListener('refresh', () => locoScroll.current.update());
    ScrollTrigger.refresh();

    setScrollToPlug(locoScroll.current);

    return () => {
      if (locoScroll.current) {
        locoScroll.current.destroy();
      }
    };
  }, []);


  // Refresh Locomotive Scroll & ScrollTrigger when new pages load
  useEffect(() => {
    if (firstPageLoaded || forthpageLoaded || fifthpageLoaded) {
      setTimeout(() => {
        if (locoScroll.current) {
          locoScroll.current.update();
        }
        ScrollTrigger.refresh();
      }, 500);
    };
  }, [firstPageLoaded, forthpageLoaded, fifthpageLoaded]);


  return (
    <>
      <SidePart />
      <MenuBar scrolls={scrollToPlug}/>
      <div id="main" data-scroll-container ref={scrollRef}>
        <div data-scroll-sticky data-scroll data-scroll-target="#main">
          <FirstPage ref={firstPageAvailable} />
        </div>

        {firstPageLoaded  && (
          <>
            <SecondPage />
            <ThirdPage />
            <ForthPage ref={forthPageAvailable}/>
            <FifthPage />
            <SixthPage />
            <SeventhPage />
            <EighthPage />
            <NinthPage />
            <TenthPage scrolls={scrollToPlug}/>
          </>
        )}
        {/* {forthpageLoaded && firstPageLoaded && (
          <>
            <FifthPage ref={fifthPageAvailable}/>
          </>
        )}  
        {forthpageLoaded && firstPageLoaded && fifthpageLoaded &&(
          <>
            <SixthPage />
            <SeventhPage />
          </>
        )} */}
      </div>
    </>
  );
};

export default App;
