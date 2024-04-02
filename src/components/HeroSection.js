import React from 'react'
// import { MatrixRainingLetters } from "react-mdr";
import Styles from "../styles/herosection.module.css"
import MatrixRainingLetters from './matrixrain/MatrixRainingLetters'
import BlurImage from './BlurImage'
import Button from './common/Button'
import Image from 'next/image'

function HeroSection({heroData}) {
    console.log(heroData)
  return (
    <div className='flex xl:justify-between lg:justify-center justify-center items-center flex-wrap w-full lg:px-28 sm:px-8 px-5 md:px-16 relative my-12'>
        <div className={`${Styles.name_holder} xl:w-6/12 lg:w-full w-full mb-7 xl:mb-0`}>
            <h1 className={`relative sm:text-7xl text-4xl opacity-100 transform-none font-bold overflow-hidden tracking-[0.6rem] before:left-0.5 after:-left-0.5 before:absolute after:absolute before:top-0 after:top-0 before:w-full after:w-full before:h-full after:h-full before:content-[attr(before)] after:content-[attr(after)]`} before={`I'M ${heroData.name.toUpperCase()},`} after={`I'M ${heroData.name.toUpperCase()},`}>
                <mark className='relative text-black dark:text-white'>I&apos;M {heroData.name.toUpperCase()},</mark>
                </h1>
            <h4 className='mt-7 font-[Caveat] font-semibold sm:text-5xl text-3xl text-[#FF69B4] overflow-y-hidden tracking-wider'>A {heroData.title}</h4>
            <p className='mt-8 sm:text-lg text-base text-gray-700 tracking-wider dark:text-[#94949c]'>{heroData.subTitle}.</p>
            <Button name={"Let's connect"}/>
        </div>
        <div className='xl:w-5/12 lg:w-4/5 w-4/5 relative flex justify-center items-center'>
            
            <div className={`${Styles.box} relative 2xl:w-[540px]  2xl:h-[540px] xl:w-[430px] xl:h-[430px] lg:w-[500px] lg:h-[500px] w-[240px] h-[240px]  rounded-[50%] overflow-hidden before:absolute before:content-[' '] before:inset-[-10px_100px] before:transition-[0.3s] hover:before:inset-[-20px_0px]`}>
              <div className={`${Styles.content} z-[3] rounded-[50%] absolute overflow-hidden flex justify-center items-center flex-col inset-3`}>
              <div className={`${Styles.img_container} w-full`}>
                  <Image src={heroData.avatar.url} layout='fill' alt='avatar' className={`absolute top-0 left-0 w-full h-full z-[3] object-cover transition-[0.5s] ${Styles.img}`}/>
                  </div>
                  <div className={`${Styles.quote} relative flex overflow-y-hidden`}>
                    <div className='absolute xl:text-5xl lg:text-4xl sm:text-2xl text-xl text-white top-[0] left-[0] overflow-y-hidden'>❝</div>
                    <div>
                    <h4 className='text-white mt-6 xl:text-3xl lg:text-2xl sm:text-lg text-base'>
                        {heroData.quote}
                    </h4>
                    </div>
                  </div>
              </div>
            </div>
            

            
            {/* <MatrixRainingLetters key="foo-bar" custom_class={`overflow-y-hidden w-full relative h-full`}/> */}
            {/* <div className={'w-full relative h-[650px]'}>
              <div className={`${Styles.morph} w-full absolute top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-blue-300 to-pink-400 rounded-[60% 40% 30% 70%]/[60% 30% 70% 40%]`}></div>
              <h1 className='text-9xl absolute z-[1000] bottom-[7%] right-0 overflow-y-hidden'>&lt;/&gt;</h1>
              <span className='box-border block overflow-hidden w-full h-[500px] bg-none opacity-100 border-0 m-0 p-0 absolute top-[10%] left-0 bottom-0 right-0 rounded-[50%]'>
              <BlurImage
                src={heroData.alternateAvatars[0].url}
                alt='Rajat Mondal'
                layout='fill'
                objectFit='contain'
                priority
                className={'absolute top-0 left-0 bottom-0 right-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-contain'}
              />
              
              
              </span>
              
              </div> */}
            {/* <div className='flex justify-center items-center absolute z-50 top-[10%] w-full'>
            <Image src={heroData.avatar.url} className='w-25 h-60'/>
            </div> */}
        </div>
    </div>
  )
}

export default HeroSection