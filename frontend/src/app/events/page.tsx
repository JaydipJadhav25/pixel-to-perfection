"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { TypewriterEffect } from "../../components/ui/typewriter-effect";
// import { BackgroundBeams } from "../../components/ui/background-beamss";
import { HeroHighlight, Highlight  } from "../../components/ui/hero-highlight";
import { motion } from "framer-motion";

function page() {
  const features = [
    {
      "title": "Art Exhibition",
      "description": "A showcase of creative artworks by students, celebrating imagination and talent across mediums."
    },
    {
      "title": "Department Day",
      "description": "An annual celebration highlighting achievements, fun activities, and unity among computer engineering students."
    },
    {
      "title": "Shivjayanti 24-25",
      "description": "A cultural event commemorating Chhatrapati Shivaji Maharaj Jayanti with traditional performances and spirit."
    },
    {
      "title": "Sports Jallosh 25",
      "description": "An energetic sports festival featuring cricket, volleyball, and more—promoting team spirit and fitness."
    },
    {
      "title": "Teachers' Day",
      "description": "A heartfelt celebration honoring our mentors with performances, speeches, and fun games."
    },
    {
      "title": "BGMI Tournament",
      "description": "A competitive esports event for BattleGrounds Mobile India (BGMI) players to showcase strategy and skill."
    },
    {
      "title": "Sports 24-25",
      "description": "College-wide sports competitions including athletics and team games across departments for the year 24-25."
    },
    {
      "title": "SQRl",
      "description": "A departmental quiz and coding contest promoting smart problem-solving and logical thinking."
    }
  ]
  
  
  const words = [
    { "text": "Welcome" },
    { "text": "To" },
    { "text": "ACES", "className": "text-blue-500 dark:text-blue-500" },
    { "text": "Events", "className": "text-blue-500 dark:text-blue-500" },
  ]
  
  return (
    <div  className="min-h-screen relative shadow-xl bg-gray-900 border border-gray-800  px-5 py-24 h-full gap-1">
  
    
      <h1 className="text-2xl md:text-3xl font-normal text-white text-center mt-10">
      <TypewriterEffect words={words}/>
</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-11 max-w-7xl mx-auto mt-2">
      {features.map((feature, index) => (
       <Link href={"/"} key={feature.title}>
        <Feature key={feature.title} {...feature} index={index} />
       </Link>
      ))}


      </div>
{/* 
      <div className="p-4 shadow-md rounded-lg bg-white hover:shadow-xl transition duration-300">
      <img src={img} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div> */}

    </div>
  );
}

const Feature = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
  
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>

  );
};

export default page;