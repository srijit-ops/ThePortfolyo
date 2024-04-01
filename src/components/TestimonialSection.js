import React from 'react'
import Heading from './common/Heading'
import TestimonialCard from './TestimonialCard'

function TestimonialSection({testimonialData}) {
  return (
    <div className="w-full my-10">
        <Heading name={"Testimonials."} />
        {/* {
            testimonialData.map((item, index)=>{
                return(
                    
                )
            })
        } */}
        <TestimonialCard 
        // name={} img={} quote={} position={}
        />
    </div>
  )
}

export default TestimonialSection