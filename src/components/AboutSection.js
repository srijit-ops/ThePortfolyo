import React from 'react'
import Heading from './common/Heading'
import Button from './common/Button'
import Image from 'next/image'
import Styles from "../styles/aboutsection.module.css"

function AboutSection({aboutData}) {
  return (
    <div className='w-full my-20 lg:px-28 md:px-16 sm:px-8 px-5 relative'>
        <Heading name={"About Me."}/>
<div className='flex justify-between items-center flex-wrap w-full mt-11'>
         <div className={`lg:w-3/12 w-full mb-5 lg:mb-0`}>
          <div className={`${Styles.img_container} w-full`}>
          <Image src={aboutData.alternateAvatars[0].url} 
          // width={"100%"} height={auto} alt='avatar' 
          className={`rounded-lg object-contain ${Styles.img}`} layout='fill' alt='avatar'/>
          </div>
         </div>
         <div className={`lg:w-8/12 w-full`}>
            <p className='text-gray-700 tracking-wide leading-8 dark:text-[#94949c]'>{aboutData.description}</p>
            <div className='inline-block mt-6'>
            <p className={`text-transparent font-semibold text-xl tracking-wide ${Styles.gradientStyle}`}>{aboutData.exp_year} years of expertise.</p>
            </div>
            <Button name={"Download Resume"}/>
         </div>
    </div>
    </div>
  )
}

export default AboutSection