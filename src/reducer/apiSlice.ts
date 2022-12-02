import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const getApiData: any=createApi({
    
    reducerPath:'getApiData',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.spacexdata.com/v3/'}),
    endpoints:(builder)=>({
        getAllFashions:builder.query({
            query:()=>"launches"
        }),
        getFashionById:builder.query({
            query:(flight_number)=>`launches/${flight_number}`
        })
    })
})

export const {useGetAllFashionsQuery,useGetFashionByIdQuery}=getApiData;