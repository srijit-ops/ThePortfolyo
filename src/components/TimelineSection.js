import React from 'react'
import Heading from './common/Heading'
import TimelineCard from './TimelineCard'

function TimelineSection({timelineData}) {
    const educationData= timelineData.filter((item)=>item.forEducation===true)
    const workData= timelineData.filter((item)=>item.forEducation===false)
  return (
    <div className="w-full my-10 px-28">
      <Heading name={"Timeline."} />
      <div>
        <div className='my-4'>
            <p className='text-4xl font-semibold text-[#FF69B4] tracking-wider overflow-hidden font-[Caveat]'>Education :</p>
            <TimelineCard data={educationData}/>
        </div>
        <div className='my-4'>
            <p className='text-4xl font-semibold text-[#FF69B4] tracking-wider overflow-hidden font-[Caveat]'>Experience :</p>
            <TimelineCard data={workData}/>
        </div>
      </div>
    </div>
  )
}

export default TimelineSection