import { usePortfolioData } from "@/hooks/portfolioData.hooks";
import { useTheme } from "@/hooks/themeContext.hooks";
import Image from "next/image";


export default function Home(props) {

  console.log(props, 'prop check')
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
         
    </main>
  );
}

export const getStaticProps=()=>{
  const {data, isLoading}= usePortfolioData()
  console.log(data, isLoading, "react query chck")
  return{
    props:{
      data:data
    }
  }
}
