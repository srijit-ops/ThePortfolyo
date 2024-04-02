import Image from "next/image";
import React from "react";
import Styles from "../styles/service.module.css";
import Button from "./common/Button";

function ServiceCard({ enabled, img, name, price, detail }) {
  return (
    <div
      className={`bg-white dark:bg-[#363636] shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] hover:scale-105 transition-all duration-[0.3s] m-8 sm:mx-8 mx-5 p-6 rounded-[10px] hover:shadow-[rgba(50,50,93,0.25)_0px_13px_27px_-5px,rgba(0,0,0,0.3)_0px_8px_16px_-8px] cursor-pointer`}
    >
      <div
        className={`${Styles.image} overflow-hidden relative rounded-[10px] w-full border-gray-200 dark:border-gray-600 border`}
      >
        <Image
          src={img}
          alt={name}
          layout="fill"
          className={`object-contain ${Styles.img}`}
        />
      </div>
      <div className="text-center p-3">
        <h1 className="text-xl text-gray-950 dark:text-white font-semibold mx-auto my-2">
          {name}
        </h1>
        <div className="tracking-wider inline-block  mx-2 my-1 px-4 py-2 rounded-[50px] bg-[#FF69B4] text-white">
          <p>{price}</p>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
          {detail}
        </p>
        <div className="flex justify-center items-center">
          <Button name={"View"} />
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
