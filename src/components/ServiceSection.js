import React from 'react'
import ServiceCard from './ServiceCard'
import Heading from './common/Heading'

function ServiceSection({serviceData}) {
  return (
    <div className="w-full my-10">
        <Heading name={"Services."} />
        <div className='flex justify-between items-center flex-wrap'>
        {
            serviceData.map((item, index)=>{
                return(
                    <div key={index} className='w-2/6'>
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