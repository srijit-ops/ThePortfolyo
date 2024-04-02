import { usePortfolioData } from "@/hooks/portfolioData.hooks";
import { getPortfolioData } from "@/requests/portfolioDataRequest.requests";
import { useTheme } from 'next-themes';
// import { useTheme } from "@/hooks/themeContext.hooks";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillSection from "@/components/SkillSection";
import TimelineSection from "@/components/TimelineSection";
import TestimonialSection from "@/components/TestimonialSection";
import ServiceSection from "@/components/ServiceSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";


export default function Home({data}) {

  const [loading, setLoading] = useState(false)
  console.log(data, 'prop check')
  const { theme, setTheme } = useTheme();

  console.log(theme, setTheme, "context check")
  
  return (
    <>
      <Head>
        <title>John Doe | Sofware Developer</title>
        <meta property='og:title' content='John Doe Portfolio' />
        <meta
          property='og:image'
          content='https://i.ibb.co/2s1tktd/Avatar.png'
        />
        <meta
          property='og:description'
          content='As a React developer with 5 years of experience, I have honed my skills in JavaScript and am currently learning TypeScript to expand my expertise. I pride myself on being a quick learner and attentive listener, which allows me to collaborate effectively with clients to create efficient and scalable solutions. My focus is on developing user-friendly applications that solve real-world problems.'
        />
        <meta
          name='description'
          content='As a React developer with 5 years of experience, I have honed my skills in JavaScript and am currently learning TypeScript to expand my expertise. I pride myself on being a quick learner and attentive listener, which allows me to collaborate effectively with clients to create efficient and scalable solutions. My focus is on developing user-friendly applications that solve real-world problems.'
        ></meta>
        <link rel='shortcut icon' href='/letter-r.png' type='image/x-icon' />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins&family=Caveat&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js" integrity="sha512-GWzVrcGlo0TxTRvz9ttioyYJ+Wwk9Ck0G81D+eO63BaqHaJ3YZX9wuqjwgfcV/MrB2PhaVX9DkYVhbFpStnqpQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> */}
        
      </Head>
      <main
      className={`h-screen py-8 px-28 bg-white dark:bg-black`}
    >
      <HeroSection heroData={data.user.about}/>
         <div onClick={()=>setTheme(theme==="light"?"dark":"light")}>
          <p className="dark:font-semibold">toggle</p>
         </div>
        <AboutSection aboutData={data.user.about}/>
        <SkillSection skillData= {data.user.skills}/>
        <ServiceSection serviceData={data.user.services}/>
        <ProjectSection projectData={data.user.projects}/>
        <TimelineSection timelineData={data.user.timeline}/>
        <TestimonialSection testimonialData={data.user.testimonials}/>
        <ContactSection email={data.user.email} location={data.user.about.address} phone={data.user.about.phoneNumber}/>
    </main>
    </>
    
  );
}

export const getServerSideProps= async ()=>{
  const {data}= await getPortfolioData()
  return{
    props:{
      data:data
    }
  }
}
