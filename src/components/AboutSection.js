import React from 'react'
import Heading from './common/Heading'
import Button from './common/Button'
import Image from 'next/image'

function AboutSection({aboutData}) {
  return (
    <div className='w-full my-10'>
        <Heading name={"About Me."}/>
<div className='flex justify-between items-center flex-wrap w-full mt-11'>
         <div className={`w-3/12`}>
            <Image src={aboutData.alternateAvatars[0].url} alt='avatar' className='w-[100%] h-auto rounded-lg'/>
         </div>
         <div className={`w-8/12`}>
            <p className='text-gray-700 tracking-wide leading-8 dark:text-[#94949c]'>{aboutData.description}</p>
            <Button name={"Download Resume"}/>
         </div>
    </div>
    </div>
  )
}

export default AboutSection