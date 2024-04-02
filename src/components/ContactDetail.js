import React from 'react'
import Styles from "../styles/contact.module.css"

function ContactDetail({email, location, phone}) {
  return (
    <div className='w-full'>
        <div className='flex justify-start items-start flex-row mb-8'>
            <div className={`flex justify-center items-center rounded-[50%] p-4 w-12 h-12 shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] mr-6 ${Styles.iconholder}`}>
            <i class="fa-solid fa-location-dot text-white text-lg"></i>
            </div>
            <div>
                <p className='text-gray-500 dark:text-gray-300 tracking-wide'>Location</p>
                <p className='text-xl font-semibold text-gray-950 tracking-wide mt-3 dark:text-white'>{location}</p>
            </div>
        </div>
        <div className='flex justify-start items-start flex-row mb-8'>
            <div className={`flex justify-center items-center rounded-[50%] p-4 w-12 h-12 shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] mr-6 ${Styles.iconholder}`}>
            <i class="fa-solid fa-phone text-white text-lg"></i>
            </div>
            <div>
                <p className='text-gray-500 dark:text-gray-300 tracking-wide'>Phone</p>
                <p className='text-xl font-semibold text-gray-950 tracking-wide mt-3  dark:text-white'>{phone}</p>
            </div>
        </div>
        <div className='flex justify-start items-start flex-row mb-8'>
            <div className={`flex justify-center items-center rounded-[50%] p-4 w-12 h-12 shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] mr-6 ${Styles.iconholder}`}>
            <i class="fa-solid fa-envelope text-white text-lg"></i>
            </div>
            <div>
                <p className='text-gray-500 dark:text-gray-300  tracking-wide'>Mail</p>
                <p className='text-xl font-semibold text-gray-950 tracking-wide mt-3  dark:text-white'>{email}</p>
            </div>
        </div>
    </div>
  )
}

export default ContactDetail