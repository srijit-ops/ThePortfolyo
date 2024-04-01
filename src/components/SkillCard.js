import React, { useState } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GradientSVG from "./common/GradientSVG";
import { useTheme } from "next-themes";
import ProgressProvider from "./common/ProgressProvider";
import Image from "next/image";
import Styles from "../styles/skills.module.css"

const gradientId = "hello";
const gradientTransform = "rotate(90)";

function SkillCard({ skill, percentage, logo, enabled }) {
  const { theme } = useTheme();
  const [hovered, setHovered] = useState(false);
  return (
    <div className={`w-full ${enabled ? "block" : "hidden"}`}>
      <GradientSVG
        gradientId={gradientId}
        gradientTransform={gradientTransform}
        color1={"#00ccff"}
        color2={"#d400d4"}
      />
      <ProgressProvider valueStart={10} valueEnd={percentage}>
        {(value) => (
          <CircularProgressbarWithChildren
            strokeWidth={8}
            value={percentage}
            styles={{
              path: { stroke: `url(#${gradientId})`, height: "100%" },
              trail: {
                stroke: theme === "dark" ? "#424242" : "#f1f1f1",
              },
            }}
          >
            <div
              className={
                "w-20 h-20 rounded-[50%] p-4  cursor-pointer hover:scale-105 shadow-md hover:shadow-lg bg-white dark:bg-[#363636] overflow-y-hidden flex items-center justify-center"
              }
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              //   style={{ backgroundColor: props.skill.bgColor }}
            >
              {hovered ? (
                <p className="font-semibold text-lg text-gray-700 text-center dark:text-white">
                  {percentage}%
                </p>
              ) : (
                <div className={`${Styles.img_container} w-full`}>
                <Image src={logo} alt={skill} layout='fill' className={`${Styles.img}`}/>
                </div>
              )}
            </div>
          </CircularProgressbarWithChildren>
        )}
      </ProgressProvider>
      <p className="text-gray-700 dark:text-white overflow-y-hidden text-center font-semibold tracking-wide mt-4">
        {skill}
      </p>
    </div>
  );
}

export default SkillCard;
