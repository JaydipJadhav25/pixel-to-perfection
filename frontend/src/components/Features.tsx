"use client";
import React from 'react'
import featuresData from "../data/features.json";
import { HoverEffect } from "../components/ui/card-hover-effect";


import { TypewriterEffect } from "../components/ui/typewriter-effect";


const Features = () => {
 
  const projects = [
    {
      "title": "Member Management",
      "description": "Easily manage student profiles, batch-wise records, and contact information in one centralized system.",
      "link": "/"
    },
    {
      "title": "Event Planning & Tracking",
      "description": "Create, schedule, and monitor events with real-time status updates and attendee insights.",
      "link": "/"
    },
    {
      "title": "Real-Time Announcements",
      "description": "Broadcast instant updates and important announcements to all members with push notifications or emails.",
      "link": "/"
    },
    {
      "title": "Budget & Expense Tracking",
      "description": "Track and manage event budgets, expenses, and financial records with complete transparency.",
      "link": "/"
    },
    {
      "title": "Document & Media Repository",
      "description": "Upload and store event photos, reports, certificates, and other important files securely.",
      "link": "/"
    },
    {
      "title": "Feedback & Suggestions",
      "description": "Gather feedback from members to continuously improve events, workshops, and overall community engagement.",
      "link": "/"
    }
  ]
  

  const texts = [
    { "text": "Discover" },
    { "text": "ACES" ,  className: "text-blue-500 dark:text-blue-500", },
    { "text": "Features" }
  ]
  
  


  return (
    <div className="max-w-4xl mx-auto px-8" id='features'>
       <TypewriterEffect words={texts}/>
    <HoverEffect items={projects} />
   
  </div>
  )
}

export default Features