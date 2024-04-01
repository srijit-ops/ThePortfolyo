import React from 'react'
import Styles from "../styles/timeline.module.css"

function TimelineCard({data}) {
  
        const formatDate = (dateString) => {
          const date = new Date(dateString);
          return `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}, ${date.getFullYear()}`;
        };
    
  return (
    <section className={`${Styles.section}`}>
        <ul className={"my-12 mx-auto relative list-none before:bg-black dark:before:bg-white before:absolute before:content-[' '] before:-ml-[1px] before:top-0 before:w-[2px] before:h-full before:left-4 "}>
          {data.map((work) => {
            return (
              <React.Fragment key={Math.random()}>
                <li className={`${Styles.timeline_event} relative`}>
                  <label className={`${Styles.timeline_event_icon} left-4 w-4 h-4 top-0 absolute block m-2 -ml-2 transition-transform duration-200 ease-in outline-white dark:outline-black outline-[10px] outline`}></label>
                  <div className={`${Styles.timeline_event_copy} p-8 relative w-4/5 left-16 -top-7`}>
                    <p className={`${Styles.timeline_event_thumbnail} text-white inline-block mb-5 transition-shadow duration-500 ease-in delay-100 px-4 py-1`}>
                      {/* {work.timeLine} */}{formatDate(work.startDate)}-{formatDate(work.endDate)}
                    </p>
                    <h1 className={"text-3xl tracking-wider text-[#3d4351] font-semibold overflow-y-hidden dark:text-white"}>{work.jobTitle}</h1>
                    <h1 className={"text-xl text-[#2c3e50] my-5 dark:text-[#94949c]"}>{work.company_name}</h1>
                    <p className='text-gray-700 dark:text-gray-300 pb-5'>{work.summary}</p>
                    <ul>
                        {
                            work.bulletPoints.map((item, index)=>{
                                return(
                                    <li key={index} className='text-gray-600 text-sm mb-4 dark:text-gray-400'>
                                        - {item}
                                    </li>
                                )
                            })
                        }
                        
                    </ul>
                  </div>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </section>
  )
}

export default TimelineCard