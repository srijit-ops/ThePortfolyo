import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Heading from "./common/Heading";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useTheme } from "next-themes";
import Styles from "../styles/button.module.css";

function ProjectSection({ projectData }) {
  const {theme} = useTheme();
  const techs = [];
  const [selectedTechStacks, setSelectedTechStacks] = useState([]);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  projectData.forEach((project) => {
    project.techStack.forEach((tech) => {
      const trimmedTech = tech.trim();
      if (!techs.includes(trimmedTech)) {
        techs.push(trimmedTech);
      }
    });
  });
  const handleCheckboxChange = (tech) => {
    if (selectedTechStacks.includes(tech)) {
      setSelectedTechStacks(selectedTechStacks.filter((item) => item !== tech));
    } else {
      setSelectedTechStacks([...selectedTechStacks, tech]);
    }
  };

  const handleApplyFilter = () => {
    onCloseModal();
  };
  const filteredProjects = projectData
    .filter((project) => {
      const projectTechStacks = project.techStack.map((tech) => tech.trim());
      return selectedTechStacks.every((tech) =>
        projectTechStacks.includes(tech)
      );
    })
    .sort((a, b) => a.sequence - b.sequence);

  return (
    <div className="w-full my-20 lg:px-28 md:px-16 sm:px-8 px-5">
      <Heading name={"Projects."} />
      <div className="flex justify-start items-center cursor-pointer mt-6 mb-4">
        <i className="fa-solid fa-filter text-lg text-[#ff69b4]"></i>
        <p
          className=" tracking-wider text-[#ff69b4] ml-4 font-semibold"
          onClick={onOpenModal}
        >
          Filter Projects
        </p>
      </div>
      <div className="flex justify-between items-center flex-wrap">
        {console.log(filteredProjects, "filter")}
        {filteredProjects.map((item, index) => {
          return (
            <div key={index} className="xl:w-1/4 lg:w-5/12 sm:w-5/12 w-full m-3">
              <ProjectCard
                name={item.title}
                img={item.image.url}
                tech={item.techStack}
                detail={item.description}
                liveUrl={item.liveurl}
                github={item.githuburl}
                enabled-={item.enabled}
                sequence={item.sequence}
              />
            </div>
          );
        })}
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          styles={{
            modal: {
              borderRadius: 10,
              background: theme === "dark" ? "#363636" : "white",
            },
          }}
        >
          <div className="py-5 px-4">
            <h2 className="text-gray-950 font-semibold text-lg mb-8 mt-4 dark:text-white">
              Select Tech Stacks
            </h2>
            {techs.map((tech) => (
              <div
                key={tech}
                className="flex justify-between items-center mb-5"
              >
                <p className="text-gray-700 dark:text-gray-300">{tech}</p>
                <input
                  type="checkbox"
                  checked={selectedTechStacks.includes(tech)}
                  onChange={() => handleCheckboxChange(tech)}
                />
              </div>
            ))}
            <div className="flex justify-center items-center">
              <button
                onClick={handleApplyFilter}
                className={`${Styles.button} flex justify-between items-center w-fit mt-7 relative py-5 px-6 transition-all duration-200 ease-in-out before:absolute before:top-0 before:left-0 before:block before:border-28 before:rounded-full before:w-14 before:h-14 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full active:transform scale-96`}
              >
                <span className="overflow-y-hidden relative text-base leading-none font-extrabold tracking-widest uppercase align-middle">
                  Apply
                </span>
                <svg
                  width="13"
                  height="10"
                  viewBox="0 0 13 10"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative fill-none stroke-[#111] dark:stroke-white stroke-2 translate-x-[-5px] transition-all duration-[0.3s] ease-[ease] ml-2.5 top-0"
                >
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default ProjectSection;
