'use client'
import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { motion } from "framer-motion"; 
import { HeroHighlight } from "./ui/hero-highlight";
export default function HeroSection() {
  return (
      <div className="h-auto md:h-[40rem] w-full rounded-md relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="cyan" />
    <HeroHighlight>
      <motion.h1 initial={{
          opacity: 0,
          y: 0,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        
        >
          <div className="flex flex-col items-center justify-center ">
      <h1 className="text-center mt-20 md:mt-0 text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">
        Master the art of music
      </h1>
      <p className="mt-4 font-normal text-center text-base md:text-lg text-neutral-200 max-w-lg mx-auto">
        Dive into our comprehensive music courses and transform your musical
        journey today. Whether re a beginner or looking to refine your skills,
        join us to unlock your true potential.
      </p>
      <div className="mt-4">
        <Link href={"/courses"}>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Explore courses
          </Button>
        </Link>
      </div>
      </div>
    </motion.h1>
    </HeroHighlight>
    </div>
  );
}
