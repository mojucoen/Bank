import React from 'react'
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Items({searchData}) {
    // console.log(searchData)
    
      const { data, error, isLoading } = useSWR(
       
        `http://localhost:3007/cityName/${searchData}`,
         
        fetcher
      );
    // console.log(data, error, isLoading)
      if (error) return "An error has occurred.";
      if (isLoading) return "Loading...";
      return (
        <div>
          <h1>{ !!data && <>
    hi
    {data.name}
     
    </>} </h1>
         
         
        </div>
      );
    }
 
