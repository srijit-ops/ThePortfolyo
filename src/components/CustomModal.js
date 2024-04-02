import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Styles from "../styles/project.module.css";
import Button from "./common/Button";
import Image from "next/image";
import { useTheme } from "next-themes";

function CustomModal({
  open,
  onCloseModal,
  name,
  img,
  tech,
  enabled,
  sequence,
  detail,
  github,
  liveUrl,
}) {
  const { theme } = useTheme();
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      center
      styles={{
        modal: {
          borderRadius: 10,
          background: theme === "dark" ? "#363636" : "white",
        },
        // closeIcon: { background: "red" },
      }}
      // classNames={{
      //   modal: `${Styles.customModal}`,
      // }}
    >
      <div className={`bg-white dark:bg-[#363636] p-6`}>
        <div
          className={`${Styles.image} overflow-hidden relative rounded-[10px] w-full border-gray-200 dark:border-gray-600 border`}
        >
          <Image
            src={img}
            alt={name}
            layout="fill"
            // height={230}
            // width={238}
            className={`object-contain ${Styles.img}`}
          />
        </div>
        <div className="text-center p-3">
          <h1 className="text-xl text-gray-950 dark:text-white font-semibold mx-auto my-2">
            {name}
          </h1>
          {tech.map((item, index) => {
            return (
              <div
                className="tracking-wider inline-block  mx-2 my-1 px-4 py-2 rounded-[50px] bg-[#FF69B4] text-white"
                key={index}
              >
                <p>{item}</p>
                {/* <Tabs
              data={price}
              key={Math.random()}
              
            /> */}
              </div>
            );
          })}

          <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
            {detail}
          </p>

          <div className="flex justify-center gap-12 items-center mt-8">
            <a href={github} className="flex justify-center items-center ">
              <i className="fa-brands fa-github text-3xl text-black dark:text-white"></i>
            </a>
            <a href={liveUrl} className="flex justify-center items-center ">
              <i className="fa-solid fa-link text-2xl text-black dark:text-white"></i>
            </a>
          </div>
          {/* <Button name={"View"}/> */}
        </div>
      </div>
    </Modal>
  );
}

export default CustomModal;
