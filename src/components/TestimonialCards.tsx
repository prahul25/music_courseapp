"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import data from '@/data/testmonial_data.json'

function MusiceSchoolTestimonialCards() {
    
  return (
    
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.2] items-center justify-center relative overflow-hidden">
    <h1 className="text-4xl font-bold text-orange-100 mb-10">Hear our Harmony: <span className="text-[#FFD700]">Voices of success</span></h1>
      <InfiniteMovingCards
        items={data.testimonials}
        direction="right"
        speed="slow"
       
      />
    </div>
    
  )
}



export default MusiceSchoolTestimonialCards