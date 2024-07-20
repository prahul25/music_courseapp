import React from 'react'
import data from '@/data/music_production.json'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import Image from 'next/image'
function page() {
  return (
    <div className='min-h-screen bg-black py-12 pt-36'>
      <h1 className='text-lg md:text-6xl text-center font-bold mb-8 text-white'>Big Production Houses</h1>
      <div className='flex flex-wrap justify-center'>
    {data.production.map((item) =>(
        <CardContainer key={item.name} className='inter-var m-6'>
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#008B8B] dark:border-[#AFEEEE] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-[#FFA07A]">
                {item.name}
                </CardItem>
                <CardItem
          as="p"
          translateZ="60"
          className="text-[#C9C9C9] text-sm max-w-sm mt-2 dark:text-[#DCDCDC]"
        >
        {item.headquarters}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4 ">
          <Image
            src={item.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="50"
          className="text-[#C9C9C9] text-sm max-w-sm mt-2 dark:text-[#F0F8FF]"
        >
        {item.description}
        </CardItem>
            </CardBody>
        </CardContainer>
    ))}
      </div>
    </div>
  )
}

export default page
