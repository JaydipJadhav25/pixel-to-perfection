"use client";

import { TypewriterEffect } from "../components/ui/typewriter-effect";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

const TypesEditing = () => {

    const texts = [
        { "text": "Editing" },
        { "text": "Specializations" ,  className: "text-blue-500 dark:text-blue-500", },
     
      ]
      

    const testimonials = [
        {
          "quote": "Crafting seamless transitions to enhance storytelling.",
          "name": "Continuity Editing",
          "title": "Ensuring a logical flow in your video narrative."
        },
        {
          "quote": "Enhancing the pace and rhythm to evoke emotions.",
          "name": "Rhythmic Editing",
          "title": "Synchronizing cuts with music or action for impact."
        },
        {
          "quote": "Layering sound, visuals, and effects for dynamic impact.",
          "name": "Montage Editing",
          "title": "Creating meaning through a sequence of images."
        },
        {
          "quote": "Focusing on the relationships between shots.",
          "name": "Relational Editing",
          "title": "Establishing connections and contrasts between scenes."
        },
        {
          "quote": "Creating visually stunning sequences for dramatic effect.",
          "name": "Cinematic Editing",
          "title": "Elevating the visual experience with film-like techniques."
        }
      ]
;        



  return (

<div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
<h2 className="text-3xl font-bold text-center mb-8 z-10 text-zinc-100">
<TypewriterEffect words={texts}/>
   </h2>
<div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-6xl">
    <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
    />
    
    </div>
</div>
</div>
  )
}

export default TypesEditing