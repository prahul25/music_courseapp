'use strict'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip'
import data from "@/data/people_data.json"

function Instructor() {
  return (
      <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
        <WavyBackground className="max-w-7xl h-full flex flex-col items-center justify-center mx-auto pb-24">
            <div className='flex justify-center items-center flex-col'>
            <h2 className="text-8xl text-white tracking-wider font-bold">
            Meet Our Instructor
          </h2>
          <p className="mt-4 text-[#F5F5F0] font-medium leading-8 tracking-wid sm:text-xl">
            Discover the talented professionals who will guide your musical journey
          </p>
          <div className='flex'>
          <AnimatedTooltip items={data.people}/>
          </div>
            </div>
        </WavyBackground>

    </div>
  )
}

export default Instructor