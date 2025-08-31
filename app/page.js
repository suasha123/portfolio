"use client";
import React, { useState, useEffect, useRef, Component } from "react";
import BIRDS from "vanta/dist/vanta.globe.min";
import { Hero } from "./Components/hero";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          backgroundColor: 0x0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className=" bg-black text-black" ref={myRef}>
     <AnimatedCursor
  innerSize={12} 
  outerSize={50} 
  color="255, 255, 255" 
  outerColor="255, 255, 255" 
  outerAlpha={0.6} 
  innerScale={1} 
  outerScale={3} 
  outerStyle={{
    boxShadow: `
      0 0 30px rgba(166, 0, 255, 1), 
      0 0 60px rgba(162, 15, 199, 0.9), 
      0 0 100px rgba(118, 35, 219, 0.8),
      0 0 140px rgba(107, 19, 178, 0.6)`
  }}
/>

      <Hero />
    </div>
  );
}
