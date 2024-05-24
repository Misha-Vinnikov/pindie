import { useEffect, useState } from "react"
import { getNormalizedGamesDataByCategory } from "./api-utils";

export const useGetDataByCategory =(endpoints, category)=> {
    const [data, setData] = useState(null);
    useEffect(() =>{
        const fetchData = async()=> {
            const data = await getNormalizedGamesDataByCategory(endpoints, category);
            setData(data);
        }; 
        fetchData();
   },[]);

   return data;
};