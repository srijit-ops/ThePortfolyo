import React from 'react'
import Styles from "../styles/herosection.module.css"

function HeroSection({heroData}) {
    console.log(heroData)
  return (
    <div className='flex justify-between items-center flex-wrap w-full'>
        <div className={`${Styles.name_holder} w-7/12`}>
            <h1 className='relative text-5xl opacity-100 transform-none overflow-y-hidden'>
                <mark className='relative text-black dark:text-white'>I'M {heroData.name.toUpperCase()},</mark>
                </h1>
            <h4 className='mt-4'>{heroData.title}</h4>
        </div>
        <div className='w-4/12'>
            <p>gsgsg</p>
        </div>
    </div>
  )
}

export default HeroSection