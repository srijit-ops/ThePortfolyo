import React from 'react'
import ServiceCard from './ServiceCard'
import Heading from './common/Heading'

function ServiceSection({serviceData}) {
  return (
    <div className="w-full my-20 lg:px-28 md:px-16 sm:px-8 px-5">
        <Heading name={"Services."} />
        <div className='flex justify-between items-center flex-wrap'>
        {
            serviceData.map((item, index)=>{
                return(
                    <div key={index} className='xl:w-2/6 lg:w-5/12 md:w-full w-full'>
                        <ServiceCard name={item.name} img={item.image.url} price={item.charge} detail={item.desc} enabled={item.enabled}/>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default ServiceSection