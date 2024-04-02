import React from 'react'
import Heading from './common/Heading'
import Button from './common/Button'
import Image from 'next/image'
import Styles from "../styles/aboutsection.module.css"

function AboutSection({aboutData}) {
  return (
    <div className='w-full my-10 px-28'>
        <Heading name={"About Me."}/>
<div className='flex justify-between items-center flex-wrap w-full mt-11'>
         <div className={`w-3/12`}>
          <div className={`${Styles.img_container} w-full`}>
          <Image src={aboutData.alternateAvatars[0].url} 
          // width={"100%"} height={auto} alt='avatar' 
          className={`rounded-lg object-contain ${Styles.img}`} layout='fill' alt='avatar'/>
          </div>
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