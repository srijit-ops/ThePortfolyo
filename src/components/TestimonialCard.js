import React from "react";
import Styles from "../styles/testimonial.module.css";

function TestimonialCard({ enabled, name, img, quote, position }) {
  return (
    <section
      className={`p-8 sm:px-8 px-2 ${
        enabled ? "block" : "hidden"
      } h-full mb-8 bg-white dark:bg-black cursor-pointer`}
    >
      <div className="h-full mx-auto my-0 max-w-[800px] shadow-lg hover:shadow-xl border border-solid border-gray-200 dark:border-gray-800 rounded-xl hover:scale-105 transition-all duration-[0.3s]">
        <div
          className={`h-full relative flex flex-row min-h-[250px] rounded-xl ${Styles.paul}`}
        >
          <div
            className={`${Styles.userpic} absolute sm:w-[5.6rem] sm:h-[5.6rem] w-[3.5rem] h-[3.5rem] bg-cover rounded-[50%] left-[2.8rem] top-20  bg-no-repeat bg-center`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div
            className={`${Styles.qmark} absolute sm:text-[4rem] text-3xl text-gray-300 dark:text-gray-400 select-none sm:left-[7.5rem]  sm:top-[1.3rem] bg-transparent`}
          >
            &#10077;
          </div>
          <div
            className={`sm:basis-20 rounded-tr-none rounded-br-none rounded-tl-xl rounded-bl-xl bg-gradient-to-b from-[#d400d4] to-[#00ccff] ${Styles.pattern}`}
          ></div>
          <div
            className={`${Styles.base} sm:basis-[calc(100%_-_80px)]  text-base leading-[1.62rem] bg-white dark:bg-[#363636] pl-20 pr-[1.9rem] py-10 rounded-[0_0.75rem_0.75rem_0]`}
          >
            <blockquote className="dark:text-gray-300 text-left" cite="">
              {quote}
            </blockquote>
            <div className="mt-[1.8rem] pt-3 border-t-2 border-t-[#777777] border-dotted bg-transparent text-left">
              <div className="bg-transperant">
                <div className="mb-2">
                  <cite className="bg-transperant not-italic text-gray-800 dark:text-white font-semibold tracking-wider">
                    {name}
                  </cite>
                </div>
                <div className="text-[#777777] dark:text-gray-400 uppercase tracking-[0.03rem] text-sm bg-transparent text-[13px]">
                  <span className="bg-transperant">{position}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialCard;
