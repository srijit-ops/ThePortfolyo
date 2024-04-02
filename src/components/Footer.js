import Image from 'next/image'
import React from 'react'
import Styles from "../styles/footer.module.css"


function Footer({socials}) {
  return (
    <div className="w-full my-10 pt-8 border-t border-t-gray-300">
        <p className='text-gray-700 text-center mb-8 dark:text-white'>@2024 Srijita. All rights reserved.</p>
        <div className='flex justify-center items-center flex-wrap mb-8'>
            {
                socials.map((item, index)=>{
                    return(
                        <a href={item.url} key={index} className={`w-9 hover:scale-105 mr-6 ${item.enabled===true?"block":"none"}`}>
                            <div className={`${Styles.img_container} w-full`}>
          <Image src={item.image.url} alt={item.platform} className={`rounded-lg object-contain ${Styles.img}`} layout='fill'/>
                            </div>
                        </a>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Footer