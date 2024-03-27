import { getPortfolioData } from "@/requests/portfolioDataRequest.requests"
import { useQuery } from "@tanstack/react-query"

export const usePortfolioData= ()=>{
    return useQuery({
        queryKey:["data"],
        queryFn: async()=> {
            const response= await getPortfolioData()
            console.log(response, "response from useportfoliodata")
            return response.data
        }
    })
}