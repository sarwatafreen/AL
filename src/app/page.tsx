"use client";

import Image from "next/image";
import Link from "next/link";

import { AiOutlineMenu } from "react-icons/ai";
      import ChatBubble from "../app/Components/ChatBubble";
import Features from "./Features/page";
import { TestContext } from "node:test";
import Technology from "./Technology/page";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Agents from "./Components/Agents";
import Contact from "./Components/Contact";
import Pricing from "./Components/Pricing";
export default function Home() {
useEffect(() => {
  AOS.init({
    easing: "ease-out-back",
    duration: 1200,
    delay: 100,
    mirror: true,
    anchorPlacement: "bottom-bottom",
    offset: 100,
  });
  AOS.refresh();
}, []);
  return (
    <div>
    {/* // <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
    //   <h1 className="text-3xl font-bold mb-4">Welcome to Agentia World</h1>
      
      ChatBubble Component */}
      <ChatBubble />
         {/* Features Section */}
         <Features/>
 
      {/* AI Features Section */}
      <Technology/>
      <Agents />
      <Contact />
      <Pricing />
      

    </div>
         
    
  );
}

  

