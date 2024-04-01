import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Styles from "../styles/project.module.css"
import Button from './common/Button';
import Image from 'next/image';

function CustomModal({open, onCloseModal, name, img, tech, enabled, sequence, detail, github, liveUrl}) {
  return (
    <Modal open={open} onClose={onCloseModal} center>
        <div className={`bg-white dark:bg-[#363636] m-8 p-6 rounded-[10px]`}>
    <div className={`${Styles.image} overflow-hidden relative rounded-[10px] w-full border-gray-200 dark:border-gray-600 border`}>
      <Image
        src={img}
        alt={name}
        layout='fill'
        // height={230}
        // width={238}
        className={`object-contain ${Styles.img}`}
      />
    </div>
    <div className="text-center p-3">
      <h1 className='text-xl text-gray-950 dark:text-white font-semibold mx-auto my-2'>{name}</h1>
      {
        tech.map((item, index)=>{
            return(
<div className="tracking-wider inline-block  mx-2 my-1 px-4 py-2 rounded-[50px] bg-[#FF69B4] text-white" key={index}>
        <p>{item}</p>
            {/* <Tabs
              data={price}
              key={Math.random()}
              
            /> */}
          
      </div>
            )
        })
      }
      
      <p className='text-gray-600 dark:text-gray-300 mt-2 text-sm'>{detail}</p>
      <div className='flex justify-center items-center'>
        <div className='flex justify-between items-center'>
            <a href={github} className='p-2 rounded-2xl border-gray-950 text-5xl'>
                <i className="fa-brands fa-github text-5xl"></i>
            </a>
            <a href={liveUrl} className='p-2 rounded-2xl border-gray-950 text-5xl'>
            <i className="fa-solid fa-link text-5xl"></i>
            </a>
        </div>
      {/* <Button name={"View"}/> */}
      </div>
    </div>
  </div>
      </Modal>
  )
}

export default CustomModal