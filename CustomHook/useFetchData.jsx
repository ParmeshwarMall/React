import React, { useEffect, useState } from 'react'

const useFetchData = (url) => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        const fetchData=async ()=>{
            const response=await fetch(url)
            const result=await response.json()
            setData(result);
        }
        fetchData();
    },[url])

  return (
    {data}
  )
}

export default useFetchData
