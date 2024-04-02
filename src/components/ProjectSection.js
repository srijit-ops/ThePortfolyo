import React from 'react'
import ProjectCard from './ProjectCard'
import Heading from './common/Heading'

function ProjectSection({projectData}) {
  return (
    <div className="w-full my-10">
        <Heading name={"Projects."} />
        <div className='flex justify-between items-center flex-wrap'>
        {
            [...projectData]
            .sort((a, b) => a.sequence - b.sequence)
            .map((item, index)=>{
                return(
                    <div key={index} className='w-1/4 m-3'>
                        <ProjectCard name={item.title} img={item.image.url} tech={item.techStack} detail={item.description} liveUrl={item.liveurl} github={item.githuburl} enabled-={item.enabled} sequence={item.sequence}/>
                        </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default ProjectSection