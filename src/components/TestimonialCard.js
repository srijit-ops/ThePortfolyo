import React from 'react'

function TestimonialCard({enabled, name, img, quote, position}) {
  return (
    <section className={`p-8 ${enabled? "block":"hidden"} h-full mb-8 bg-white dark:bg-black cursor-pointer`}>
        <div className="h-full mx-auto my-0 max-w-[800px] shadow-lg hover:shadow-xl border border-solid border-gray-200 dark:border-gray-800 rounded-xl hover:scale-105">
            <div className="h-full relative flex flex-row min-h-[250px] rounded-xl">
                <div className={`absolute w-[5.6rem] h-[5.6rem] bg-cover rounded-[50%] left-[2.8rem] top-20  bg-no-repeat bg-center`} style={{backgroundImage:`url(${img})`}}></div>
                <div className={`absolute text-[4rem] text-gray-300 dark:text-gray-400 select-none left-[7.5rem] top-[1.3rem] bg-transparent`}>
                    &#10077;
                </div>
                <div className="basis-20 rounded-tr-none rounded-br-none rounded-tl-xl rounded-bl-xl bg-gradient-to-b from-[#d400d4] to-[#00ccff]">
                </div>
                <div className="basis-[calc(100%_-_80px)] text-base leading-[1.62rem] bg-white dark:bg-[#363636] pl-20 pr-[1.9rem] py-10 rounded-[0_0.75rem_0.75rem_0]">
                    <blockquote className="dark:text-gray-300 text-left" cite="">
                        {quote}
                    </blockquote>
                    <div className="mt-[1.8rem] pt-3 border-t-2 border-t-[#777777] border-dotted bg-transparent text-left">
                        <div className="bg-transperant">
                            <div className='mb-2'><cite className='bg-transperant not-italic text-gray-800 dark:text-white font-semibold tracking-wider'>{name}</cite></div>
                            <div className="text-[#777777] dark:text-gray-400 uppercase tracking-[0.03rem] text-sm bg-transparent text-[13px]"><span className='bg-transperant'>{position}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TestimonialCard

// @media screen and (max-width: 768px) {
//     .t-bq-quote-paul .t-bq-quote-paul-pattern {
//       @apply basis-[1.3rem];
//     }
//     .t-bq-quote-paul .t-bq-quote-paul-base {
//       @apply basis-[calc(100%_-_20px)] pt-[6.25rem] pb-[3.125rem] px-[1.875rem];
//     }
//     .t-bq-quote-paul .t-bq-quote-paul-userpic {
//       @apply w-[3.125rem] h-[3.125rem] left-10 top-[1.3rem];
//     }
//     .t-bq-quote-paul .t-bq-quote-paul-qmark {
//       @apply left-[6.25rem] top-[2.8rem];
//     }
//   }