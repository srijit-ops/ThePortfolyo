import React from "react";
import Styles from "../styles/herosection.module.css";
import Button from "./common/Button";
import Image from "next/image";

function HeroSection({ heroData }) {
  // console.log(heroData)
  return (
    <div className="flex xl:justify-between lg:justify-center justify-center items-center flex-wrap w-full lg:px-28 sm:px-8 px-5 md:px-16 relative my-12">
      <div
        className={`${Styles.name_holder} xl:w-6/12 lg:w-full w-full mb-7 xl:mb-0`}
      >
        <h1
          className={`relative sm:text-7xl text-4xl opacity-100 transform-none font-bold overflow-hidden tracking-[0.6rem] before:left-0.5 after:-left-0.5 before:absolute after:absolute before:top-0 after:top-0 before:w-full after:w-full before:h-full after:h-full before:content-[attr(before)] after:content-[attr(after)]`}
          before={`I'M ${heroData.name.toUpperCase()},`}
          after={`I'M ${heroData.name.toUpperCase()},`}
        >
          <mark className="relative text-black dark:text-white">
            I&apos;M {heroData.name.toUpperCase()},
          </mark>
        </h1>
        <h4 className="mt-7 font-[Caveat] font-semibold sm:text-5xl text-3xl text-[#FF69B4] overflow-y-hidden tracking-wider">
          A {heroData.title}
        </h4>
        <p className="mt-8 sm:text-lg text-base text-gray-700 tracking-wider dark:text-[#94949c]">
          {heroData.subTitle}.
        </p>
        <Button name={"Let's connect"} />
      </div>
      <div className="xl:w-5/12 lg:w-4/5 w-4/5 relative flex justify-center items-center cursor-pointer">
        <div
          className={`${Styles.box} relative 2xl:w-[540px]  2xl:h-[540px] xl:w-[430px] xl:h-[430px] lg:w-[500px] lg:h-[500px] w-[240px] h-[240px]  rounded-[50%] overflow-hidden before:absolute before:content-[' '] before:inset-[-10px_100px] before:transition-[0.3s] hover:before:inset-[-20px_0px]`}
        >
          <div
            className={`${Styles.content} z-[3] rounded-[50%] absolute overflow-hidden flex justify-center items-center flex-col inset-3`}
          >
            <div className={`${Styles.img_container} w-full`}>
              <Image
                src={heroData.avatar.url}
                layout="fill"
                alt="avatar"
                className={`absolute top-0 left-0 w-full h-full z-[3] object-cover transition-[0.5s] ${Styles.img}`}
              />
            </div>
            <div className={`${Styles.quote} relative flex overflow-y-hidden`}>
              <div className="absolute xl:text-5xl lg:text-4xl sm:text-2xl text-xl text-white top-[0] left-[0] overflow-y-hidden">
                ❝
              </div>
              <div>
                <h4 className="text-white mt-6 xl:text-3xl lg:text-2xl sm:text-lg text-base">
                  {heroData.quote}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
