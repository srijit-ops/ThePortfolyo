import React from "react";
import SkillCard from "./SkillCard";
import Heading from "./common/Heading";

function SkillSection({ skillData }) {
  return (
    <div className="w-full my-20 lg:px-28 md:px-16 sm:px-8 px-5">
      <Heading name={"My Skills."} />
      <div className="flex justify-between items-center flex-wrap flex-row mt-14">
        {[...skillData]
          .sort((a, b) => a.sequence - b.sequence)
          .map((item, index) => {
            return (
              <div
                key={index}
                className="xl:w-[9%]  md:w-[15%] sm:w-[35%] w-[35%] mx-6 mb-9 flex justify-center items-center"
              >
                <SkillCard
                  skill={item.name}
                  percentage={item.percentage}
                  logo={item.image.url}
                  enabled={item.enabled}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SkillSection;
