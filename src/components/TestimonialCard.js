import React from 'react'

function TestimonialCard() {
  return (
    <section className="p-8 shadow">
        <div className="mx-auto my-0 max-w-[800px] shadow-lg">
            <div className="relative flex flex-row min-h-[250px] rounded-xl">
                <div className={`absolute w-[5.6rem] h-[5.6rem] bg-cover rounded-[50%] left-[2.8rem] top-20 bg-[url('https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg')] bg-no-repeat bg-center`}></div>
                <div className={`absolute text-[4rem] text-[#999999] select-none left-[7.5rem] top-[1.3rem] bg-transparent`}>
                    &#10077;
                </div>
                <div className="basis-20 rounded-tr-none rounded-br-none rounded-tl-xl rounded-bl-xl bg-[#ff4b33]">
                </div>
                <div className="basis-[calc(100%_-_80px)] text-base leading-[1.62rem] bg-white pl-20 pr-[1.9rem] pt-10 pb-[3.1rem] rounded-[0_0.75rem_0.75rem_0]">
                    <blockquote className="t-bq-quote-paul-text" cite="Strugatsky Brothers">
                        Srijita has done internship technical content writer in doorstepdelhi. She has attitude of never
                        giving up.
                        She will definitely be an asset for the company she would join.
                    </blockquote>
                    <div className="mt-[1.8rem] pt-3 border-t-2 border-t-[#777777] border-dotted bg-transparent">
                        <div className="bg-transperant">
                            <div className="text-[#777777]"><cite className='bg-transperant'>Parveen Kumar</cite></div>
                            <div className="text-[#777777] uppercase tracking-[0.03rem] text-base font-[bold] bg-transparent text-[13px]"><span className='bg-transperant'>ODI Associate
                                    Consultant</span></div>
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