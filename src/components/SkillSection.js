import React from "react";
import SkillCard from "./SkillCard";
import Heading from "./common/Heading";

function SkillSection({ skillData }) {
  return (
    <div className="w-full my-10 px-28">
      <Heading name={"My Skills."} />
      <div className="flex justify-between items-center flex-wrap flex-row mt-14">
        {[...skillData]
          .sort((a, b) => a.sequence - b.sequence)
          .map((item, index) => {
            return (
              <div
                key={index}
                className="w-[9%] mx-6 mb-9 flex justify-center items-center"
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
