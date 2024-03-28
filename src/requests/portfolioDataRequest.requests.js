import { rootAxios } from "@/utils/axios";

// export const getPortfolioData= ()=> rootAxios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")

export const getPortfolioData= async ()=>{
    try{
        const response= await rootAxios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
        return response
    }catch(e){
        console.log(e, "error")
    }
}