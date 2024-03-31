import React from 'react'
import Styles from "../styles/timeline.module.css"

function TimelineCard({data}) {
    
  return (
    <section className="section">
        <ul className={Styles.timeline}>
          {data.map((work) => {
            return (
              <React.Fragment key={Math.random()}>
                <li className={Styles.timeline_event}>
                  <label className={Styles.timeline_event_icon}></label>
                  <div className={Styles.timeline_event_copy}>
                    <p className={Styles.timeline_event_thumbnail}>
                      {/* {work.timeLine} */}gfgf
                    </p>
                    <h1 className={`${Styles.h3}`}>{work.jobTitle}</h1>
                    <h1 className={`${Styles.h4}`}>{work.company_name}</h1>
                    <p>{work.summary}</p>
                    <ul type={"disc"}>
                        {
                            work.bulletPoints.map((item, index)=>{
                                return(
                                    <li>
                                        {item}
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