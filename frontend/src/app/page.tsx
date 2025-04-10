import CustomVideoPlayer from "@/components/CustomVideoPlayer";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Jayedits from "@/components/Jayedits";
import TypesEditing from "@/components/TypesEditing";
import Image from "next/image";
import {Events} from "@/components/Events";




export default function Home() {

  
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
       <HeroSection/>
       <CustomVideoPlayer/>
       <Features/>  
              
   </main>
  );
}
