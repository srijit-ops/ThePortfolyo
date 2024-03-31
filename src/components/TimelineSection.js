import React from 'react'
import Heading from './common/Heading'
import TimelineCard from './TimelineCard'

function TimelineSection({timelineData}) {
    const educationData= timelineData.filter((item)=>item.forEducation===true)
    const workData= timelineData.filter((item)=>item.forEducation===false)
  return (
    <div className="w-full my-10">
      <Heading name={"Timeline."} />
      <div>
        <div>
            <p>Education</p>
            <TimelineCard data={educationData}/>
        </div>
        <div>
            <p>Experience</p>
            <TimelineCard data={workData}/>
        </div>
      </div>
    </div>
  )
}

export default TimelineSection