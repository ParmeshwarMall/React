import React, { useEffect, useState } from 'react'

const FetchData = () => {

    const url="https://jsonplaceholder.typicode.com/photos";
    const [data,setData]=useState([]);

    const fetchData=async()=>{
        const response=await fetch(url);
        const res=await response.json();
        setData(res);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    console.log(data);

    


  return (
    <div>
      <h1>Hello</h1>
      <div className="container">
        {data.map((data)=>{
            return <h4>{data.title}</h4>
        })}
      </div>
    </div>
  )
}

export default FetchData
