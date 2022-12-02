
import { useState,useEffect } from "react";
import { useGetAllFashionsQuery } from "../reducer/apiSlice";
import Filter from "./Filter";

import SingleCard from "./SingleCard";


export default function Home() {

    const {data,error,isLoading}=useGetAllFashionsQuery()
    const [filterData, setFilterData] = useState<any>(data)

    useEffect(() => {
        setFilterData(data)
      }, [isLoading])

    if(isLoading)return <h2>Loading...</h2>

    if(error)return <>
                    <h2>{error.status}</h2>
                    <h3>{error.error}</h3>
                   </>
  return (
    <div className="container">
        <Filter setFilterData={setFilterData}/>
        {filterData?.length >0? <div className="row">
            {filterData && filterData.map((singleData:any,i:number)=>{
                return <SingleCard key={i} cardData={singleData}/>
            })}
             </div>:<h2>No Data Found.</h2>}
    </div>
  )
}
