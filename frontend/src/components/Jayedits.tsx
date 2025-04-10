"use client";
import React from "react";
import { WavyBackground } from "../components/ui/wavy-background";
import { WobbleCard } from "../components/ui/wobble-card";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";





const Jayedits = () => {
  return (
   
   <div id="about">

       



<div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <img
      src="/photos/insta.png"
      className="max-w-sm rounded-l transition-shadow duration-500 hover:shadow-lg hover:shadow-blue-500" alt="Instagram Icon" />
    <div>
      <h1 className="text-5xl font-bold text-white">Connect with Us on Instagram</h1>
      <p className="py-6 text-white">
      Stay connected with <b className="font-bold text-white">JayEdits</b> for exclusive behind-the-scenes content, editing tips, and the latest project highlights. Discover how we transform ideas into captivating visual stories. Join our creative journey and be inspired by the art of video editing. See what’s new and get a glimpse into our process!
      </p>
      <a className="link link-primary">jayedits09</a>
    </div>
  </div>
</div>

<hr className="border-white border-t-2 w-3/4 mx-auto"/>

   {/* mypng */}
    <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
          <div className="h-[30rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={"/photos/banner.png"}>
      
        <p className="font-bold text-xl text-white">Mr. Jaydip Dhananjay Jadhav</p>
        <p className="font-normal text-sm">ADMIN</p>

      </DirectionAwareHover>
    </div>
    <div>
      <h1 className="text-5xl font-bold text-white">Founder & Lead Video Editor</h1>
      <p className="py-6 text-white">
      <b  className="font-bold text-white">Jaydip Dhananjay Jadhav</b>, Founder & Chief Editor
      Driven by a passion for storytelling through visuals, I founded JayEdits to bring creative visions to life. With every project, I aim to craft videos that not only captivate but also resonate deeply with the audience. Lets create something extraordinary together.
      </p>
      <a className="link link-primary">jaydya2512</a>
    </div>
  </div>
</div>
     

{/* end */}


  
     
 

   </div>
   
   

        

  )
}

export default Jayedits